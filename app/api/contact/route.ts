import mail from "@sendgrid/mail";
import { NextRequest, NextResponse } from "next/server";

mail.setApiKey(process.env.SENDGRID_API_KEY as string);

export const bristolLocations = [
  {
    label: "Mississauga Car and Truck Rental",
    value: "mississauga",
    email: "alexp@bristoltruckrentals.com",
    cc: ["pshilotri@bristoltruckrentals.com"],
  },
  {
    label: "Milton Car and Truck Rental",
    value: "milton",
    email: "valimena@bristoltruckrentals.com",
    cc: ["tsabri@bristoltruckrentals.com"],
  },
  {
    label: "Brampton Truck Rental (Rutherford Road)",
    value: "brampton",
    email: "tgonzaga@bristoltruckrentals.com",
    cc: ["vshory@bristoltruckrentals.com"],
    fallback: true, // ✅ default GTA / Brampton
  },
  {
    label: "Brampton Car and Truck Rental (Bramalea)",
    value: "brampton bramaliea",
    email: "dlobo@bristoltruckrentals.com",
    cc: ["jhussain@bristoltruckrentals.com", "mmoras@bristoltruckrentals.com"],
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const buildEmailContent = (body: any, label: string) => {
  return `
    <p>Hello Bristol Sales Expert</p>
    <p>Here is a <b>NEW</b> inquiry interested in renting a B2B vehicle with Bristol. Details in form content listed below.</p>
    <p><i>Note: They may or may not have pre-selected a vehicle of choice, this is an optional field for the customer.</i></p>
    <p>Please CONTACT this customer to arrange their booking with Bristol.</p>
    <table cellpadding="6" cellspacing="0" style="border-collapse: collapse;">
      <tr>
        <td><strong>Name:</strong></td>
        <td>${body.name || "N/A"}</td>
      </tr>
      <tr>
        <td><strong>Email:</strong></td>
        <td>${body.email || "N/A"}</td>
      </tr>
      <tr>
        <td><strong>Phone:</strong></td>
        <td>${body.phone || "N/A"}</td>
      </tr>
      <tr>
        <td><strong>Vehicle:</strong></td>
        <td>${body.vehicle || "N/A"}</td>
      </tr>
      <tr>
        <td><strong>Location:</strong></td>
        <td>${label || "N/A"}</td>
      </tr>
    </table>

    <p>Good luck with this booking!</p>
  `;
};

const globalCc = [
  "karanm@skylarmedia.ca",
  "agimd@skylarmedia.ca",
  "hollyb@skylarmedia.ca",
];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const locationData =
      bristolLocations.find(
        (loc) =>
          loc.label.toLowerCase() === body.location?.toLowerCase() ||
          loc.value === body.location?.toLowerCase()
      ) ||
      bristolLocations.find((loc) => loc.fallback) ||
      bristolLocations[0];
    const ccList = Array.from(new Set([...globalCc, ...locationData.cc]));
    const htmlContent = buildEmailContent(
      body,
      body.location === "gta" ? "Other/GTA" : locationData.label
    );
    const message = {
      to: locationData.email,
      cc: ccList,
      from: {
        email: "websupport@skylarmedia.ca",
        name: "Bristol Truck Rentals",
      },
      replyTo: body.email || "websupport@skylarmedia.ca",
      subject: `SAVE50 Contact ${body.name} - B2B Rental Inquiry`,
      text: htmlContent.replace(/<[^>]+>/g, ""),
      html: htmlContent,
    };

    await mail.send(message);
    return NextResponse.json({ status: "Ok" }, { status: 200 });
  } catch (error) {
    console.error("SendGrid error:", error);
    return NextResponse.json(
      { status: "Error", message: "Internal server error" },
      { status: 500 }
    );
  }
}

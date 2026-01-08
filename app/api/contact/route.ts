import mail from "@sendgrid/mail";
import { NextRequest, NextResponse } from "next/server";

mail.setApiKey(process.env.SENDGRID_API_KEY as string);

export const bristolLocations = [
  {
    label: "Mississauga Car and Truck Rental",
    value: "mississauga",
    email: "alexp@bristoltruckrentals.com",
  },
  {
    label: "Milton Car and Truck Rental",
    value: "milton",
    email: "valimena@bristoltruckrentals.com",
  },
  {
    label: "Brampton Truck Rental (Rutherford Road)",
    value: "brampton",
    email: "tgonzaga@bristoltruckrentals.com",
    fallback: true, // ✅ default GTA / Brampton
  },
  {
    label: "Brampton Car and Truck Rental (Bramalea)",
    value: "brampton bramaliea",
    email: "dlobo@bristoltruckrentals.com",
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const buildEmailContent = (body: any, email: string) => {
  return `
    <p>Hello Bristol Sales Expert (${email})</p>
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
        <td>${body.location || "N/A"}</td>
      </tr>
    </table>

    <p>Good luck with this booking!</p>
  `;
};

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

    const htmlContent = buildEmailContent(body, locationData.email);
    const message = {
      to: ["karanm@skylarmedia.ca", "agim@skylarmedia.ca"],
      from: {
        email: "websupport@skylarmedia.ca",
        name: "Bristol Truck Rentals",
      },
      replyTo: body.email,
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

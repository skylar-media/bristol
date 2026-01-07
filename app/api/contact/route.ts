import { bristolLocations } from "@/lib/data/locations";
import mail from "@sendgrid/mail";
import { NextRequest, NextResponse } from "next/server";

mail.setApiKey(process.env.SENDGRID_API_KEY as string);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const buildEmailContent = (body: any) => {
  return `
    <p>Hi Team,</p>

    <p>A new <strong>Truck Rental Quote Request</strong> has been submitted.</p>

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

    <p>Bristol Website</p>
  `;
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const locationData =
      bristolLocations.find(
        (loc) => loc.label.toLowerCase() === body.location?.toLowerCase()
      ) ||
      bristolLocations.find((loc) => loc.fallback) ||
      bristolLocations[0];

    const htmlContent = buildEmailContent(body);
    console.log(locationData.email);
    const message = {
      to: "karanm@skylarmedia.ca",
      from: {
        email: "websupport@skylarmedia.ca",
        name: "Bristol Truck Rentals",
      },
      replyTo: body.email,
      subject: `New Truck Rental Quote - ${body.vehicle} - ${locationData.name}`,
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

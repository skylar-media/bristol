import { bristolLocations, buildEmailContent } from "@/lib/utils/common";
import mail from "@sendgrid/mail";
import { checkBotId } from "botid/server";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

mail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function getClientIp() {
  const h = headers();
  const fwd = (await h).get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  const real = (await h).get("x-real-ip");
  if (real) return real;
  return "unknown";
}

export async function POST(request: NextRequest) {
  const verification = await checkBotId();
  if (verification.isBot) {
    return NextResponse.json(
      { error: "Bot traffic detected" },
      { status: 403 }
    );
  }

  const data = await processUserRequest(request);

  return NextResponse.json({ data });
}

export async function processUserRequest(req: NextRequest) {
  try {
    const body = await req.json();
    const ip = await getClientIp();
    const locationData =
      bristolLocations.find(
        (loc) =>
          loc.label.toLowerCase() === body.location?.toLowerCase() ||
          loc.value === body.location?.toLowerCase()
      ) ||
      bristolLocations.find((loc) => loc.fallback) ||
      bristolLocations[0];
    const ccList = Array.from(new Set([...locationData.cc]));
    const htmlContent = buildEmailContent(
      body,
      body.location === "gta" ? "Other/GTA" : locationData.label,
      ip
    );
    const message = {
      to: locationData.email,
      cc: ccList,
      bcc: "agimd@skylarmedia.ca",
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

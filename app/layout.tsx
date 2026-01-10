import { GoogleTagManager } from "@next/third-parties/google";
import { Figtree } from "next/font/google";
import GoogleCaptchaWrapper from "./components/google-recaptcha-wrapper";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-figtree",
});

export const metadata = {
  metadataBase: new URL("https://lp.bristoltruckrentals.com"),

  title: {
    default: "Commercial Truck Rental GTA | Get $50 Off | Bristol Rentals",
  },
  description:
    "Guaranteed commercial truck rentals in Brampton, Mississauga & Milton. Rent Cargo Vans, 16' Cubes & 5-Tons. Book now and save $50 on your first rental.",
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Bristol",
    url: "https://lp.bristoltruckrentals.com/q1-gta-commercial-trucks",
    images: [
      {
        url: "/bristol-logo.png",
        width: 1640,
        height: 624,
        alt: "Bristol Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Truck Rental GTA | Get $50 Off | Bristol Rentals",
    description:
      "Guaranteed commercial truck rentals in Brampton, Mississauga & Milton.",
    images: ["/bristol-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-MPBJHG3F" />
      <body
        className={`${figtree.variable} flex min-h-screen flex-col antialiased`}
      >
        <main className="flex-1">
          <GoogleCaptchaWrapper>{children}</GoogleCaptchaWrapper>
        </main>
      </body>
    </html>
  );
}

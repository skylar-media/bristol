import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import Footer from "./components/q1-gta-commercial-trucks/footer";
import Header from "./components/q1-gta-commercial-trucks/header";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  title: "Bristol Truck Rentals",
  description: "Q1 GTA Commercial Trucks",
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

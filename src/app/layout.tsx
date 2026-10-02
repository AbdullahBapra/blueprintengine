import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { brand } from "@/content/brand";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: `${brand.name} | ${brand.tagline}`,
    template: `%s | ${brand.name}`,
  },
  description:
    "Blueprint Engine builds AI agents, voice receptionists, chatbots and workflow automation (n8n, Make, Zapier) that save hours and win more leads. Book a free AI audit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}

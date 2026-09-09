import type { Metadata } from "next";
import { display, body, serifItalic, mono, wordCreate, wordDesign, wordIterate } from "@/lib/fonts";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { Grain } from "@/components/shared/Grain";
import { site } from "@/lib/data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description: site.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${serifItalic.variable} ${mono.variable} ${wordCreate.variable} ${wordDesign.variable} ${wordIterate.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden bg-paper text-ink">
        <Grain />
        <Nav />
        <main className="flex-1 pt-28 sm:pt-24">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}

import { Anton, Inter, Caveat, Space_Mono } from "next/font/google";

export const display = Anton({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

export const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const handwritten = Caveat({
  variable: "--font-handwritten",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const mono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

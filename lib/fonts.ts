import localFont from "next/font/local";
import { Anton, Dancing_Script, Fraunces, Instrument_Serif, Inter } from "next/font/google";

export const display = Anton({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

export const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

// Calligraphic accent fonts for the rotating hero word ("create" / "design" / "iterate").
export const wordCreate = Instrument_Serif({
  variable: "--font-word-create",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

export const wordDesign = Fraunces({
  variable: "--font-word-design",
  subsets: ["latin"],
  weight: "500",
  style: "italic",
});

export const wordIterate = Dancing_Script({
  variable: "--font-word-iterate",
  subsets: ["latin"],
  weight: "700",
});

export const serifItalic = localFont({
  src: "../fonts/itc-garamond/ITCGaramondStd-LightNarrow.otf",
  variable: "--font-serif-italic",
  weight: "300",
});

export const mono = localFont({
  src: "../fonts/itc-garamond/ITCGaramondStd-LightNarrow.otf",
  variable: "--font-mono",
  weight: "300",
});

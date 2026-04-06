import type { Metadata } from "next";
import { JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Emeka Chidoka | Data Engineer",
    template: "%s | Emeka Chidoka",
  },
  description:
    "Portfolio website for Emeka Chidoka, a data engineer building reliable pipelines, analytics systems, and data products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute left-[-8rem] top-[-6rem] h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(38,208,124,0.18),_transparent_68%)] blur-3xl" />
          <div className="absolute right-[-6rem] top-[12rem] h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(93,173,226,0.16),_transparent_68%)] blur-3xl" />
          <div className="absolute inset-x-0 bottom-[-10rem] mx-auto h-96 w-[min(72rem,92vw)] bg-[radial-gradient(circle,_rgba(10,132,255,0.1),_transparent_72%)] blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(7,12,20,0.02),_rgba(7,12,20,0.18))]" />
        </div>
        {children}
      </body>
    </html>
  );
}

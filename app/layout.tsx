import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "../src/components/CustomCursor";
import WhatsAppButton from "../src/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kaluna Technology",
  description: "Kaluna Technology - Solusi teknologi digital terpercaya untuk bisnis Anda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">
        <CustomCursor />
        <div style={{ zoom: 0.88 } as any} className="flex-1 flex flex-col">
          {children}
        </div>
        <WhatsAppButton />
      </body>
    </html>
  );
}

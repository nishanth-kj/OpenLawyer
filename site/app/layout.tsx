import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/shared";
import { TooltipProvider } from "@/components/ui/tooltip";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OpenLawyer",
  description: "The next-generation framework for building smart legal agreements and AI-powered legal assistants on an open-source protocol.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-indigo-500/30 transition-colors duration-300`}
      >
        <Providers attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}

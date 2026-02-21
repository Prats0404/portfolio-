import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prathvi V Suvarna Portfolio | Full-Stack Innovator",
  description: "Welcome to the official Prathvi V Suvarna portfolio. Full-Stack Developer, AI Integrator, and Web3 Builder based in Hubballi, Karnataka.",
  keywords: ["Prathvi V Suvarna portfolio", "Prathvi V Suvarna", "Prathvi Suvarna", "Prathvi Suvarna Hubballi", "Full-Stack Developer", "AI Developer", "Web3 Developer", "Karnataka", "India", "React", "Next.js"],
  authors: [{ name: "Prathvi V Suvarna" }],
  openGraph: {
    title: "Prathvi V Suvarna Portfolio | Full-Stack Innovator",
    description: "Welcome to the official Prathvi V Suvarna portfolio. Full-Stack Developer, AI Integrator, and Web3 Builder.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prathvi V Suvarna Portfolio | Full-Stack Innovator",
    description: "Welcome to the official Prathvi V Suvarna portfolio. Full-Stack Developer, AI Integrator, and Web3 Builder.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

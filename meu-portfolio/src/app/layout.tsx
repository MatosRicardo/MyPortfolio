import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ricardo Matos | Desenvolvedor Full Stack",
  description: "Portfólio de Ricardo Ribeiro, desenvolvedor Full Stack.",
  keywords: ["Ricardo Matos", "Desenvolvedor Full Stack"],
  icons: {
    icon: "/fav.jpeg",
  },
  openGraph: {
    title: "Ricardo Matos | Desenvolvedor Full Stack",
    description: "Portfólio de Ricardo Matos, desenvolvedor Full Stack.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}

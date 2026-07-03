import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ricardo Matos | Desenvolvedor Full Stack",
  description:
    "Portfólio de Ricardo Matos, desenvolvedor Full Stack com foco em React, Next.js, Angular, AWS e soluções modernas.",
  keywords: [
    "Ricardo Matos",
    "Desenvolvedor Full Stack",
    "React",
    "Next.js",
    "Angular",
    "AWS",
  ],
  icons: {
    icon: "/perfil.jpg",
  },
  openGraph: {
    title: "Ricardo Matos | Desenvolvedor Full Stack",
    description:
      "Portfólio de Ricardo Matos, desenvolvedor Full Stack com foco em React, Next.js, Angular, AWS e soluções modernas.",
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

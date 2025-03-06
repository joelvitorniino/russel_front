import "./globals.css";

import { DM_Sans } from "next/font/google"

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  preload: true,
  variable: "--font-dm-sans"
})

export const metadata = {
  title: 'Front Desafio - Russel',
  description: 'Desafio de front promovido pela empresa Russel Serviços.'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={dmSans.className}
      >
        {children}
      </body>
    </html>
  );
}

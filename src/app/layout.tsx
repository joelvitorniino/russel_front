import "./globals.css";

import { DM_Sans } from '@next/font/google'

const dmSans = DM_Sans({
  weight: ["400", "700"],
  variable: "--font-dm-sans"
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}
      >
        {children}
      </body>
    </html>
  );
}

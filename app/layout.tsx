import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Logof Accounting",
  description: "Website for an accounting firm. We deliver exceprional results",
  icons: {
    icon: [
      {
        url: "/logo.png",
        sizes: "any",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body>{children}</body>
    </html>
  );
}

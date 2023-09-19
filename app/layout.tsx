import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GetLinked.ai",
  description: "GetLinked.ai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-secondary1">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

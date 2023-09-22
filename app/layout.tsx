import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import ToasterProvider from "./providers/toast-provider";

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
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Abhishek Hegde",
    default: "Abhishek Hegde",
  },
  description: "Check out my smart portfolio with custorm ai chatbot!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-auto max-w-3xl px-3 py-10">{children}</main>
      </body>
    </html>
  );
}

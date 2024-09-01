import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Subtitle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"
  async></script>
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
  
}

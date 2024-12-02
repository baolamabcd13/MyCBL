import type { Metadata } from "next";
import { Baloo_2 } from "next/font/google";
import "./globals.css";

// Khởi tạo font Baloo với weight mặc định là 700
const baloo = Baloo_2({
  subsets: ["vietnamese", "latin"],
  weight: "800",
  variable: "--font-baloo",
});

export const metadata: Metadata = {
  title: "My Gao Chu",
  description: "San Pham Cua Moi Gia Dinh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${baloo.className} my-4 mx-12`}>{children}</body>
    </html>
  );
}

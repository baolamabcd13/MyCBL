import type { Metadata } from "next";
import { Baloo_2 } from "next/font/google";
import "./globals.css";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Header from "./components/DefaultLayout/Header";

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={baloo.className}>
        <Header />
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}

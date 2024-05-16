import type { Metadata } from "next";
import { Jost } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CSG Product Finder",
  description: "Get AI museum software recommendations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={jost.className}>{children}</body>
    </html>
  );
}
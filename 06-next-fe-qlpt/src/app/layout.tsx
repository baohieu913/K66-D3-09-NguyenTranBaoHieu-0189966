import type { Metadata } from "next";
import { Inter, Nunito, Playfair_Display } from "next/font/google";
import { AntdRegistry } from '@ant-design/nextjs-registry';

import '@/app/globals.css';
import NextAuthWrapper from "@/library/next.auth.wrapper";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "QLNT",
  description: "QLNT",
};

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(
        inter.variable,
        playfairDisplay.variable,
        nunito.variable,
      )}>
        <AntdRegistry>
          <NextAuthWrapper>
            {children}
          </NextAuthWrapper>
        </AntdRegistry>

      </body>
    </html>
  );
}

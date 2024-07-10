import type { Metadata } from "next";
import { headers } from 'next/headers'
import { Inter } from "next/font/google";
import "./globals.css";

import { cookieToInitialState } from 'wagmi'
import { config } from "./_components/Web3Config"
import Web3ModalProvider from "./_components/Web3Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carbon.Std",
  description: "𝗦𝘂𝘀𝘁𝗮𝗶𝗻𝗮𝗯𝗶𝗹𝗶𝘁𝘆 𝗕𝗼𝗻𝗱𝘀 + 𝗡𝗙𝗧 = 𝗥𝗲𝗙𝗶",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const initialState = cookieToInitialState(config, headers().get('cookie'))

  return (
    <html lang="en" data-theme="business">
      <body className={inter.className}>
        <Web3ModalProvider initialState={initialState}>{children}</Web3ModalProvider>
      </body>
    </html>
  );
}

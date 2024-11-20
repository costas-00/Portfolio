import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Motion Portfolio",
  description: "Modern & Minimal Portfolio",
  icons: {
    icon: "/logo1.svg", // Icona pentru tab-ul browserului
  },
};

export default function Root({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Courier+New&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sour+Gummy&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo1.svg" type="image/svg+xml" sizes="16x16" />
        <link rel="icon" href="/logo1.ico" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" // Forțăm tema întunecată
          enableSystem={false} // Dezactivăm schimbarea automată a temei în funcție de preferințele sistemului
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

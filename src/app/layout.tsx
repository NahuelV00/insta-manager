import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/providers/theme-provider";

import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Insta Manager",
  description: "Manage your Instagram account",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className} suppressHydrationWarning>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
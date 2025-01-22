import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import { Toaster } from "@/components/ui/toaster";
import { Toaster as ToasterSonner } from "@/components/ui/sonner";
import { ReactQueryClientProvider } from "@/provider/queryClient";

export const metadata: Metadata = {
  title: "Green Bag",
  description: "Túi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ReactQueryClientProvider>
          <main>{children}</main>
          <Toaster />
          <ToasterSonner />
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}

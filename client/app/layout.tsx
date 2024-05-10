import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";

import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "trackez",
  description: "A tool for tracking resources",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="navbar sticky ">
            <Navbar />
          </div>

          <div className="flex">
            <div className="sidebar md:flex w-64 hidden fixed h-full border-r">
              <Sidebar />
            </div>
            <div className="main md:pl-64">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

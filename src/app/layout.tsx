import type { Metadata } from "next";
import { Quicksand, Nunito } from "next/font/google";
import NavBar from "@/src/components/NavBar";
import Footer from "@/src/components/Footer";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mel — Portfolio",
  description: "Portfolio von Mel — Auszubildende Bürokauffrau, 19, aus Berlin. Bikergirl, Valorant und Alicia Online.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${quicksand.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <NavBar />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

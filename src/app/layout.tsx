import "./globals.css";
import { Montserrat, Roboto } from "next/font/google";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "CodeSync Consulting | Custom Web Solutions",
  description: "Elevating Your Digital Vision with Custom Web Solutions. From startups to enterprises, we craft websites that drive results.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${roboto.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

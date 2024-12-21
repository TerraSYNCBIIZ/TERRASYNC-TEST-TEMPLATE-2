import "./globals.css";
import { Montserrat, Roboto } from "next/font/google";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { LoadingProvider } from './components/providers/LoadingProvider';

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
  title: "McGinnis Technology Group | Custom Web Solutions",
  description: "We create custom web solutions that help businesses thrive in the digital age. Our services include web development, UI/UX design, and digital transformation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${roboto.variable}`}>
      <body className="min-h-screen flex flex-col">
        <LoadingProvider>
          <Header />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
        </LoadingProvider>
      </body>
    </html>
  );
}

import "./globals.css";
import { Montserrat, Roboto } from "next/font/google";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { LoadingProvider } from './components/providers/LoadingProvider';
import PromotionalPopup from './components/shared/PromotionalPopup';

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
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
  },
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
          <PromotionalPopup />
          <Header />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
        </LoadingProvider>
      </body>
    </html>
  );
}

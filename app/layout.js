import "./globals.css";
import { Poppins, Roboto } from "next/font/google";
import Providers from "./Providers";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700", "900"],
});

export const metadata = {
  title: "Mark Slorach | Software Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body className={`${poppins.className}`}>
        <Providers>
          <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}

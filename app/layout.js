import { NavBar } from "./components/NavBar";
import "./globals.css";
import { Poppins } from "next/font/google";
import Providers from "./Providers";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata = {
  title: "Mark Slorach | Software Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body className={poppins.className}>
        <Providers>
        <NavBar />
        <main className="bg-slate-100 dark:bg-slate-900">{children}</main>
        </Providers>
      </body>
    </html>
  );
}

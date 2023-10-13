import "../globals.css"
import { Poppins } from "next/font/google";
import Providers from "../Providers";
import Footer from "./components/Footer";
import { NavBar } from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Mark Slorach | Software Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className}`}>
        <Providers>
        <ScrollToTop/>
          <main className="bg-colour">
            <NavBar/>
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}

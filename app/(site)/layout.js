import "../globals.css";
import { Ubuntu } from "next/font/google";
import Providers from "../Providers";
import { NavBar } from "./components/NavBar";
import Footer from "./components/Footer";
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Mark Slorach | Software Developer",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${ubuntu.className} bg-colour`}>
        <Providers>
          <main className="relative min-h-screen">
          <NavBar/>
            {children}
            <Footer/>
          </main>
        </Providers>
      </body>
    </html>
  );
}

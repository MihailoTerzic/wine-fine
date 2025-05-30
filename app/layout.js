
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"



export const metadata = {
  title: {
    default: "Wine & Fine",
    template: "%s | Wine & Fine",
  },
  keywords: ["wine", "beograd izlasci", "izlazak", "vracar", "vino"],
  description: "Wine & Fine - Vino bar na Vračaru",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
          <Analytics />
        <Footer/>
      </body>
    </html>
  );
}

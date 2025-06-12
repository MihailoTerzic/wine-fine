
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"



export const metadata = {
  title: {
    default: "Wine & Fine | Vino na Vračaru",
    template: "%s | Wine & Fine",
  },
    keywords: [
    "vino vracar", 
    "degustacija vina vracar", 
    "vino beograd",
    "wine bar beograd",
    "wine bar beograd vracar",
    "wine bar vracar", 
    "degustacija vina beograd", 
    "vino izlazak beograd", 
    "wine fine vracar",
    "wine and fine vracar",
    "wine and fine beograd",
    "wine and fine",
  ],
  description: "Uživajte u vrhunskim vinima u srcu Vračara. Idealno mesto za izlaske u Beogradu, degustacije vina i opuštanje sa prijateljima.",
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

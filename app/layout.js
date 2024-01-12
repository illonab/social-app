import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import BgImg from "../components/BgImg"; //tried to add bg image

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

//tried to add bg image
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <BgImg />  
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

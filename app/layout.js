import "./globals.css";
import Header from "./Header";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Corner Barber Shop",
  description: "Corner Barber Shop in Richmond, Indiana",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-[#000] text-white`}>
        <Header />
        {children}
      </body>
    </html>
  );
}

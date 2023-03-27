import Link from "next/link";
import { Lobster_Two } from "next/font/google";
import { Roboto } from "next/font/google";
import {
  BsFillCalendarPlusFill,
  BsFillTelephoneInboundFill,
  BsMapFill,
  BsPinMapFill,
} from "react-icons/bs";

const lobster = Lobster_Two({ subsets: ["latin"], weight: "400" });

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--roboto-font",
});

export default function Header() {
  return (
    <header className="min-h-[50px] flex bg-[#342D24] text-white p-2">
      <div className="flex justify-between container m-auto items-center">
        <Link href="/">
          <h3 className={`${lobster.className} text-2xl`}>
            Corner Barber Shop
          </h3>
        </Link>
        <nav className="text-md font-bold">
          <ul className="flex space-x-10">
            <div className="flex space-x-2 items-center bg-white px-2 py-1 rounded-md text-[#222]">
              <BsFillCalendarPlusFill />
              <BsFillTelephoneInboundFill />
              <small className="tracking-widest">+1 (765) 977-0050</small>
            </div>
            <li className={`${roboto.className} flex items-center space-x-2`}>
              <BsMapFill />
              <Link
                href="/shop-location"
                style={{ fontWeight: "600", fontSize: "13px" }}
              >
                SHOP LOCATION
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

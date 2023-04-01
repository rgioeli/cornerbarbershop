"use client";
import Link from "next/link";
import { Lobster_Two } from "next/font/google";
import { Roboto } from "next/font/google";
import {
  BsFillCalendarPlusFill,
  BsFillTelephoneInboundFill,
  BsMapFill,
} from "react-icons/bs";
import { BiMenu, BiX } from "react-icons/bi";
import { useState } from "react";

const lobster = Lobster_Two({ subsets: ["latin"], weight: "400" });

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--roboto-font",
});

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const configToggle = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <header className="min-h-[50px] flex bg-[#342D24] text-white p-2 sticky top-0 w-full">
      <div className="flex justify-between container m-auto items-center">
        <Link href="/">
          <h3 className={`${lobster.className} text-2xl`}>
            Corner Barber Shop
          </h3>
        </Link>
        {toggle ? (
          <BiX size={35} className="md:hidden" onClick={configToggle} />
        ) : (
          <BiMenu size={35} className="md:hidden" onClick={configToggle} />
        )}
        {toggle && (
          <nav className="text-md font-bold md:flex mt-[50px] absolute top-0 left-0 w-screen p-2 bg-[#342D24]">
            <ul className="flex flex-col items-center justify-centerp-2">
              <div className="flex space-x-2 items-center bg-white px-2 py-1 rounded-md text-[#222]">
                <BsFillCalendarPlusFill />
                <BsFillTelephoneInboundFill />
                <small className="tracking-widest">+1 (765) 977-0050</small>
              </div>
              <li className={`${roboto.className} flex space-x-2 mt-2`}>
                <BsMapFill />
                <Link
                  href="/shop-location"
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                  }}
                >
                  SHOP LOCATION
                </Link>
              </li>
            </ul>
          </nav>
        )}
        <nav className="text-md font-bold hidden md:flex">
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

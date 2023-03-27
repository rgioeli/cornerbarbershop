"use client";

import Image from "next/image";
import { BsArrowDownCircleFill, BsMouse2Fill } from "react-icons/bs";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleSetAppointment = () => {
    router.push("/set-an-appointment");
  };
  return (
    <main className="container m-auto flex flex-col-reverse items-center justify-end lg:flex-row lg:justify-between h-[calc(100vh-50px)] lg:items-center">
      <aside className="w-1/2 text-white mt-10 text-center lg:text-justify">
        <h3 className="text-3xl text-[#342D24]">BARBOR</h3>
        <h3 className="text-6xl mb-10">BRAD JOHNSON</h3>
        <button
          onClick={handleSetAppointment}
          className="p-5 bg-[#342D24] rounded-xl text-white font-bold"
        >
          SET AN APPOINTMENT
        </button>
      </aside>
      <aside className="w-1/2 mt-10">
        <Image
          src={"/images/right-image.png"}
          priority
          className="max-h-[750px]"
          width={750}
          height={750}
          alt={"barber brad"}
        />
      </aside>
      <div className="absolute bottom-5 container flex justify-center items-center space-x-2">
        <BsMouse2Fill />
        <p className="text-white font-bold">SCROLL</p>
        <BsArrowDownCircleFill color="white" size={20} />
      </div>
    </main>
  );
}

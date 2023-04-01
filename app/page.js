"use client";

import Image from "next/image";
import { BsArrowDownCircleFill, BsMouse2Fill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import AdditionalPageContent from "./additionalPageContent";

export default function Home() {
  const router = useRouter();
  const handleSetAppointment = () => {
    router.push("/shop-location");
  };
  return (
    <section>
      <main className="container m-auto flex flex-col-reverse items-center justify-center md:flex-col-reverse lg:flex-row lg:justify-between md:max-h-screen md:h-screen lg:items-center p-2 text-center ">
        <aside className="md:w-1/2 text-white m-auto md:text-center lg:text-justify">
          <h3 className="text-2xl md:text-3xl text-[#5D4E3D] mt-4">BARBOR</h3>
          <h3 className="text-4xl md:text-6xl mb-8">BRAD JOHNSON</h3>
          <h5 className="md:mb-8 text-xl">
            Walk-ins welcome, appointments preferred.
          </h5>
          <button
            onClick={handleSetAppointment}
            className="p-5 bg-[#342D24] rounded-xl text-white font-bold text-sm mt-8"
          >
            GET DIRECTIONS
          </button>
        </aside>
        <aside className="md:w-1/2">
          <Image
            src={"/images/right-image.png"}
            priority
            className="md:max-w-full md:max-h-[750px]"
            width={750}
            height={750}
            alt={"barber brad"}
          />
        </aside>
        <div className="absolute bottom-5 container md:flex justify-center items-center space-x-2 hidden">
          <BsMouse2Fill />
          <p className="text-white font-bold">SCROLL</p>
          <BsArrowDownCircleFill color="white" size={20} />
        </div>
      </main>
      <section>
        <AdditionalPageContent />
      </section>
    </section>
  );
}

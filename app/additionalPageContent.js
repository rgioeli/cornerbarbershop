import Image from "next/image";

const AdditionalPageContent = ({}) => {
  return (
    <div className="container  m-auto  h-[calc(100vh-50px)] grid grid-cols-1 md:grid-cols-2 p-2">
      <aside className="flex flex-col justify-center items-start p-2 m:p-50">
        <p className="text-2xl pt-10 lg:pt-0 font-bold">About</p>
        <p className="mt-5">
          Welcome to my barber shop, where I take pride in providing
          professional grooming services to my valued clients.
          {" I'm"} dedicated to delivering the best possible haircut and
          grooming experience to each and every customer. I offer a wide range
          of services, including traditional haircuts, fades, beard trims, and
          more, all performed with precision and attention to detail. I use only
          the highest quality tools and products, ensuring that you leave my
          shop looking and feeling your best. I believe that a great haircut can
          make a world of difference, and I strive to provide each client with a
          personalized, tailored grooming experience that leaves them feeling
          confident and refreshed.
        </p>
      </aside>
      <aside className="flex justify-center items-center pt-10 lg:pt-0">
        <Image src="/images/barbor-chair.png" width={500} height={668} />
      </aside>
    </div>
  );
};

export default AdditionalPageContent;

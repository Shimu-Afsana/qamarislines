"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const logos = [
  {
    name: "Eagle-Ocean",
    logoImage: "/images/eagle ocean marine.jpg",
  },
  { name: "IGPI", logoImage: "/images/IGP&I.png" },
  {
    name: "BIC",
    logoImage: "/images/BIC LOGO.png",
  },
  {
    name: "The-American-Club",
    logoImage: "/images/the-american-club.jpeg",
  },
  { name: "TT-Club", logoImage: "/images/TT Club.png" },
   { name: "SAARC", logoImage: "/images/saarc.jpg" },
    { name: "Orient logo", logoImage: "/images/Orient logo.png" },
     { name: "KR loGo", logoImage: "/images/KR loGo.png" },
      { name: "Bureau veritas", logoImage: "/images/Bureau veritas.png" },
      { name: "ISM", logoImage: "/images/ISM.jpg" },
      { name: "IACS", logoImage: "/images/IACS.png" },
      

      
  //  Duplicate for continuous scroll
   {
    name: "Eagle-Ocean",
    logoImage: "/images/eagle ocean marine.jpg",
  },
  { name: "IGPI", logoImage: "/images/IGP&I.png" },
  {
    name: "BIC",
    logoImage: "/images/BIC LOGO.png",
  },
  {
    name: "The-American-Club",
    logoImage: "/images/the-american-club.jpeg",
  },
  { name: "TT-Club", logoImage: "/images/TT Club.png" },
   { name: "SAARC", logoImage: "/images/saarc.jpg" },
    { name: "Orient logo", logoImage: "/images/Orient logo.png" },
     { name: "KR loGo", logoImage: "/images/KR loGo.png" },
      { name: "Bureau veritas", logoImage: "/images/Bureau veritas.png" },
      { name: "ISM", logoImage: "/images/ISM.jpg" },
      { name: "IACS", logoImage: "/images/IACS.png" },
];

export const LogoTicker = () => {
  return (
    <div className="w-full pb-4 sm:pb-0 md:pb-12 bg-white pr-14 mt-10">
      <div className="w-full">
        <h2 className="pl-8 sm:pl-14 text-center mb-8 text-[26px] md:text-[30px] 2xl:text-[36px] font-plus-jakarta-sans font-medium tracking-normal bg-gradient-to-b from-[#24479B] via-[#20408a] to-[#0C1835] bg-clip-text text-transparent leading-[1.4] my-2">
          ALL OUR SHIPS AND SERVICES ARE INSURED AND REINSURED BY:
        </h2>
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <Marquee pauseOnHover speed={50} gradient={false} className="flex">
            {logos.map((logo, index) => (
              <div key={`${logo.name}-${index}`} className="h-24 w-auto mx-7 flex items-center justify-center">
                <Image
                  src={logo.logoImage}
                  width={300}
                  height={300}
                  alt={`${logo.name} Premium website redesign for real estate company in UAE`}
                  className="h-24 w-auto"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};
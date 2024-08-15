import React from "react";
import Monkey from "../public/imgs/monkeys.png";

const TrippinBalls = () => {
  return (
    <div
      className={`flex flex-col w-screen bg-cover bg-blend-darken  items-center justify-center text-center relative pb-40`}
      id="about"
    >
      <div className="absolute inset-0 -top-5  md:-top-28 mask1 z-0">
        <div
          className="absolute bg-cover inset-0 mask-1"
          style={{
            backgroundImage: 'url("/imgs/bg-doodle.png")',
          }}
        />
      </div>
      <div className="md:flex-row flex flex-col max-w-screen items-center justify-center relative">
        <div className="flex bg-transparent flex-col items-center justify-center">
          <div className="bg-transparent my-4 max-w-[90%] md:max-w-[60%]">
            <h3 className="text-white bg-transparent text-center font-[Chillow] py-4 text-3xl md:text-7xl 2xl:text-8xl md:mt-12">
              It&apos;s not a cult
            </h3>
            <p className=" text-white py-4 font-[WorkSans] text-center tracking-wide text-sm md:text-base 2xl:text-xl">
              Trippin&apos; Ape Tribe is a community-first PFP project on
              Solana, backed by strong and ownable branding, cheeky
              storytelling, innovative long-term utility, and a passionate
              community of free-thinking degens.
            </p>
            <p className=" text-white py-4 tracking-wide text-center text-sm md:text-base 2xl:text-xl">
              10,000 Apes have fallen under the trance of a mysterious yet
              charismatic leader, Chorles, but don’t worry… it&apos;s definitely
              not a cult.
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full">
        <div className="absolute left-0 -bottom-16 lg:-bottom-28">
          <img
            src={Monkey.src}
            width={3000}
            height={3000}
            className="w-[90%] md:w-[80%] lg:w-[950px] z-10  block"
          />
        </div>

        <div
          style={{
            backgroundImage: 'url("/imgs/nft-slider-1.png")',
            backgroundSize: "auto 100%",
            backgroundPosition: "0 0",
            animation: "scrollGrid 160s linear infinite",
          }}
          className={`bg-repeat-x w-full h-[133px] mb-4 md:mt-[150px] lg:mt-[250px]`}
        />
        <div
          style={{
            backgroundImage: 'url("/imgs/nft-slider-2.png")',
            backgroundSize: "auto 100%",
            backgroundPosition: "0 0",
            animation: "scrollGrid 180s linear infinite",
          }}
          className={`bg-repeat-x w-full h-[133px] mb-4`}
        />
        <div
          style={{
            backgroundImage: 'url("/imgs/nft-slider-3.png")',
            backgroundSize: "auto 100%",
            backgroundPosition: "0 0",
            animation: "scrollGrid 200s linear infinite",
          }}
          className={`bg-repeat-x w-full h-[133px] mb-20`}
        />
      </div>
    </div>
  );
};

export default TrippinBalls;

import React from "react";
import Bg from "../public/imgs/trip-5.png";
import wave from "../public/imgs/wave.svg";
import {FaDiscord, FaTwitter} from "react-icons/fa";

const Tribe = () => {
  return (
      <div
          className=" relative"
          id="story"
      >
        <div className="absolute inset-0 -top-36 md:-top-[10rem]  mask1 z-0">
          <div className="absolute  bg-no-repeat bg-cover bg-center inset-0 mask-1"  style={{
            backgroundImage:`url("${Bg.src}")`,
          }} />
          <div className="absolute bg-black/40 inset-0" />
        </div>
        <div className="w-full h-screen relative">
          <div className="flex w-full min-h-screen items-center justify-center text-center">
            <div className="w-full flex bg-transparent flex-col items-center justify-center">
              <div className="bg-transparent my-4 md:max-w-[50%] w-full">
              <span className="text-white bg-transparent font-[Chillow] md:text-8xl 2xl:text-9xl text-6xl"

              >
                THE story so far
                <span className="bg-transparent md:text-3xl 2xl:text-4xl text-xl my-2 block" >WTF is actually going on?!</span>
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Tribe;

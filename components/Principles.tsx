import React from "react";
import Bg from "../public/imgs/Background.png";

const Utils = () => {
  return (
    <>
      <div
        className="flex-col flex bg w-full max-h-fit items-center relative justify-center text-center pb-40"
        id="principles"
      >
        <div className="absolute inset-0 -top-44 mask1 z-0">
          <div className="absolute bg-no-repeat bg-cover bg-center inset-0 mask-1"  style={{
            backgroundImage: `url("${Bg.src}")`,
          }} />
        </div>
        <div className="bg-black/[0.01] flex w-full max-h-fit items-center justify-center my-20 relative">
          <div className="w-full flex bg-transparent flex-col items-center justify-center">
            <div className="bg-transparent items-center justify-center max-w-[50%]">
              <span
                className="text-white bg-transparent font-[Chillow] 2xl:text-8xl text-5xl md:text-7xl"

              >
                Principles <span className="block bg-transparent md:text-xl 2xl:text-4xl text-sm">UNDERSTAND WHAT DRIVES THE TRIBE FORWARD</span>
              </span>
            </div>
            <div className="mx-10 bg-transparent md:mt-20">
              <div className="grid md:grid-cols-3 md:grid-rows-1 grid-cols-1 w-full bg-transparent my-20">
                <div className="md:w-[80%] w-full mx-auto bg-transparent border-4 border-[#011b36] bg-[#011b36] rounded-xl md:mx-10 md:my-0 my-4 py-6">
                  <span className="font-[WorkSans] text-white font-bold text-4xl uppercase">I</span>
                  <h4 className="text-white py-4 font-[Chillow] 2xl:text-5xl text-3xl">
                    Community
                  </h4>
                  <p className="p-8 text-left text-white text-sm 2xl:text-xl leading-7 tracking-normal font-[WorkSans]">
                    It may not be a cult, but we did set out to build the most
                    tight-knit, empowered community on Solana. Everything we do
                    — from our branding choices to our utilities to the way we
                    reveal details about the project — has been carefully
                    engineered to build hype, drive engagement, and create
                    opportunities for the Tribe to connect deeply. We believe in
                    strength in numbers. Apes ascend as one.
                  </p>
                </div>
                <div className="md:w-[80%] w-full mx-auto bg-transparent border-4 border-[#011b36] bg-[#011b36] rounded-xl md:mx-10 md:my-0 my-4 py-6">
                <span className="font-[WorkSans] text-white font-bold text-4xl uppercase">II</span>
                  <h4 className="text-white py-4 font-[Chillow] 2xl:text-5xl text-3xl">
                    Identity
                  </h4>
                  <p className="p-8 text-left text-white text-sm 2xl:text-xl leading-7 tracking-normal font-[WorkSans]">
                    An important part of building a powerful cult…ure is knowing
                    what we are and what we aren’t. Trippin’ Ape Tribe is a
                    community built by and for free-thinking degens. By
                    embracing our true nature, we welcome in genuine creative
                    inspiration and new strategic partnerships with like-minded
                    brands and collaborators that can all spread the mission
                    further.
                  </p>
                </div>
                <div className="md:w-[80%] w-full mx-auto bg-transparent border-4 border-[#011b36] bg-[#011b36] rounded-xl md:mx-10 md:my-0 my-4 py-6">
                <span className="font-[WorkSans] text-white font-bold text-4xl uppercase">III</span>
                  <h4 className="text-white py-4 font-[Chillow] text-3xl 2xl:text-5xl">
                    Innovation
                  </h4>
                  <p className="p-8 text-left text-white text-sm 2xl:text-xl leading-7 tracking-normal font-[WorkSans]">
                    Thanks to Chorles and his infinite wisdom, our consciousness
                    continues to expand, illuminating possibilities where once
                    we only saw limits. We will continue to bring big-brain
                    thinking and next-level utilities to the project to keep our
                    Tribe guessing and the Solana ecosystem moving forward.
                    Trust the process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">{/**slider images */}</div>
      </div>
    </>
  );
};

export default Utils;

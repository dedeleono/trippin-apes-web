import React from "react";
import Bg from "../public/imgs/Bg1.jpeg";

import { FaDiscord, FaTwitter } from 'react-icons/fa'
import me from "../public/imgs/me.svg";
import os from "../public/imgs/Logomark-White.svg";

const Landing = () => {
  return (
      <div
          className="bg-no-repeat bg-center bg-cover relative"
          id="home"
      >
          <div className="absolute inset-0 -top-5  md:-top-28  mask1 z-0">
              <div className="absolute bg-no-repeat bg-cover bg-center inset-0 mask-1"  style={{
                  backgroundImage: `url("${Bg.src}")`,
              }} />
              <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="w-full h-screen relative">
              <div className="flex bg w-full h-screen items-center justify-center text-center relative">
                  <div className=" flex w-screen min-h-screen items-center justify-center">
                      <div className="w-full flex bg-transparent flex-col items-center justify-center">
                          <div className="bg-transparent my-4 md:max-w-[50%]">
                              <span className="text-white bg-transparent font-[Chillow] md:text-7xl text-4xl">
                                Join the <span className="bg-transparent line-through">cult</span> tribe
                                <span className="text-white bg-transparent font-[Chillow] block md:text-4xl py-2 text-xl">Are you one of us?</span>
                              </span>
                              
                          </div>
                          <div className="justify-center w-full flex flex-row items-center px-6 bg-transparent">
                              <a
                                  href="https://magiceden.io/marketplace/trippin_ape_tribe"
                                  target="_blank"
                                  className="cursor bg-transparent mx-2" rel="noreferrer"
                              >
                                  <button className="rounded-lg text-base md:text-lg flex uppercase hover:scale-[1.1] font-[Chillow] flex-row items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 md:p-4 p-2 text-white"><img src={me.src} className='mr-2 w-7'/><span className="pt-1">Buy on MagicEden</span></button>
                              </a>
                              <a
                                  href="https://opensea.io/collection/trippin-ape-tribe-solana"
                                  target="_blank"
                                  className="cursor bg-transparent mx-2 " rel="noreferrer"
                              >
                                  <button className="rounded-lg text-base md:text-lg flex uppercase hover:scale-[1.1] font-[Chillow] flex-row items-center justify-center bg-[#1868B7] md:p-4 p-2 text-white"><img src={os.src} className='mr-2 w-8'/><span className="pt-1">Buy on OpenSea</span></button>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Landing;

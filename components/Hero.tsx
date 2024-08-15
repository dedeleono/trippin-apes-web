import React, {useEffect, useState} from "react";
import Bg from "../public/imgs/videBG.gif";
import Logo from "../public/imgs/logo.png";

import ScrollIntoView from "react-scroll-into-view";
import { BsChevronDoubleDown } from "react-icons/bs";

const Hero = () => {

  const [showHero, setShowHero] = useState(0)
  const [sHero, setSHero] = useState(false)

  const diss = () => {
      //setSHero(true);
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", diss);
    }
  }, [])


  return (
    <>
      <div

        className={`${showHero || sHero ? 'hidden': 'flex'} md:w-full bg-center w-screen bg-cover h-screen items-center justify-center text-center flex-col`}
        id="hero"
        style={{ backgroundImage: `url("${Bg.src}")` }}
      >
        <div className="bg-black/80 flex flex-col w-screen min-h-screen items-center justify-center">
          <div className="w-full flex bg-transparent flex-col items-center justify-center">
            <img
              className="bg-transparent object-scale-down max-h-[20rem] py-5 md:aspect-video aspect-square"
              src={Logo.src}
            />
            <ScrollIntoView selector="#home" className="bg-transparent cursor-pointer" onClick={diss}>
            <div className="bg-transparent border border-white items-center justify-center p-2 w-fit my-2">
              <span className="text-white uppercase bg-transparent font-[Chillow] text-xl md:text-3xl">
                Enter the unknown
              </span>

            </div>
            </ScrollIntoView>
            <div className="bg-transparent my-4">
              <span className="text-white bg-transparent font-[Chillow] text-5xl md:text-8xl my-2">
                It&apos;s not a cult
              </span>
            </div>
          </div>
          <ScrollIntoView selector="#home" className=" bg-transparent" onClick={diss}>
          <div className="mx-auto p-8 sm:px-9 bg-transparent">
            <BsChevronDoubleDown
              className="shadow-2xl bg-transparent cursor-pointer mx-auto text-5xl text-white "
              style={{ textShadow: "0 0 4px #000" }}
            />
          </div>
        </ScrollIntoView>
        </div>
      </div>
    </>
  );
};

export default React.forwardRef(Hero);

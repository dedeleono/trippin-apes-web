import React from "react";
import Bg from "../public/imgs/Background.png";
import Image from "next/image";

const Island = () => {
  const locations = [
    {
      name: "meadow",
      image: "/imgs/island-chorlez-meadow.png",
      glow: "/imgs/island-chorlez-meadow-glow.png",
      url: "https://meadow.trippinapetribe.xyz/",
      width: "16.5%",
      position: {
        top: "55%",
        left: "3%",
      },
      shine: {
        top: "35%",
        left: "55%",
      },
    },
    {
      name: "temple",
      image: "/imgs/island-meditation-temple.png",
      glow: "/imgs/island-meditation-temple-glow.png",
      url: "https://meditation.trippinapetribe.xyz/",
      width: "17.5%",
      position: {
        top: "20%",
        left: "15%",
      },
      shine: {
        top: "10%",
        left: "40%",
      },
    },
    {
      name: "market",
      image: "/imgs/island-tribe-market.png",
      glow: "/imgs/island-tribe-market-glow.png",
      url: "https://market.trippinapetribe.xyz/",
      width: "12.5%",
      position: {
        top: "3%",
        left: "45%",
      },
      shine: {
        top: "30%",
        left: "-74%",
      },
    },
    {
      name: "laboratory",
      image: "/imgs/island-valhalla-laboratory.png",
      glow: "/imgs/island-valhalla-laboratory-glow.png",
      url: "https://lab.trippinapetribe.xyz/",
      width: "15%",
      position: {
        top: "1%",
        left: "67%",
      },
      shine: {
        top: "10%",
        left: "85%",
      },
    },
    {
      name: "ceremony",
      image: "/imgs/island-ceremony-grounds.png",
      glow: "/imgs/island-ceremony-grounds-glow.png",
      url: "https://spiritquest.trippinapetribe.xyz/",
      width: "16.5%",
      position: {
        top: "75%",
        left: "53%",
      },
      shine: {
        top: "-54%",
        left: "55%",
      },
    },
    {
      name: "maloca",
      image: "/imgs/island-the-maloca.png",
      glow: "/imgs/island-the-maloca-glow.png",
      width: "13.5%",
      url: "#maloca",
      position: {
        top: "23%",
        left: "58%",
      },
      hut: {
        top: "49%",
        left: "-35.5%",
        width: "63%",
      },
    },
  ];
  return (
    <>
      <div
        className="flex-col flex bg w-full max-h-fit items-center relative justify-center text-center md:pb-44 pb-52"
        id="island"
      >
        <div className="absolute inset-0 md:-top-44 -top-28 mask1 z-0">
          <div
            className="absolute bg-no-repeat bg-cover bg-center inset-0 mask-1"
            style={{
              backgroundImage: `url("${Bg.src}")`,
            }}
          />
        </div>
        <div className="bg-black/[0.01] flex w-full max-h-fit items-center justify-center my-20 relative">
          <div className="w-full flex bg-transparent flex-col items-center justify-center">
            <div className="bg-transparent items-center justify-center">
              <span className="text-white bg-transparent font-[Chillow] 2xl:text-8xl text-5xl md:text-7xl">
                TRIPPIN&apos; APE ISLAND
                <span className="block bg-transparent md:text-xl 2xl:text-4xl text-sm">
                  BEGIN YOUR JOURNEY TO ASCENSION
                </span>
              </span>
            </div>
            <div className="lg:mx-20 md:mx-10 bg-transparent md:mt-20 mt-10 md:rounded-box overflow-hidden">
              <div className="relative">
                <img src="/imgs/island.png" alt="" />
                {locations.map((location, i) => (
                  <a href={location.url} key={i}>
                    <div
                      className="group absolute opacity-100 cursor-pointer"
                      style={{
                        top: location.position.top,
                        left: location.position.left,
                        width: location.width,
                      }}
                    >
                      <img
                        src={location.image}
                        alt={location.name}
                        className=" relative opacity-100 group-hover:opacity-0 transition-all z-10"
                      />
                      {location.name == "maloca" ? (
                        <>
                          <img
                            src={location.image}
                            alt={location.name}
                            className="absolute top-0 left-0 opacity-0 group-hover:opacity-50 transition-all z-10"
                          />
                          <img
                            src="/imgs/island-maloca.png"
                            alt={location.name}
                            className="absolute opacity-0 group-hover:opacity-100 transition-all"
                            style={{
                              top: location.hut.top,
                              left: location.hut.left,
                              width: location.hut.width,
                            }}
                          />
                        </>
                      ) : (
                        <>
                          <img
                            src={location.glow}
                            alt={location.name}
                            className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-all z-10"
                          />
                          <img
                            src="/imgs/island-glow.png"
                            alt={location.name}
                            className="absolute opacity-0 group-hover:opacity-100 transition-all"
                            style={{
                              top: location.shine.top,
                              left: location.shine.left,
                            }}
                          />
                        </>
                      )}
                      {/* <img
                      src={
                        location.name == "maloca"
                          ? "/imgs/island-maloca.png"
                          : "/imgs/island-glow.png"
                      }
                      alt=""
                      className="absolute opacity-0 group-hover:opacity-100 transition-all"
                      style={{
                        top: location.shine.top,
                        left: location.shine.left,
                      }}
                    /> */}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Island;

import React from "react";
import Bg from "../public/imgs/Background.png";

import Brisket from "../public/imgs/Brisket.jpeg";
import Danny from "../public/imgs/Danny.jpeg";
import Fen from "../public/imgs/Fenrus.jpeg";
import Fig from "../public/imgs/Fig.jpeg";
import Lys from "../public/imgs/Lysergic.jpeg";
import Hankey from "../public/imgs/Hankey.jpeg";
import King from "../public/imgs/King.jpeg";

export const Disciples = () => {
  return (
    <>
      <div
        id="disciples"
        className="mx-auto flex md:w-full flex-col justify-center 2xl:py-20 bg-transparent text-center md:py-10 shadow-xl relative"
      >
        <div className="absolute inset-0 -top-44 mask1 z-0">
          <div
            className="absolute  bg-center bg-no-repeat bg-cover inset-0 mask-1"
            style={{
              backgroundImage: `url("${Bg.src}")`,
            }}
          />
        </div>
        <div className="bg-transparent items-center justify-center z-10 md:pb-40 py-16">
          <span className="text-white bg-transparent font-[Chillow] 2xl:text-8xl text-5xl md:text-7xl">
            CHORLES’S DISCIPLES
            <span className="block bg-transparent md:text-xl 2xl:text-4xl text-sm">
              MEET THE TEAM
            </span>
          </span>
        </div>
        {/* <h1 className="py-20 uppercase font-[Chillow] text-7xl 2xl:text-8xl text-white bg-transparent relative">
          CHORLES’S DISCIPLES
          <span className="block uppercase text-3xl my-2 text-white">
            MEET THE TEAM
          </span>
        </h1> */}

        <div className="mx-auto w-full flex flex-col flex-wrap gap-4 2xl:gap-8 md:flex-row justify-center bg-transparent text-center relative">
          <div className="md:w-1/4 flex flex-col mx-6 mb-10 mx-:my-0 bg-transparent">
            <img src={Lys.src} className="rounded-md shadow-md" />
            <span className="font-[Chillow] text-left text-4xl 2xl:text-6xl py-4 text-white bg-transparent">
              Lysergic
              <span className="font-[Chillow] block text-xl 2xl:text-4xl py-3 text-white text-left bg-transparent">
                Co-Founder
              </span>
            </span>
            <p className="bg-transparent text-white font-[WorkSans] text-sm 2xl:text-xl text-left">
              Electronic music festival owner and director with humble
              beginnings. Branding and team building expert. Captain of the
              party and full-blown NFT degen. 2017 bag holder and crypto winter
              survivor. May have tried psychedelics once…
            </p>
          </div>

          <div className="md:w-1/4 flex flex-col mx-6 mb-10 mx-:my-0 bg-transparent">
            <img src={Danny.src} className="rounded-md shadow-md" />
            <span className="font-[Chillow] text-left text-4xl 2xl:text-6xl py-4 text-white bg-transparent">
              Danny Devitoken
              <span className="font-[Chillow] block text-xl 2xl:text-4xl py-3 text-white text-left bg-transparent">
                Co-Founder
              </span>
            </span>
            <p className="bg-transparent text-white font-[WorkSans] text-sm 2xl:text-xl text-left">
              Full-time degen and ex-psychonaut. Man of many passions.
              Experienced in a wide range of different industries with the
              ability to adapt and apply variety of experience to solve complex
              problems. Maestro of trial and error.
            </p>
          </div>

          <div className="md:w-1/4 flex flex-col mx-6 mb-10 mx-:my-0 bg-transparent">
            <img src={Fig.src} className="rounded-md shadow-md" />
            <span className="font-[Chillow] text-left text-4xl 2xl:text-6xl py-4 text-white bg-transparent">
              Fig
              <span className="font-[Chillow] block text-xl 2xl:text-4xl py-3 text-white text-left bg-transparent">
                Artist
              </span>
            </span>
            <p className="bg-transparent text-white font-[WorkSans] text-sm 2xl:text-xl text-left">
              Career artist with a cult-like following in the festival scene,
              making his first foray into NFTs. Materializes all our psychedelic
              dreams into vivid color.
            </p>
          </div>

          <div className="md:w-1/4 flex flex-col mx-6 mb-10 mx-:my-0 bg-transparent">
            <img src={Fen.src} className="rounded-md shadow-md" />
            <span className="font-[Chillow] text-left text-4xl 2xl:text-6xl py-4 text-white bg-transparent">
              Fenrus
              <span className="font-[Chillow] block text-xl 2xl:text-4xl py-3 text-white text-left bg-transparent">
                Marketing Lead
              </span>
            </span>
            <p className="bg-transparent text-white font-[WorkSans] text-sm 2xl:text-xl text-left">
              Master of persuasion. Serial side hustler. Built brand strategies
              and engagement programs for several 8-figure clients. Once got
              eaten alive by a mountain lion and reborn as an eagle soaring
              through the desert… or was that a dream?
            </p>
          </div>

          <div className="md:w-1/4 flex flex-col mx-6 mb-10 mx-:my-0 bg-transparent">
            <img src={King.src} className="rounded-md shadow-md" />
            <span className="font-[Chillow] text-left text-4xl 2xl:text-6xl py-4 text-white bg-transparent">
              King Kulbik
              <span className="font-[Chillow] block text-xl 2xl:text-4xl py-3 text-white text-left bg-transparent">
                Community Manager
              </span>
            </span>
            <p className="bg-transparent text-white font-[WorkSans] text-sm 2xl:text-xl text-left">
              Hype machine and man of the Tribe. Front-end developer to pay the
              bills, vibe generator to feed his passion. Chorles appointed him
              to lead the Tribe to salvation, and now he has a fan club. Don’t
              ask him. He just trusts the process.
            </p>
          </div>

          <div className="md:w-1/4 flex flex-col mx-6 mb-10 mx-:my-0 bg-transparent">
            <img src={Brisket.src} className="rounded-md shadow-md" />
            <span className="font-[Chillow] text-left text-3xl 2xl:text-6xl py-4 text-white bg-transparent">
              top10brisketrecipes
              <span className="font-[Chillow] block text-xl 2xl:text-4xl py-3 text-white text-left bg-transparent">
                Developer
              </span>
            </span>
            <p className="bg-transparent text-white font-[WorkSans] text-sm 2xl:text-xl text-left">
              Tokenomics savant and ritual game theorist. Used to run consumer
              software businesses at a FAANG company. A true NFT degen living by
              a simple rule: I see Ape, I Ape. Web3 and taco maxi.
            </p>
          </div>

          <div className="md:w-1/4 flex flex-col mx-6 mb-10 mx-:my-0 bg-transparent">
            <img src={Hankey.src} className="rounded-md shadow-md" />
            <span className="font-[Chillow] text-left text-4xl 2xl:text-6xl py-4 text-white bg-transparent">
              Mr. Hankey
              <span className="font-[Chillow] block text-xl 2xl:text-4xl py-3 text-white text-left bg-transparent">
                Developer
              </span>
            </span>
            <p className="bg-transparent text-white font-[WorkSans] text-sm 2xl:text-xl text-left">
              Builder with 4+ years of programming experience. Jams on
              everything from websites and mobile apps to IoT. Devolved into a
              full-time shitcoin and NFT degen over the last year and
              accumulated extensive knowledge in the space.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Disciples;

import React, { useState } from "react";
import Bg from "../public/imgs/Background.png";
import acid from "../public/imgs/valhalla.png";

const Faqs = () => {
  const [activeQ, setActiveQ] = useState(0);

  return (
    <div>
      <div
        className="bg-center w-full bg-cover bg-no-repeat md:bg-fixed min-h-screen"
        style={{ backgroundImage: `url('${acid.src}')` }}
      />
      <div
        id="faqs"
        className="max-w-screen min-h-screen bg-transparent bg-center bg-cover bg-no-repeat flex flex-col relative"
      >
        <div className="absolute inset-0 -top-44 mask1 z-0">
          <div
            className="absolute bg-no-repeat bg-cover bg-center inset-0 mask-1"
            style={{
              backgroundImage: `url("${Bg.src}")`,
            }}
          />
        </div>
        <div className="bg-transparent max-h-auto flex flex-col items-center justify-center mx-auto relative">
          <h2 className="mt-20 text-3xl md:text-6xl bg-transparent font-[Chillow] text-white font-heading text-left mx-auto md:mx-0">
            Frequently Asked Questions
          </h2>
          <span className="block uppercase text-white font-[Chillow] md:text-3xl text-lg my-2 md:mb-20 mb-10">
            trust the process
          </span>
        </div>
        <div className="max-h-auto w-[85%] md:w-[60%] mx-auto bg-transparent flex mb-10 relative">
          <div className="w-full flex flex-col bg-transparent min-h-fit mx-auto ">
            <ul className="bg-transparent max-h-fit mx-auto w-full">
              <li className="mb-4 px-4 2xl:px-12 bg-transparent text-white rounded-2xl w-full">
                <button
                  className="flex w-full text-left bg-transparent"
                  onClick={() => setActiveQ(1)}
                >
                  <div className=" mt-3 p-8 rounded-xl w-full">
                    <div className="flex items-center md:justify-between bg-transparent w-full">
                      <h3 className="md:text-xl 2xl:text-5xl text-base text-center font-[Chillow] bg-transparent w-full">
                        What is Trippin’ Ape Tribe?
                      </h3>
                    </div>

                    <div
                      className={`w-full py-4 items-center justify-center pl-2 bg-transparent font-[WorkSans] text-sm ${
                        activeQ === 1 ? "" : "hidden"
                      }`}
                    >
                      <p className="bg-transparent font-[WorkSans] text-center  text-xs md:text-sm 2xl:text-xl">
                        Trippin’ Ape Tribe is a community-first PFP project on
                        Solana, backed by strong and ownable branding, hilarious
                        storytelling, innovative lore-based utility, and a
                        passionate community of free-thinking degens.
                      </p>
                    </div>
                  </div>
                </button>
              </li>

              <li className="mb-4 px-4 2xl:px-12 bg-transparent text-white rounded-2xl w-full">
                <button
                  className="flex w-full text-left bg-transparent"
                  onClick={() => setActiveQ(4)}
                >
                  <div className=" mt-3 p-8 rounded-xl w-full">
                    <div className="flex items-center md:justify-between bg-transparent w-full">
                      <h3 className="md:text-xl 2xl:text-5xl text-center text-base font-[Chillow] bg-transparent w-full">
                        How large is the collection?
                      </h3>
                    </div>

                    <div
                      className={`w-full py-4 items-center justify-center pl-2 bg-transparent font-[WorkSans] text-sm ${
                        activeQ === 4 ? "" : "hidden"
                      }`}
                    >
                      <p className="bg-transparent text-center font-[WorkSans] text-xs md:text-sm 2xl:text-xl">
                        10,000 apes will ascend.
                      </p>
                    </div>
                  </div>
                </button>
              </li>

              <li className="mb-4 px-4 2xl:px-12 bg-transparent text-white rounded-2xl w-full">
                <button
                  className="flex w-full text-left bg-transparent"
                  onClick={() => setActiveQ(5)}
                >
                  <div className=" mt-3 p-8 rounded-xl w-full">
                    <div className="flex items-center md:justify-between bg-transparent w-full">
                      <h3 className="md:text-xl text-center 2xl:text-5xl text-base font-[Chillow] bg-transparent w-full">
                        What marketplaces are you listed on?
                      </h3>
                    </div>

                    <div
                      className={`w-full py-4 items-center justify-center pl-2 bg-transparent font-[WorkSans] text-sm ${
                        activeQ === 5 ? "" : "hidden"
                      }`}
                    >
                      <p className="bg-transparent text-center font-[WorkSans] text-xs md:text-sm 2xl:text-xl">
                        <a href="https://magiceden.io/marketplace/trippin_ape_tribe" target='_blank' rel="noreferrer">Magic Eden</a> & <a href="https://opensea.io/collection/trippin-ape-tribe-solana" target='_blank' rel="noreferrer">OpenSea.</a> We will consider others if the Tribe demands
                        and Chorles approves.
                      </p>
                    </div>
                  </div>
                </button>
              </li>

              <li className="mb-4 px-4 2xl:px-12 bg-transparent text-white rounded-2xl w-full">
                <button
                  className="flex w-full text-left bg-transparent"
                  onClick={() => setActiveQ(6)}
                >
                  <div className=" mt-3 p-8 rounded-xl w-full">
                    <div className="flex items-center md:justify-between bg-transparent w-full">
                      <h3 className="md:text-xl text-center 2xl:text-5xl text-base font-[Chillow] bg-transparent w-full">
                        Where is your roadmap?
                      </h3>
                    </div>

                    <div
                      className={`w-full py-4 items-center justify-center pl-2 bg-transparent font-[WorkSans] text-sm ${
                        activeQ === 6 ? "" : "hidden"
                      }`}
                    >
                      <p className="bg-transparent text-center font-[WorkSans] text-xs md:text-sm 2xl:text-xl">
                        Although Chorles sees visions of the future, he shares only what the Tribe must know.<br/>His most perceptive followers who can read between the lines will be rewarded.
                      </p>
                    </div>
                  </div>
                </button>
              </li>

              <li className="mb-4 px-4 2xl:px-12 bg-transparent text-white rounded-2xl w-full">
                <button
                  className="flex w-full text-left bg-transparent"
                  onClick={() => setActiveQ(7)}
                >
                  <div className=" mt-3 p-8 rounded-xl w-full">
                    <div className="flex items-center md:justify-between bg-transparent w-full">
                      <h3 className="md:text-xl text-center 2xl:text-5xl text-base font-[Chillow] bg-transparent w-full">
                        Is this a cult?
                      </h3>
                    </div>

                    <div
                      className={`w-full py-4 items-center justify-center pl-2 bg-transparent font-[WorkSans] text-sm ${
                        activeQ === 7 ? "" : "hidden"
                      }`}
                    >
                      <p className="bg-transparent text-center font-[WorkSans] text-xs md:text-sm 2xl:text-xl">
                        Definitely not. Who told you that?
                      </p>
                    </div>
                  </div>
                </button>
              </li>

            </ul>
            <div className="mx-auto font-[Oliver] text-lg my-4 text-[#F4F1B9] leading-3">
              <span>There&apos;s no limit to the depth<sup className="text-xl">7</sup> of your mind.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;

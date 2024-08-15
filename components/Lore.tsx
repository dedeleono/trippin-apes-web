import React, { useState } from "react";
import loreRightBg from "../public/imgs/lore-right.png";
import loreLeftBg from "../public/imgs/lore-left.png";

const Lore = () => {
  const [readMore, setReadMore] = useState(true);

  const displayText = () => {
    return setReadMore(!readMore);
  };

  return (
      <div
          className="flex md:flex-row flex-col min-w-screen min-h-screen items-center justify-center text-center relative pb-40"
      >
        <div className="absolute inset-0 -top-20  md:-top-28 mask1 z-0">
          <div className="absolute bg-no-repeat bg-cover bg-center inset-0 mask1"  style={{
            backgroundImage:'url("/imgs/bg-doodle.png")',
          }} />
        </div>
        <div className="flex flex-col max-w-screen min-h-screen max-h-full items-center justify-center relative">
          <div
              className={`w-auto md:mx-20 md:px-20 md:my-20 mx-10 min-h-full items-center justify-center `}
          >
            <h3 className="text-white bg-transparent text-left font-[Chillow] md:text-4xl text-xl 2xl:text-5xl flex flex-col md:mx-5 mt-20 md:mt-0">
              Let&apos;s get one thing straight, right away: This is NOT a cult.

              <br />
              It’s a tribe, understood? Perfect.
            </h3>
            <div className="grid md:grid-cols-2 min-h-fit">
              <div className="mx-4 min-h-full">
                <p className=" text-white py-3 my-6 font-[WorkSans] tracking-wide text-sm md:text-base 2xl:text-xl text-left max-w-[100%]">
                  At some point in our inconsequential existence, we were just
                  your ordinary apes: kickin it in trees, eating bananas and
                  shit (just to be clear, no, I don’t mean we were eating shit).
                  Everything changed when a bunch of spunions came to our island
                  blaring strange sounds and strands of fire in the sky for
                  something called Fire Festival 2.{" "}

                  <span
                      className={`block my-6`}
                  >
                    These strange beings seemed to be entranced, hypnotized by
                    sonic beats. We observed from a distance and noticed the
                    mood started to change. When their food and water went dry
                    and their performers stopped showing up, these pompous
                    savages began to devolve.
                  </span>

                  <span className="block my-6">
                    {" "}
                    The debauchery reached a fever pitch when one we could
                    assume to be their chief, Ja Ruler, started screaming at
                    everybody and demanding some dude suck dick for water. Idk,
                    shit got pretty weird. Eventually, the scene turned into
                    complete and utter chaos, leading all of them to frantically
                    leave the island. The event turned out to be a disaster—for
                    them, at least.{" "}
                  </span>{" "}

                  <span className="block my-6">
                    After everyone fled, we started scavenging the wasteland
                    those trust fund babies left behind. It was mostly deflated
                    mattresses and baloney sandwiches with a scared spunion
                    hiding in the crevices. We looked through their refugee
                    tents until one of the alphas, Chorles, found a mysterious
                    piece of luggage. He inspected it to ensure the safety of
                    the rest of the apes before taking it back to his dwelling.
                  </span>

                  <span className="block my-6">
                    {" "}
                    Months had passed with very little sighting of Chorles, when
                    he popped up out of nowhere, announcing that he needed some
                    volunteers for what he called the “clinical trials.” The
                    initial group of volunteers would become Chorles’ disciples.
                    At first, us apes were wary, but Chorles’ disciples seemed
                    to be in a tranquil state after every session.
                  </span>
                </p>
              </div>
              <div className="mx-4 md:mt-3 min-h-full md:border-l-[0.5px] md:border-white md:pl-8">
                <p className=" text-white md:my-4 font-[WorkSans] tracking-wide text-sm md:text-base 2xl:text-xl text-left max-w-[100%]">

                  <span className="block md:my-6">
                    One day, out of curiosity, we filed into his hut one-by-one
                    and were presented with mysterious teas, fungi and these
                    weird, tiny pieces of paper that we had to eat. Chorles said
                    these were the keys to the universe and if we follow his
                    lead, we would all find eternal bliss. So we dropped in, us
                    apes started a journey that would expand our consciousness.{" "}
                  </span>

                  <span className="block my-6">
                    Fast forward to now, we’re like some fucking super apes. Our
                    cognitive abilities increased exponentially, eventually
                    leading us to become self aware. These mystical sessions
                    completely transformed our way of life.
                  </span>{" "}

                  <span className="block my-6">
                    Since the clinical trials, we now have a weekly ceremony,
                    hosted by Chorles, where we take controlled doses of these
                    psychoactive substances. He says this is required to find
                    the promised land and has started working on his new
                    venture, the Valhalla Laboratory, to get us there faster.
                  </span>

                  <span className="block my-6">
                    {" "}
                    Honestly, life is good here in the tribe… Chorles takes care
                    of us and has shown us the way. We never have to worry about
                    anything with his supreme guidance. I mean sure,
                    occasionally someone acts out and has to be punished, but
                    Chorles loves us and assures it’s for our own good. We don’t
                    question it because, well, he’s always right. He’s been
                    right about everything.{" "}
                  </span>

                  <span className="block my-6">
                    Shit, sorry I’m rambling, but you should join us. Join the
                    tribe. It’s definitely not a cult.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto">
            <div className="w-full rounded-lg my-10 md:mb-20 grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-4">
              <img src={loreRightBg.src} />
              <img src={loreLeftBg.src} />
            </div>
          </div>
        </div>

      </div>
  );
};

export default Lore;

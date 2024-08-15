import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";

import { FaDiscord, FaTwitter } from "react-icons/fa";
import { BsFillCaretDownFill } from "react-icons/bs";
import Logo from "../public/imgs/nav.png";
import Abs from "../public/imgs/purple.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setIsActive] = useState("");
  const [navbar, setNavbar] = useState(false);
  const [isJournal, setIsJournal] = useState(false);
  const [isCommerce, setIsCommerce] = useState(false);

  const toggleMenu = () => {
    return setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsActive("");
  };

  const showNavbar = () => {
    if (window.pageYOffset > 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", showNavbar);
  }

  return (
    <>
      <nav
        className={`fixed transition-all z-20 w-full items-center shadow-md`}
        style={{ top: navbar ? "0px" : "-70px" }}
      >
        <div
          className="w-full bg-transparent bg-cover bg-no-repeat relative z-10"
          style={{
            background: `linear-gradient(rgb(72,0,72,0.5), rgb(192,72,72,0.8)), url('${Abs.src}')`,
          }}
        >
          <div className="flex  w-full items-center bg-transparent">
            <div className="items mx-8 flex w-full items-center justify-between 2xl:mx-20 bg-transparent">
              <div
                className="flex cursor-pointer flex-shrink-0 items-center justify-center bg-transparent"
                onClick={scrollToTop}
              >
                <Link to="home" offset={-100}>
                  <img
                    className="object-square flex h-[3.5rem] 2xl:h-[4rem] py-3 bg-transparent"
                    src={Logo.src}
                  />
                </Link>
              </div>

              <div className="hidden lg:flex md:flex-row bg-transparent">
                <div className="flex-end 2xl:mx-8 mx-6 flex w-full items-baseline uppercase bg-transparent">
                  <Link
                    activeClass="!text-white"
                    to="about"
                    onClick={() => setIsActive("about")}
                    smooth={true}
                    delay={100}
                    offset={-100}
                    spy={true}
                    exact="true"
                    duration={250}
                    className={`cursor-pointer px-4 py-2 bg-transparent font-[Chillow] md:text-xl 2xl:text-3xl text-[#A0E69E] hover:text-white`}
                  >
                    About
                  </Link>

                  <Link
                    activeClass="!text-white"
                    to="story"
                    onClick={() => setIsActive("story")}
                    smooth={true}
                    offset={-100}
                    spy={true}
                    exact="true"
                    duration={500}
                    className={`cursor-pointer px-4 py-2 bg-transparent font-[Chillow] md:text-xl 2xl:text-3xl text-[#A0E69E] hover:text-white`}
                  >
                    Story
                  </Link>

                  <Link
                    activeClass="!text-white"
                    onClick={() => setIsActive("principles")}
                    to="principles"
                    smooth={true}
                    spy={true}
                    exact="true"
                    offset={-100}
                    duration={500}
                    className={`cursor-pointer px-4 bg-transparent py-2 font-[Chillow] md:text-xl 2xl:text-3xl text-[#A0E69E] hover:text-white`}
                  >
                    Principles
                  </Link>

                  <Link
                    activeClass="!text-white"
                    onClick={() => setIsActive("journal")}
                    to="journal"
                    smooth={true}
                    spy={true}
                    exact="true"
                    offset={-100}
                    duration={500}
                    className={`cursor-pointer px-4 bg-transparent py-2 font-[Chillow] md:text-xl 2xl:text-3xl text-[#A0E69E] hover:text-white`}
                  >
                    Journal
                  </Link>
                  <Link
                    activeClass="!text-white"
                    onClick={() => setIsActive("island")}
                    to="island"
                    smooth={true}
                    spy={true}
                    exact="true"
                    offset={-100}
                    duration={500}
                    className={`cursor-pointer px-4 bg-transparent py-2 font-[Chillow] md:text-xl 2xl:text-3xl text-[#A0E69E] hover:text-white`}
                  >
                    Island
                  </Link>

                  <Link
                    activeClass="!text-white"
                    onClick={() => setIsActive("disciples")}
                    to="disciples"
                    smooth={true}
                    spy={true}
                    exact="true"
                    offset={-100}
                    duration={500}
                    className={`cursor-pointer px-4 bg-transparent py-2 font-[Chillow] md:text-xl 2xl:text-3xl text-[#A0E69E] hover:text-white`}
                  >
                    Disciples
                  </Link>
                  <Link
                    activeClass="!text-white"
                    onClick={() => setIsActive("faqs")}
                    to="faqs"
                    smooth={true}
                    spy={true}
                    exact="true"
                    offset={-100}
                    duration={500}
                    className={`cursor-pointer bg-transparent px-4 py-2 font-[Chillow] md:text-xl 2xl:text-3xl text-[#A0E69E] hover:text-white`}
                  >
                    Faqs
                  </Link>
                  <div className="dropdown">
                    <label
                      tabIndex={0}
                      className={`cursor-pointer whitespace-nowrap px-4 bg-transparent py-2 font-[Chillow] md:text-xl 2xl:text-3xl text-[#A0E69E] hover:text-white`}
                    >
                      Journey
                      {/* <BsFillCaretDownFill className="inline text-sm" /> */}
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <a
                          className="font-[Chillow] text-xl"
                          href="https://meditation.trippinapetribe.xyz/"
                        >
                          Meditation
                        </a>
                      </li>
                      <li>
                        <a
                          className="font-[Chillow] text-xl"
                          href="https://meadow.trippinapetribe.xyz/"
                        >
                          Meadow
                        </a>
                      </li>
                      <li>
                        <a
                          className="font-[Chillow] text-xl"
                          href="https://lab.trippinapetribe.xyz/"
                        >
                          Laboratory
                        </a>
                      </li>
                      <li>
                        <a
                          className="font-[Chillow] text-xl"
                          href="https://spiritquest.trippinapetribe.xyz/"
                        >
                          Spirit Quest
                        </a>
                      </li>

                      <li>
                        <a
                          className="font-[Chillow] text-xl"
                          href="https://art.trippinapetribe.xyz/"
                        >
                          Art Assets
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="dropdown">
                    <label
                      tabIndex={0}
                      className={`cursor-pointer whitespace-nowrap px-4 bg-transparent py-2 font-[Chillow] md:text-xl 2xl:text-3xl text-[#A0E69E] hover:text-white`}
                    >
                      Commerce
                      {/* <BsFillCaretDownFill className="inline text-sm" /> */}
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <a
                          className="font-[Chillow] text-xl"
                          href="https://market.trippinapetribe.xyz/"
                        >
                          Market
                        </a>
                      </li>
                      <li>
                        <a
                          className="font-[Chillow] text-xl"
                          href="http://toy.trippinapetribe.xyz/"
                        >
                          Toy Machine
                        </a>
                      </li>
                      <li>
                        <a
                          className="font-[Chillow] text-xl"
                          href="http://toy2.trippinapetribe.xyz/"
                        >
                          Toy Machine 2
                        </a>
                      </li>
                      <li>
                        <a
                          className="font-[Chillow] text-xl"
                          href="https://drippinapes.xyz/"
                        >
                          Drippin&apos; Apes
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="items flex flex-row items-center bg-transparent">
                  <a
                    href="https://twitter.com/TrippinApeNFT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor bg-transparent"
                  >
                    <FaTwitter className="mx-3 align-bottom md:text-2xl 2xl:text-4xl text-white bg-transparent" />
                  </a>
                  <a
                    href="https://discord.gg/trippinapetribe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor bg-transparent"
                  >
                    <FaDiscord className="mx-3 align-bottom md:text-2xl 2xl:text-4xl text-white bg-transparent" />
                  </a>
                </div>
              </div>
            </div>

            {/*mobile menu*/}

            <div className="mr-8 flex  lg:hidden bg-transparent">
              <button
                onClick={() => {
                  toggleMenu();
                  setIsJournal(false);
                }}
                type="button"
                className="inline-flex items-center justify-center rounded-md  p-2 text-white bg-transparent"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6 bg-transparent"
                    xmlns="http:www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6 bg-transparent"
                    xmlns="http:www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/*transition from headslessui for smoothness in mobile*/}

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95 fixed inset-0 pt-14"
          enterTo="opacity-100 scale-100 fixed inset-0 pt-14  overflow-y-auto"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100 fixed inset-0 pt-14  overflow-y-auto"
          leaveTo="opacity-0 scale-95 fixed inset-0 pt-14"
        >
          <div
            className="id=mobile-menu lg:hidden"
            style={{
              background: `linear-gradient(rgb(72,0,72,0.8), rgb(192,72,72,0.8)), url('${Abs.src}')`,
            }}
          >
            <div className="flex flex-col justify-start bg-white/20 backdrop-blur-md gap-2 px-2 py-4 text-center uppercase sm:px-3">
              <Link
                activeClass="home"
                to="home"
                onClick={toggleMenu}
                smooth={true}
                offset={-100}
                duration={500}
                className={`block cursor-pointer rounded-md px-3 py-4 font-[Chillow] text-base tracking-wider bg-transparent text-white hover:bg-[#011b36] hover:text-white focus:bg-[#011b36] focus:text-white`}
              >
                Home
              </Link>
              <Link
                activeClass="home"
                to="home"
                onClick={toggleMenu}
                smooth={true}
                offset={-100}
                duration={500}
                className={`block cursor-pointer rounded-md px-3 py-4 font-[Chillow] text-base tracking-wider bg-transparent text-white hover:bg-[#011b36] hover:text-white focus:bg-[#011b36] focus:text-white`}
              >
                About
              </Link>

              <Link
                activeClass="story"
                to="story"
                onClick={toggleMenu}
                smooth={true}
                offset={-100}
                duration={500}
                className={`block cursor-pointer rounded-md px-3 py-4 bg-transparent font-[Chillow] text-base tracking-wider text-white hover:bg-[#011b36] hover:text-white focus:bg-[#011b36]] focus:text-white`}
              >
                Story
              </Link>

              <Link
                activeClass="principles"
                to="principles"
                onClick={toggleMenu}
                smooth={false}
                offset={-100}
                duration={0}
                className={`block cursor-pointer rounded-md px-3 py-4 bg-transparent font-[Chillow] text-base tracking-wider text-white hover:bg-[#011b36] hover:text-white focus:bg-[#011b36] focus:text-white`}
              >
                Principles
              </Link>
              <Link
                activeClass="journal"
                to="journal"
                onClick={toggleMenu}
                smooth={true}
                offset={-100}
                duration={500}
                className={`block cursor-pointer rounded-md px-3 py-4 bg-transparent font-[Chillow] text-base tracking-wider text-white hover:bg-[#011b36] hover:text-white focus:bg-[#011b36] focus:text-white`}
              >
                Journal
              </Link>
              <Link
                activeClass="island"
                to="island"
                onClick={toggleMenu}
                smooth={true}
                offset={-100}
                duration={500}
                className={`block cursor-pointer rounded-md px-3 py-4 bg-transparent font-[Chillow] text-base tracking-wider text-white hover:bg-[#011b36] hover:text-white focus:bg-[#011b36] focus:text-white`}
              >
                Island
              </Link>
              <Link
                activeClass="disciples"
                to="disciples"
                onClick={toggleMenu}
                smooth={true}
                offset={-100}
                duration={500}
                className={`block cursor-pointer rounded-md px-3 bg-transparent py-4 font-[Chillow] text-base tracking-wider text-white hover:bg-[#011b36] hover:text-white focus:bg-[#011b36] focus:text-white`}
              >
                Disciples
              </Link>
              <Link
                activeClass="faqs"
                to="faqs"
                onClick={toggleMenu}
                smooth={true}
                offset={-100}
                duration={500}
                className={`block cursor-pointer rounded-md px-3 py-4 font-[Chillow] text-base tracking-wider text-white bg-transparent hover:bg-[#011b36] hover:text-white focus:bg-[#011b36] focus:text-white`}
              >
                FAQs
              </Link>
              <div className="dropdown w-full">
                <label
                  onClick={() => {
                    setIsJournal(!isJournal);
                  }}
                  tabIndex={0}
                  className={`w-full block cursor-pointer rounded-md px-3 py-4 font-[Chillow] text-base tracking-wider text-white bg-transparent hover:bg-[#011b36] hover:text-white focus:bg-[#011b36] focus:text-white`}
                >
                  Journey
                  {/* <BsFillCaretDownFill className="inline text-sm" /> */}
                </label>
                {isJournal && (
                  <ul
                    tabIndex={0}
                    className="menu p-2 shadow bg-base-100 rounded-box w-full mt-2 gap-2 flex flex-col items-center mx-auto"
                  >
                    <li className="flex flex-col items-center w-full">
                      <a
                        className="block font-[Chillow] text-base w-full"
                        href="https://meditation.trippinapetribe.xyz/"
                      >
                        <p className="w-full">Meditation</p>
                      </a>
                    </li>
                    <li className="flex flex-col items-center w-full">
                      <a
                        className="block font-[Chillow] text-base w-full"
                        href="https://meadow.trippinapetribe.xyz/"
                      >
                        <p className="w-full">Meadow</p>
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-[Chillow] text-xl"
                        href="https://lab.trippinapetribe.xyz/"
                      >
                        Laboratory
                      </a>
                    </li>
                    <li className="flex flex-col items-center w-full">
                      <a
                        className="block font-[Chillow] text-base w-full"
                        href="https://spiritquest.trippinapetribe.xyz/"
                      >
                        <p className="w-full">Spirit Quest</p>
                      </a>
                    </li>

                    <li className="flex flex-col items-center w-full">
                      <a
                        className="block font-[Chillow] text-base w-full"
                        href="https://art.trippinapetribe.xyz/"
                      >
                        <p className="w-full">Art Assets</p>
                      </a>
                    </li>
                  </ul>
                )}
              </div>

              <div className="dropdown w-full">
                <label
                  onClick={() => {
                    setIsCommerce(!isCommerce);
                  }}
                  tabIndex={0}
                  className={`w-full block cursor-pointer rounded-md px-3 py-4 font-[Chillow] text-base tracking-wider text-white bg-transparent hover:bg-[#011b36] hover:text-white focus:bg-[#011b36] focus:text-white`}
                >
                  Commerce
                  {/* <BsFillCaretDownFill className="inline text-sm" /> */}
                </label>
                {isCommerce && (
                  <ul
                    tabIndex={0}
                    className="menu p-2 shadow bg-base-100 rounded-box w-full mt-2 gap-2 flex flex-col items-center mx-auto"
                  >
                    <li>
                      <a
                        className="font-[Chillow] text-xl"
                        href="https://market.trippinapetribe.xyz/"
                      >
                        Market
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-[Chillow] text-xl"
                        href="http://toy.trippinapetribe.xyz/"
                      >
                        Toy Machine
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-[Chillow] text-xl"
                        href="http://toy2.trippinapetribe.xyz/"
                      >
                        Toy Machine 2
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-[Chillow] text-xl"
                        href="https://drippinapes.xyz/"
                      >
                        Drippin&apos; Apes
                      </a>
                    </li>
                  </ul>
                )}
              </div>

              <div className="items flex flex-row items-center justify-center gap-4 bg-transparent py-8">
                <a
                  href="https://twitter.com/TrippinApeNFT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor bg-transparent rounded-lg"
                >
                  <button className="rounded-lg flex uppercase hover:scale-[1.1] font-[Chillow] flex-row items-center justify-center bg-[#00acee] p-3 text-white">
                    <FaTwitter className="mr-2 text-sm text-white  bg-transparent" />
                    Follow the tribe
                  </button>
                </a>

                <a
                  href="https://discord.gg/trippinapetribe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor bg-transparent rounded-lg"
                >
                  <button className="flex rounded-lg hover:scale-[1.1] uppercase font-[Chillow] flex-row items-center justify-center bg-[#5865F2] p-3 text-white">
                    <FaDiscord className="mr-2 text-sm text-white  bg-transparent" />
                    Join the tribe
                  </button>
                </a>
              </div>
            </div>
          </div>
        </Transition>
      </nav>
    </>
  );
};

export default Navbar;

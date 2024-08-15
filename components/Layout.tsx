import React, { ReactNode } from "react";
import Head from "next/head";
import Nav from "./Navbar";

import Hydra from "../public/imgs/PoweredByHydra.png";
import Bg from "../public/imgs/Abstract3.jpg";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="../public/favicon.ico" rel="favicon" />
    </Head>
    <Nav />
    {children}
    <footer
      className=" bottom-0 bg-transparent bg-bottom"
      style={{
        background: `linear-gradient(rgb(72,0,72,0.8), rgb(192,72,72,0.8)), url('${Bg.src}')`,
      }}
    >
      <div className="bg-transparent w-full max-h-auto py-6 flex-row flex items-center justify-evenly">
        <a
          href="https://twitter.com/HydraLaunchpad"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor bg-transparent"
        >
          <img
            className="object-scale-down aspect-video md:max-w-[7rem] md:w-[7rem] w-[5rem] bg-transparent"
            src={Hydra.src}
          />
        </a>
        <div className="flex flex-col md:flex-row items-center justify-center">
        
        <span className="text-white bg-transparent font-[Chillow] md:text-base text-xs py-1 md:py-0">
          2022, Trippin Ape Tribe. It&apos;s NOT a{" "}
          <span className="line-through bg-transparent">CULT</span>
        </span>
        <a
          className="text-white bg-transparent text-xs font-[Chillow] mx-5"
          href="https://drive.google.com/file/d/19mg7e79JRPf677sSnicK3c0dUs2vI0Q-/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Terms & Conditions
        </a>
        </div>
      </div>
    </footer>
  </>
);

export default Layout;

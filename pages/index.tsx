import React, { useRef, useEffect } from "react";
import Hero from "../components/Hero";
import Landing from "../components/Landing";
import Layout from "../components/Layout";
import LandingLayout from "../components/LandingLayout";
import TrippinBalls from "../components/About";
import Tribe from "../components/Tribe";
import Lore from "../components/Lore";
import Utils from "../components/Principles";
import Island from "../components/Island";
import Disciples from "../components/Team";
import Faqs from "../components/Faqs";
import dynamic from "next/dynamic";
import { Element } from "react-scroll";

const Journal = dynamic(() => import("../components/Journal"), { ssr: false });

const IndexPage = () => {
  return (
    <>
      <LandingLayout>
        <Hero />
      </LandingLayout>
      <Layout title="Trippin Ape Tribe">
        <Landing />
        <TrippinBalls />
        <div id="story">
          <Tribe />
          <Lore />
        </div>
        <Utils />
        <Journal />
        <Island />
        <Disciples />
        <Faqs />
      </Layout>
    </>
  );
};

export default IndexPage;

import React from "react";
import FormContainer from "./OutdatedForm";
import stars_bg from "./../../assets/stars_bg.png";
import animationData0 from "../assets/Animation0.json";
import animationData1 from "../assets/Animation1.json";
import { Player } from "@lottiefiles/react-lottie-player";

const FirstCustomForm = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${stars_bg})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div style={{ backgroundColor: "rgba(26, 26, 26, 0.3)" }}>
        {/* <Stars speed={0.02} /> */}
        <Player autoplay loop src={animationData0} className="lottie-player1" />
        <Player autoplay loop src={animationData0} className="lottie-player2" />
        <Player
          autoplay
          loop
          src={animationData0}
          className="lottie-player21"
        />
        {/* <Player
          autoplay
          loop
          src={animationData0}
          className="lottie-player22"
        /> */}
        {/* <Player autoplay loop src={animationData1} className="lottie-player3" /> */}
        <Player
          autoplay
          loop
          src={animationData1}
          className="lottie-player31"
        />
        <Player
          autoplay
          loop
          src={animationData1}
          className="lottie-player32"
        />
        <Player
          autoplay
          loop
          src={animationData1}
          className="lottie-player33"
        />
        <FormContainer />
      </div>
    </div>
  );
};

export default FirstCustomForm;

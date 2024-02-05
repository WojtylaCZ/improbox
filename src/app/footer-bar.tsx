import { Image } from "react-bootstrap";

import Actors from "../assets/img/actors.png";

export const FooterBar = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image
          src={Actors}
          alt="Theather actors siluetes."
          style={{
            maxWidth: "300px",
            width: "100%",
          }}
        />
      </div>

      <div
        style={{
          fontSize: "small",
          color: "grey",
          width: "100%",
          display: "flex",
          height: "48px",
          justifyContent: "center",
          backgroundColor: "#000000",
          alignItems: "center",
          position: "relative",
          left: "0px",
          bottom: "0px",
          right: "0px",
        }}
      >
        <span style={{ color: "white" }}>2024, Vojtěch Uhlíř</span>
      </div>
    </>
  );
};

import React from "react";
import sandeep from "../utils/images/sandeep.png";
import EmojiBullet from "../components/EmojiBullet.js";
import SocialIcon from "../components/SocialIcon.js";
import { Box } from "@mui/material";
import { info } from "../utils/info.js";

const Home = () => {
  return (
    <Box
      component={"main"}
      display={"flex"}
      flexDirection={{
        xs: "column",
        md: "row",
      }}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={"calc(100vh - 175px)"}
    >
      <Box
        className="avatar shadowed"
        style={{
          background: info.gradient,
          objectFit: "cover",
        }}
        component={"img"}
        src={sandeep}
        width={{
          xs: "35vh",
          md: "40vh",
        }}
        height={{
          xs: "35vh",
          md: "40vh",
        }}
        borderRadius={"50%"}
        p={"0.75rem"}
        mb={{
          xs: "1rem",
          sm: 0,
        }}
        mr={{
          xs: 0,
          md: "2rem",
        }}
      />{" "}
      <Box>
        <h1>
          {" "}
          Hi, I 'm{" "}
          <span
            style={{
              background: info.gradient,
              WebkitBackgroundClip: "text ",
              WebkitTextFillColor: "transparent ",
            }}
          >
            {info.firstName}
          </span>
          <span className="hand">🤚</span>
        </h1>{" "}
        <h2> I 'm {info.position}.</h2>{" "}
        <Box component={"ul"} p={"0.8rem"}>
          {" "}
          {info.miniBio.map((bio, index) => (
            <EmojiBullet emoji={bio.emoji} text={bio.text} key={index} />
          ))}{" "}
        </Box>{" "}
        <Box
          display={"flex"}
          gap={"1.5rem"}
          justifyContent={"start"}
          fontSize={{
            xs: "2rem",
            md: "2.5rem",
          }}
        >
          {" "}
          {info.socials.map((social, index) => (
            <SocialIcon link={social.link} icon={social.icon} key={index} />
          ))}{" "}
        </Box>{" "}
      </Box>{" "}
    </Box>
  );
};

export default Home;

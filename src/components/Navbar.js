import React, { useState } from "react";
import Toggler from "./Toggler";
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { info } from "../utils/info.js";

const links = [
  {
    name: "Home",
    to: "/",
    active: "home",
  },
  {
    name: "About Me",
    to: "/about",
    active: "about",
  },
  {
    name: info.initials,
    type: "initials",
    to: "/",
    active: "home",
  },
  {
    name: "Portfolio",
    to: "/portfolio",
    active: "portfolio",
  },
];

export default function Navbar({ darkMode, handleClick }) {
  const location = useLocation();
  const [active, setActive] = useState(
    location.pathname === "/"
      ? "home"
      : location.pathname.slice(1, location.pathname.length)
  );

  return (
    <Box component={"nav"} width={"100%"}>
      <Box
        component={"ul"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={{
          xs: "2rem",
          md: "8rem",
        }}
        textTransform={"lowercase"}
        fontSize={"1rem"}
      >
        {" "}
        {links.map((link, index) => (
          <Link to={link.to} onClick={() => setActive(link.active)} key={index}>
            <Box
              component={"li"}
              className={link.active === active && !link.type && "active"}
              sx={{
                borderImageSource: info.gradient,
              }}
            >
              {" "}
              {!link.type && (
                <p
                  style={{
                    paddingBottom: "0.5rem",
                    textTransform: "capitalize",
                  }}
                >
                  {" "}
                  {link.name}{" "}
                </p>
              )}{" "}
              {link.type && <h1> {link.name} </h1>}{" "}
            </Box>{" "}
          </Link>
        ))}{" "}
        <Toggler darkMode={darkMode} handleClick={handleClick} />{" "}
      </Box>{" "}
    </Box>
  );
}

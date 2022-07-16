import React, { useState } from "react";
import Navbar from "../components/Navbar.js";
import Home from "../pages/Home.js";
import About from "../pages/About.js";
import Portfolio from "../pages/Portfolio.js";
import { Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";

const DefaultLayout = () => {
  let [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
    console.log("dark mode is : ", darkMode);
  };
  return (
    <Box className={darkMode ? "dark" : "light"}>
      <Grid
        container
        display={"flex"}
        flexDirection={"column"}
        minHeight={"100vh"}
        justifyContent={"space-between"}
      >
        <Grid item>
          <Navbar darkMode={darkMode} handleClick={handleClick} />{" "}
        </Grid>{" "}
        <Grid item flexGrow={1}>
          <Routes>
            <Route exact path={"/"} element={<Home />} />{" "}
            <Route exact path={"/about"} element={<About />} />{" "}
            <Route exact path={"/portfolio"} element={<Portfolio />} />{" "}
          </Routes>{" "}
        </Grid>{" "}
      </Grid>{" "}
    </Box>
  );
};

export default DefaultLayout;

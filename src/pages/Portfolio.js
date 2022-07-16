import React from "react";
import PortfolioBlock from "../components/PortfolioBlock.js";
import { Box, Grid } from "@mui/material";
import { info } from "../utils/info.js";

export default function Portfolio() {
  return (
    <Box>
      <Grid container display={"flex"} justifyContent={"center"}>
        {" "}
        {info.portfolio.map((project, index) => (
          <Grid item xs={12} md={4} key={index}>
            <PortfolioBlock
              image={project.image}
              live={project.live}
              source={project.source}
              title={project.title}
            />{" "}
          </Grid>
        ))}{" "}
      </Grid>{" "}
    </Box>
  );
}

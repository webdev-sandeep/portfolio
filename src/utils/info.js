import self from "./images/sandeep.png";
import projectTokenTrends from "./images/project-tokentrends.png";
import projectCocktail from "./images/project-cocktail.png";
import projectDriftmusic from "./images/project-driftmusic.png";
import projectPortfolio from "./images/project-portfolio.png";
import projectAskmovies from "./images/project-askmovies.png";
import projectChitChat from "./images/project-chitchat.png";

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
  firstName: "Sandeep",
  lastName: "Kumar",
  initials: "js",
  position: "a Full Stack Developer",
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "☕",
      text: "Fueled by Tea",
    },
    {
      emoji: "🌎",
      text: "Based in India",
    },
    {
      emoji: "💼",
      text: "Full Stack Developer",
    },
    {
      emoji: "📧",
      text: "webdev.sandeepkumar@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://github.com/webdev-sandeep",
      icon: "fa fa-github",
    },
    {
      link: "https://www.linkedin.com/in/webdev-sandeepkumar/",
      icon: "fa fa-linkedin",
    },
    {
      link: "https://twitter.com/webdev_sandeep",
      icon: "fa fa-twitter",
    },
    // {
    //   link: "https://www.reddit.com/user/webdev-sandeep",
    //   icon: "fa fa-reddit",
    // },
  ],
  bio: "Hello! I'm Sandeep. I'm very ambitious full-stack developer looking for a role in established IT company with the opportunity to work with the latest technologies on challenging and diverse projects. I'm quietly confident, naturally curious, and perpetually working on improving my skills. You should hire me!",
  skills: {
    proficientWith: [
      "javascript",
      "react",
      "git",
      "github",
      "bootstrap",
      "html5",
      "css3",
      "nodejs",
      "tailwindcss",
    ],
    exposedTo: ["vuejs", "firebase"],
  },
  hobbies: [
    {
      label: "chess",
      emoji: "♟️",
    },
    {
      label: "cricket",
      emoji: "🏏",
    },
    {
      label: "travelling",
      emoji: "🚀",
    },
    {
      label: "cooking",
      emoji: "🌶",
    },
  ],
  portfolio: [
    {
      title: "Project ChitChat",
      live: "https://the-chitchat-app.netlify.app/",
      source: "https://github.com/webdev-sandeep/chitchat",
      image: projectChitChat,
    },
    {
      title: "Project TokenTrends",
      live: "https://tokentrends.netlify.app/",
      source: "https://github.com/webdev-sandeep/tokentrends",
      image: projectTokenTrends,
    },
    {
      title: "Project Cocktails",
      live: "https://chooseyourcocktail.netlify.app",
      source: "https://github.com/webdev-sandeep/cocktails",
      image: projectCocktail,
    },
    {
      title: "Project Drift Music",
      live: "https://drift-music.netlify.app",
      source: "https://github.com/webdev-sandeep/drift-music",
      image: projectDriftmusic,
    },
    {
      title: "Project Portfolio",
      live: "https://webdev-sandeep-portfolio.netlify.app",
      source: "https://github.com/webdev-sandeep/portfolio",
      image: projectPortfolio,
    },
    {
      title: "Project AskMovies",
      live: "https://ask-movies.herokuapp.com",
      source: "https://github.com/webdev-sandeep/AskMovies",
      image: projectAskmovies,
    },
  ],
};

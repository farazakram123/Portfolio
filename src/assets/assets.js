import dayMode from "../assets/day-mode.png";
import nightMode from "../assets/night-mode.png";
import menu from "../assets/menu.png";
import main_menu from "../assets/main-menu.png";
import tasteCart from "../assets/TasteCart.png";
import easyShare from "../assets/EasyShare.png";
import askthevideo from "../assets/AskTheVideo.png";

export const projects = [
  {
    name: "Ask The Video",
    description: "A Full-stack MERN application for food delivery, with MongoDB integration for data storage.",
    skills: ["Python", "Langchain", "Streamlit", "Pinecone"],
    image: askthevideo,
    url: 'https://ask-the-video.streamlit.app/',
    github: 'https://github.com/farazakram123/Ask-The-Video'
  },
  {
    name: "TasteCart",
    description: "A Full-stack MERN application for food delivery, with MongoDB integration for data storage.",
    skills: ["React", "Nodejs", "Expressjs", "MongoDB"],
    image: tasteCart,
    url: 'https://tastecart-frontend.onrender.com',
    github: 'https://github.com/farazakram123/TasteCart'
  },
  {
    name: "EasyShare",
    description: "A file-sharing application built with MERN stack, allowing users to upload and share files easily.",
    skills: ["React", "Nodejs", "Expressjs", "MongoDB"],
    image: easyShare,
    url: 'https://easyshare-frontend-bmh3.onrender.com',
    github: 'https://github.com/farazakram123/EasyShare'
  }
];

export const assets = {
  dayMode,
  nightMode,
  menu,
  main_menu
};

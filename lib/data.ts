import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import illustrationsImg from "@/public/illustrations.png";
import charactersImg from "@/public/charactets.png";
import uidesignImg from "@/public/ui.png";
import iconsImg from "@/public/icons.png";
import logosImg from "@/public/logos.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Portfolio",
    hash: "#portfolio",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Hero Academy",
    location: "Arcadia",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a junior dragonslayer",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Junior Dragonslayer",
    location: "Drake Valley",
    description:
      "I slayed many dragons during my time in Drake Valley. I also improved my magic and cooking skills.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Dragonslayer",
    location: "Dragon Peaks",
    description:
      "I'm now a Dragonslayer hunting dragons that lurk in Dragon Peaks. My main targets are Red and Blue dragons but Im open to new quests and challanges",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Companions",
    description:
      "I worked with a band of greatest adventurers and warriors this land has ever seen",
    tags: ["Fighters", "Rogues", "Wizards", "Druids", "Paladins"],
    imageUrl: charactersImg,
  },
  {
    title: "Trophies",
    description:
      "In my life as a dragon slayer I managed to kill and collect trophies form many vile creatures",
    tags: ["Dragons", "Wyverns", "Trolls", "Drakes", "Wyrms"],
    imageUrl: uidesignImg,
  },
  {
    title: "Weapons",
    description:
      "My inventory and stash is full of enchanted weapons, ready to be used in fight agains evil",
    tags: ["Swords", "Axes", "Spears", "Bows"],
    imageUrl: illustrationsImg,
  },
] as const;

export const skillsData = [
  "Swords",
  "Axes",
  "Spears",
  "Fire Magic",
  "Ice Magic",
  "Bardic Inspiration",
  "Rage",
  "Dragonslaying",
  "Dragonflying",
  "Divine Magic",
  "Shields",
  "Armor (Heavy)",
  "Healing",
  "Bows",
  "Siege",
  "Dancing",
  "Singing",
  "Talking to Animals",
  "Disney Princess Stuff",
] as const;

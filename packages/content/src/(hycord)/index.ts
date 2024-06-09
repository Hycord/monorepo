import { ClientSchema } from "..";
import { ProjectPortfolio } from "./portfolio";

export default {
  slug: "hycord",

  displayName: "Hycord",
  // quote: "Hey, I made everything you see here, and listed in my projects :)",

  twitter: "https://twitter.com/ignhycord",
  discord: "https://discord.gg/9f7WbbvPP7",
  github: "https://github.com/hycord",
  website: "https://masen.dev",
  projects: [ProjectPortfolio],
} as ClientSchema;

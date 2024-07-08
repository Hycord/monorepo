import { ClientSchema } from "..";
import { ProjectPortfolio } from "./portfolio";
import { ProjectBackendApplication } from "./premier-studios-backend";
import {ProjectFrontendApplication} from "./premier-studios-frontend"
import { ProjectSuggestionsBot } from "./premier-studios-suggestions-bot";

export default {
  slug: "hycord",

  displayName: "Hycord",
  // quote: "Hey, I made everything you see here, and listed in my projects :)",

  twitter: "https://twitter.com/ignhycord",
  discord: "https://discord.gg/9f7WbbvPP7",
  github: "https://github.com/hycord",
  website: "https://masen.dev",
  projects: [ProjectPortfolio,ProjectFrontendApplication,ProjectSuggestionsBot,ProjectBackendApplication],
} as ClientSchema;

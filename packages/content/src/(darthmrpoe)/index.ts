import { ClientSchema } from "..";
import { ProjectFoldBot } from "./fold_bot";
import { ProjectHypixelStatsSpreadsheet } from "./hypixel_stats_spreadsheet";

export default {
  slug: "darthmrpoe",
  displayName: "DarthMrPoe",
  quote:
    "Hycord is a prety good developer. The bot that he makes is a solid bot that works 100% of the time. Along with his great customer service, he also has multiple payment methods making it extreamly convenient. Solid, 10/10.",
  discord: "https://discord.gg/sPxt33haV5",
  projects: [ProjectFoldBot, ProjectHypixelStatsSpreadsheet],
} as ClientSchema;

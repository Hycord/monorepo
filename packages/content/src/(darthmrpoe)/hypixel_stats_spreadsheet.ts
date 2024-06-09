import { ProjectSchema } from "..";

export const ProjectHypixelStatsSpreadsheet: ProjectSchema = {
  title: "Hypixel Stats Spreadsheet",
  slug: "hypixel_stats_spreadsheet",
  clientSlug: "darthmrpoe",
  public: true,
  date: new Date("2023-09-09"),

  images: ["0.png"],
  tags: ["Discord", "Docker"],

  description: "Spreadsheet of Hypixel guild member statistics.",
  endURL:
    "https://docs.google.com/spreadsheets/d/1esV8h2jpc2RiICgkfm4jk1ZfFhSbqAFhVS_OxE8BuwE/edit?usp=sharing",

  github: "https://github.com/hycord/fold",
  publicGithub: false,

  content: [
    { type: "title", content: "Hypixel Guild Stats Spreadsheet" },
    { type: "subtitle", content: "Project Overview" },
    {
      content:
        "Hypixel Guild Stats Spreadsheet is a custom script designed to fetch Hypixel Guild data. It's built on a tech stack comprising Node.js, TypeScript, and Docker. Although its codebase isn't public, the code operates for a public Discord server.",
    },
    { type: "gap" },
    {
      type: "table",
      content: [
        { key: "Language", value: "Typescript" },
        { key: "Platform", value: "Discord" },
        { key: "Backend", value: "Node.js" },
        { key: "Version Control", value: "Github" },
        { key: "Containerization", value: "Docker" },
        { key: "Deployment", value: "Self-Hosted" },
      ],
    },
    { type: "gap" },
    { type: "gap" },
    { type: "subtitle", content: "Key Features & Development Challenges" },
    {
      content:
        "Every 6 hours a script is automatically run to keep the sheet up to date.",
    },
  ],
};

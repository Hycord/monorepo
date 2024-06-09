import { ProjectSchema } from "..";

export const ProjectHabitatBot: ProjectSchema = {
  title: "Habitat Bot",
  slug: "habitat_bot",
  clientSlug: "fluffans",
  public: true,
  date: new Date("2023-06-23"),

  images: ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"],

  tags: ["Discord", "PostgreSQL", "Docker"],

  description: "Custom RPG bot for the Habitat Discord server.",
  endURL: "https://discord.gg/habitat",

  github: "https://github.com/hycord/gigibot",
  publicGithub: false,

  content: [
    {
      type: "title",
      content: "HABITAT ARCHEOLOGY: A Discord Bot Project Information Sheet",
    },
    { type: "subtitle", content: "Project Overview" },
    {
      content:
        "Habitat Archeology is a Discord Bot game revolved around the premise of players serving as archaeologists uncovering fossils and artifacts. It is built using Node.js and TypeScript and employs PostgreSQL for database management. The codebase is hosted on GitHub, and Docker aids in creating and managing the development-to-deployment environment.",
    },
    { type: "gap" },
    {
      type: "table",
      headers: ["Tech Stack"],
      content: [
        { key: "Language", value: "TypeScript" },
        { key: "Platform", value: "Discord" },
        { key: "Backend", value: "Node.js" },
        { key: "Database", value: "PostgreSQL" },
        { key: "Version Control", value: "GitHub" },
        { key: "Containerization", value: "Docker" },
        { key: "Deployment", value: "Self-Hosted" },
      ],
    },
    { type: "gap" },
    { type: "gap" },
    { type: "subtitle", content: "Project Features & Challenges" },
    {
      content:
        "The game mechanics involved regular database updates, handling operations like storing user data (artifacts found), maintaining a global cooldown for the /dig command, managing the distribution of rare/regular items, and updating the artifact images in the bot's embeds.",
    },
    { type: "gap" },
    {
      content:
        "The element of chance was vital to the gameplay. Every /dig command had to provide random feedback from a list of possibilities, ranging from rare artifacts, regular items to geodes with their valuable contents. Ensuring fairness of this random distribution required meticulous logic and equally well-crafted database queries.",
    },
    { type: "gap" },
    {
      content:
        "One significant challenge was timezone adaptation for the /dig command, which resets daily. To ensure impartiality for players worldwide, we settled on a universal reset time of midnight EST. This addressed the issue, providing a balanced gameplay experience across time zones.",
    },
    { type: "gap" },
    {
      content:
        "During the initial launch of Habitat Archeology, the bot encountered a few crashes. These were resolved promptly, adding stability to the bot's operation and serving as a stepping stone towards a more robust system for managing large user interactions effectively.",
    },
    { type: "gap" },
    { type: "gap" },
    { type: "subtitle", content: "Development Practices & Future Plans" },
    {
      content:
        "The development utilized Docker, ensuring a smooth, consistent environment transition from development to deployment phases. It's built to be self-hosted, empowering users to deploy the bot in their own environments with ease, thereby boosting reach and adaptability.",
    },
    { type: "gap" },
    {
      content:
        "The project follows sound version control practices using GitHub, ensuring code integrity and facilitating collaborative efforts.",
    },
    { type: "gap" },
    {
      content:
        "As the game continues to evolve, future additions will continue enhancing the gameplay experience while handling scale efficiently. This ongoing development journey promises continual learning, challenges, and solutions - a testament to consistent progress in development skills and practices.",
    },
  ],
};

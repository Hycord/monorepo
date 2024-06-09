import { ProjectSchema } from "..";

export const ProjectFoldBot: ProjectSchema = {
  title: "FOLD Bot",
  clientSlug: "darthmrpoe",
  slug: "fold_bot",
  public: true,
  date: new Date("2023-08-26"),

  tags: ["Discord", "Docker"],

  images: ["0.png", "1.png", "2.png"],

  description: "Custom Hypixel Guild bot for the FOLD guild.",
  endURL: "https://discord.gg/sPxt33haV5",

  github: "https://github.com/hycord/fold",
  publicGithub: false,

  content: [
    { type: "title", content: "FOLD Bot: A Custom Hypixel Guild Discord Bot" },
    { type: "subtitle", content: "Project Overview" },
    {
      content:
        "FOLD Bot is a custom Discord bot designed for the FOLD Hypixel Guild. It's built on a tech stack comprising Node.js, TypeScript, MySQL, and Docker. Although its codebase isn't public, the bot operates in an open-source Discord server.",
    },
    { type: "gap" },
    {
      type: "table",
      headers: ["Tech Stack"],
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
        "FOLD Bot is a custom Discord bot designed for the FOLD Hypixel Guild. It's built on a tech stack comprising Node.js, TypeScript, MySQL, and Docker. Although its codebase isn't public, the bot operates in an open-source Discord server.",
    },
    { type: "gap" },
    {
      content:
        "Throughout the development, different versions improved the reliability and efficiency of command handling. Commands are dynamically loaded from a list, ensuring flexibility in functionality. Error handling has been meticulously implemented to avoid crashes, making the bot more robust.",
    },
    { type: "gap" },
    {
      content:
        "The bot's innovative feature is the ability for users to interact with Minecraft players directly from Discord. This included the creation of a custom socket server and a custom Minecraft packet parser. Although this component presented significant challenges, it added a unique interactive element to the bot's feature set.",
    },
    { type: "gap" },
    {
      content:
        "The project follows a disciplined version control practice using GitHub. Its Docker-centered environment eases the transition from development to deployment, making the bot self-hostable.",
    },
    { type: "gap" },
    {
      content:
        "Future updates should continually refine existing features, improve performance, and add more interactive elements to the bot. As the bot's feature set expands, so too does the opportunity for learning and tackling new development challenges.",
    },
    {
      content: [
        "Visit the ",
        {
          type: "url",
          content: "Discord",
          href: "https://discord.gg/sPxt33haV5",
        },
        " to interact with the bot firsthand.",
      ],
    },
  ],
};

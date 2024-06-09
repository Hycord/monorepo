import { ProjectSchema } from "..";

export const ProjectLOSEBot: ProjectSchema = {
  title: "LOSE Bot",
  slug: "lose_bot",
  clientSlug: "docn",
  public: true,
  date: new Date("2023-08-26"),

  images: ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"],
  tags: ["Discord", "MySQL", "Docker"],

  description: "Custom Hypixel Guild bot for Legion of Super Evil ",
  endURL: "https://discord.gg/cCyUAXz9xw",

  github: "https://github.com/hycord/carlton",
  publicGithub: false,

  content: [
    { type: "title", content: "LOSE Bot: A Custom Hypixel Guild Discord Bot" },
    { type: "subtitle", content: "Project Overview" },
    {
      content:
        "LOSE Bot is a custom Discord bot designed for the Legion of Super Evil Hypixel Guild. It facilitates communication between in-game players and users in the Discord server.",
    },
    { type: "gap" },

    // { type: "subtitle", content: "Tech Stack" },
    {
      type: "table",
      headers: ["Tech Stack"],
      content: [
        { key: "Language", value: "Typescript" },
        { key: "Platform", value: "Discord" },
        { key: "Database", value: "MySQL (Prisma)" },
        { key: "Backend", value: "Node.js" },
        { key: "Version Control", value: "GitHub" },
        { key: "Containerization", value: "Docker" },
        { key: "Deployment", value: "Self-Hosted" },
      ],
    },
    { type: "gap" },
    { type: "gap" },

    { type: "subtitle", content: "Key Features & Development Challenges" },
    {
      content:
        "Throughout the development, different versions improved the reliability and efficiency of command handling. Commands are dynamically loaded from a list, ensuring flexibility in functionality. Error handling has been meticulously implemented to avoid crashes, making the bot more robust.",
    },
    { type: "gap" },
    {
      content:
        "A challenging feature was facilitating user statistics collection for debugging and improving the bot. This includes Minecraft and Discord message counts, and Discord command usage count. The bot also deals with the privacy aspect, allowing users to opt out of the statistics collection.",
    },
    { type: "gap" },
    {
      content:
        "The bot includes a Hypixel linking feature that underwent a rigorous beta testing phase to ensure its robustness. This feature has seen several iterations to improve its efficiency and user experience.",
    },
    { type: "gap" },
    {
      content:
        "One innovative feature is the ability for users to interact with Minecraft players directly from Discord. This included the creation of a custom socket server and a custom Minecraft packet parser. Although this component presented significant challenges, it added a unique interactive element to the bot's feature set.",
    },
    { type: "gap" },
    { type: "subtitle", content: "Development Practices & Future Updates" },
    {
      content:
        "The project follows a disciplined version control practice using GitHub. Its Docker-centered environment eases the transition from development to deployment, making the bot self-hostable.",
    },
    {
      content:
        "Future updates should continually refine existing features, improve performance, and add more interactive elements to the bot. As the bot's feature set expands, so too does the opportunity for learning and tackling new development challenges.",
    },
    {
      content: [
        "Visit the ",
        {
          type: "url",
          href: "https://discord.gg/cCyUAXz9xw",
          content: "Discord",
        },
        " to interact with the bot firsthand.",
      ],
    },
  ],
};

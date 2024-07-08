import { ProjectSchema } from "$/schemas/ProjectSchema";

export const ProjectSuggestionsBot: ProjectSchema = {
  title: "Premier Studios: Discord Freelancer Application",
  slug: "premier-studios-suggestions-bot",
  clientSlug: "hycord",
  description: "A bot to create and manage suggestions",
  date: new Date("2024-06-16"),
  images: ["denied.png", "implemented.png"],
  public: true,
  content: [
    {
      type: "subtitle",
      content: "A bot to create and manage suggestions."
    },
    {
      type: "title",
      content: "Information"
    },
    {
      type: "list",
      content: [
        "Bot Name: Suggestions",
        "Description: A bot to create and manage suggestions"
      ]
    },
    {
      type: "title",
      content: "Requirements"
    },
    {
      type: "subtitle",
      content: "General Requirements"
    },
    {
      type: "list",
      content: [
        "Must use slash commands, buttons, and modals"
      ]
    },
    {
      type: "subtitle",
      content: "Commands"
    },
    {
      type: "table",
      headers: ["Name", "Syntax ([] = Optional, <> = Required)", "Description"],
      content: [
        {
          key: "suggest",
          value: "/suggest | Opens a modal where the user can input the suggestion to submit. Every suggestion has an id that starts from 0 and can be used to approve or deny it. It must be stored in a database and it should be different from the message id"
        },
        {
          key: "suggestion accept",
          value: "/suggestion accept <id> | Changes the embed color of the suggestion to green (#CAFFBF) and changes the footer to `Approved by <Username>`."
        },
        {
          key: "suggestion deny",
          value: "/suggestion deny <id> | Changes the embed color of the suggestion to red (#FFADAD) and changes the footer to `Denied by <Username>`."
        },
        {
          key: "suggestion implement",
          value: "/suggestion implement <id> | Changes the embed color of the suggestion to yellow (#FDFFB6) and changes the footer to `Implemented`. The suggestion must be accepted before it can be marked as implemented."
        }
      ]
    },
    {
      type: "title",
      content: "Development Overview"
    },
    {
      type: "subtitle",
      content: "Project Structure"
    },
    {
      type: "list",
      content: [
        ".github/\n└── workflows/ `Defines files related to building the project automatically on github`",
        "prisma/\n└── schema.prisma `Defines Database Schema`",
        "src/ `Contains all source files`\n├── index.ts `Starts the bot, and assigns all event listeners`\n├── commands/ `Holds all command files`\n├── lib/ `Holds all class definitions`\n│ └── Discord/ `Wrapper classes over discord.js`\n└── util/ `Holds all utility methods`\n│ └── interactionHandlers/ `Holds all handler functions for interactions`",
        ".env `Holds environment variable definitions for local development`",
        "Dockerfile `Contains instructions on building the project via Docker`"
      ]
    },
    {
      type: "subtitle",
      content: "Environment"
    },
    {
      type: "subtitle",
      content: "Database Setup (local)"
    },
    {
      type: "list",
      content: [
        "If you are trying to develop this project locally it does not make sense to use a production database to test with.",
        "In order to properly host a database, the recommended method is using Docker.",
        "This can be done via the following command: `docker run -d --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=secret mysql:5`"
      ]
    },
    {
      type: "separator"
    },
    {
      type: "list",
      content: [
        "Create a .env file in the root of the project with the following values set appropriately.",
        "When you use Docker, you can just populate docker environment variables using `-e <KEY>=<VALUE>` in the run command.",
        "`DATABASE_URL`: Either set to `mysql://root:secret@127.0.0.1/suggestionsbot` if you followed the \"Database Setup (local)\" step or your database string if hosted externally. **Must be MySQL**",
        "`DISCORD_TOKEN`: Set to the value you get from the discord developer page. Bot must be in the same guild as listed below",
        "`DISCORD_GUILD_ID`: This is the guild that will be used for registering commands.",
        "`DISCORD_CHANNEL_ID`: Channel where suggestion Embeds should be sent."
      ]
    },
    {
      type: "title",
      content: "Building"
    },
    {
      type: "list",
      content: [
        "There are 2 methods of building the project:",
        "1. with npm using `npm run build`",
        "2. with docker using `docker build . --network=\"host\" -t ss`"
      ]
    },
    {
      type: "title",
      content: "Starting"
    },
    {
      type: "list",
      content: [
        "1. You must run `npm run db` every time you update the db schema",
        "2. run `npm start` to start"
      ]
    }
  ],
  publicGithub: true,
  github: "https://github.com/Hycord/premierstudios-application-discord-bot/",
  tags: ["Discord", "Docker", "MySQL"],
  languages: ["Typescript"]
  };
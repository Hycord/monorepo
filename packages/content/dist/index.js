"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  clients: () => clients,
  projects: () => projects,
  slugToClient: () => slugToClient,
  slugToProject: () => slugToProject
});
module.exports = __toCommonJS(src_exports);

// src/(darthmrpoe)/fold_bot.ts
var ProjectFoldBot = {
  title: "FOLD Bot",
  clientSlug: "darthmrpoe",
  slug: "fold_bot",
  public: true,
  date: /* @__PURE__ */ new Date("2023-08-26"),
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
      content: "FOLD Bot is a custom Discord bot designed for the FOLD Hypixel Guild. It's built on a tech stack comprising Node.js, TypeScript, MySQL, and Docker. Although its codebase isn't public, the bot operates in an open-source Discord server."
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
        { key: "Deployment", value: "Self-Hosted" }
      ]
    },
    { type: "gap" },
    { type: "gap" },
    { type: "subtitle", content: "Key Features & Development Challenges" },
    {
      content: "FOLD Bot is a custom Discord bot designed for the FOLD Hypixel Guild. It's built on a tech stack comprising Node.js, TypeScript, MySQL, and Docker. Although its codebase isn't public, the bot operates in an open-source Discord server."
    },
    { type: "gap" },
    {
      content: "Throughout the development, different versions improved the reliability and efficiency of command handling. Commands are dynamically loaded from a list, ensuring flexibility in functionality. Error handling has been meticulously implemented to avoid crashes, making the bot more robust."
    },
    { type: "gap" },
    {
      content: "The bot's innovative feature is the ability for users to interact with Minecraft players directly from Discord. This included the creation of a custom socket server and a custom Minecraft packet parser. Although this component presented significant challenges, it added a unique interactive element to the bot's feature set."
    },
    { type: "gap" },
    {
      content: "The project follows a disciplined version control practice using GitHub. Its Docker-centered environment eases the transition from development to deployment, making the bot self-hostable."
    },
    { type: "gap" },
    {
      content: "Future updates should continually refine existing features, improve performance, and add more interactive elements to the bot. As the bot's feature set expands, so too does the opportunity for learning and tackling new development challenges."
    },
    {
      content: [
        "Visit the ",
        {
          type: "url",
          content: "Discord",
          href: "https://discord.gg/sPxt33haV5"
        },
        " to interact with the bot firsthand."
      ]
    }
  ]
};

// src/(darthmrpoe)/hypixel_stats_spreadsheet.ts
var ProjectHypixelStatsSpreadsheet = {
  title: "Hypixel Stats Spreadsheet",
  slug: "hypixel_stats_spreadsheet",
  clientSlug: "darthmrpoe",
  public: true,
  date: /* @__PURE__ */ new Date("2023-09-09"),
  images: ["0.png"],
  tags: ["Discord", "Docker"],
  description: "Spreadsheet of Hypixel guild member statistics.",
  endURL: "https://docs.google.com/spreadsheets/d/1esV8h2jpc2RiICgkfm4jk1ZfFhSbqAFhVS_OxE8BuwE/edit?usp=sharing",
  github: "https://github.com/hycord/fold",
  publicGithub: false,
  content: [
    { type: "title", content: "Hypixel Guild Stats Spreadsheet" },
    { type: "subtitle", content: "Project Overview" },
    {
      content: "Hypixel Guild Stats Spreadsheet is a custom script designed to fetch Hypixel Guild data. It's built on a tech stack comprising Node.js, TypeScript, and Docker. Although its codebase isn't public, the code operates for a public Discord server."
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
        { key: "Deployment", value: "Self-Hosted" }
      ]
    },
    { type: "gap" },
    { type: "gap" },
    { type: "subtitle", content: "Key Features & Development Challenges" },
    {
      content: "Every 6 hours a script is automatically run to keep the sheet up to date."
    }
  ]
};

// src/(darthmrpoe)/index.ts
var darthmrpoe_default = {
  slug: "darthmrpoe",
  displayName: "DarthMrPoe",
  quote: "Hycord is a prety good developer. The bot that he makes is a solid bot that works 100% of the time. Along with his great customer service, he also has multiple payment methods making it extreamly convenient. Solid, 10/10.",
  discord: "https://discord.gg/sPxt33haV5",
  projects: [ProjectFoldBot, ProjectHypixelStatsSpreadsheet]
};

// src/(docn)/lose_bot.ts
var ProjectLOSEBot = {
  title: "LOSE Bot",
  slug: "lose_bot",
  clientSlug: "docn",
  public: true,
  date: /* @__PURE__ */ new Date("2023-08-26"),
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
      content: "LOSE Bot is a custom Discord bot designed for the Legion of Super Evil Hypixel Guild. It facilitates communication between in-game players and users in the Discord server."
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
        { key: "Deployment", value: "Self-Hosted" }
      ]
    },
    { type: "gap" },
    { type: "gap" },
    { type: "subtitle", content: "Key Features & Development Challenges" },
    {
      content: "Throughout the development, different versions improved the reliability and efficiency of command handling. Commands are dynamically loaded from a list, ensuring flexibility in functionality. Error handling has been meticulously implemented to avoid crashes, making the bot more robust."
    },
    { type: "gap" },
    {
      content: "A challenging feature was facilitating user statistics collection for debugging and improving the bot. This includes Minecraft and Discord message counts, and Discord command usage count. The bot also deals with the privacy aspect, allowing users to opt out of the statistics collection."
    },
    { type: "gap" },
    {
      content: "The bot includes a Hypixel linking feature that underwent a rigorous beta testing phase to ensure its robustness. This feature has seen several iterations to improve its efficiency and user experience."
    },
    { type: "gap" },
    {
      content: "One innovative feature is the ability for users to interact with Minecraft players directly from Discord. This included the creation of a custom socket server and a custom Minecraft packet parser. Although this component presented significant challenges, it added a unique interactive element to the bot's feature set."
    },
    { type: "gap" },
    { type: "subtitle", content: "Development Practices & Future Updates" },
    {
      content: "The project follows a disciplined version control practice using GitHub. Its Docker-centered environment eases the transition from development to deployment, making the bot self-hostable."
    },
    {
      content: "Future updates should continually refine existing features, improve performance, and add more interactive elements to the bot. As the bot's feature set expands, so too does the opportunity for learning and tackling new development challenges."
    },
    {
      content: [
        "Visit the ",
        {
          type: "url",
          href: "https://discord.gg/cCyUAXz9xw",
          content: "Discord"
        },
        " to interact with the bot firsthand."
      ]
    }
  ]
};

// src/(docn)/index.ts
var docn_default = {
  slug: "docn",
  displayName: "DocN",
  quote: "A pretty darn good dev, tasks are completed fast and if there are any bugs that slide through testing they are fixed quickly. Willing to take on even mentally insane tasks for an equally insane person, I showed up with a 70k line database and for some reason he was excited about it.",
  discord: "https://discord.gg/cCyUAXz9xw",
  projects: [ProjectLOSEBot]
};

// src/(fluffans)/habitat_bot.ts
var ProjectHabitatBot = {
  title: "Habitat Bot",
  slug: "habitat_bot",
  clientSlug: "fluffans",
  public: true,
  date: /* @__PURE__ */ new Date("2023-06-23"),
  images: ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"],
  tags: ["Discord", "PostgreSQL", "Docker"],
  description: "Custom RPG bot for the Habitat Discord server.",
  endURL: "https://discord.gg/habitat",
  github: "https://github.com/hycord/gigibot",
  publicGithub: false,
  content: [
    {
      type: "title",
      content: "HABITAT ARCHEOLOGY: A Discord Bot Project Information Sheet"
    },
    { type: "subtitle", content: "Project Overview" },
    {
      content: "Habitat Archeology is a Discord Bot game revolved around the premise of players serving as archaeologists uncovering fossils and artifacts. It is built using Node.js and TypeScript and employs PostgreSQL for database management. The codebase is hosted on GitHub, and Docker aids in creating and managing the development-to-deployment environment."
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
        { key: "Deployment", value: "Self-Hosted" }
      ]
    },
    { type: "gap" },
    { type: "gap" },
    { type: "subtitle", content: "Project Features & Challenges" },
    {
      content: "The game mechanics involved regular database updates, handling operations like storing user data (artifacts found), maintaining a global cooldown for the /dig command, managing the distribution of rare/regular items, and updating the artifact images in the bot's embeds."
    },
    { type: "gap" },
    {
      content: "The element of chance was vital to the gameplay. Every /dig command had to provide random feedback from a list of possibilities, ranging from rare artifacts, regular items to geodes with their valuable contents. Ensuring fairness of this random distribution required meticulous logic and equally well-crafted database queries."
    },
    { type: "gap" },
    {
      content: "One significant challenge was timezone adaptation for the /dig command, which resets daily. To ensure impartiality for players worldwide, we settled on a universal reset time of midnight EST. This addressed the issue, providing a balanced gameplay experience across time zones."
    },
    { type: "gap" },
    {
      content: "During the initial launch of Habitat Archeology, the bot encountered a few crashes. These were resolved promptly, adding stability to the bot's operation and serving as a stepping stone towards a more robust system for managing large user interactions effectively."
    },
    { type: "gap" },
    { type: "gap" },
    { type: "subtitle", content: "Development Practices & Future Plans" },
    {
      content: "The development utilized Docker, ensuring a smooth, consistent environment transition from development to deployment phases. It's built to be self-hosted, empowering users to deploy the bot in their own environments with ease, thereby boosting reach and adaptability."
    },
    { type: "gap" },
    {
      content: "The project follows sound version control practices using GitHub, ensuring code integrity and facilitating collaborative efforts."
    },
    { type: "gap" },
    {
      content: "As the game continues to evolve, future additions will continue enhancing the gameplay experience while handling scale efficiently. This ongoing development journey promises continual learning, challenges, and solutions - a testament to consistent progress in development skills and practices."
    }
  ]
};

// src/(fluffans)/index.ts
var fluffans_default = {
  slug: "fluffans",
  displayName: "Fluffans",
  quote: "Overall I'm pleased with the work he did for me! I know what I was asking for was surely not easy, and a lot of it had to be uniquely created for the server specifically. Hycord was very good about keeping me updated throughout the process, and responded quickly to any questions or changes I wanted made. When the bot launched initially, there were a couple hiccups but Hycord immediately got to work fixing it as fast as possible, and I could tell he is very dedicated to doing his best to make everything work as smoothly as possible. Now that it's all been completed, I can definitely say that it came out exactly as I had in mind! I look forward to hopefully working with him again in the future.",
  discord: "https://discord.gg/habitat",
  twitter: "https://x.com/fluffans",
  projects: [ProjectHabitatBot]
};

// src/(hycord)/portfolio.ts
var ProjectPortfolio = {
  title: "Portfolio",
  slug: "portfolio",
  clientSlug: "hycord",
  public: true,
  date: /* @__PURE__ */ new Date("2023-06-23"),
  tags: ["React", "Next.js", "Vercel", "Docker"],
  description: "My personal portfolio website.",
  endURL: "https://hycord.is-a.dev",
  github: "https://github.com/hycord/portfolio",
  content: [
    { type: "title", content: "Portfolio Overview" },
    {
      content: "My portfolio, hosted at https://masen.dev, serves as a showcase for my web development work. It's a testament to my development chops, chronicling my journey of crafting resilient, user-friendly websites for diverse clients, and demonstrating my growing mastery of various platforms, languages, and tools. Although the portfolio is presently a work in progress, its pages tell the story of challenges encountered and overcome, and the process of turning clients' visions into digital reality."
    },
    { type: "gap" },
    { type: "subtitle", content: "Portfolio Features" },
    {
      content: "Having multiple projects under my wing, this React-based portfolio offers visitors an engaging, intuitive experience. The site employs Next.js for server-side rendering, which enhances the website's performance and SEO gains. Each project has its dedicated page detailing its nature, challenges resolved, core features, and crucial learnings."
    },
    { type: "subtitle", content: "Development and Deployment" },
    {
      content: "The languages and tools I used intended to build an efficient, reliable architecture. The portfolio is coded in TypeScript, offering static typing and enhancing code quality and understandability. I leverage GitHub for version control, hosting my growing codebase and providing open access to my work."
    },
    {
      content: "Additionally, I use Docker for creating and managing containers, ensuring a smooth, consistent environment across all stages of development, whether it be on my local machine or on any deployment service."
    },
    {
      content: "The website's deployment utilizes Vercel. Being a fast, secure platform, Vercel allows me to effortlessly deploy, run, and scale the portfolio application, presenting an edge over numerous conventional hosting platforms."
    },
    { type: "subtitle", content: "Future Plans" },
    {
      content: "I'm currently augmenting the portfolio with more of my recent projects, improving the detailing, and continuously refining the user interface for better navigation. I am committed to making the portfolio a comprehensive reflection of my capabilities and growth as a web developer."
    },
    {
      content: "Visit my in-progress portfolio website, [here](https://masen.dev), to see a dynamic document of my web development journey. And check back often! With an expanding list of projects and continuous updates, there's always something new to discover."
    }
  ]
};

// src/(hycord)/index.ts
var hycord_default = {
  slug: "hycord",
  displayName: "Hycord",
  // quote: "Hey, I made everything you see here, and listed in my projects :)",
  twitter: "https://twitter.com/ignhycord",
  discord: "https://discord.gg/9f7WbbvPP7",
  github: "https://github.com/hycord",
  website: "https://masen.dev",
  projects: [ProjectPortfolio]
};

// src/(mangofx)/spiciest_bot.ts
var ProjectSpiciestBot = {
  title: "Spiciest Bot",
  slug: "spiciest_bot",
  clientSlug: "mangofx",
  public: true,
  date: /* @__PURE__ */ new Date("2023-03-26"),
  images: ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"],
  tags: ["Discord", "MySQL", "Docker"],
  description: "Custom Hypixel Guild bot for the Spiciest guild.",
  endURL: "https://discord.gg/hmtP6NjRQC",
  github: "https://github.com/hycord/spiciest",
  publicGithub: false,
  content: [
    {
      type: "title",
      content: "Spiciest Bot: A Custom Hypixel Guild Discord Bot"
    },
    { type: "subtitle", content: "Project Overview" },
    {
      content: "Spiciest Bot is a custom Discord bot designed for the Spiciest Hypixel Guild. It's built on a tech stack comprising Node.js, TypeScript, MySQL, and Docker. Although its codebase isn't public, the bot operates in an open-source Discord server."
    },
    { type: "subtitle", content: "Tech Stack" },
    {
      type: "table",
      headers: ["Tech Stack"],
      content: [
        { key: "Language", value: "TypeScript" },
        { key: "Platform", value: "Discord" },
        { key: "Database", value: "MySQL (Prisma)" },
        { key: "Backend", value: "Node.js" },
        { key: "Version Control", value: "GitHub" },
        { key: "Containerization", value: "Docker" },
        { key: "Deployment", value: "Self-Hosted" }
      ]
    },
    { type: "subtitle", content: "Key Features & Development Challenges" },
    {
      content: "Throughout the development, different versions improved the reliability and efficiency of command handling. Commands are dynamically loaded from a list, ensuring flexibility in functionality. Error handling has been meticulously implemented to avoid crashes, making the bot more robust."
    },
    {
      content: "A challenging feature was facilitating user statistics collection for debugging and improving the bot. This includes Minecraft and Discord message counts, and Discord command usage count. The bot also deals with the privacy aspect, allowing users to opt out of the statistics collection."
    },
    {
      content: "The bot includes a Hypixel linking feature that underwent a rigorous beta testing phase to ensure its robustness. This feature has seen several iterations to improve its efficiency and user experience."
    },
    {
      content: "Users can earn badges and points for their activity, encouraging engagement. Balancing the leveling mechanism represented a significant challenge, resolved via a custom formula similar to that of the popular Mee6 bot."
    },
    {
      content: "One innovative feature is the ability for users to interact with Minecraft players directly from Discord. This included the creation of a custom socket server and a custom Minecraft packet parser. Although this component presented significant challenges, it added a unique interactive element to the bot's feature set."
    },
    { type: "subtitle", content: "Development Practices & Future Updates" },
    {
      content: "The project follows a disciplined version control practice using GitHub. Its Docker-centered environment eases the transition from development to deployment, making the bot self-hostable."
    },
    {
      content: "Future updates should continually refine existing features, improve performance, and add more interactive elements to the bot. As the bot's feature set expands, so too does the opportunity for learning and tackling new development challenges."
    },
    {
      content: [
        "Visit the ",
        {
          type: "url",
          content: "Discord",
          href: "https://discord.gg/hmtP6NjRQC"
        },
        " to interact with the bot firsthand."
      ]
    }
  ]
};

// src/(mangofx)/index.ts
var mangofx_default = {
  slug: "mangofx",
  displayName: "MangoFX",
  quote: "I had an extraordinary time working with Hycord. He's highly detailed, dedicated to the work assigned, and completes it before deadlines. He's also a great person to talk to! I strongly recommend them.",
  discord: "https://discord.gg/hmtP6NjRQC",
  website: "https://solo.to/mangofx",
  projects: [ProjectSpiciestBot]
};

// src/(qubistic)/index.ts
var qubistic_default = {
  slug: "qubistic",
  displayName: "Qubistic",
  quote: "Hycord is a very helpful and pleasant person to work with. He completed the project tasks I assigned to him with great effort.",
  twitter: "https://twitter.com/ignhycord",
  discord: "https://discord.gg/9f7WbbvPP7",
  github: "https://github.com/hycord",
  website: "https://masen.dev"
};

// src/(kcfd)/kcfd_website.ts
var ProjectKCFDWebsite = {
  title: "KCFD Website",
  slug: "kcfd_website",
  clientSlug: "kcfd",
  public: true,
  date: /* @__PURE__ */ new Date("2023-05-20"),
  images: ["0.jpeg", "1.jpeg", "2.jpeg"],
  tags: ["Local"],
  description: "Custom website for my local fire department.",
  endURL: "https://kirklandfire.com",
  content: [
    { type: "url", content: "Live Site", href: "https://kirklandfire.com" },
    { type: "title", content: "Project Overview" },
    {
      content: "I developed a custom website for my local fire department, Kirkland Community Fire District (KCFD), using Google Sites to honor the firefighters/EMTs' service and foster community engagement. Google Sites was the platform of choice for its promised robustness and easy maintenance, ensuring the website's sustainability."
    },
    { type: "subtitle", content: "Website Features" },
    {
      content: "Key to the website is a tribute to local fallen firefighters/EMTs, differentiated by a unique background color. Together with active duty members, we honor their service by showcasing their profiles and years of service."
    },
    {
      content: "The website offers a dynamic image gallery, documenting the fire department in action. It captures moments and sparks local pride, serving as a visual link between the department and the community."
    },
    {
      content: "The addition of an external Google Form for job applications simplifies recruitment. The process is streamlined, accessible, and encourages more people to consider roles within the department."
    },
    {
      content: "One of the standout features of the website is the integration of a live Google Calendar. It allows for real-time updates and displays the department's schedule, fostering transparency and keeping the community informed about upcoming events and activities."
    },
    { type: "subtitle", content: "Ensuring Robustness" },
    {
      content: "Relying on Google Sites for development ensures the website's robustness. The platform is user-friendly, uncomplicated, and adaptable even for non-technical personnel. The choice of this platform guarantees the website's sustainability and future maintainability."
    },
    { type: "subtitle", content: "Challenges and Learning" },
    {
      content: "Balancing respect for fallen firefighters/EMTs while maintaining the website's engaging outlook was a challenge. The solution involved using a distinct background color for their profiles to provide special recognition."
    },
    {
      content: "Integrating the external Google Form for job applications was a technical aspect that required seamless incorporation. Leveraging Google Form's capabilities, we designed a simple, streamlined job application process."
    },
    { type: "subtitle", content: "Future Endeavors" },
    {
      content: "Although an image gallery is already in place, there are plans to expand it once more photographs become available. A more diverse collection of images will help to better relay the fire department's community involvement and spirit."
    },
    {
      content: "Further improvements will include the addition of a news update section. The department can share timely news and events directly through the website, boosting two-way communication with the community."
    },
    {
      content: "Overall, the KCFD website project was a fulfilling opportunity to contribute to my community digitally and an enriching experience in terms of developing user-engaging, service-oriented websites."
    }
  ]
};

// src/(kcfd)/index.ts
var kcfd_default = {
  slug: "kcfd",
  displayName: "Kirkland Community Fire District",
  website: "https://kirklandfire.com",
  projects: [ProjectKCFDWebsite]
};

// src/index.ts
function projectWithImages(project) {
  return {
    project,
    images: (project.images ?? []).map(
      (imageSlug) => `/clients/${project.clientSlug}/${project.slug}/${imageSlug}`
    )
  };
}
var clients = [
  darthmrpoe_default,
  docn_default,
  fluffans_default,
  hycord_default,
  mangofx_default,
  qubistic_default,
  kcfd_default
];
var projects = [
  ProjectKCFDWebsite,
  ProjectHabitatBot,
  ProjectLOSEBot,
  ProjectFoldBot,
  ProjectHypixelStatsSpreadsheet,
  ProjectSpiciestBot,
  ProjectPortfolio
].map(projectWithImages);
function slugToClient(slug) {
  const client = clients.find((c) => c.slug == slug);
  let projects2 = {};
  if (client) {
    for (const project of client.projects) {
      projects2[project.slug] = (project.images ?? []).map(
        (imageSlug) => `/client/${project.clientSlug}/${project.slug}/${imageSlug}`
      );
    }
  }
  return client ? {
    client,
    images: {
      icon: `/clients/${client.slug}/icon.png`,
      projects: projects2
    }
  } : void 0;
}
function slugToProject(clientSlug, projectSlug) {
  const c = slugToClient(clientSlug);
  if (!c)
    return void 0;
  const { client, images } = c;
  const project = client.projects.find(
    (project2) => project2.slug === projectSlug
  );
  if (!project)
    return void 0;
  return {
    project,
    client: c,
    images: (project.images ?? []).map(
      (imageSlug) => `/clients/${project.clientSlug}/${project.slug}/${imageSlug}`
    )
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  clients,
  projects,
  slugToClient,
  slugToProject
});

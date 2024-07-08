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
  images: ["boids.png", "contact.png"],
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

// src/(hycord)/premier-studios-backend.ts
var ProjectBackendApplication = {
  title: "Premier Studios Backend Application",
  slug: "premier-studios-backend",
  clientSlug: "hycord",
  description: "A RESTful API for a simple task management system",
  endURL: "https://github.com/hycord/premierstudios-application-backend",
  date: /* @__PURE__ */ new Date("2024-06-28"),
  public: true,
  images: ["swagger.png"],
  content: [
    {
      type: "subtitle",
      content: "a RESTful API for a simple task management system"
    },
    {
      type: "title",
      content: "Tech Stack"
    },
    {
      type: "list",
      content: [
        "Language - Typescript",
        "Database - MariaDB",
        "Database ORM - Prisma",
        "Development/Deployment - Docker",
        "Version Control - Git via https://github.com/hycord/premierstudios-application-backend"
      ]
    },
    {
      type: "title",
      content: "Core Functionality"
    },
    {
      type: "list",
      content: [
        "User Authentication",
        "Registration",
        "Login",
        "Logout",
        "Task Management",
        "Create",
        "Read",
        "Update",
        "Delete",
        "Must support linking User -> Task in a one-to-many relationship"
      ]
    },
    {
      type: "title",
      content: "Required Endpoints"
    },
    {
      type: "table",
      headers: ["METHOD", "PATH"],
      content: [
        { key: "POST", value: "/auth/register" },
        { key: "POST", value: "/auth/login" },
        { key: "POST", value: "/auth/logout" },
        { key: "POST", value: "/tasks" },
        { key: "PUT", value: "/tasks/:id" },
        { key: "DELETE", value: "/tasks/:id" },
        { key: "GET", value: "/tasks" },
        { key: "GET", value: "/tasks/:id" },
        { key: "GET", value: "/users" },
        { key: "GET", value: "/users/:id/tasks" }
      ]
    },
    {
      type: "title",
      content: "Required Data Models"
    },
    {
      type: "subtitle",
      content: "User"
    },
    {
      type: "list",
      content: [
        "id",
        "username",
        "email",
        "password (Hashed) `This is handled automatically via /src/utils/database.ts`"
      ]
    },
    {
      type: "subtitle",
      content: "Task"
    },
    {
      type: "list",
      content: [
        "id",
        "title",
        "description",
        "status",
        "created_at",
        "updated_at",
        "user_id (assigned to)"
      ]
    },
    {
      type: "title",
      content: "Setup Instructions"
    },
    {
      type: "subtitle",
      content: "Local Development"
    },
    {
      type: "list",
      content: [
        "Have the LTS Node.js version available",
        "Have docker available (if using)",
        "Create a MariaDB server that you have access to. Doesn't matter where or how just make sure you can push to a specified db",
        "Copy .env.example -> .env and fill in the values as needed (Please replace the JWT secret!)",
        "run `npm install`",
        "run `npm run init`",
        "run `npm run dev` and you will see messages in the console instructing you as to the port you have selected. (Go https://localhost:3000/api-docs to view API docs once the project is running locally)"
      ]
    },
    {
      type: "subtitle",
      content: "Docker Deployment"
    },
    {
      type: "list",
      content: [
        `To deploy the project locally with docker you will still need to follow steps 1-2 of "Local Development" however you should just be able to type "docker build . -t backend" to build the project and "docker run backend" to run it once you've configured your database settings appropriately.`,
        'You can also use "docker compose up" to start both redis and mariadb locally then "npm run build && npm run start" or "npm run dev" after configuring environment variables'
      ]
    },
    {
      type: "title",
      content: "API Documentation"
    },
    {
      type: "subtitle",
      content: "Full API documentation is available via swagger. Wherever you can reach the API you can view the docs under <host>/api-docs where the swagger interface will show up"
    },
    {
      type: "title",
      content: "Design Decisions"
    },
    {
      type: "list",
      content: [
        "Although there were many options for each of the tools I chose to use when completing this project I have a reason for using each of them, although that's not to say they don't come with their own set of challenges.",
        "One of the early challenges I ran into was actually with getting Swagger to run properly, as I had never used swagger before. I had to scaffold out the project as well as learn Swagger notation at the same time.",
        "One of my most elegant solutions to a problem actually has to do with the hashing of passwords when placing them into the database. Instead of having a shared method which I call prior to passing my data into the database, I actually extended the base Prisma client to inject the hashing code before the data is sent to the database allowing me to pass raw passwords to the database write calls and receive hashed passwords in the database from wherever I chose to write to the database from.",
        `> Small note: I place "return res.status(500).send();" at the end of most handler functions for 2 reasons:

1. Guaranteed catch all. If I forget something it won't just hang
2. Intellisense grays it out when there is no valid path to reach it so once it is grayed out I know I've covered all of the (type-based) edge cases.`
      ]
    },
    {
      type: "title",
      content: "Bonus Features"
    },
    {
      type: "subtitle",
      content: "Filtering"
    },
    {
      type: "list",
      content: [
        "Any text field (I.E. Username, Title, Description) can be used to filter and sort results.",
        "",
        "The following rules are applied:",
        "",
        '"The quick brown fox jumps over the lazy dog"',
        "",
        "Here's how the following queries would match that text:",
        "",
        "| Query | Match? | Description |",
        "|-------|--------|-------------|",
        "| `+fox +dog`       | Yes    | The text contains 'fox' and 'dog'                             |",
        "| `+dog +fox`       | Yes    | The text contains 'dog' and 'fox'                             |",
        "| `+dog -cat`       | Yes    | The text contains 'dog' but not 'cat'                         |",
        "| `-cat`            | No     | The minus operator cannot be used on its own  |",
        "| `fox dog`         | Yes    | The text contains 'fox' or 'dog'                              |",
        "| `quic*`           | Yes    | The text contains a word starting with 'quic'                 |",
        "| `quick fox @2`    | Yes    | 'fox' starts within a 2 word distance of 'quick'              |",
        "| `fox dog @2`      | No     | 'dog' does not start within a 2 word distance of 'fox'        |",
        `| "jumps over"    | Yes    | The text contains the whole phrase 'jumps over'               |`,
        "",
        "> Note: The `-` operator acts only to exclude rows that are otherwise matched by other search terms. Thus, a boolean-mode search that contains only terms preceded by `-` returns an empty result. It does not return \u201Call rows except those containing any of the excluded terms.\u201D",
        "",
        "We also support >, < and ~ operators for altering the ranking order of search results. As an example, consider the following two records:",
        "",
        '1. "The quick brown fox jumps over the lazy dog"',
        '2. "The quick brown fox jumps over the lazy cat"',
        "",
        "| Query | Result | Description |",
        "|-------|--------|-------------|",
        "| `fox ~cat`            | Return 1 first, then 2   | Return all records containing 'fox', but rank records containing 'cat' lower                            |",
        "| `fox (<cat >dog)`     | Return 1 first, then 2   | Return all records containing 'fox', but rank records containing 'cat' lower than rows containing 'dog' |"
      ]
    },
    {
      type: "subtitle",
      content: "Rate Limiting"
    },
    {
      type: "list",
      content: [
        "All routes have a rate limit of 30 requests/60 seconds; Redis handles all rate limits.",
        'The keys for rate limits are as follows:\n\n`rate-limit::{channel}::{client IP}`\n\nThe global rate limit falls under the "global" channel and is the first middleware that is applied.',
        'The helper "CreateRateLimit" can be used to apply other rate-limit channels as middleware.\n\nYou just call `app.use(CreateRateLimit(channel: string, rate: number, ttl: number))` to implement a rate limit.',
        "> Note: To show the extensibility of this system, the `POST /auth/login` route has a rate limit of 1 request per 600 seconds (10 minutes).\n> There is no functional reason for this, just to show the ease at which this can be implemented"
      ]
    }
  ],
  publicGithub: true,
  tags: ["Backend", "MariaDB", "Docker", "Prisma"],
  languages: ["Typescript"]
};

// src/(hycord)/premier-studios-frontend.ts
var ProjectFrontendApplication = {
  title: "Premier Studios: Frontend Freelancer Application",
  slug: "premier-studios-frontend",
  clientSlug: "hycord",
  description: "Frontend shop application for Premier Studios",
  endURL: "https://premierstudios-application-frontend.vercel.app/",
  images: ["cart.png", "modal.png"],
  date: /* @__PURE__ */ new Date("2024-07-08"),
  public: true,
  content: [
    {
      type: "subtitle",
      content: "a single-page e-commerce product page that displays a list of products, allows users to view details of each product, and add products to a shopping cart."
    },
    {
      type: "title",
      content: "Tech Stack"
    },
    {
      type: "list",
      content: [
        "Language - Typescript",
        "Version Control - Git via https://github.com/hycord/premierstudios-application-frontend"
      ]
    },
    {
      type: "title",
      content: "Core Functionality"
    },
    {
      type: "list",
      content: [
        "Product Listing:",
        "Display a list of all products with their image, name, price, and a brief description.",
        "Each product should have a 'View Details' button.",
        "Product Details Modal:",
        "Clicking 'View Details' should open a modal with detailed information about the product (image, full description, price).",
        "The modal should have an 'Add to Cart' button.",
        "Shopping Cart:",
        "Display a simple shopping cart on the right side of the page.",
        "The cart should show a list of added products with their name, price, and quantity.",
        "Display the total price of the items in the cart.",
        "Allow users to modify quantity and remove items from the cart."
      ]
    },
    {
      type: "title",
      content: "Setup Instructions"
    },
    {
      type: "subtitle",
      content: "Local Development"
    },
    {
      type: "list",
      content: [
        "Have the latest LTS Node.js version available",
        "run `npm install`",
        "run `npm run dev`"
      ]
    }
  ],
  publicGithub: true,
  github: "https://github.com/hycord/premierstudios-application-frontend",
  tags: ["Web", "React", "Next.js", "Local"],
  languages: ["Typescript"]
};

// src/(hycord)/premier-studios-suggestions-bot.ts
var ProjectSuggestionsBot = {
  title: "Premier Studios: Discord Freelancer Application",
  slug: "premier-studios-suggestions-bot",
  clientSlug: "hycord",
  description: "A bot to create and manage suggestions",
  date: /* @__PURE__ */ new Date("2024-06-16"),
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
        ".github/\n\u2514\u2500\u2500 workflows/ `Defines files related to building the project automatically on github`",
        "prisma/\n\u2514\u2500\u2500 schema.prisma `Defines Database Schema`",
        "src/ `Contains all source files`\n\u251C\u2500\u2500 index.ts `Starts the bot, and assigns all event listeners`\n\u251C\u2500\u2500 commands/ `Holds all command files`\n\u251C\u2500\u2500 lib/ `Holds all class definitions`\n\u2502 \u2514\u2500\u2500 Discord/ `Wrapper classes over discord.js`\n\u2514\u2500\u2500 util/ `Holds all utility methods`\n\u2502 \u2514\u2500\u2500 interactionHandlers/ `Holds all handler functions for interactions`",
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
        '`DATABASE_URL`: Either set to `mysql://root:secret@127.0.0.1/suggestionsbot` if you followed the "Database Setup (local)" step or your database string if hosted externally. **Must be MySQL**',
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
        '2. with docker using `docker build . --network="host" -t ss`'
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

// src/(hycord)/index.ts
var hycord_default = {
  slug: "hycord",
  displayName: "Hycord",
  // quote: "Hey, I made everything you see here, and listed in my projects :)",
  twitter: "https://twitter.com/ignhycord",
  discord: "https://discord.gg/9f7WbbvPP7",
  github: "https://github.com/hycord",
  website: "https://masen.dev",
  projects: [ProjectPortfolio, ProjectFrontendApplication, ProjectSuggestionsBot, ProjectBackendApplication]
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
  ProjectPortfolio,
  ProjectFrontendApplication,
  ProjectSuggestionsBot,
  ProjectBackendApplication
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
export {
  clients,
  projects,
  slugToClient,
  slugToProject
};

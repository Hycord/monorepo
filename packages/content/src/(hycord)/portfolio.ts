import { ProjectSchema } from "..";

export const ProjectPortfolio: ProjectSchema = {
  title: "Portfolio",
  slug: "portfolio",
  clientSlug: "hycord",
  public: true,
  date: new Date("2023-06-23"),

  tags: ["React", "Next.js", "Vercel", "Docker"],

  description: "My personal portfolio website.",
  endURL: "https://hycord.is-a.dev",

  github: "https://github.com/hycord/portfolio",

  content: [
    { type: "title", content: "Portfolio Overview" },
    {
      content:
        "My portfolio, hosted at https://masen.dev, serves as a showcase for my web development work. It's a testament to my development chops, chronicling my journey of crafting resilient, user-friendly websites for diverse clients, and demonstrating my growing mastery of various platforms, languages, and tools. Although the portfolio is presently a work in progress, its pages tell the story of challenges encountered and overcome, and the process of turning clients' visions into digital reality.",
    },
    { type: "gap" },
    { type: "subtitle", content: "Portfolio Features" },
    {
      content:
        "Having multiple projects under my wing, this React-based portfolio offers visitors an engaging, intuitive experience. The site employs Next.js for server-side rendering, which enhances the website's performance and SEO gains. Each project has its dedicated page detailing its nature, challenges resolved, core features, and crucial learnings.",
    },
    { type: "subtitle", content: "Development and Deployment" },
    {
      content:
        "The languages and tools I used intended to build an efficient, reliable architecture. The portfolio is coded in TypeScript, offering static typing and enhancing code quality and understandability. I leverage GitHub for version control, hosting my growing codebase and providing open access to my work.",
    },
    {
      content:
        "Additionally, I use Docker for creating and managing containers, ensuring a smooth, consistent environment across all stages of development, whether it be on my local machine or on any deployment service.",
    },
    {
      content:
        "The website's deployment utilizes Vercel. Being a fast, secure platform, Vercel allows me to effortlessly deploy, run, and scale the portfolio application, presenting an edge over numerous conventional hosting platforms.",
    },
    { type: "subtitle", content: "Future Plans" },
    {
      content:
        "I'm currently augmenting the portfolio with more of my recent projects, improving the detailing, and continuously refining the user interface for better navigation. I am committed to making the portfolio a comprehensive reflection of my capabilities and growth as a web developer.",
    },
    {
      content:
        "Visit my in-progress portfolio website, [here](https://masen.dev), to see a dynamic document of my web development journey. And check back often! With an expanding list of projects and continuous updates, there's always something new to discover.",
    },
  ],
};

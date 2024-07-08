import { ProjectSchema } from "$/schemas/ProjectSchema";

export const ProjectBackendApplication: ProjectSchema = {
    title: "Premier Studios Backend Application",
    slug: "premier-studios-backend",
    clientSlug: "hycord",
    description: "A RESTful API for a simple task management system",
    endURL: "https://github.com/hycord/premierstudios-application-backend",
    date: new Date("2024-06-28"),
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
                "To deploy the project locally with docker you will still need to follow steps 1-2 of \"Local Development\" however you should just be able to type \"docker build . -t backend\" to build the project and \"docker run backend\" to run it once you've configured your database settings appropriately.",
                "You can also use \"docker compose up\" to start both redis and mariadb locally then \"npm run build && npm run start\" or \"npm run dev\" after configuring environment variables"
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
                "> Small note: I place \"return res.status(500).send();\" at the end of most handler functions for 2 reasons:\n\n1. Guaranteed catch all. If I forget something it won't just hang\n2. Intellisense grays it out when there is no valid path to reach it so once it is grayed out I know I've covered all of the (type-based) edge cases."
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
                "\"The quick brown fox jumps over the lazy dog\"",
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
                "| \"jumps over\"    | Yes    | The text contains the whole phrase 'jumps over'               |",
                "",
                "> Note: The `-` operator acts only to exclude rows that are otherwise matched by other search terms. Thus, a boolean-mode search that contains only terms preceded by `-` returns an empty result. It does not return “all rows except those containing any of the excluded terms.”",
                "",
                "We also support >, < and ~ operators for altering the ranking order of search results. As an example, consider the following two records:",
                "",
                "1. \"The quick brown fox jumps over the lazy dog\"",
                "2. \"The quick brown fox jumps over the lazy cat\"",
                "",
                "| Query | Result | Description |",
                "|-------|--------|-------------|",
                "| `fox ~cat`            | Return 1 first, then 2   | Return all records containing 'fox', but rank records containing 'cat' lower                            |",
                "| `fox (<cat >dog)`     | Return 1 first, then 2   | Return all records containing 'fox', but rank records containing 'cat' lower than rows containing 'dog' |",





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
                "The keys for rate limits are as follows:\n\n`rate-limit::{channel}::{client IP}`\n\nThe global rate limit falls under the \"global\" channel and is the first middleware that is applied.",
                "The helper \"CreateRateLimit\" can be used to apply other rate-limit channels as middleware.\n\nYou just call `app.use(CreateRateLimit(channel: string, rate: number, ttl: number))` to implement a rate limit.",
                "> Note: To show the extensibility of this system, the `POST /auth/login` route has a rate limit of 1 request per 600 seconds (10 minutes).\n> There is no functional reason for this, just to show the ease at which this can be implemented"
            ]
        }
    ],
    publicGithub: true,
    tags: ["Backend", "MariaDB", "Docker", "Prisma",],
    languages: ["Typescript"]
};
type ClientSlug = "darthmrpoe" | "docn" | "fluffans" | "hycord" | "kcfd" | "mangofx" | "qubistic";

type LanguageSchema = "Typescript";
type TagSchema = "Discord" | "Web" | "Docker" | "MySQL" | "PostgreSQL" | "React" | "Next.js" | "Vercel" | "Local";
type Content = {
    type?: "title" | "subtitle";
    content: string | (string | Content)[];
} | {
    type: "list";
    content: string[];
} | {
    type: "table";
    content: {
        key: string;
        value?: string;
    }[];
    headers?: string[];
} | {
    type: "url";
    content: string | React.ReactNode;
    href: string;
} | {
    type: "separator";
} | {
    type: "gap";
};
type ProjectSchema = {
    title: string;
    slug: string;
    clientSlug: ClientSlug;
    date: Date;
    content: Content[];
    public: boolean;
    endURL?: string;
    publicGithub?: boolean;
    github?: string;
    description?: string;
    images?: string[];
    tags?: TagSchema[];
    languages?: LanguageSchema[];
};

type Socials = "twitter" | "discord" | "github" | "website";
type ClientSchema = {
    [id in Socials]?: string;
} & {
    slug: ClientSlug;
    displayName?: string;
    quote?: string;
    projects: Array<ProjectSchema>;
};

declare const clients: ClientSchema[];
declare const projects: {
    project: ProjectSchema;
    images: string[];
}[];
declare function slugToClient(slug: ClientSlug): {
    client: ClientSchema;
    images: {
        icon: string;
        projects: Record<string, string[]>;
    };
} | undefined;
declare function slugToProject<T extends ClientSlug>(clientSlug: T, projectSlug: string): {
    project: ProjectSchema;
    images: string[];
    client: {
        client: ClientSchema;
        images: {
            icon: string;
            projects: Record<string, string[]>;
        };
    };
} | undefined;

export { type ClientSchema, type ClientSlug, type Content, type LanguageSchema, type ProjectSchema, type Socials, type TagSchema, clients, projects, slugToClient, slugToProject };

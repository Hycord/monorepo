import { ClientSlug } from "./shared";

export type LanguageSchema = "Typescript";
export type TagSchema =
  | "Discord"
  | "Web"
  | "Docker"
  | "MySQL"
  | "PostgreSQL"
  | "React"
  | "Next.js"
  | "Vercel"
  | "Local";

export type Content =
  | {
      type?: "title" | "subtitle";
      content: string | (string | Content)[];
    }
  | {
      type: "list";
      content: string[];
    }
  | {
      type: "table";
      content: { key: string; value?: string }[];
      headers?: string[];
    }
  | {
      type: "url";
      content: string | React.ReactNode;
      href: string;
    }
  | { type: "separator" }
  | { type: "gap" };

export type ProjectSchema = {
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

import { ProjectSchema } from "./ProjectSchema";
import { ClientSlug } from "./shared";

export type Socials = "twitter" | "discord" | "github" | "website";

export type ClientSchema = {
  [id in Socials]?: string;
} & {
  slug: ClientSlug;

  displayName?: string;
  quote?: string;
  projects: Array<ProjectSchema>;
};

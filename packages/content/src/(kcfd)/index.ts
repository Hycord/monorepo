import { ClientSchema } from "..";
import { ProjectKCFDWebsite } from "./kcfd_website";

export default {
  slug: "kcfd",
  displayName: "Kirkland Community Fire District",

  website: "https://kirklandfire.com",
  projects: [ProjectKCFDWebsite],
} as ClientSchema;

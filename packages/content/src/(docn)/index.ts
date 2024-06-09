import { ClientSchema } from "..";
import { ProjectLOSEBot } from "./lose_bot";

export default {
  slug: "docn",
  displayName: "DocN",
  quote:
    "A pretty darn good dev, tasks are completed fast and if there are any bugs that slide through testing they are fixed quickly. Willing to take on even mentally insane tasks for an equally insane person, I showed up with a 70k line database and for some reason he was excited about it.",
  discord: "https://discord.gg/cCyUAXz9xw",
  projects: [ProjectLOSEBot],
} as ClientSchema;

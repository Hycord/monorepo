import { ClientSchema } from "./schemas/ClientSchema";
import { ProjectSchema } from "./schemas/ProjectSchema";
import { ClientSlug } from "./schemas/shared";

export * from "./schemas/ClientSchema";
export * from "./schemas/ProjectSchema";
export type { ClientSlug } from "./schemas/shared";

import darthmrpoe from "./(darthmrpoe)";
import docn from "./(docn)";
import fluffans from "./(fluffans)";
import hycord from "./(hycord)";
import mangofx from "./(mangofx)";
import qubistic from "./(qubistic)";
import kcfd from "./(kcfd)";
import { ProjectFoldBot } from "./(darthmrpoe)/fold_bot";
import { ProjectHabitatBot } from "./(fluffans)/habitat_bot";
import { ProjectHypixelStatsSpreadsheet } from "./(darthmrpoe)/hypixel_stats_spreadsheet";
import { ProjectKCFDWebsite } from "./(kcfd)/kcfd_website";
import { ProjectLOSEBot } from "./(docn)/lose_bot";
import { ProjectPortfolio } from "./(hycord)/portfolio";
import { ProjectSpiciestBot } from "./(mangofx)/spiciest_bot";

function projectWithImages(project: ProjectSchema): {
  project: ProjectSchema;
  images: string[];
} {
  return {
    project,
    images: (project.images ?? []).map(
      (imageSlug) =>
        `/clients/${project.clientSlug}/${project.slug}/${imageSlug}`
    ),
  };
}

export const clients: ClientSchema[] = [
  darthmrpoe,
  docn,
  fluffans,
  hycord,
  mangofx,
  qubistic,
  kcfd,
] as const;

export const projects: { project: ProjectSchema; images: string[] }[] = [
  ProjectKCFDWebsite,
  ProjectHabitatBot,
  ProjectLOSEBot,
  ProjectFoldBot,
  ProjectHypixelStatsSpreadsheet,
  ProjectSpiciestBot,
  ProjectPortfolio,
].map(projectWithImages);

export function slugToClient(slug: ClientSlug):
  | {
      client: ClientSchema;
      images: { icon: string; projects: Record<string, string[]> };
    }
  | undefined {
  const client = clients.find((c) => c.slug == slug);

  let projects: Record<string, string[]> = {};

  if (client) {
    for (const project of client.projects) {
      projects[project.slug] = (project.images ?? []).map(
        (imageSlug) =>
          `/client/${project.clientSlug}/${project.slug}/${imageSlug}`
      );
    }
  }

  return client
    ? {
        client,
        images: {
          icon: `/clients/${client.slug}/icon.png`,
          projects,
        },
      }
    : undefined;
}

export function slugToProject<T extends ClientSlug>(
  clientSlug: T,
  projectSlug: string
):
  | {
      project: ProjectSchema;
      images: string[];
      client: {
        client: ClientSchema;
        images: {
          icon: string;
          projects: Record<string, string[]>;
        };
      };
    }
  | undefined {
  const c = slugToClient(clientSlug);
  if (!c) return undefined;
  const { client, images } = c;
  const project = client.projects.find(
    (project) => project.slug === projectSlug
  );
  if (!project) return undefined;

  return {
    project,
    client: c,
    images: (project.images ?? []).map(
      (imageSlug) =>
        `/clients/${project.clientSlug}/${project.slug}/${imageSlug}`
    ),
  };
}

import { Project } from "../types/project";
import { vaeGanProject } from "./projects/vae-gan";
import { proteinFoldingProject } from "./projects/3d-protein-folding";

export const projects: Project[] = [vaeGanProject, proteinFoldingProject];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};

import { createProject } from "./project";

const projects = {};

const addProject = (projectName) => {
  const newProject = createProject(projectName);
  projects[newProject.name()] = newProject;
};

const getProject = (projectName) => {
  return projects[projectName];
};
const getProjects = () => {
  return projects;
};

const deleteProject = (projectName) => {
  delete projects[projectName];
}


export {
  addProject,
  getProjects,
  deleteProject,
  getProject,
};

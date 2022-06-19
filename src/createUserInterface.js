import {addProjectBtnEL, confirmProjectBtnEL, deleteProjectBtnEL} from "./createEventListiners";
import { getAddProjectBtn, getProjectFormsContainer, getProjectInput } from "./getDOMElements";
import { addProject, getProjects, deleteProject } from "./db";
import { addToProjectList } from "./createDOMElements";
const setupInterface = () => {
  addProjectBtnEL(addProjectBtnAction);
  confirmProjectBtnEL(confirmProjectBtnAction);
  initializeProject();
};

const initializeProject = () => {
  deleteProjectBtnEL(deleteProjectAction);
};
const addProjectBtnAction = (addProjectBtnElement) => {
  const addProjectBtn = addProjectBtnElement;
  const projectForm = getProjectFormsContainer();

  addProjectBtn.style = 'display: none';
  projectForm.style = 'display: flex';
};

const confirmProjectBtnAction = (confirmProjectBtnElement) => {
  const projectForm = getProjectFormsContainer();
  const addProjectBtn = getAddProjectBtn();
  const projectInputField = getProjectInput();

  projectForm.style = 'display: none';
  addProjectBtn.style = 'display: flex';

  addProject(projectInputField.value);
  addToProjectList(projectInputField.value);
  initializeProject();
  getProjects();
};

const deleteProjectAction = (deleteBtn) => {
  const projectItem = deleteBtn.parentElement;
  const projectName = deleteBtn.previousElementSibling;
  deleteProject(projectName.innerText);
  projectItem.remove();
};

export { setupInterface }

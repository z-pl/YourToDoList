import { addProject, getProjects, deleteProject, getProject } from "./db";
import { addToProjectList, updateTaskList } from "./createDOMElements";

import {
  addProjectBtnEL,
  confirmProjectBtnEL,
  deleteProjectBtnEL,
  addTaskBtnEL,
  confirmTaskBtnEL,
  cancelTaskBtnEL,
  projectSelectEL,
  deleteTaskEL,
  toggleView,
} from "./createEventListiners";

import {
  getAddProjectBtn,
  getProjectFormsContainer,
  getProjectInput,
  getTaskAddContainer,
  getTaskFormsContainer,
  getTaskFormInput,
  getTaskFormAddBtn,
  getTaskFormCancelBtn,
} from "./getDOMElements";

const setupInterface = () => {
  addProjectBtnEL(addProjectBtnAction);
  confirmProjectBtnEL(confirmProjectBtnAction);
  addTaskBtnEL(addTaskBtnAction);
  confirmTaskBtnEL(confirmTaskBtnAction);
  cancelTaskBtnEL(cancelTaskBtnAction);
  initializeProject();
  initializeTask();
  toggleView();
};

const initializeProject = () => {
  deleteProjectBtnEL(deleteProjectAction);
  projectSelectEL(projectClickAction)
};

const initializeTask = () => {
  deleteTaskEL(deleteTaskAction);
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
  clickedProject.lastProject = projectInputField.value;
  initializeProject();
  getProjects();
};

const deleteProjectAction = (deleteBtn) => {
  const projectItem = deleteBtn.parentElement;
  const projectName = deleteBtn.previousElementSibling;
  deleteProject(projectName.innerText);
  projectItem.remove();
};

const addTaskBtnAction = () => {
  const addTaskContainer = getTaskAddContainer();
  const taskForm = getTaskFormsContainer();

  addTaskContainer.style = 'display: none';
  taskForm.style = 'display: flex';
};

const confirmTaskBtnAction = () => {
  const addTaskContainer = getTaskAddContainer();
  const taskForm = getTaskFormsContainer();
  const taskInput = getTaskFormInput();

  const currentProject = getProject(clickedProject.lastProject);
  console.log(currentProject);
  currentProject.addTask(taskInput.value);
  updateTaskList(currentProject.getTasks());
  initializeTask();
  addTaskContainer.style = 'display: block';
  taskForm.style = 'display: none';
};

const cancelTaskBtnAction = () => {
  const addTaskContainer = getTaskAddContainer();
  const taskForm = getTaskFormsContainer();

  addTaskContainer.style = 'display: block';
  taskForm.style = 'display: none';
};

const projectClickAction = (project) => {
  const projectName = project.querySelector('.project').innerText;
  clickedProject.lastProject = projectName;
  const currentProject = getProject(clickedProject.lastProject);
  console.log(currentProject.getTasks());

  try {
    updateTaskList(currentProject.getTasks());
  }catch(e) {
    console.log("please add some tasks");
  }
};

const deleteTaskAction = (deleteBtn) => {
  const taskItem = deleteBtn.parentElement;
  const taskName = deleteBtn.previousElementSibling;
  const currentProject = getProject(clickedProject.lastProject);

  //deleteProject(tName.innerText);
  currentProject.deleteTask(taskName.innerText);
  taskItem.remove();
};

const clickedProject = {
  lastProject: 'hi world',
  set project(value) { this.lastProject = value; },

  get project() { return this.lastPoject; },
};


export { setupInterface }

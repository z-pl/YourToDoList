import { add } from "date-fns";
import { getTasksContainer, getTaskList } from "./getDOMElements";
// --- OTHER FUNCTIONS ---
const addToContent = (type, element, parent) => {
  parent.insertAdjacentHTML(type, element);
};

// --- GET ELEMENET ---
const getProjectsContainerElement = () => {
  const element = document.querySelector('.projects');

  return element;
};

const getProjectList = () => {
  const element = document.querySelector('.project-list');

  return element;
};

// -- NAV ELEMENT --
const createNavElement = () => {
  const content = document.querySelector('.container');
  const navHeader =
  `<nav class = "nav-header">
    <h2 class = "title"><span class = "indent-color">Your</span>Todo List</h2>
    <div class = "date-header">DATE</div>
  </nav>`;

  addToContent('afterbegin', navHeader, content);
};

// -- PROJECT ELEMENT --
const createProjectHeader = () => {
  const projectHeader =
  `<h3 class = "project-header">Projects</h3>
  <div class = "divider"></div>`;

  addToContent('beforeend', projectHeader, getProjectsContainerElement());
};

const createProjectList = () => {
  const projectList =
  '<ul class = "project-list"></ul>';

  addToContent('beforeend', projectList, getProjectsContainerElement());
};

const createAddProjectBtn = () => {
  const addProjectBtn =
  `<div class = "addProject-container">
    <i class="fa-solid fa-plus addProject-btn"></i>
    <p class = "new-project-text">New Project</p>
  </div>`;

  addToContent('beforeend', addProjectBtn, getProjectsContainerElement());
};

const createProjectsForm = () => {
  const projectForm =
  `<div class = "projectForm-container" style = "display: none">
    <form action = "#" method = "get" class = "project-form">
      <input type = "text" id = "project-name-input" placeholder = "project name">
     <div class = "form-btns">
      <input type= "image" id = "confirm-projectBtn" src="img/circle-check-regular.svg"/>
      <input type= "image" id = "cancel-projectBtn" src="img/circle-xmark-regular.svg"/>
     </div>
    </form>
  </div>`;

  addToContent('beforeend', projectForm, getProjectsContainerElement());
};

// --- PROJECT CRUD ---
const addToProjectList = (projectName) => {
  const newProject =
  `<li class = "project-item">
    <p class = "project">${projectName}</p>
    <i class="fa-solid fa-trash-can delete-project"></i>
  </li>`;

  addToContent('beforeend', newProject, getProjectList());
};

// -- TASKS ---
const createTaskHeader = () => {
  const taskHeader =
  `<h3 class = "task-header">Tasks</h2>
  <div class = "divider"></div>`;

  addToContent('beforeend', taskHeader, getTasksContainer());
};

const createTaskList = () => {
  const taskList = '<ul class = "task-list"></ul>';

  addToContent('beforeend', taskList, getTasksContainer());
};

const addToTaskList = (taskName) => {
  const newTask =
  `<li class = "task-item">
    <p class = "task">${taskName}</p>
  </li>`;

  addToContent('beforeend', newTask, getTaskList());
};

const getSampleProjects = () => {
  addToProjectList('test 1');
  addToProjectList('test 2');
  addToProjectList('test 3');
};

const getSampleTasks = () => {
  addToTaskList('do some shopping');
  addToTaskList('hello worlddasd');
  addToTaskList('yooooo');
};

const createDOMLayout = () => {
  createNavElement();
  createProjectHeader();
  createProjectList();
  createAddProjectBtn();
  createProjectsForm();
  getSampleProjects();
  createTaskHeader();
  createTaskList();
  getSampleTasks();
};

export { createDOMLayout, addToProjectList };

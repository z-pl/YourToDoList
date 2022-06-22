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
    ${createToggleViewBtn()}
  </nav>`;

  addToContent('afterbegin', navHeader, content);
};

const createToggleViewBtn = () => {
  const toggleBtn =
  `<div class = "toggle-container">
  <input type = "checkbox" class = "checkbox" id = "checkbox">
  <label for = "checkbox" class = "label">
    <i class="fas fa-moon"></i>
    <i class="fas fa-sun"></i>
    <div class = "ball"></div>
  </label>
  </div>`;
  return toggleBtn;
}
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

const createTaskAddForm = () => {
  const taskForm =
  `<div class = "taskForm-container" style = "display: none">
  <form action = "#" method = "get" class = "task-form">
    <input type = "text" id = "task-name-input" placeholder = "task name">
   <div class = "form-btns">
    <input type= "image" id = "confirm-taskBtn" src="img/circle-check-regular.svg"/>
    <input type= "image" id = "cancel-taskBtn" src="img/circle-xmark-regular.svg"/>
      </div>
    </form>
  </div>`;
  addToContent('beforeend', taskForm, getTasksContainer());

};

const createAddTaskBtn = () => {
  const addTask =
  `<div class = "addTask-container">
    <i class="fa-solid fa-plus addTask-btn"></i>
  </div>`;

  addToContent('beforeend', addTask, getTasksContainer());
};

const addToTaskList = (taskName) => {
  const newTask =
  `<li class = "task-item">
    <p class = "task">${taskName}</p>
    <i class="fa-solid fa-xmark delete-task"></i>
  </li>`;

  addToContent('beforeend', newTask, getTaskList());
};

const updateTaskList = (newtaskList) => {
  const taskList = getTaskList();
  taskList.innerHTML = '';

  const taskNames = Object.keys(newtaskList);
  taskNames.forEach((taskName) => {
    addToTaskList(taskName);
  });
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
  createTaskAddForm();
  createAddTaskBtn();
  getSampleTasks();
};

export { createDOMLayout, addToProjectList, addToTaskList, updateTaskList };

import { add } from "date-fns";

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

// --- PROJECT CRUD ---
const addToProjectList = (projectName) => {
  const newProject =
  `<li class = "project-item">
    <p class = "project">${projectName}</p>
  </li>`;

  addToContent('beforeend', newProject, getProjectList());
};

const getSampleProjects = () => {
  addToProjectList('test 1');
  addToProjectList('test 2');
  addToProjectList('test 3');
};

const createDOMLayout = () => {
  createNavElement();
  createProjectHeader();
  createProjectList();
  getSampleProjects();
};

export { createDOMLayout, addToProjectList };

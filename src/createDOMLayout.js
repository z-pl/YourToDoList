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
}

// -- NAV ELEMENT --
const createNavElement = () => {
  const content = document.querySelector('.container');
  const navHeader =
  `<nav class = "nav-header">
    <h2 class = "title">Todo List</h2>
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
  '<div class = "project-list"></div';

  addToContent('beforeend', projectList, getProjectsContainerElement());
};

const addToProjectList = (projectName) => {
  const newProject =
  `<div class = "project-item">
    <p class = "project">${projectName}</p>
  </div>`;

  addToContent('beforeend', newProject, getProjectList());
};



const createDOMLayout = () => {
  createNavElement();
  createProjectHeader();
  createProjectList();
};

export { createDOMLayout }

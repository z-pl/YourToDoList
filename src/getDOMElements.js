const getAddProjectBtn = () => {
  const addProjectBtn = document.querySelector('.addProject-container');
  return addProjectBtn;
};

const getConfirmProjectBtn = () => {
  const confirmBtn = document.querySelector('#confirm-projectBtn');
  return confirmBtn;
};

const getCancelProjectBtn = () => {
  const cancelBtn = document.querySelector('#cancel-projectBtn');
  return cancelBtn;
};

const getProjectFormsContainer = () => {
  const formContainer = document.querySelector('.projectForm-container');
  return formContainer;
};

const getProjectInput = () => {
  const inputField = document.querySelector('#project-name-input');
  return inputField;
};

const getDeleteProjectBtns = () => {
  const deleteBtns = document.querySelectorAll('.delete-project');
  return deleteBtns;
};

const getTasksContainer = () => {
  const task = document.querySelector('.tasks');
  return task;
};

const getTaskList = () => {
  const tasklist = document.querySelector('.task-list');
  return tasklist;
};

const getTaskBtn = () => {
  const taskAdd = document.querySelector('.addTask-btn');
  return taskAdd;
};

const getTaskAddContainer = () => {
  const taskContainer = document.querySelector('.addTask-container');
  return taskContainer;
};

const getTaskFormsContainer = () => {
  const taskFormContainer = document.querySelector('.taskForm-container');
  return taskFormContainer;
};

const getTaskFormInput = () => {
  const inputField = document.querySelector('#task-name-input');
  return inputField;
};

const getTaskFormAddBtn = () => {
  const formAddBtn = document.querySelector('#confirm-taskBtn');
  return formAddBtn;
};

const getTaskFormCancelBtn = () => {
  const formCancelBtn = document.querySelector('#cancel-taskBtn');
  return formCancelBtn;
};

const getAllProjects = () => {
  const projects = document.querySelectorAll('.project-item');
  return projects;
};

const getDeleteTaskBtns = () => {
  const deleteTaskBtns = document.querySelectorAll('.delete-task');
  return deleteTaskBtns;
}


const getToggleBtn = () => {
  const toggleBtn = document.querySelector('#checkbox');
  return toggleBtn;
}

const getBodyElement = () => {
  const body = document.querySelector('body');
  return body;
}
export {
  getAddProjectBtn,
  getConfirmProjectBtn,
  getCancelProjectBtn,
  getProjectFormsContainer,
  getProjectInput,
  getDeleteProjectBtns,
  getTasksContainer,
  getTaskList,
  getTaskBtn,
  getTaskAddContainer,
  getTaskFormsContainer,
  getTaskFormInput,
  getTaskFormAddBtn,
  getTaskFormCancelBtn,
  getAllProjects,
  getDeleteTaskBtns,
  getToggleBtn,
  getBodyElement,
};

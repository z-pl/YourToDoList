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

export {
  getAddProjectBtn,
  getConfirmProjectBtn,
  getCancelProjectBtn,
  getProjectFormsContainer,
  getProjectInput,
  getDeleteProjectBtns,
};

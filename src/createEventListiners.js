import {
  getAddProjectBtn,
  getConfirmProjectBtn,
  getDeleteProjectBtns,
  getTaskFormsContainer,
  getTaskFormInput,
  getTaskFormAddBtn,
  getTaskFormCancelBtn,
  getTaskBtn,
  getAllProjects,
  getDeleteTaskBtns,
  getToggleBtn,
  getBodyElement,
} from "./getDOMElements";

const addProjectBtnEL = (addProject) => {
  const addProjectBtn = getAddProjectBtn();
  addProjectBtn.addEventListener('click', () => {
    addProject(addProjectBtn);
  });
};

const confirmProjectBtnEL = (confirmProjectAdd) => {
  const confirmProjectBtn = getConfirmProjectBtn();

  confirmProjectBtn.addEventListener('click', (e) => {
    e.preventDefault();
    confirmProjectAdd(confirmProjectBtn);
  });
};

const deleteProjectBtnEL = (deleteProject) => {
  const deleteProjectBtns = getDeleteProjectBtns();

  deleteProjectBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('ping delete');
      deleteProject(deleteBtn);
    });
  });
};

const addTaskBtnEL = (addTask) => {
  const addTaskBtn = getTaskBtn();
  addTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addTask();
  });
};

const confirmTaskBtnEL = (confirmTaskAdd) => {
  const confirmTaskBtn = getTaskFormAddBtn();
  confirmTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    confirmTaskAdd();
  });
};

const cancelTaskBtnEL = (cancelTaskAdd) => {
  const cancelTaskBtn = getTaskFormCancelBtn();
  cancelTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    cancelTaskAdd();
  });
};

const projectSelectEL = (projectAction) => {
  const allProjects = getAllProjects();

  allProjects.forEach((project) => {
    project.addEventListener('click', (e) => {
      e.preventDefault();
      projectAction(project);
    });
  });
};

const deleteTaskEL = (deleteTask) => {
  const deleteTaskBtns = getDeleteTaskBtns();
  console.log(deleteTaskBtns);
  deleteTaskBtns.forEach((deleteTaskBtn) => {
    deleteTaskBtn.addEventListener('click', (e) => {
      e.preventDefault();
      deleteTask(deleteTaskBtn);
    });
  });
};

const toggleView = () => {
  const toggleBtn = getToggleBtn();
  const body = getBodyElement();

  toggleBtn.addEventListener('change', (e) => {
    body.classList.toggle('dark');
  });
};
export {
  addProjectBtnEL,
  confirmProjectBtnEL,
  deleteProjectBtnEL,
  addTaskBtnEL,
  confirmTaskBtnEL,
  cancelTaskBtnEL,
  projectSelectEL,
  deleteTaskEL,
  toggleView,
};

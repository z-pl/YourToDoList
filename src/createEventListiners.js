import { getAddProjectBtn, getConfirmProjectBtn, getDeleteProjectBtns } from "./getDOMElements";

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
      console.log("ping delete");
      deleteProject(deleteBtn);
    });
  });
};

export { addProjectBtnEL, confirmProjectBtnEL, deleteProjectBtnEL };

import { getAddProjectBtn } from "./getDOMElements";

const addProjectBtnEL = (addProject) => {
  const addProjectBtn = getAddProjectBtn();

  addProjectBtn.addEventListener('click', () => {
    addProject(addProjectBtn);
  });
};

export { addProjectBtnEL };

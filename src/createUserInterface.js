import {addProjectBtnEL } from "./createEventListiners";

const setupInterface = () => {
  addProjectBtnEL(addProjectBtnAction);
};

const addProjectBtnAction = (addProjectBtnElement) => {
  const addProjectBtn = addProjectBtnElement;
  addProjectBtn.style = 'display: none';
};

export { setupInterface }

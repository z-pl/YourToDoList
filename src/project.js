import { createTask  } from "./task";

function createProject(projectName) {
  const tasks = {};

  const name = () => projectName;
  const getTasks = () => tasks;
  const addTask = (taskName) => {
    const newTask = createTask(taskName);
    tasks[newTask.name()] = newTask;
  };

  const deleteTask = (taskName) => {
    delete tasks[taskName];
  };

  return { name, addTask, getTasks, deleteTask };
}

export { createProject };

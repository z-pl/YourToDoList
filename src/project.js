import { createTask  } from "./task";

function createProject(projectName) {
  const tasks = {};

  const name = () => projectName;
  const getTasks = () => tasks;
  const addTask = (taskName) => {
    const newTask = createTask(taskName);
    tasks[newTask.name()] = newTask;
  };

  return { name, addTask, getTasks };
}

export { createProject };

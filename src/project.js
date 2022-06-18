function createProject(projectName) {
  const tasks = [];

  const name = () => projectName;
  const getTasks = () => tasks;
  const addTask = (task) => tasks.push(task);

  return { name, addTask, getTasks };
}

export { createProject };

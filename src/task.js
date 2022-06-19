function createTask(taskName, id) {
  const taskId = () => id;
  const name = () => taskName;

  return { name, taskId };
}

export { createTask };

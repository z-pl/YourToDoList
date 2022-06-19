function createTask(taskName) {
  const name = () => taskName;

  return { name } ;
}

export { createTask };

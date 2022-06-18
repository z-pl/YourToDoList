const addToContent = (type, element) => {
  const content = document.querySelector('.container');
  content.insertAdjacentHTML(type, element);
};

const createNavElement = () => {
  const navHeader =
`<nav class = "nav-header">
    <h2 class = "title">Todo List</h2>
    <div class = "date-header">DATE</div>
  </nav>`;

  addToContent('afterbegin', navHeader);
};

const createDOMLayout = () => {
  createNavElement();
};

export { createDOMLayout }

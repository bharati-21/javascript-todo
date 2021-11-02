const todoDate = document.querySelector('.todo-date');
const todoActive = document.querySelector('.todo-active');

const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday']

const today = new Date();
todoDate.innerText = `${days[today.getDay()]}, ${month[today.getMonth()]} ${today.getDate()}`;

todoActive.innerText = "0 Tasks";
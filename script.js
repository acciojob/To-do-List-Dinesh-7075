//your code here
const ip = document.querySelector('#newTodoInput');
const addBtn = document.querySelector('#addTodoBtn');
const todosList = document.querySelector('#todoList');

addBtn.addEventListener('click', ((e) => {
	const toDoData = ip.value;
	if(toDoData != '') {
		const li = document.createElement('li');
		li.innerHTML = toDoData;
		todosList.append(li);
		ip.value = '';
	}
}));

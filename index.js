//находим элементы 
const form = document.querySelector('#todo-create__form');
const input = document.querySelector('.todo-create__input');
const todoList = document.querySelector('.todo-list');
const emptyList = document.querySelector('.empty-list');

// добавление todo
form.addEventListener('submit', addTodo);

//удаление todo
todoList.addEventListener('click', deleteTodo);

// выполнение todo
todoList.addEventListener('click', doneTodo);

// ожидание выполнения todo
todoList.addEventListener('click', expectationTodo);

//в процессе выполнения todo
todoList.addEventListener('click', processTodo);

//редактирование todo
todoList.addEventListener('click', editTodo);

function addTodo(event){
//отменяем отправку формы
event.preventDefault();
//достаем значение инпута
const inputText = input.value;
// создаем разметку нового todo
const todoHTML = `
<li class="todo-list__item ">
<span class="todo-list__item-title">${inputText}</span>
<div class="todo-list__item-buttons">
<button class="button-action" type="button" data-action="done">
<img  src="/assets/img/done.svg" alt="Done" width="15" height="15">
</button>
<button class="button-action" type="button" data-action="delete" >
<img src="/assets/img/delete.svg" alt="delete" width="15" height="15">
</button>
	<button class="button-action" type="button" data-action="process" >
	<img src="/assets/img/process.svg" alt="process" width="15" height="15">
</button>
</button>
<button class="button-action" type="button" data-action="expectation" >
<img  src="/assets/img/expectation.svg" alt="expectation" width="15" height="15">
</button>
<button class="button-action" type="button" data-action="edit" > edit

</button>
</div>
</li> `;
//добавляем на страницу todo
todoList.insertAdjacentHTML('beforeend', todoHTML);
//очищаем инпут и возвращаем фокус на инпут
input.value = "";
input.focus();
// скрытие пустого листа/если в списке больше одной задачи/
if(todoList.children.length > 1){
	emptyList.classList.add('none')
}
}
function deleteTodo(event){

	//проверяем клик по кнопке "delete" /удаляем
	if(event.target.dataset.action === 'delete'){
	const li = event.target.closest('.todo-list__item');
	li.remove();
	}
	//проверяем если список todo пуст отображаем пустой лист
if(todoList.children.length === 1){
	emptyList.classList.toggle('none');
}

}
function doneTodo(event){
	//проверям клик по кнопке "done" /отмечаем
if(event.target.dataset.action === 'done'){
	const li = event.target.closest('.todo-list__item');
	li.querySelector('.todo-list__item-title');
	li.classList.toggle('done');
}
}
function processTodo(event){
// проверяем клик по кнопке "process"/ожидание
if(event.target.dataset.action === 'process'){
	const li = event.target.closest('.todo-list__item');
	li.querySelector('.todo-list__item-title');
	li.classList.toggle('process');
}
}
function expectationTodo(event){
	// проверяем клик по кнопке "process"/ожидание
	if(event.target.dataset.action === 'expectation'){
		const li = event.target.closest('.todo-list__item');
		li.querySelector('.todo-list__item-title');
		li.classList.toggle('expectation');
	}
}
function editTodo(event){
	
	if(event.target.dataset.action === 'edit'){
		const li = event.target.closest('.todo-list__item');
		const span = li.firstElementChild;
		const input = document.createElement('input');
		input.type = 'text';
		input.value = span.textContent;
		li.insertBefore(input, span);
		li.removeChild(span);
		event.target.dataset.action = 'save';
		event.target.textContent = 'save';

		}else if(event.target.dataset.action === 'save'){
		const li = event.target.closest('.todo-list__item');
      const input = li.firstElementChild;
		const span = document.createElement('span');
		span.textContent = input.value;
		li.insertBefore(span, input);
		li.removeChild(input);
		
		event.target.dataset.action = 'edit';
		event.target.textContent = 'edit';
		

		

		}
		
			};
	
	
	


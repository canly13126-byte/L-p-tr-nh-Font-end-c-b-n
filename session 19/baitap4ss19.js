const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const pendingTasks = document.getElementById('pendingTasks');
const clearAllBtn = document.getElementById('clearAllBtn');

let listTodo = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodos() {
    todoList.innerHTML = '';
    
    listTodo.forEach((todo, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${todo}</span>
            <button class="btn-delete" onclick="deleteTodo(${index})">🗑️</button>
        `;
        todoList.appendChild(li);
    });

    pendingTasks.textContent = `You have ${listTodo.length} pending tasks`;
}

addBtn.addEventListener('click', function () {
    const todoValue = todoInput.value.trim();
    
    if (!todoValue) {
        alert("Vui lòng nhập nội dung công việc!");
        return;
    }

    listTodo.push(todoValue);
    localStorage.setItem('todos', JSON.stringify(listTodo));
    
    todoInput.value = '';
    renderTodos();
});

todoInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addBtn.click();
    }
});

window.deleteTodo = function (index) {
    listTodo.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(listTodo));
    renderTodos();
};

clearAllBtn.addEventListener('click', function () {
    if (confirm("Bạn có chắc chắn muốn xóa tất cả công việc không?")) {
        listTodo = [];
        localStorage.removeItem('todos');
        renderTodos();
    }
});

renderTodos();
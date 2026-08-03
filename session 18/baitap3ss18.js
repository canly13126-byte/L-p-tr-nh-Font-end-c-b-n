let todos = [
    { id: 1, title: "Xin việc ở Google", completed: true },
    { id: 2, title: "Mua biệt thự", completed: true },
    { id: 3, title: "Cưới vợ", completed: false },
    { id: 4, title: "Mua xe hơi", completed: false },
    { id: 5, title: "Sinh con", completed: false },
    { id: 6, title: "Đi du lịch vòng quanh thế giới", completed: false }
];

const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");

function renderTodos() {
    todoList.innerHTML = "";
    todos.forEach(todo => {
        const li = document.createElement("li");
        li.className = `todo-item ${todo.completed ? "completed" : ""}`;
        
        li.innerHTML = `
            <div class="todo-content" onclick="toggleTodo(${todo.id})">
                <span class="check-icon">✓</span>
                <span class="text">${todo.title}</span>
            </div>
            <button class="delete-btn" onclick="deleteTodo(${todo.id})">X</button>
        `;
        todoList.appendChild(li);
    });
}

function addTodo() {
    const title = todoInput.value.trim();
    if (title === "") {
        alert("Vui lòng nhập nội dung!");
        return;
    }
    const newTodo = {
        id: Date.now(),
        title: title,
        completed: false
    };
    todos.push(newTodo);
    todoInput.value = "";
    renderTodos();
}

function toggleTodo(id) {
    todos = todos.map(todo => {
        if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
        }
        return todo;
    });
    renderTodos();
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
}

addBtn.addEventListener("click", addTodo);
todoInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTodo();
    }
});

renderTodos();
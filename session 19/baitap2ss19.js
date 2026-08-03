const taskForm = document.getElementById('taskForm');
const taskIdInput = document.getElementById('taskId');
const contentInput = document.getElementById('content');
const dueDateInput = document.getElementById('dueDate');
const statusInput = document.getElementById('status');
const assignedToInput = document.getElementById('assignedTo');
const taskTableBody = document.getElementById('taskTableBody');

const initialCourses = [
    { id: 1, content: 'Learn Javascript Session 01', dueDate: '2023-04-17', status: 'Pending', assignedTo: 'Anh Bách' },
    { id: 2, content: 'Learn Javascript Session 02', dueDate: '2023-04-17', status: 'Pending', assignedTo: 'Lâm th' },
    { id: 3, content: 'Learn CSS Session 1', dueDate: '2023-04-17', status: 'Pending', assignedTo: 'Hiếu Cí ớt ớt' }
];

let courses = JSON.parse(localStorage.getItem('courses'));
if (!courses || courses.length === 0) {
    courses = initialCourses;
    localStorage.setItem('courses', JSON.stringify(courses));
}

function renderTasks() {
    taskTableBody.innerHTML = '';
    courses.forEach((item, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.content}</td>
            <td>${item.dueDate}</td>
            <td>${item.status}</td>
            <td>${item.assignedTo}</td>
            <td>
                <button class="btn-edit" onclick="editTask(${item.id})">Sửa</button>
                <button class="btn-delete" onclick="deleteTask(${item.id})">Xóa</button>
            </td>
        `;
        taskTableBody.appendChild(tr);
    });
}

taskForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const id = taskIdInput.value;
    const content = contentInput.value.trim();
    const dueDate = dueDateInput.value;
    const status = statusInput.value;
    const assignedTo = assignedToInput.value.trim();

    if (id) {
        const index = courses.findIndex(item => item.id == id);
        if (index !== -1) {
            courses[index] = { id: Number(id), content, dueDate, status, assignedTo };
        }
    } else {
        const newId = courses.length > 0 ? Math.max(...courses.map(item => item.id)) + 1 : 1;
        courses.push({ id: newId, content, dueDate, status, assignedTo });
    }

    localStorage.setItem('courses', JSON.stringify(courses));
    renderTasks();
    taskForm.reset();
    taskIdInput.value = '';
});

window.editTask = function (id) {
    const task = courses.find(item => item.id === id);
    if (task) {
        taskIdInput.value = task.id;
        contentInput.value = task.content;
        dueDateInput.value = task.dueDate;
        statusInput.value = task.status;
        assignedToInput.value = task.assignedTo;
    }
};

window.deleteTask = function (id) {
    if (confirm('Bạn có chắc chắn muốn xóa không?')) {
        courses = courses.filter(item => item.id !== id);
        localStorage.setItem('courses', JSON.stringify(courses));renderTasks();
    }
};

renderTasks();
let students = [
    { id: 1, name: "Huấn", age: 18, class: "A1" },
    { id: 2, name: "Cường", age: 22, class: "A1" }
];

let editId = null;

const tableBody = document.getElementById("student-table-body");
const nameInput = document.getElementById("student-name");
const ageInput = document.getElementById("student-age");
const classInput = document.getElementById("student-class");
const submitBtn = document.getElementById("submit-btn");
const searchInput = document.getElementById("search-input");

function renderStudents(data = students) {
    tableBody.innerHTML = "";
    data.forEach(student => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.class}</td>
            <td>
                <button class="btn-action btn-edit" onclick="editStudent(${student.id})">Sửa</button>
                <button class="btn-action btn-delete" onclick="deleteStudent(${student.id})">Xóa</button>
            </td>
        `;
        tableBody.appendChild(tr);
    });
}

submitBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const age = ageInput.value.trim();
    const studentClass = classInput.value.trim();

    if (!name || !age || !studentClass) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    if (editId !== null) {
        students = students.map(student => {
            if (student.id === editId) {
                return { ...student, name, age: parseInt(age), class: studentClass };
            }
            return student;
        });
        editId = null;
        submitBtn.textContent = "Thêm sinh viên";
    } else {
        const newStudent = {
            id: Date.now(),
            name,
            age: parseInt(age),
            class: studentClass
        };
        students.push(newStudent);
    }

    clearInputs();
    renderStudents();
});

function editStudent(id) {
    const student = students.find(s => s.id === id);
    if (student) {
        nameInput.value = student.name;
        ageInput.value = student.age;
        classInput.value = student.class;
        editId = id;
        submitBtn.textContent = "Cập nhật";
    }
}

function deleteStudent(id) {
    students = students.filter(s => s.id !== id);
    renderStudents();
}

searchInput.addEventListener("input", (e) => {
    const keyword = e.target.value.toLowerCase().trim();
    const filtered = students.filter(student => 
        student.name.toLowerCase().includes(keyword)
    );
    renderStudents(filtered);
});

function clearInputs() {
    nameInput.value = "";
    ageInput.value = "";
    classInput.value = "";
}

renderStudents();
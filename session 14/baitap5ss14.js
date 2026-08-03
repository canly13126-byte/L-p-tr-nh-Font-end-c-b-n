let studentList = [];

function addStudent(name, age, id) {
    if (studentList.some(s => s.id === id)) {
        alert("Lỗi: ID đã tồn tại.");
        return;
    }
    studentList.push({ id, name, age });
    alert(`Đã thêm: ${name}`);
}

function displayStudents() {
    if (studentList.length === 0) {
        alert("Danh sách trống.");
        return;
    }
    let result = "DANH SÁCH SINH VIÊN:\n";
    studentList.forEach(s => {
        result += `ID: ${s.id} - Tên: ${s.name} - Tuổi: ${s.age}\n`;
    });
    alert(result);
}

function deleteStudentById(id) {
    let index = studentList.findIndex(s => s.id === id);
    if (index !== -1) {
        studentList.splice(index, 1);
        alert(`Đã xóa ID: ${id}`);
    } else {
        alert("Lỗi: ID không tồn tại.");
    }
}

function themSinhVien() {
    let name = prompt("Nhập tên:");
    let age = prompt("Nhập tuổi:");
    let id = prompt("Nhập ID:");
    if (name && age && id) addStudent(name, Number(age), id);
}

function xoaSinhVien() {
    let id = prompt("Nhập ID cần xóa:");
    if (id) deleteStudentById(id);
}
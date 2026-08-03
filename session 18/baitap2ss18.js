let courses = [
    { id: 1, name: "HTML", complete: false },
    { id: 2, name: "CSS", complete: false },
    { id: 3, name: "Basic of javascript", complete: false },
    { id: 4, name: "Node package Manager (npm)", complete: false },
    { id: 5, name: "Git", complete: false }
];

function displayCourses() {
    console.clear();
    console.log("--- DANH SÁCH KHÓA HỌC CURRENT ---");
    courses.forEach(course => {
        console.log(`ID: ${course.id} | Tên: ${course.name} | Trạng thái: ${course.complete ? "Complete" : "False"}`);
    });
}

while (true) {
    displayCourses();
    
    let action = prompt("Nhập một trong các ký tự C/R/U/D/E để thực hiện:\nC - Thêm khóa học mới\nR - Xem tất cả các khóa học\nU - Cập nhật trạng thái khóa học\nD - Xóa khóa học\nE - Thoát chương trình");

    if (action === null) action = "";
    action = action.toUpperCase().trim();

    if (action === 'E') {
        alert("Cảm ơn bạn đã đến với Rikkei Academy");
        break;
    }

    switch (action) {
        case 'C': {
            let newName = prompt("Nhập tên khóa học mới:");
            if (newName) {
                let newId = courses.length > 0 ? courses[courses.length - 1].id + 1 : 1;
                let newCourse = {
                    id: newId,
                    name: newName,
                    complete: false
                };
                courses.push(newCourse);
                alert("Thêm khóa học thành công!");
            } else {
                alert("Tên khóa học không hợp lệ!");
            }
            break;
        }

        case 'R': {
            let result = "--- Danh sách các khóa học ---\n";
            courses.forEach(course => {
                result += `ID: ${course.id} - ${course.name} [${course.complete ? "Complete" : "False"}]\n`;
            });
            alert(result);
            break;
        }

        case 'U': {
            let updateName = prompt("Nhập tên khóa học bạn muốn cập nhật:");
            let foundCourse = courses.find(course => course.name.toLowerCase() === updateName.toLowerCase().trim());
            
            if (foundCourse) {
                let newStatusInput = prompt(`Khóa học tìm thấy! Nhập trạng thái mới (true/false) hoặc nhập lại tên mới:`);
                
                if (newStatusInput.toLowerCase() === 'true') {
                    foundCourse.complete = true;
                } else if (newStatusInput.toLowerCase() === 'false') {
                    foundCourse.complete = false;
                } else if (newStatusInput.trim() !== "") {
                    foundCourse.name = newStatusInput;
                }
                alert("Cập nhật thông tin thành công!");
            } else {
                alert("Không tìm thấy khóa học có tên trên.");
            }
            break;
        }

        case 'D': {let deleteName = prompt("Nhập chính xác tên khóa học muốn xóa:");
            let index = courses.findIndex(course => course.name.toLowerCase() === deleteName.toLowerCase().trim());
            
            if (index !== -1) {
                courses.splice(index, 1);
                alert("Xóa khóa học thành công!");
            } else {
                alert("Không tìm thấy khóa học cần xóa.");
            }
            break;
        }

        default:
            alert("Ký tự nhập vào không hợp lệ! Vui lòng chọn lại.");
            break;
    }
}
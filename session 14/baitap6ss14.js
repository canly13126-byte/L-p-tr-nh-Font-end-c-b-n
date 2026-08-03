let bookList = [];

function addBook(id, title, author, year) {
    if (bookList.some(b => b.id === id)) {
        alert("Lỗi: ID sách đã tồn tại.");
        return;
    }
    bookList.push({ id, title, author, year });
    alert(`Đã thêm sách: ${title}`);
}

function displayBooks() {
    if (bookList.length === 0) {
        alert("Danh sách sách trống.");
        return;
    }
    let result = "DANH SÁCH SÁCH:\n";
    bookList.forEach(b => {
        result += `ID: ${b.id} - Tên: ${b.title} - Tác giả: ${b.author} - Năm: ${b.year}\n`;
    });
    alert(result);
}

function searchBookByTitle(keyword) {
    let lowerKeyword = keyword.toLowerCase();
    let foundBooks = bookList.filter(b => b.title.toLowerCase().includes(lowerKeyword));

    if (foundBooks.length === 0) {
        alert("Không tìm thấy sách phù hợp với từ khóa.");
        return;
    }

    let result = "KẾT QUẢ TÌM KIẾM:\n";
    foundBooks.forEach(b => {
        result += `ID: ${b.id} - Tên: ${b.title} - Tác giả: ${b.author} - Năm: ${b.year}\n`;
    });
    alert(result);
}

function deleteBookById(id) {
    let index = bookList.findIndex(b => b.id === id);
    if (index !== -1) {
        bookList.splice(index, 1);
        alert(`Đã xóa sách có ID: ${id}`);
    } else {
        alert("Lỗi: Sách không tồn tại.");
    }
}

function themSachMoi() {
    let id = prompt("Nhập ID sách:");
    let title = prompt("Nhập tên sách:");
    let author = prompt("Nhập tác giả:");
    let year = prompt("Nhập năm xuất bản:");
    if (id && title && author && year) {
        addBook(id, title, author, Number(year));
    }
}

function timKiemTheoTen() {
    let keyword = prompt("Nhập từ khóa tên sách cần tìm:");
    if (keyword) searchBookByTitle(keyword);
}

function xoaSachTheoId() {
    let id = prompt("Nhập ID sách cần xóa:");
    if (id) deleteBookById(id);
}
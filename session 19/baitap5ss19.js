const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const bookmarkModal = document.getElementById('bookmarkModal');
const bookmarkForm = document.getElementById('bookmarkForm');
const siteNameInput = document.getElementById('siteName');
const siteUrlInput = document.getElementById('siteUrl');
const bookmarkContainer = document.getElementById('bookmarkContainer');

let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

function openModal() {
    bookmarkModal.style.display = 'flex';
}

function closeModal() {
    bookmarkModal.style.display = 'none';
    bookmarkForm.reset();
}

function renderBookmarks() {
    bookmarkContainer.innerHTML = '';
    
    bookmarks.forEach((bookmark, index) => {
        const item = document.createElement('div');
        item.classList.add('bookmark-item');
        
        item.innerHTML = `
            <a href="${bookmark.url}" target="_blank">${bookmark.name}</a>
            <button class="btn-delete" onclick="deleteBookmark(${index})">&times;</button>
        `;
        
        bookmarkContainer.appendChild(item);
    });
}

bookmarkForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = siteNameInput.value.trim();
    let url = siteUrlInput.value.trim();
    
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
    }
    
    const newBookmark = { name, url };
    bookmarks.push(newBookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    
    renderBookmarks();
    closeModal();
});

window.deleteBookmark = function (index) {
    bookmarks.splice(index, 1);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    renderBookmarks();
};

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
window.addEventListener('click', function (e) {
    if (e.target === bookmarkModal) {
        closeModal();
    }
});

renderBookmarks();
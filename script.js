// Початковий масив бібліотеки
let library = [
    { title: "1984", author: "Джордж Орвелл", year: 1949, genre: "Дистопія", available: true },
    { title: "Гаррі Поттер і філософський камінь", author: "Дж. К. Ролінґ", year: 1997, genre: "Фентезі", available: false },
    { title: "Володар перснів", author: "Дж. Р. Р. Толкін", year: 1954, genre: "Фентезі", available: true },
    { title: "Код да Вінчі", author: "Ден Браун", year: 2003, genre: "Детектив", available: true },
    { title: "Маленький принц", author: "Антуан де Сент-Екзюпері", year: 1943, genre: "Філософія", available: false }
];

// Функції
function addBook(library, newBook) {
    library.push(newBook);
    renderLibrary();
}

function removeBook(library, title) {
    const index = library.findIndex(book => book.title === title);
    if (index !== -1) {
        library.splice(index, 1);
        renderLibrary();
    }
}

function toggleAvailability(library, title) {
    const book = library.find(book => book.title === title);
    if (book) {
        book.available = !book.available;
        renderLibrary();
    }
}

// Відображення бібліотеки
function renderLibrary() {
    const container = document.getElementById("library-container");
    container.innerHTML = "";

    library.forEach(book => {
        const card = document.createElement("div");
        card.className = "book-card";

        card.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Автор:</strong> ${book.author}</p>
            <p><strong>Рік:</strong> ${book.year}</p>
            <p><strong>Жанр:</strong> ${book.genre}</p>
            <p><strong>Статус:</strong> ${book.available ? "✅ Доступна" : "❌ Видана"}</p>
            <button class="toggle">Змінити статус</button>
            <button class="delete">Видалити</button>
        `;

        // Події
        card.querySelector(".delete").addEventListener("click", () => removeBook(library, book.title));
        card.querySelector(".toggle").addEventListener("click", () => toggleAvailability(library, book.title));

        container.appendChild(card);
    });
}

// Обробка форми додавання
document.getElementById("addBookForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const year = parseInt(document.getElementById("year").value);
    const genre = document.getElementById("genre").value;

    addBook(library, { title, author, year, genre, available: true });

    // Очистка форми
    this.reset();
});

// Початкове відображення
renderLibrary();

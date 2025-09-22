const library = [
  { title: "1984", author: "Джордж Орвелл", year: 1949, genre: "Дистопія", available: true },
  { title: "Гаррі Поттер і філософський камінь", author: "Дж. К. Ролінґ", year: 1997, genre: "Фентезі", available: false },
  { title: "Володар перснів", author: "Дж. Р. Р. Толкін", year: 1954, genre: "Фентезі", available: true },
  { title: "Код да Вінчі", author: "Ден Браун", year: 2003, genre: "Детектив", available: true },
  { title: "Маленький принц", author: "Антуан де Сент-Екзюпері", year: 1943, genre: "Філософія", available: false }
];

function renderLibrary() {
  const container = document.getElementById("library-container");
  container.innerHTML = "";

  library.forEach((book, index) => {
    const card = document.createElement("div");
    card.className = "book-card";

    card.innerHTML = `
      <h3>${book.title}</h3>
      <p><b>Автор:</b> ${book.author}</p>
      <p><b>Рік:</b> ${book.year}</p>
      <p><b>Жанр:</b> ${book.genre}</p>
      <p><b>Статус:</b> ${book.available ? "✅ Доступна" : "❌ Видана"}</p>
      <div class="button-group">
        <button class="toggle">Змінити статус</button>
        <button class="delete">Видалити</button>
      </div>
    `;

    // події для кнопок
    card.querySelector(".toggle").addEventListener("click", () => {
      library[index].available = !library[index].available;
      renderLibrary();
    });

    card.querySelector(".delete").addEventListener("click", () => {
      library.splice(index, 1);
      renderLibrary();
    });

    container.appendChild(card);
  });
}

// обробка форми
document.getElementById("addBookForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const year = document.getElementById("year").value;
  const genre = document.getElementById("genre").value;

  library.push({
    title,
    author,
    year,
    genre,
    available: true
  });

  this.reset();
  renderLibrary();
});

// початкове відображення
renderLibrary();
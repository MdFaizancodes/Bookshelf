# 📚 Bookshelf

A simple library app built with vanilla HTML, CSS, and JavaScript. Add books to your shelf, track whether you've read them, and edit or remove them anytime.

## Features

- **Add books** with name, author, page count, and read status
- **Edit** any book's details through a modal dialog
- **Delete** books you no longer want on the shelf
- **Toggle read status** with one click; unread books get a red glow, read books a green one
- **Form validation** (book name and author up to 40 characters, pages between 1 and 5000)

## Tech Stack

- HTML5
- CSS3 (Grid, Flexbox, CSS variables)
- Vanilla JavaScript (DOM manipulation, constructor functions, event delegation)
- HTML `<dialog>` element with the Invoker Commands API (`command` / `commandfor`)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/MdFaizancodes/Bookshelf.git
   ```
2. Open the project folder.
3. Open `index.html` in your browser. No build step or dependencies needed.

## Project Structure

```
├── index.html
├── style.css
├── script.js
└── README.md
```

## Usage

1. Click the **+** card to open the "Book Details" form.
2. Fill in the details and click **Submit**.
3. Use **Read** on a card to toggle its reading status.
4. Use **Edit** to change a book's details, or **Delete** to remove it.

> **Note:** Books are stored in memory only, so they reset when you refresh the page.
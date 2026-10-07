* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --bg-page: #FAF6EE;
  --header-shadow: rgba(90,42,53,0.15);
  --card-frame: #C97B84;
  --card-inner: #F6E3E1;
  --text-title: #3B2A2E;
  --text-label: #8C3B4A;
  --text-value: #3B2A2E;
  --add-ring: #8C3B4A;
  --add-inner: #FAF6EE;
  --add-plus: #8C3B4A;
  --btn-bg: #8C3B4A;
  --btn-text: #FFFFFF;
  --btn-hover: #6E2D3A;
  --btn-delete: #B3413A;
  --glow-read: rgba(127,182,133,0.6);
  --glow-unread: rgba(217,119,111,0.6);
}

body {
  font-family: 'Lato', sans-serif;
  color: var(--text-value);
  background-color: var(--bg-page);
}

.container {
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: 100px 1fr;
  
  background-color: var(--bg-page);
  gap: 15px;
}

.header {
  width: 100%;
  align-content: center;
  padding: 0 32px;
  background-color: var(--card-frame);
  border-bottom: 4px solid var(--add-ring);
  box-shadow: 0 4px 12px var(--header-shadow);
}

.header h1 {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 2.2rem;
  letter-spacing: 1px;
  color: #FFFFFF;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(350px, 100%), 350px));
  grid-auto-rows: 400px;
  gap: 20px;
  padding: 10px 24px;
  align-content: start;
}


.card {
  width: 100%;
  height: auto;
  display: flex;
  background-color: var(--card-frame);
  box-shadow: 5px 5px 10px 3px var(--glow-read);
}

.card.red {
  box-shadow: 7px 7px 15px 3px var(--glow-unread);
}

.card-content {
  flex: 1;
  margin: 15px;
  padding: 10px;
  background-color: var(--card-inner);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.card-content > :nth-child(-n+4) {
  grid-column: 1 / -1;
}

.book-name  {
    
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: x-large;
  color: var(--text-title);
}

.label {
    display: block;
    font-weight: 700;
    font-size: large;
    color: var(--text-label);
}

dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  margin: 0;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 350px;
  min-height: 450px;
  padding: 20px;
  background-color: var(--card-inner);
  color: var(--text-value);
  border: 15px solid var(--card-frame);
}

.input-container {
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 10px;
}

button {
  align-self: center;
  width: 75px;
  height: 24px;
  border: none;
  border-radius: 12px;
  background-color: var(--btn-bg);
  color: var(--btn-text);
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  cursor: pointer;
}

button:hover {
  background-color: var(--btn-hover);
}

button:active {
  background-color: #888888;
}

.delete {
  background-color: var(--btn-delete);
}
.delete:hover {
  background-color: #8E2F29;
}


.addBtContainer {
  justify-content: center;
  align-items: center;
  box-shadow: none;
}

.addBt {
  width: 50%;
  height: 45%;
  border-radius: 50%;
  border: 35px solid var(--add-ring);
  background-color: var(--add-inner);
  color: var(--add-plus);
  font-size: xx-large;
  font-weight: 700;
}

.addBt:hover {
  background-color: #FFFFFF;
}

.addBt:active {
  background-color: #e8d6d6;
}

.card-content > div {
  overflow-wrap: anywhere;
}
.card-actions {
  display: flex;
  gap: 6px;
}

.card-actions button,
.card-read-button {
  width: 68px;
}

dialog::backdrop {
  background: rgba(59, 42, 46, 0.5);
}

fieldset {
  border: none;
}

legend {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 1.3rem;
  color: var(--text-label);
}

.input-container label {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-weight: 700;
  color: var(--text-label);
}

.input-container label:has(input[type="checkbox"]) {
  flex-direction: row;
  align-items: center;
}

.input-container input:not([type="checkbox"]) {
  padding: 6px 8px;
  border: 2px solid var(--card-frame);
  border-radius: 6px;
  background: #FFFFFF;
  font-family: 'Lato', sans-serif;
  color: var(--text-value);
}

.input-container input:focus {
  outline: none;
  border-color: var(--add-ring);
}

.card-content > :nth-child(5),
.card-content > :nth-child(6) {
  align-self: end;
}

.card-actions {
  justify-content: flex-end;
}

.dialog-actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.dialog-actions button {
  width: 90px;
  height: 30px;
}
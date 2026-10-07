
let cardsContainer = document.querySelector(".cards-container");
dialog("normal");

const library =[];
function book (bookName,author,totalPage, hasRead){
    this.bookName=bookName;
    this.author=author;
    this.totalPage=totalPage;
    if(hasRead)
    {
        this.hasRead="I have read this";
    }
    else{
        
        this.hasRead="I have not read this";
    }
    
    this.id=crypto.randomUUID();
} 

function addBookToLibrary(bookName,author,totalPage, hasRead){

    const newBook=new book(bookName,author,totalPage,hasRead)
    library.push(newBook);
    displayBooks();
}


function displayBooks()
{
    
   const dialogId = `book-details-dialog-${crypto.randomUUID()}`;
    let newBook=library[library.length-1];

    const card = document.createElement("div");
    if(newBook.hasRead=="I have not read this")
    {
        card.classList.add("red");
    }
    card.classList.add("card");
     card.id=newBook.id;
    const cardContent=document.createElement("div");
    cardContent.classList.add("card-content");


    const titleSection= document.createElement("div");
    const titleLabel =document.createElement("span");
    titleLabel.classList.add("titleLabel", "label");
    titleLabel.textContent="Book Name";
    const bookTitle=document.createElement("div");
    bookTitle.classList.add("book-name");
    bookTitle.textContent=newBook.bookName;
    titleSection.append(titleLabel,bookTitle);



    const authorSection= document.createElement("div");
    const authorLabel =document.createElement("span");
    authorLabel.classList.add("authorLabel", "label");
    authorLabel.textContent="Author Name:";
    const authorName=document.createElement("div");
    authorName.textContent=newBook.author;
    authorSection.append(authorLabel,authorName);

    const pagesSection = document.createElement("div");
    const pagesLabel = document.createElement("span");
    pagesLabel.classList.add("pagesLabel", "label");
    pagesLabel.textContent="Number of pages";
    const pageCount = document.createElement("div");
    pageCount.textContent=newBook.totalPage;
    pagesSection.append(pagesLabel,pageCount);

    const haveReadSection = document.createElement("div");
    const haveReadSectionLabel = document.createElement("span");
    haveReadSectionLabel.classList.add("haveReadSectionLabel", "label");
    haveReadSectionLabel.textContent="Reading Status";
    const haveRead = document.createElement("div");
    haveRead.textContent=newBook.hasRead;
    haveReadSection.append(haveReadSectionLabel,haveRead);


    const readSection = document.createElement("div");
    const readButton = document.createElement("button");
    readButton.classList="card-read-button";
    readButton.textContent="Read";
    readSection.appendChild(readButton,)

    const actionSection = document.createElement("div");
    actionSection.classList.add("card-actions");
    const editButton = document.createElement("button");
    editButton.classList.add("card-edit");
    editButton.setAttribute("commandfor",dialogId)
    editButton.command="show-modal";
    editButton.textContent="Edit";
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("card-delete","delete");
    deleteButton.textContent="Delete";
    actionSection.append(editButton,deleteButton);    
    
    cardContent.append(titleSection,authorSection,pagesSection,haveReadSection,readSection,actionSection)
    
    card.appendChild(cardContent);
    cardsContainer.appendChild(card);

  
}


cardsContainer.addEventListener("click",(e)=>{
    if(e.target.classList.contains("card-read-button"))
    {
        
        const card =e.target.closest(".card");
        
        if(card.firstElementChild.children[3].lastElementChild.textContent==="I have read this")      
            {
                card.classList.add("red")
               card.firstElementChild.children[3].lastElementChild.textContent="I have not read this" ;
                library.forEach((book)=>{
                    if(book.id===card.id)
                    {
                        book.hasRead="I have not read this";
                    }
                })
            }
        else{
            card.classList.remove("red")
           card.firstElementChild.children[3].lastElementChild.textContent ="I have read this";
            library.forEach((book)=>{
                    if(book.id===card.id)
                    {
                        book.hasRead="I have read this";
                    }
                })
        }   
        
    }else if(e.target.classList.contains("card-edit")){
        const old = document.getElementById(e.target.getAttribute("commandfor"));
        if (old) old.remove();
        const card =e.target.closest(".card");

        if (library.some(b => b.id === card.id)) dialog(e.target);
        
    }
    else if(e.target.classList.contains("card-delete")){
        const card = e.target.closest(".card");
    const index = library.findIndex(book => book.id === card.id);
    if (index !== -1) {
        document.getElementById(card.querySelector(".card-edit").getAttribute("commandfor"))?.remove();
        card.remove();
        library.splice(index, 1);
    }
    }
    else
    {
        return;
    }
 })

function dialog(target)
{
let dialogId = target?.getAttribute?.("commandfor");
let bookDetailsDialog = document.createElement("dialog");
let values;

if (target?.classList?.contains("card-edit")) {
    values = target.closest(".card").querySelectorAll(".card-content > div");
    bookDetailsDialog.id = dialogId;
} else {
    bookDetailsDialog.id = "book-details-dialog1";
}
    
    let form=document.createElement("form");
    let fieldset=document.createElement("fieldset");
    let legend =document.createElement("legend");
    legend.textContent="BOOK DETAILS";
    let bookNameContainer=document.createElement("div");
    bookNameContainer.className="input-container";
    let bookNameLabel=document.createElement("label");
    bookNameLabel.textContent="Book Name";
    let bookNameInput=document.createElement("input");
    bookNameInput.maxLength=40;
    
    
    if(target?.classList?.contains("card-edit")){
       bookNameInput.value = values[0].lastElementChild.textContent;
    }
    bookNameInput.type="text";
    bookNameInput.name="book-name" ;
    bookNameInput.required=true;
    bookNameLabel.appendChild(bookNameInput);
    bookNameContainer.append( bookNameLabel);


    let bookAuthorContainer=document.createElement("div");
    bookAuthorContainer.className="input-container";
    let bookAuthorLabel=document.createElement("label");
    bookAuthorLabel.textContent="Book Author";
    let bookAuthorInput=document.createElement("input");
    bookAuthorInput.maxLength=40;
    bookAuthorInput.required = true;
    if(target?.classList?.contains("card-edit")){
       bookAuthorInput.value = values[1].lastElementChild.textContent;
    }
    bookAuthorInput.type="text";
    bookAuthorInput.name="book-author";
    bookAuthorLabel.appendChild(bookAuthorInput)
    bookAuthorContainer.append(bookAuthorLabel)

    let totalPagesContainer=document.createElement("div");
    totalPagesContainer.className="input-container";
    let totalPageLabel=document.createElement("label");
    totalPageLabel.textContent="Total Page";
    let totalPageInput=document.createElement("input");
   
    if(target?.classList?.contains("card-edit")){
     totalPageInput.value = values[2].lastElementChild.textContent;
    }
    totalPageInput.type="number";
    totalPageInput.name="total-page";
    totalPageInput.max=5000;
    totalPageInput.min = 1;

    totalPageInput.required=true;
    totalPageLabel.appendChild(totalPageInput);
    totalPagesContainer.append(totalPageLabel);

    
    
    let hasReadContainer=document.createElement("div");
    hasReadContainer.className="input-container";
    let hasReadLabel=document.createElement("label");
    hasReadLabel.textContent="I have read this book";
    let hasReadInput=document.createElement("input");
    hasReadInput.type="checkbox";
    hasReadInput.name="hasRead";
    
    if(target?.classList?.contains("card-edit"))
    {
        hasReadInput.checked = values[3].lastElementChild.textContent === "I have read this";
    }
    hasReadLabel.appendChild(hasReadInput);
    hasReadContainer.appendChild(hasReadLabel);

let editButton;
let submitButton;
let closeButton = document.createElement("button");
const actions = document.createElement("div");
actions.className = "dialog-actions";

if (target?.classList?.contains("card-edit")) {
    editButton = document.createElement("button");
    editButton.className = "form-submit";
    editButton.type = "submit";
    editButton.textContent = "Edit";

    closeButton.type = "button";
    closeButton.setAttribute("commandfor", dialogId);
    closeButton.setAttribute("command", "close");
    closeButton.textContent = "Close";

    actions.append(editButton, closeButton);
} else {
    submitButton = document.createElement("button");
    submitButton.className = "form-submit";
    submitButton.type = "submit";
    submitButton.textContent = "Submit";

    closeButton.type = "button";
    closeButton.setAttribute("commandfor", "book-details-dialog1");
    closeButton.setAttribute("command", "close");
    closeButton.textContent = "Close";

    actions.append(submitButton, closeButton);
       closeButton.addEventListener("click", () => form.reset());
}

fieldset.append(legend, bookNameContainer, bookAuthorContainer, totalPagesContainer, hasReadContainer, actions);
    
    

    form.appendChild(fieldset);
       bookDetailsDialog.append(form);
    cardsContainer.appendChild(bookDetailsDialog);
    if(target?.classList?.contains("card-edit")){
        bookedit(target,editButton,bookDetailsDialog,bookNameInput,bookAuthorInput,totalPageInput,hasReadInput)
    }else
    {
        submit(submitButton,bookDetailsDialog);
    }
   
 
    
}

function submit(submitButton, bookDetailsDialog) {
    submitButton.addEventListener("click", function(event) {
        event.preventDefault();

        const bookName = bookDetailsDialog.querySelector("[name='book-name']");
        const author = bookDetailsDialog.querySelector("[name='book-author']");
        const totalPage = bookDetailsDialog.querySelector("[name='total-page']");
        const hasReadBox = bookDetailsDialog.querySelector("[name='hasRead']");
        if (bookName.value.trim() === "") {
            alert("Book name is required");
            bookName.focus();
            return;
        }

        if (bookName.value.length > 40) {
            alert("Book name cannot exceed 40 characters");
            bookName.focus();
            return;
        }

        if (author.value.trim() === "") {
            alert("Author name is required");
            author.focus();
            return;
        }

        if (author.value.length > 40) {
            alert("Author name cannot exceed 40 characters");
            author.focus();
            return;
        }

        if (totalPage.value === "") {
            alert("Total page is required");
            totalPage.focus();
            return;
        }

        if (Number(totalPage.value) > 5000) {
            alert("Total pages cannot exceed 5000");
            totalPage.focus();
            return;
        }

        if (Number(totalPage.value) < 1) {
            alert("Total pages must be at least 1");
            totalPage.focus();
            return;
        }

      

       addBookToLibrary(
            bookName.value,
            author.value,
            totalPage.value,
            hasReadBox.checked
        );

        bookName.value = "";
        author.value = "";
        totalPage.value = "";
        hasReadBox.checked = false;

        bookDetailsDialog.close();
    });
}


function  bookedit(target,editButton,bookDetailsDialog,bookNameInput,bookAuthorInput,totalPageInput,hasReadInput)
{

    editButton.addEventListener("click",(e)=>{
        e.preventDefault();


       
        if (bookNameInput.value.trim() === "") {
            alert("Book name is required");
            bookNameInput.focus();
            return;
        }

        if (bookNameInput.value.length > 40) {
            alert("Book name cannot exceed 40 characters");
            bookNameInput.focus();
            return;
        }

        if (bookAuthorInput.value.trim() === "") {
            alert("Author name is required");
            bookAuthorInput.focus();
            return;
        }

        if (bookAuthorInput.value.length > 40) {
            alert("Author name cannot exceed 40 characters");
            bookAuthorInput.focus();
            return;
        }

        if (totalPageInput.value === "") {
            alert("Total page is required");
            totalPageInput.focus();
            return;
        }

        if (Number(totalPageInput.value) < 1) {
            alert("Total pages must be at least 1");
            totalPageInput.focus();
            return;
        }

        if (Number(totalPageInput.value) > 5000) {
            alert("Total pages cannot exceed 5000");
            totalPageInput.focus();
            return;
        }
const card = target.closest(".card");
const cardId = card.id;

const values = card.querySelectorAll(".card-content > div");
const bookNameEl = values[0].lastElementChild;
const bookAuthorEl = values[1].lastElementChild;
const totalPageEl = values[2].lastElementChild;
const hasReadEl = values[3].lastElementChild;

bookNameEl.textContent = bookNameInput.value;
bookAuthorEl.textContent = bookAuthorInput.value;
totalPageEl.textContent = totalPageInput.value;

if (hasReadInput.checked) {
    card.classList.remove("red");
    hasReadEl.textContent = "I have read this";
} else {
    card.classList.add("red");
    hasReadEl.textContent = "I have not read this";
}

library.forEach(element => {
    if (element.id === cardId) {
        element.bookName = bookNameInput.value;
        element.author = bookAuthorInput.value;
        element.totalPage = totalPageInput.value;
        element.hasRead = hasReadInput.checked
            ? "I have read this"
            : "I have not read this";
    }
});

bookDetailsDialog.close();
    })
}
   
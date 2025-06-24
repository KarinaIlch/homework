// Задание: Список любимых книг
// По аналогии с примером на лекции создайте небольшое приложение.

// Сделайте форму с двумя полями:

// Название книги
// Имя автора
// Ниже формы должен быть список, куда будут добавляться книги.
// Когда пользователь заполняет форму и нажимает кнопку «Добавить», 
// книга появляется в списке в таком формате: "Гарри Поттер" от Джоан Роулинг

const form = document.querySelector('#form-books')
const ul = document.querySelector('#list-books')

const bookList = [] 

function clearList() {
    while (ul.hasChildNodes()){
        ul.firstChild.remove()
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault()

    let myBook = {
        book: event.target.book.value,
        author: event.target.author.value
    }

    event.target.book.value = ''
    event.target.author.value = ''

    bookList.push(myBook)
    clearList()
    console.log(bookList)

    bookList.map(myBook => {
        const list = document.createElement('li')
        list.textContent = `${myBook.book} от ${myBook.author}`
        ul.append(list)
    })
})
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
}

fix(){
  return this.state *= 1.5;
}
set state(state) {
if (state < 0) {
  this._state = 0;
} else if (state > 100) {
  this._state = 100;
} else {
  this._state = state;
}
}
get state() {
  return this._state;
}
}

class Magazine extends PrintEditionItem {
  constructor (name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor (author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "book";
    this.author = author;
  }
}


class NovelBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}


//2 задание 

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
    this.state = 100;
  }
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    let findBook = this.books.filter(book => book[type] === value)
    return findBook.length ? findBook[0] : null;
  }

  giveBookByName(bookName) {
    let bookIndex = this.books.findIndex(index => index.name === bookName) 
    return bookIndex = -1 ? this.books.splice(bookIndex)[0] : null;
  }
}

// 3 задание 

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subject) {
    if(this.marks[subject] === undefined){ 
      this.marks[subject] = [];
  }

  if (mark < 1 || mark > 5) {
    console.log('Ошибка, оценка должна быть числом от 1 до 5')
  } else {
    this.marks[subject].push(mark);
  }
}
  getAverageBySubject (){
    if (subject = -1) {
      console.log ('Несуществующий предмет')
          }
    let sum = this.marks[subject].reduce((acc, cv) => acc + cv);
    return sum / this.marks[subject].length;
  }

  getAverage (){
   let totalSum = this.marks.reduce((acc,cv) => acc + cv);
   return `Средний балл по всем предметам${totalSum / this.marks.length}`;
  }
}


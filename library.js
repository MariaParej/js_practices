//CLASE PADRE
class Media {
  constructor(title) {
    this._title = title
    this._isCheckedOut = false
    this._ratings = []
  }

  get title() {
    return this._title
  }

  get isCheckedOut() {
    return this._isCheckedOut
  }

  get ratings() {
    return this._ratings
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut
  }

  getAverageRating() {
    if (this._ratings.length === 0) return 0
    let sum = this._ratings.reduce((a, b) => a + b, 0)
    return (sum / this._ratings.length).toFixed(2)
  }

  addRating(value) {
    this._ratings.push(value);
  }

  set isCheckedOut(bln) {
    this._isCheckedOut = bln
  }
}
//CLASE HIJA BOOK
class Book extends Media{
  constructor (author, title, pages) {
    super(title)
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author
  }

  get pages() {
    return this._pages
  }
}
//CLASE HIJA MOVIE
class Movie extends Media {
  constructor (director, title, runTime){
    super(title)
    this._director = director
    this._runTime = runTime
  }

  get director() {
    return this._director
  }

  get runTime() {
    return this._runTime
  }
}


//CREACIÓN DE LIBRO
const historyOfEverything = new Book('Bill Bryson', 'A short history of nearly everything', 544)
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut)
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating())

console.log('-------------------------------------------')

//CREACIÓN DE MOVIE
const speed = new Movie('Jan de Bont', 'Speed', 116)
speed.toggleCheckOutStatus()
console.log(speed.isCheckedOut)
speed.addRating(1)
speed.addRating(1)
speed.addRating(5)
console.log(speed.getAverageRating())
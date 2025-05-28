const books = [
  {
    title: 'Your Next Five Moves: Master the Art of Business Strategy',
    authorName: 'Patrick Bet-David and Greg Dinkin',
    releaseYear: 1920,
  },
  {
    title: 'Atomic Habits',
    authorName: 'James Clear',
    releaseYear: 1922,
  },
  {
    title: 'Choose Your Enemies Wisely: Business Planning for the Audacious Few',
    authorName: 'Patrick Bet-David',
    releaseYear: 1921,
  },
  {
    title: 'A first step',
    authorName: 'Patrick Bet-David and Greg Dinkin',
    releaseYear: 1920,
  },
]

function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) return -1
  if (book1.releaseYear > book2.releaseYear) return 1
  return 0
}

console.log(sortByYear(books[1], books[0]))

const filteredBooks = books.filter((book) => book.releaseYear  > 1920)
console.log(filteredBooks.sort(sortByYear))

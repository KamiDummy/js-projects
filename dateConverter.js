const currentDate = new Date
const currentDateFormat = `Current Date and Time: ${currentDate}`

function formatDateMMDDYYYY(date) {
  return "Formatted Date (MM/DD/YYYY): " +date.toLocaleDateString()
}

function formatDateLong(date) {
  const options = {
    month: "long",
    year: "numeric",
    day: "numeric"
  }

  return "Formatted Date (Month Day, Year): " +date.toLocaleDateString("en-EU", options)
}
console.log(formatDateLong(date))

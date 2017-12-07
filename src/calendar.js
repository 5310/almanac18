const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const setYear = function (year) {
  document.querySelector('header .year').innerHTML = year
}

const createMonths = function (year) {
  document.querySelector('main').innerHTML = new Array(12)
    .fill()
    .map((_, month) => {
      // Monday = 1
      const offset = (new Date(year, month, 1).getDay() + 6) % 7
      // 0th is the last day of previous month
      const length = new Date(
        year + (month + 1) % 12,
        (month + 1) % 12,
        0
      ).getDate() - (year % 4 && month === 1 ? 1 : 0)
      const name = monthNames[month]
      const markup =
      `<ul class="month" data-offset="${offset}" data-length="${length}" data-name="${name}"></ul>`
      return markup
    })
    .join('\n')
}

const createDays = function () {
  document.querySelectorAll('.month')
    .forEach(function (month) {
      month.innerHTML = new Array(parseInt(month.getAttribute('data-length')))
        .fill()
        .map((_, i) => i + 1)
        .map((d) => `<li>${d}</li>`)
        .join('\n')
    })
}

export default function (year) {
  setYear(year)
  createMonths(year)
  createDays()
}

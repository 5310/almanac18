import createCalendar from './calendar.js'
// import setHolidays from './holidays.js'

const params = new window.URLSearchParams(window.location.search)
const year = params.has('year') ? parseInt(params.get('year')) : new Date().getFullYear()
// const region = params.get('region')

createCalendar(year)

// TODO: Tag holidays
// setHolidays(year, region)

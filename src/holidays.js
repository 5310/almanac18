import {monthNames} from './calendar'
import holidaysIndiaWB from './holidays.india-wb.js'

const holidays = {
  'india-wb': holidaysIndiaWB
}

export default function (year, region) {
  if (holidays.hasOwnProperty(region) && holidays[region].hasOwnProperty(`${year}`)) {
    const list = holidays[region][`${year}`]
    for (let month in list) {
      for (let day in list[month]) {
        console.log(day, month)
        document.querySelector(`.month[data-name="${monthNames[month]}"] > li:nth-child(${day})`).dataset.holiday = list[month][day]
      }
    }
  }
}

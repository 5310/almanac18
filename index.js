const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const setYear = function (year) {
  document.querySelector('header .year').innerHTML = year;
};

const createMonths = function (year) {
  document.querySelector('main').innerHTML = new Array(12).fill().map((_, month) => {
    // Monday = 1
    const offset = (new Date(year, month, 1).getDay() + 6) % 7;
    // 0th is the last day of previous month
    const length = new Date(year + (month + 1) % 12, (month + 1) % 12, 0).getDate() - (year % 4 && month === 1 ? 1 : 0);
    const name = monthNames[month];
    const markup = `<ul class="month" data-offset="${offset}" data-length="${length}" data-name="${name}"></ul>`;
    return markup;
  }).join('\n');
};

const createDays = function () {
  document.querySelectorAll('.month').forEach(function (month) {
    month.innerHTML = new Array(parseInt(month.getAttribute('data-length'))).fill().map((_, i) => i + 1).map(d => `<li>${d}</li>`).join('\n');
  });
};

var createCalendar = function (year) {
  setYear(year);
  createMonths(year);
  createDays();
};

// TODO: Update with actual holidays
var holidaysIndiaWB = {
  '2018': [{ // January
    '12': "Vivekananda's B'day",
    '22': 'Saraswati Puja',
    '23': "Netaji's B'day",
    '26': 'Republic Day'
  }, {// February
  }, { // March
    '1': 'Doljatra',
    '2': 'Holi',
    '30': 'Good Friday'
  }, { // April
    '1': 'Bank Holiday',
    '14': "Ambedkar's B'day",
    '15': 'Bengali New Year',
    '30': 'Buddha Purnima'
  }, { // May
    '1': 'May Day',
    '9': "Tagore's B'day"
    // '12': 'Shab-e-Barat',
  }, { // June
    '16': 'Eid al-Fitr'
    // '25': 'Rathajatra',
  }, {// July
  }, { // August
    // '7': 'Rakhi Purnima',
    // '14': 'Janmashtami',
    '15': 'Independence Day',
    '22': 'Eid al-Zuha'
  }, { // September
    '21': 'Muharram'
  }, { // October
    '2': "Gandhi's B'day",
    '8': 'Mahalaya',
    '15': 'Durgasashthi',
    '16': 'Mahasaptami',
    '17': 'Mahaashtami',
    '18': 'Mahanavami',
    '19': 'Vijayadashami',
    '24': 'Lakshmi Puja'
  }, { // November
    '6': 'Kali Puja',
    // '1': 'Bhatridwitiya',
    '23': "Guru Nanak's B'day"
  }, { // December
    // '2': 'Fateha-e-Dwaj Daham',
    '25': 'Christmas Day'
  }]
};

const holidays = {
  'india-wb': holidaysIndiaWB
};

var setHolidays = function (year, region) {
  if (holidays.hasOwnProperty(region) && holidays[region].hasOwnProperty(`${year}`)) {
    const list = holidays[region][`${year}`];
    for (let month in list) {
      for (let day in list[month]) {
        console.log(day, month);
        document.querySelector(`.month[data-name="${monthNames[month]}"] > li:nth-child(${day})`).dataset.holiday = list[month][day];
      }
    }
  }
};

const params = new window.URLSearchParams(window.location.search);
const year = params.has('year') ? parseInt(params.get('year')) : new Date().getFullYear();
const region = params.get('region');

createCalendar(year);
setHolidays(year, region);

//# sourceMappingURL=index.js.map

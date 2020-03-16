export default {
  getNumericalName(number, variants) {
    const numerals = {
      days: ['день', 'дня', 'дней'],
      hours: ['час', 'часа', 'часов'],
      minutes: ['минута', 'минуты', 'минут'],
      seconds: ['секунда', 'секунды', 'секунд'],
      rubles: ['рубль', 'рубля', 'рублей'],
      bug: ['баг', 'бага', 'багов']
    };
    if (!Array.isArray(variants)) {
      variants = numerals[variants] || numerals.bug;
    }
    let temp = number;
    while (number >= 10) {
      number = number % 10;
    }
    while (temp >= 100) {
      temp = temp % 10;
    }
    if (number > 0 && number < 5) {
      if (temp > 10 && temp < 15) {
        return variants[2];
      }
      if (number == 1) return variants[0];
      return variants[1];
    }
    return variants[2];
  },
  getDateString() {
    const WEEK = 604800000;
    const DAY = 86400000;
    let today = new Date();
    let next = new Date(2020, 2, 22, 23, 0, 0);

    return next.getDate() + ' ' + this.matchMonth(next.getMonth());
  },
  getNewDate() {
    const WEEK = 604800000;
    const DAY = 86400000;
    let today = new Date();
    let next = new Date(2020, 2, 22, 23, 0, 0);
    let next_fixed = new Date(2020, 2, 22, 23, 0, 0);
    while (today.valueOf() - next.valueOf() > 0) {
      console.log('tick');
      next = new Date(next.valueOf() + 3 * DAY);
    }
    return next;
  },
  getActualDate() {
    return +this.getDateString().split(' ')[0]
  },
  getActualMonth() {
    return MONTH_NAMES.indexOf(this.getDateString().split(' ')[1])
  },
  matchMonth(month) {
    return MONTH_NAMES[month];
  }
}
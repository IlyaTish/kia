import CF from './common-functions';
import CarsInfo from './cars-info';

const prices = CarsInfo.CARS.map(el => el.price);
const advantages = CarsInfo.CARS.map(el => el.advantage);
const payments = CarsInfo.CARS.map(el => el.payment);
const MAX_ADVANTAGE = Math.max.apply(null, advantages);
const MIN_PRICE = Math.min.apply(null, prices);
const MIN_PAYMENT = Math.min.apply(null, payments);

let today = new Date();
let days_total = Math.floor((new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0)).getTime() / (1000 * 60 * 60 * 24));
let date = CF.getNewDate();

const PHONE = '+7 (495) 785-19-94'.replace(/\s/g, '\u00A0').replace(/-/g, '\u2011');

const PHONE_RAW = PHONE.replace(/\D+/g, "");

export default {
  brand: "Автопродикс KIA",
  phone: PHONE,
  phone_raw: PHONE_RAW,
  end_date: date,
  max_advantage: MAX_ADVANTAGE,
  min_price: MIN_PRICE,
  min_payment: MIN_PAYMENT,
  offices: [
    {
      id: 0,
      short_address: "Санкт-Петербург, ул. Руставели, 55к1",
      name: "Автопродикс KIA",
      address: "<b>Автопродикс KIA</b><br>г. Санкт-Петербург, ул. Руставели, 55к1",
      coords: {
        x: 30.434275,
        y: 60.025385564052776
      }
    }
  ],
  center_coords: {
    x: 30.404198842514205,
    y: 60.01498402133191
  },
  need_agreement: true,
  cKeeper: "undefined"
};
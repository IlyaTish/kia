<template>
  <section class="cars">
    <div class="container">
      <h2 class="cars__title title">Модельный ряд</h2>

      <div class="cars-list">
        <div v-for="car in cars" class="car">
          <div class="container">
            <div class="car__cont">
              <div class="car__img-cont">
                <img :src="car.imgUrl" :alt="car.name">
              </div>
              <div class="car__col-1">
                <button @click="getCall({ type: 'sale', form: 'header', text: 'Получить выгоду' })" class="btn">
                  <span class="btn__inner">Получить выгоду</span>
                </button>
                <button @click="getCall({ type: 'sale', form: 'header', text: 'Получить привелегию\nза тест-драйв' })" class="btn btn--gray">
                  <span class="btn__inner">Привелегии за тест-драйв</span>
                </button>
                <button @click="getCall({ type: 'sale', form: 'header', text: 'Рассчитать кредит' })" class="btn btn--empty">
                  <span class="btn__inner">Рассчитать кредит</span>
                </button>
              </div>

              <div class="car__col-2">
                <ul class="car-advantages">
                  <h3 class="car__title">{{ car.name }}</h3>
                  <li v-if='car.advantage' class="car-advantages__item">
                    <span class="car-advantages__text">Выгода до <span class="bold">{{ car.advantage | delimiter }} р.</span></span>
                  </li>
                  <li class="car-advantages__item">
                    <span class="car-advantages__text">Цена от <span class="bold">{{ car.price | delimiter }} р.</span></span>
                  </li>
                  <li class="car-advantages__item">
                    <span class="car-advantages__text">Купить в кредит за <span class="bold">{{ car.credit | delimiter }} руб./день</span></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Mixin from '../common/mixin';
  import CarsInfo from '../common/cars-info';
  import finance from '../common/finance';
  import CallbackInput from './callback-form/callback-input';

  export default {
    name: 'block-cars',
    mixins: [Mixin, finance],
    components: { CallbackInput },
    data() {
      return {
        cars: CarsInfo.CARS
      };
    },
    methods: {
      scrollTo(where) {
        let newhash = '#' + where;
        history.replaceState(null, null, newhash);
        this.$emit('scrollTo', where);
      },
      getAgreement() {
        this.$emit('getAgreement');
      },
    },
    filters: {
      delimiter: (value) => {
        return value
                .toString()
                .split('')
                .reverse()
                .map((char, i) => char + (i % 3 ? '' : '\u00A0'))
                .reverse()
                .join('');
      }
    }
  };
</script>

<style lang='sass'>
  .cars
    width: 100%
    max-width: 1440px
    margin: 80px auto 0

    &__title
      font-size: 40px

  .cars-list
    margin: 40px 0 0

  .car
    padding: 40px 0
    box-sizing: border-box

    &:nth-of-type(odd)
      background: #FAFAFA
    &:nth-of-type(even)
      background: #FFFFFF

      .car__img-cont
        order: 3

      .car__col-1
        order: 2

      .car__col-2
        order: 1

    &__cont
      display: flex
      justify-content: space-between

    &__img-cont
      width: 100%
      display: flex
      align-items: center
      justify-content: center
      order: 1

      img
        width: 100%

    &__col-1
      width: 100%
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      order: 2

      .btn
        margin: 0 0 5px
        &:last-of-type
          margin: 0

    &__col-2
      width: 100%
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      order: 3

    &__title
      margin: 0 0 24px
      padding: 0 0 10px
      color: #363636
      font-size: 32px
      text-transform: uppercase
      position: relative
      &:after
        width: 100%
        height: 1px
        content: ''
        display: block
        left: 0
        bottom: 0
        position: absolute
        background: #DADADA

  .car-advantages
    padding: 0

    &__item
      margin: 0 0 10px 0
      display: flex
      align-items: baseline
      list-style: none

      &:before
        width: 3px
        height: 3px
        margin: 0 10px 0 5px
        content: ''
        display: block
        top: -4px
        position: relative
        background: #BB162B
        border-radius: 100%

      &:last-of-type
        margin: 0

    &__text
      color: #58595B
      font-family: 'KIAOTFL', sans-serif


  @media (max-width: 1199px)
    .car
      &__img-cont
        order: 1 !important

      &__col-1
        order: 3 !important

      &__col-2
        margin: 0 20px
        order: 2 !important

  @media (max-width: 767px)
    .cars
      &__title
        font-size: 35px

    .car
      &__cont
        flex-direction: column

      &__img-cont
        img
          max-width: 360px

      &__col-2
        margin: 20px 0

    .car-advantages
      &__item
        max-width: 216px
</style>
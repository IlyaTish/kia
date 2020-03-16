<template>
  <div class="timer">
    <div class="container">
      <ul class="timer__cont">
        <li v-for="stat in date_parts" class="timer-num">
          <div class="timer-num__col">
            <span class="timer-time">{{ timeElement(stat)[0] }}{{ timeElement(stat)[1] }}</span>
            <span class="timer__text">{{ stat.name }}</span>
          </div>
        </li>

        <div class="car-to-finish">
          <img src="@/images/car-to-finish.png">
        </div>
      </ul>
    </div>
  </div>
</template>


<script>
  import Mixin from '../common/mixin';
  import CF from '../common/common-functions';

  export default {
    name: 'block-clock',
    components: {},
    directives: {},
    mixins: [Mixin],
    props: [''],
    data() {
      return {
        date_parts: [
          {
            name: 'Дня',
            units: 'days',
            value: 0,
            period: 0,
          },
          {
            name: 'Часов',
            units: 'hours',
            value: 0,
            period: 24,
          },
          {
            name: 'Минут',
            units: 'minutes',
            value: 0,
            period: 60,
          },
          {
            name: 'Секунд',
            units: 'seconds',
            value: 0,
            period: 60,
          }
        ]
      }
    },
    created() {
      let small_part_multiplier = 1,
      time_left = (this.CONSTANTS.end_date.getTime() - Date.now()) / 1000;
      for (let i = this.date_parts.length - 1; i >= 0; --i) {
        let part = this.date_parts[i];
        part.value = Math.floor((time_left / small_part_multiplier) % (part.period || 10000));
        part.name = this.getName(part);
        small_part_multiplier = small_part_multiplier * part.period;
      }
      setInterval(this.clockTick, 1000);
    },
    methods: {
      clockTick() {
        for (let i = this.date_parts.length - 1; i >= 0; --i) {
          if (this.date_parts[i].value > 0) {
            --this.date_parts[i].value;
            this.date_parts[i].name = this.getName(this.date_parts[i]);
            return;
          }
          this.date_parts[i].value = this.date_parts[i].period - 1;
          this.date_parts[i].name = this.getName(this.date_parts[i]);
        }
      },
      getName(date_part) {
        return CF.getNumericalName(date_part.value, date_part.units);
      },
      timeElement(stat) {
        let time = stat.value.toString();
        if (time.length < 2) {
          time = '0' + time;
        }
        return time
      }
    }
  }
</script>

<style lang="sass">
  .timer
    top: -80px
    position: relative
    .container
      display: flex
      justify-content: center

    &__cont
      width: 498px
      margin: 0 auto
      padding: 48px 76px 54px 76px
      display: flex
      position: relative
      font-weight: 100
      text-align: center
      background: #FAFAFA
      box-sizing: border-box

    &__text
      padding-top: 5px
      display: block
      font-size: 18px
      font-family: 'KIAOTFM', sans-serif
      font-weight: 200
      text-transform: uppercase

  .timer-num
    min-width: 64px
    display: flex
    justify-content: space-evenly
    list-style: none

    &:after
      height: 100%
      margin: 0 10px
      content: ':'
      display: inline-block
      color: #000000
      font-size: 50px
      text-align: center

    &:last-of-type
      &:after
        display: none

    &__col
      display: flex
      flex-direction: column
      align-items: center

  .timer-time
    width: 100%
    display: flex
    justify-content: center
    font-size: 48px
    font-family: 'KIAOTFB', sans-serif
    text-align: center
    box-sizing: border-box

  .car-to-finish
    width: 488px
    left: 30px
    bottom: -13px
    position: absolute

    img
      width: 100%


  @media (max-width: 1199px)
    .timer
      top: unset
      bottom: unset
      background: #fafafa

  @media (max-width: 767px)
    .timer
      &__cont
        max-width: 100%
        padding: 30px 0 50px 0
        justify-content: center
        box-sizing: border-box

      &__text
        font-size: 14px

    .timer-num
      min-width: auto
      &:after
        margin: 0 6px
        font-size: 36px

    .timer-time
      font-size: 36px

    .car-to-finish
      width: calc(100% + 40px)
      left: -30px
      bottom: -9px
</style>
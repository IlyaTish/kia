<template>
  <section class="main">
    <div class="container">
      <div class="main__title-cont">
        <h1 class="main__title">Только 3 дня!</h1>
        <p class="main__p">75 автомобилей KIA <br>по специальной цене!</p>
      </div>
      <button @click="getCall({ type: 'sale', form: 'header', text: 'Получить выгоду' })" class="main__btn btn">
        <span class="btn__inner">Получить выгоду</span>
      </button>
      <div class="main-advantages">
        <div class="main-advantages__item">
          <span class="main-advantages__item-text">Кредит от 3,5%!</span>
        </div>
        <div class="main-advantages__item">
          <span class="main-advantages__item-text">Покупка за 1 день!</span>
        </div>
        <div class="main-advantages__item">
          <span class="main-advantages__item-text">ПТС в наличии!</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Mixin from '../common/mixin';
  import finance from '../common/finance';
  import CallbackInput from './callback-form/callback-input';
  import $ from 'jquery';
  import Inputmask from 'inputmask';

  export default {
    name: 'block-main',
    components: { CallbackInput },
    mixins: [Mixin, finance],
    mounted() {
      window.addEventListener('click', event => {
        if (!event.target || !event.target.id) {
          return;
        }
        if (event.target.id === 'btn-common-1') {
          this.getCall({ type: 'sale', form: 'main' });
        }
      });
    },
    watch: {
      device_platform() {
        if (this.swiper) {
          this.swiper.destroy();
          this.swiper = null;
          this.$nextTick(this.initSwiper);
        }
      }
    },
    methods: {
      getAgreement() {
        this.$emit('getAgreement');
      }
    }
  };
</script>

<style lang='sass'>
  .main
    width: 100%
    max-width: 1440px
    min-height: 602px
    padding: 40px 0 0
    margin: 0 auto
    position: relative
    background: url('../images/main-bg.jpg') no-repeat
    background-size: cover
    background-position: center center
    overflow: hidden

    &__title-cont
      display: flex
      align-items: center

    &__title
      padding: 0 50px 0 0
      font-size: 70px
      font-weight: 100
      font-family: 'KIAOTFB', sans-serif
      text-transform: uppercase
      box-sizing: border-box

    &__p
      margin: 0
      padding: 0 0 0 20px
      position: relative
      font-size: 30px
      font-weight: 100
      font-family: 'KIAOTFB', sans-serif
      box-sizing: border-box
      &:before
        width: 6px
        height: 52px
        max-height: 65px
        margin-top: -26px
        content: ''
        display: block
        top: 50%
        left: 0
        position: absolute
        background: #000000

    &__btn
      margin: 16px 0 0

  .main-advantages
    width: 318px
    display: flex
    flex-direction: column
    top: 134px
    right: 0
    position: absolute

    &__item
      width: 100%
      margin: 10px 0 0
      padding: 14px 30px
      position: relative
      background: #BB162B

      &:before
        width: 30px
        height: 100%
        content: ''
        display: block
        top: 0
        left: -30px
        position: absolute
        background: #BB162B
        clip-path: polygon(0 0, 100% 100%, 100% 0)

      &:nth-of-type(2)
        right: -34px

      &:nth-of-type(3)
        right: -69px

    &__item-text
      color: #FFFFFF
      font-size: 24px

  @media (max-width: 1199px)
    .main
      min-height: 424px

      &__title
        font-size: 40px

      &__p
        font-size: 20px

    .main-advantages
      width: 230px
      top: unset
      bottom: 20px

      &__item
        padding: 10px 16px
        margin: 5px 0 0

      &__item-text
        font-size: 18px

  @media (max-width: 767px)
    .main
      min-height: 550px
      padding: 20px 0 0
      background-position: calc(100% + 260px) center

      &__title-cont
        flex-direction: column
        justify-content: center

      &__title
        width: 100%
        padding: 0

      &__p
        width: 100%
        margin: 20px 0 0

      &__btn
        margin: 20px auto 0
</style>
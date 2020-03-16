<template>
  <section class="info">
    <div class="container">
      <div class="info__cont">
        <h2 class="info__title">Получите максимальную выгоду <br>на ваш новый Автомобиль KIA</h2>
        <div class="info__btn-cont">
          <button @click="getCall({ type: 'sale', form: 'header', text: 'Отправить заявку' })" class="info__btn btn">
            <span class="btn__inner">Отправить заявку</span>
          </button>
          <div class="agreement">
            <input type="checkbox" checked id="checkbox-info" class="checkbox">
            <label for="checkbox-info">Я согласен с&nbsp;<a href="" class="popup-link privacy-link">условиями обработки персональных данных</a></label>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Mixin from '../common/mixin';
  import CallbackInput from './callback-form/callback-input';

  export default {
    name: 'block-info',
    components: { CallbackInput },
    mixins: [Mixin],
    data() {
      let offices = this.CONSTANTS.offices;
      return {
        offices: offices
      };
    },
    methods: {
      getAgreement() {
        this.$emit('getAgreement');
      }
    }
  };
</script>

<style lang='sass'>
  .info
    width: 100%
    height: 540px
    max-width: 1440px
    padding: 60px 0 40px
    margin: 0 auto
    background-image: url('../images/info-bg.jpg')
    background-repeat: no-repeat
    background-size: cover
    background-position: center center

    .container
      height: 100%

    &__cont
      height: 100%

    &__title
      color: #FFFFFF
      font-size: 36px
      font-weight: 100

    &__btn-cont
      margin: 40px 0 0

    .agreement
      margin: 14px 0 0

  @media (max-width: 767px)
    .info
      height: 800px
      background-image: url('../images/info-bg-02.jpg')

      &__cont
        display: flex
        flex-direction: column
        justify-content: space-between

      &__title
        font-size: 35px
        br
          display: none

  @media (max-width: 479px)
    .info
      background-position: -440px center
</style>
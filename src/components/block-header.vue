<template>
  <header class="header">
    <div class="container">
      <div class="header__cont">
        <div class="logo">
          <img src="@/images/logos/logo.svg" alt="Официальный дилер KIA">
          <span>Официальный дилер KIA</span>
        </div>

        <div class="header-info">
          <span class="header-info__text bold">Ежедневно с 9:00 до 22:00</span>
          <span class="header-info__text">Москва, 2-я ул. Машиностроения, д. 6</span>
        </div>

        <div class="header-phone">
          <a href="tel:+78122105174" class="header-phone__link bold">+7 (812) 210-51-74</a>
        </div>

        <a class="btn" @click="getCall({ type: 'sale', form: 'header' })">
          <span class="btn__inner">Заказать звонок</span>
        </a>

        <div class="kia-logo">
          <img src="@/images/logos/kia-logo.svg" alt="KIA">
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import Mixin from '../common/mixin';

  export default {
    name: 'block-header',
    components: {},
    directives: {},
    mixins: [Mixin],
    data() {
      let offices = this.CONSTANTS.offices;
      return {
        offices: offices,
        isActive: false
      };
    },
    methods: {
      scrollTo(where) {
        let newhash = '#' + where;
        history.replaceState(null, null, newhash);
        this.$emit('scrollTo', where);
      },
      getCall(data) {
        this.$emit('getCall', data);
      },
      setActive() {
        this.isActive = !this.isActive;
      }
    }
  };
</script>

<style lang='sass'>
  .header
    width: 100%
    max-width: 1440px
    margin: 0 auto
    &__cont
      padding: 20px 0
      display: flex
      align-items: center
      justify-content: space-between

  .header-info
    padding: 6px 0 0
    display: flex
    flex-direction: column

    &__text
      width: 100%
      font-size: 14px
      font-family: 'NeoSansPro-Light', sans-serif
      line-height: 20px

    .bold
      font-family: 'NeoSansPro-Bold', sans-serif

  .header-phone
    &__link
      color: #000000
      font-size: 24px
      text-decoration: none

  .logo
    display: flex
    flex-direction: column
    top: -10px
    position: relative

    img
      width: 100%

    &__text
      top: 4px
      right: -6px
      position: relative
      font-size: 12px
      text-align: right

  .kia-logo
    img
      width: 100%

  @media (max-width: 1199px)
    .header
      .btn
        max-width: 184px

    .logo
      width: 140px
      top: -11px

      &__text
        font-size: 10px

    .header-info
      &__text
        font-size: 12px

    .header-phone
      display: none

    .kia-logo
      width: 75px

  @media (max-width: 767px)
    .header
      &__cont
        padding: 8px 0

      .logo
        top: -6px

      .btn
        display: none

    .header-info
      display: none
</style>
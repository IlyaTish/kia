<template>
  <section class="advantages">
    <div class="container">
      <ul class="advantages-list">
        <li v-for="(item, index) in advantages" @click="getCall({ type: 'sale', form: 'header', text: ``+ item.text + `` })" class="advantages-item">
          <div class="advantages-item__img-cont">
            <img :src="item.img" :alt="item.text">
          </div>
          <span class="advantages-item__text">{{ item.text }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  import Mixin from "../common/mixin";
  import Advantages from "../common/advantages";

  export default {
    name: "block-advantages",
    components: {},
    mixins: [Mixin],
    data() {
      return {
        advantages: Advantages.ITEMS
      }
    },
    methods: {
      getAgreement() {
        this.$emit("getAgreement");
      }
    },
    filters: {
      uppercase: (value) => {
        return value.toUpperCase();
      }
    }
  }
</script>

<style lang="sass">
  .advantages
    max-width: 1440px
    padding: 94px 0
    margin: 0 auto
    box-sizing: border-box

  .advantages-list
    display: flex
    flex-wrap: wrap
    justify-content: space-between

  .advantages-item
    margin: 0 20px
    display: flex
    flex-direction: column
    justify-content: flex-start
    align-items: center
    color: #000000
    text-decoration: none
    list-style: none
    cursor: pointer
    &:hover
      .advantages-item__img
        opacity: 0.6

    &__img-cont
      width: 80px
      height: 80px
      margin: 0 0 4px
      display: flex
      justify-content: center
      align-items: center

    &__img
      max-width: 100%
      max-height: 100%
      transition: .2s

    &__text
      font-size: 18px
      font-family: 'KIAOTFL', sans-serif
      text-align: center
      white-space: pre-line


  @media (max-width: 1199px)
    .advantages
      padding: 70px 0

    .advantages-list
      max-width: 600px
      margin: 0 auto

    .advantages-item
      margin: 20px

  @media (max-width: 767px)
    .advantages
      padding: 98px 0 88px

    .advantages-list
      max-width: 400px

    .advantages-item
      margin: 16px

      &__img-cont
        width: 60px
        height: 60px
        margin: 0 0 10px

      &__img
        max-width: 54px
        max-height: 54px

      &__text
        font-size: 16px

      .man-icon
        max-height: 50px

      .blank-icon
        max-width: 46px

      .exchange-icon
        max-width: 60px
        max-height: 60px

      .tools-icon
        max-width: 50px
        max-height: 50px
</style>
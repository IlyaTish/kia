<template>
  <div class="popup">
    <div @click="hideSelf" class="popup-bg"></div>
    <div class="popup__cont">
      <button @click="hideSelf" class="btn-close"></button>
      <span v-if="data.text" class="popup__title">{{ data.text }}</span>
      <span v-else class="popup__title">Заказать звонок</span>
      <callback-input v-on="$listeners" :data="data"></callback-input>
    </div>
  </div>
</template>

<script>
  import Mask from "../common/mask";
  import Keyup from "../common/keyup";
  import CallbackInput from "./callback-form/callback-input";
  import Mixin from "../common/mixin";

  export default {
    name: "full-get",
    components: { CallbackInput },
    mixins: [Mixin],
    directives: { Mask, Keyup },
    props: ["data"],
    data() {
      return {
        offices: this.CONSTANTS.offices
      };
    },
    methods: {
      hideSelf() {
        this.$emit("close");
      },
      getAgreement() {
        this.$emit("getAgreement");
      }
    }
  };
</script>

<style lang="sass">
  .popup
    width: 100%
    height: 100%
    min-height: 100vh
    padding: 20px
    display: flex
    align-items: center
    align-content: center
    justify-content: center
    top: 0
    left: 0
    position: fixed
    z-index: 99

    &__cont
      width: 320px
      padding: 20px
      display: flex
      flex-wrap: wrap
      align-items: center
      justify-content: center
      position: relative
      background: #FFFFFF
      z-index: 4

    &__text
      text-align: center

    &__title
      width: 100%
      margin: 0 0 10px
      display: inline-block
      font-size: 18px
      text-align: center
      white-space: pre-line

    &__p
      margin: 0
      font-size: 14px
      font-family: "KIAOTFL", sans-serif

    &__input-wrapper
      width: 100%

    .btn
      margin: 14px 0 0
      max-width: 100%

  .popup-form
    width: 100%
    display: flex
    flex-direction: column
    align-items: center

  .popup-bg
    width: 100%
    height: 100%
    min-height: 100vh
    top: 0
    left: 0
    position: absolute
    background: #000000
    opacity: .5
    z-index: 3

  .closer
    position: absolute
    top: 0
    right: 0
    width: 40px
    height: 40px
    cursor: pointer
    font-size: 30px
    display: flex
    justify-content: center
    align-items: center
</style>

<template>
  <form
    name="uekQDls/V4Hl.1uubWpStX0oW6kKNazeUJqt9mCNBBN.i"
    @submit.prevent="submitThis"
    class="popup-form callback-form CKiForm">
    <div class="popup__input-wrapper">
      <input
        name="”tel”"
        type="text"
        placeholder="Ваш телефон"
        :title="'Введите номер телефона'"
        v-model="phone"
        ref="phone"
        v-mask
        required
        class="input">
      <button
        type="submit"
        :disabled="!acceptance"
        :class="[{ disabled: !acceptance }]"
        ref="submitter"
        class="callback-form__btn btn CKFormTrigger">
          <span class="btn__inner">Отправить</span>
      </button>
    </div>
  </form>
</template>

<script>
  import Mixin from "@/common/mixin";
  import Mask from "@/common/mask";
  import Checkbox from "../checkbox";

  export default {
    name: "callback-input",
    components: { Checkbox },
    directives: { Mask },
    mixins: [Mixin],
    props: ["horizontal", "data", "form_class", "map"],
    data() {
      return {
        acceptance: true,
        phone: ""
      };
    },
    computed: {},
    methods: {
      submitThis(event) {
        if (
          this.$refs.phone.validity.valueMissing ||
          !this.$refs.phone.validity.valid
        ) {
          this.$refs.phone.setCustomValidity("Введите номер телефона");
        }
        if (
          !this.$refs.phone.validity.valueMissing &&
          !this.$refs.phone.validity.patternMismatch
        ) {
          this.$refs.phone.setCustomValidity("");
        }
        if (this.acceptance && this.$el.reportValidity()) {
          if (typeof ckForms !== "undefined") {
            ckForms.send(this.$el);
          }

          this.$emit("callBack", {
            phone: this.phone,
            data: this.data
          });
        }
      },
      getAgreement() {
        this.$emit("getAgreement");
      }
    }
  };
</script>
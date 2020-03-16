<template>
  <section class="map">
    <div id="ya-karto" class="ya-karto"></div>

    <div class="map-info">
      <p class="map-info__p">г. Санкт-Петербург, <br>ул. Руставели, 55к1 <br>client-kia@autoprodix.ru</p>
      <a href="tel:+78122105174" class="map-info__phone-link">+7 812 210-51-74</a>
      <button @click="getCall({ type: 'sale', form: 'header', text: 'Отправить заявку' })" class="btn">
        <span class="btn__inner">Отправить заявку</span>
      </button>
      <span class="agreement">
        <input type="checkbox" checked id="checkbox" class="checkbox">
        <label for="checkbox">Я согласен с&nbsp;<a href="#agreement" class="popup-link privacy-link">условиями обработки персональных данных</a></label>
      </span>
    </div>
  </section>
</template>

<script>
  import CallbackInput from "./callback-form/callback-input";
  import Mask from "../common/mask";
  import Mixin from "../common/mixin";
  import Keyup from "../common/keyup";

  export default {
    name: "",
    components: { CallbackInput },
    directives: { Mask, Keyup },
    mixins: [Mixin],
    props: [""],
    data() {
      return {
        info: this.CONSTANTS,
        offices: this.CONSTANTS.offices
      };
    },
    mounted() {
      setTimeout(this.waitYmaps, 5000);
    },
    computed: {},
    methods: {
      initYandexMap() {
        const isMobile = {
          Android: function() {
            return navigator.userAgent.match(/Android/i);
          },
          BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
          },
          iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
          },
          Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
          },
          Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
          },
          any: function() {
            return (
              isMobile.Android() ||
              isMobile.BlackBerry() ||
              isMobile.iOS() ||
              isMobile.Opera() ||
              isMobile.Windows()
            );
          }
        };
        let zoomControl = new ymaps.control.ZoomControl({
          options: {
            position: {
              left: "auto",
              right: 10,
              top: 108
            }
          }
        });

        let center_x = this.CONSTANTS.center_coords.x,
            center_y = this.CONSTANTS.center_coords.y;

        if (this.device_platform === "tablet") {
          center_x = center_x;
          center_y = center_y;
        } else if (this.device_platform === "mobile") {
          center_x = center_x + 0.004;
          center_y = center_y;
        }

        let myMap = new ymaps.Map(
          "ya-karto",
          {
            center: [center_y, center_x],
            zoom: 13,
            controls: []
          },
          {
            searchControlProvider: "yandex#search"
          }
        );
        myMap.controls.add(zoomControl);

        this.offices.forEach(office => {
          myMap.geoObjects.add(
            new ymaps.Placemark(
              [office.coords.y, office.coords.x],
              {
                balloonContent: office.address,
                hintContent: office.name
              },
              {
                iconLayout: "default#image",
                iconImageHref: "map-balloon.svg",
                iconImageSize: [31, 43],
                iconImageOffset: [-26, -43]
              }
            )
          );
        });
        if (isMobile.any() || this.device_platform !== "desktop") {
          myMap.behaviors.disable("drag");
        }
        myMap.behaviors.disable("scrollZoom");
      },
      waitYmaps() {
        let script = document.createElement("script");
        script.src = "//api-maps.yandex.ru/2.1/?load=package.standard&lang=ru_RU";
        document.head.appendChild(script);
        script.onload = () => {
          ymaps.ready(this.initYandexMap);
        };
      }
    }
  };
</script>

<style lang="sass">
  #ya-karto
    height: 444px

  .map
    width: 100%
    max-width: 1440px
    margin: 0 auto
    position: relative
    background-image: url("../images/map.jpg")
    background-repeat: no-repeat
    background-size: cover
    background-position: center center

  .map-info
    width: 370px
    padding: 20px 50px 30px 50px
    top: 85px
    left: 184px
    position: absolute
    box-sizing: border-box
    background: #FFFFFF
    z-index: 2

    &__p
      width: 100%
      font-size: 16px
      font-family: 'KIAOTFL', sans-serif
      line-height: 24px
      text-align: center

    &__phone-link
      width: 100%
      display: inline-block
      color: #000000
      font-size: 18px
      font-family: 'KIAOTFB', sans-serif
      text-align: center
      text-decoration: none

    .btn
      max-width: 100%
      margin: 20px 0 0

    .agreement
      margin: 20px 0 0

      label, a
        color: #000000


  @media (max-width: 1199px)
    .map-info
      top: 80px
      left: 60px

  @media (max-width: 767px)
    .map
      background-size: 2000px
      background-position: 62% center

    .map-info
      width: 100%
      padding: 20px 20px 30px 20px
      position: unset

      .agreement
        justify-content: center
</style>
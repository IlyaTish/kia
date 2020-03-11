/* Functions */

// Variables
const btn        = document.querySelector('.btn'),
      btns       = document.querySelectorAll('.btn'),
      popup      = document.querySelector('.popup'),
      popups     = document.querySelectorAll('.popup'),
      popupLinks = document.querySelectorAll('.popup-link'),
      popupCont  = document.querySelector('.popup__cont');


// Document ready function
const ready = (callback) => {
  if (document.readyState != 'loading') callback();
  else document.addEventListener('DOMContentLoaded', callback);
}


const popupFunc = () => {
  document.addEventListener('click', (e) => {
    const isClickInside = popupCont.contains(e.target);

    if (!isClickInside && popup.classList.contains('active')) {
      popup.classList.remove('active');
    }
  });

  const popupsId   = [],
        btnHrefs   = [];

  [].forEach.call(popups, (popupElem) => {
    popupsId.push(popupElem.getAttribute('id'));
  });

  [].forEach.call(popupLinks, (link) => {
    const linkHref = link.getAttribute('href').replace('#', '');
    btnHrefs.push(linkHref);

    link.addEventListener('click', () => {
      setTimeout(() => {
        popups.forEach(popupElem => {
          if (popupElem.getAttribute('id') === linkHref) {
            popupElem.classList.add('active');

            const btnClose = popupElem.querySelector('.btn-close'),
                  popupBg  = popupElem.querySelector('.popup-bg');

            btnClose.addEventListener('click', () => {
              popupElem.classList.remove('active');
            });

            popupBg.addEventListener('click', () => {
              popupElem.classList.remove('active');
            });
          }
        });
      });
    });
  });
}


function initYandexMapWaitOnHover() {
  function loadScript(url, callback) {
    var script = document.createElement('script');

    if (script.readyState) {
      script.onreadystatechange = function() {
        if (script.readyState == 'loaded' ||
          script.readyState == 'complete') {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      script.onload = function() {
        callback();
      };
    }

    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
  }

  var check_if_load = 0;

  function __load_yandex() {
    if (check_if_load == 0) {
      check_if_load = 1;
      //animationDuration
      loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function() {
        ymaps.load(initYandexMap);
      });
    }
  }

  document.querySelector('#map').addEventListener('touchstart', () => {
    __load_yandex();
  });
  document.querySelector('#map').addEventListener('mouseenter', () => {
    __load_yandex();
  });
  document.querySelector('#map').addEventListener('click', () => {
    __load_yandex();
  });
  document.querySelector('#map').addEventListener('load', () => {
    __load_yandex();
  });
}


function initYandexMap() {
  ymaps.ready(function() {
    var _ball_bg = './assets/images/map-balloon.svg';
    var _ball_Offset = [-26, -43];
    var _ball_Size = [31, 43];

    var myMap = new ymaps.Map('map', {
      center: [60.006635778210416, 30.366376995467448],
      zoom: 12,
      controls: ['zoomControl']
    }, {
      searchControlProvider: 'yandex#search'
    });

    //baloon 1
    var placemark = new ymaps.Placemark([60.025385564052776, 30.434275], {
      balloonContent: '<b>Автопродикс KIA</b><br>Санкт-Петербург, ул. Руставели, 55к1',
      hintContent: 'Автопродикс KIA'
    }, {
      iconLayout: 'default#image',
      iconImageHref: _ball_bg,
      iconImageSize: _ball_Size,
      iconImageOffset: _ball_Offset
    });
    myMap.geoObjects.add(placemark);

    //map instance
    window._map = myMap;
    //new map collection
  });
}



/*  Js after DOM is loaded */
ready(() => {
  popupFunc();
  initYandexMapWaitOnHover();
});
/* Functions */

// Variables
const btn        = document.querySelector('.btn'),
      btns       = document.querySelectorAll('.btn'),
      popup      = document.querySelector('.popup'),
      popups     = document.querySelectorAll('.popup'),
      popupLinks = document.querySelectorAll('.popup-link'),
      popupCont  = document.querySelector('.popup__cont'),
      input      = document.querySelector('.phone-mask');


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


function setCursorPosition(pos, elem) {
  elem.focus();

  if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);

  else if (elem.createTextRange) {
    const range = elem.createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
}

function mask(event) {
  let matrix = '+7 (___) ___ __ __',
      i = 0,
      def = matrix.replace(/\D/g, ''),
      val = this.value.replace(/\D/g, '');

  if (def.length >= val.length) val = def;

  this.value = matrix.replace(/./g, (a) => {
    return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a
  });

  if (event.type == 'blur') {
    if (this.value.length == 2) this.value = ''
  } else setCursorPosition(this.value.length, this)
};




const initYandexMapWaitOnHover = () => {
  const loadScript = (url, callback) => {
    const script = document.createElement('script');

    if (script.readyState) {
      script.onreadystatechange = () => {
        if (script.readyState == 'loaded' ||
          script.readyState == 'complete') {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      script.onload = () => {
        callback();
      };
    }

    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
  }

  let check_if_load = 0;

  const __load_yandex = () => {
    if (check_if_load === 0) {
      check_if_load = 1;
      //animationDuration
      loadScript('https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1', () => {
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
}


const initYandexMap = () => {
  ymaps.ready(() => {
    const _ball_bg = './assets/images/map-balloon.svg',
          _ball_Offset = [-26, -43],
          _ball_Size = [31, 43];

    const myMap = new ymaps.Map('map', {
      center: [60.01498402133191, 30.404198842514205],
      zoom: 13,
      controls: ['zoomControl']
    }, {
      searchControlProvider: 'yandex#search'
    });

    //baloon 1
    const placemark = new ymaps.Placemark([60.025385564052776, 30.434275], {
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

  input.addEventListener('input', mask, false);
  input.addEventListener('focus', mask, false);
  input.addEventListener('blur', mask, false);
});
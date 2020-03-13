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


// Timer function
function getTimeRemaining(endtime) {
  const t       = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000 / 60) % 60),
        hours   = Math.floor((t / (1000 * 60 * 60)) % 24),
        days    = Math.floor(t / (1000 * 60 * 60 * 24));

  return {
    'total':   t,
    'days':    days,
    'hours':   hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

// Timer initialization
function initializeClock(id, endtime) {
  const clock       = document.getElementById(id),
        daysSpan    = clock.querySelector('.days'),
        hoursSpan   = clock.querySelector('.hours'),
        minutesSpan = clock.querySelector('.minutes'),
        secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML    = ('0' + t.days).slice(-2);
    hoursSpan.innerHTML   = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}


// Yandex map onEvent
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


// Init yandex map
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


  const maskOptions = {
    mask: '+{7} (000) 000-00-00'
  };

  const mask = IMask(input, maskOptions)


  const deadline = new Date(Date.parse(new Date()) + 3 * 24 * 60 * 60 * 1000);
  initializeClock('countdown', deadline);
});
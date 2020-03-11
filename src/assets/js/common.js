/* Functions */

// Variables
const btn       = document.querySelector('.btn'),
      btns      = document.querySelectorAll('.btn'),
      popup     = document.querySelector('.popup'),
      popupCont = document.querySelector('.popup__cont');


// Document ready function
const ready = (callback) => {
  if (document.readyState != 'loading') callback();
  else document.addEventListener('DOMContentLoaded', callback);
}

const popupFunc = () => {
  const btnClose = document.querySelector('.btn-close');

  document.addEventListener('click', (e) => {
    const isClickInside = popupCont.contains(e.target);

    if (!isClickInside && popup.classList.contains('active')) {
      popup.classList.remove('active');
    }
  });

  [].forEach.call(btns, (thisBtn) => {
    thisBtn.addEventListener('click', () => {
      setTimeout(() => {
        popup.classList.add('active');
      });
    });
  });

  btnClose.addEventListener('click', () => {
    popup.classList.remove('active');
  });
}


/*  Js after DOM is loaded */
ready(() => {
  popupFunc();
});
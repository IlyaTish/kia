/* Functions */

// Document ready function
const ready = (callback) => {
  if (document.readyState != 'loading') callback();
  else document.addEventListener('DOMContentLoaded', callback);
}


/*  Js after DOM is loaded */
ready(() => {
});
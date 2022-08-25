// ==UserScript==
// @name         Facebook
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Erik s
// @match        https://www.facebook.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=facebook.com
// @grant        none
// ==/UserScript==

function del_element(selector) {
  let element = document.querySelector(selector);
  if (Array.isArray(element)) {
    for (const ele of element) {
      ele.remove();
    }
  } else if (element) {
    element.remove();
  }
}

(function() {
  'use strict';
  del_element('a[href*="/watch/"]');
  setInterval(function rem_elements() {
    del_element('a[href*="/watch/"]');
  }, 500);
})();

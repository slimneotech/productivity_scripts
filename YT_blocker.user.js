// ==UserScript==
// @name         YT blocker
// @namespace    http://tampermonkey.net/
// @version      0.11
// @description  only see subscriptions.
// @author       Peter J.
// @match        https://www.youtube.com/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.4.1.min.js
// @run-at       document-start
// ==/UserScript==


// https://simply-how.com/enhance-and-fine-tune-any-web-page-the-complete-user-scripts-guide
// https://www.tampermonkey.net/documentation.php

let alternativeUrl = "https://l.linklyhq.com/l/5sDG";
let lastRun = 0;
let currentHour = new Date().getHours();
let isBlocked = currentHour > 6 && currentHour < 13;

setInterval(function() {
    let timeDif = new Date().getTime() - lastRun;
    if (timeDif > 5000) {

        let url = window.location.href;
        var link = "";
        if (url.match(/youtube.com\/$/gi)) {
            if (isBlocked) {
                link = "https://l.linklyhq.com/l/5sDG";
            } else {
                link = document.URL.replace(/youtube.com\/$/gi, "youtube.com/feed/subscriptions");
            }
            window.location.href=link;
            lastRun = new Date().getTime();
        }
    }
}, 70);

function del_element(selector) {
    let element = document.querySelector(selector);
    if (element) {
        element.remove();
    }
}

setInterval(function rem_elements() {
    let logo = document.querySelector("#logo");
    if (logo) {
        var newEl = document.createElement('div');
        newEl.innerHTML = "<a href='https://www.youtube.com/feed/subscriptions' style='font-size: 25px;'>Home</a>";
        logo.parentNode.replaceChild(newEl, logo);
    }

    del_element('#sections .ytd-guide-renderer:nth-child(1) .ytd-guide-section-renderer:nth-child(1) paper-item');
    del_element('#items a[title="Home"]');
}, 500);

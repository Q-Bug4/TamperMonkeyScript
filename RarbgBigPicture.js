// ==UserScript==
// @name         RarbgBigPicture
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       Q-Bug4
// @match        https://proxyrarbg.org/torrent/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=proxyrarbg.org
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let imgs = $("#description").find("img")
    for (let i=0;i<imgs.length;i++) {
        let newSrc = imgs[i].src.replace(/22pixx.xyz\/os\//, "22pixx.xyz/o/")
        imgs.eq(i).attr("src", newSrc)
        imgs.eq(i).parent().attr("href", newSrc)
    }
})();

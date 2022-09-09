// ==UserScript==
// @name         RarbgBigPicture
// @namespace    http://tampermonkey.net/
// @version      0.2
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
        .replace(/imgking\.co\/uploads\/small/, "imgking.co/uploads/big")
        .replace(/imgkings\.com\/uploads\/small/, "imgkings.com/uploads/big")
        .replace(/imagerar\.com\/uploads\/small/, "imagerar.com/uploads/big")
        imgs.eq(i).attr("src", newSrc)
        imgs.eq(i).parent().attr("href", newSrc)
    }
})();

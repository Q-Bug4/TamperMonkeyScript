// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Q-Bug4
// @match        https://proxyrarbg.org/torrent/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=proxyrarbg.org
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let imgs = $("#description").find("img")
    for (let i=0;i<imgs.length;i++) {
        let newSrc = imgs[0].src.replace(/22pixx.xyz\/os\//, "22pixx.xyz/o/")
        imgs.eq(i).attr("src", newSrc)
        imgs.eq(i).parent().attr("href", newSrc)
    }
})();

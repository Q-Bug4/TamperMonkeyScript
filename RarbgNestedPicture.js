// ==UserScript==
// @name         Rargb nested picture
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Nest picture inside tables
// @author       Kael
// @run-at document-end
// @match        https://proxyrarbg.org/torrents.php?*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const as = $(".lista2t").find('a[onmouseover]')
    const picUrls = []
    const urlRegex = /(http.+)\\'/
    for (let i =0; i< as.length; i++) {
        let functionText = '' + as[i].onmouseover
        picUrls.push(functionText.match(urlRegex)[1])
    }

    // Replace first col to pictures
    const pictures = $(".lista2t").find('img[alt]')
    // skip the first element
    for (let i =1; i< pictures.length; i++) {
        let picture = pictures[i]
        picture.src = toBigPicture(picUrls[i - 1])
        picture.width = 400
        picture.height = 250
    }
})();

function toBigPicture(url) {
    let parts = url.split("/")
    return url.replace("static/over", `posters2/${parts[parts.length - 1].substr(0,1)}`)
}

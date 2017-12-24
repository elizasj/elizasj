function addLinks() {
    var checkForText = document.querySelector(".base");

    var scaleway = checkForText.innerHTML.match(/\b(Scaleway)\b/gi);
    var grlfr = checkForText.innerHTML.match(/\b(GRLFR)\b/gi);
    var ufp = checkForText.innerHTML.match(/\b(unicornsfartpixels.com)\b/gi);

    let linkedScaleway = `<a class='b-highlight' href='https://www.scaleway.com/'>${scaleway}</a>`
    let linkedGRLFR = `<a class='b-highlight' href='http://graffitiresearchlab.fr/'>${grlfr}</a>`
    let linkedUFP = `<a class='b-highlight' href='http://www.unicornsfartpixels.com/'>${ufp}</a>`

    checkForText.innerHTML = checkForText.innerHTML
                                         .replace(scaleway, linkedScaleway)
                                         .replace(grlfr, linkedGRLFR)
                                         .replace(ufp, linkedUFP)
                                    
  }
  
  window.onload = function() {
    addLinks()
  }
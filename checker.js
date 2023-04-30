// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.blsspainmorocco.net/mar/blsappointment/manageappointment
// @icon         https://www.google.com/s2/favicons?sz=64&domain=blsspainmorocco.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var audio = document.createElement('audio');
    audio.src = '//upload.wikimedia.org/wikipedia/commons/4/40/Toreador_song_cleaned.ogg';
    document.body.appendChild(audio);
    console.log("audio")


    var newPopup = "https://youtu.be/kcT-i9xzC-8";
    var myInterval = setInterval(function() {
        //clicking the first popup's buttons
        document.querySelector('button.btn.btn-success[onclick="return OnUserConsentAccept();"]').click();
        var childInterval = setInterval(function() {
            document.querySelector('button.btn-close').click();
            clearInterval(childInterval)
        }, 1000)
        // filling the city's input
        function handleClick(item) {
            // Do something before clicking the item
            console.log("Clicking item", item);

            // Run the additional code
            document.querySelector('.k-icon.k-i-calendar').click();

            var linkElements = document.querySelectorAll('a.k-link');
            for (var i = 0; i < linkElements.length; i++) {
                var test = window.getComputedStyle(linkElements[i])
                if (test.backgroundColor !== "rgb(255, 191, 0)" && test.backgroundColor !== "rgb(214, 41, 62)" && test.backgroundColor !== "rgb(116, 117, 121)" && test.backgroundColor !== "rgba(0, 0, 0, 0)") {
                    clearInterval(interval);
                    clearInterval(myInterval);
                    window.open(newPopup, "_blank");
                    newPopup = "";
                    audio.play();
                    alert("there is a green spot in " + $(".k-list.k-reset#LocationId_listbox li").eq(i).text()  + " calendar");
                    return;
                } else {
                    console.log("NO GREEN SPOT")
                }
                const okButton = document.querySelector('#commonModal .btn-close');
                okButton.click();
            }
            // Click the item
            const okButton = document.querySelector('.btn-success');
            okButton.click();
            $(".k-list.k-reset#LocationId_listbox li").eq(item).click();
            document.querySelector('.k-list-scroller li').click();
        }

        var i = 0;
        var interval = setInterval(function() {
            if (i < 6) {
                handleClick(i);
                i++;
            } else {
                location.reload()
                clearInterval(interval);
            }
        }, 1000); // delay of 1000 milliseconds (1 second)

        if ($(".k-list.k-reset#LocationId_listbox li").length > 0) {
            console.log("ana hna")
            clearInterval(myInterval);
        }
    }, 5000);

})();

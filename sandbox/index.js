require('./main.scss');

(function () {
    "use strict";

    document.onreadystatechange = function () {
        if (document.readyState == "complete") {
            init()
        }
    }

    function init() {
        animateSocialIcons();
        activateOneLiner();
    }

    function animateSocialIcons() {
        var icons = document.querySelectorAll('.social-links li a i'),
            numOfIcons = icons.length,
            i;
        for (i = 0; i < numOfIcons; i++) {
            (function (i) {
                setTimeout(function () {
                    icons[i].classList.add('animated', 'bounceIn');
                }, i * 100);
            }(i));
        }
    }

    function activateOneLiner() {
        var oneLiners = document.querySelectorAll('.one-liner li'),
            numOfOneLiners = oneLiners.length,
            randomLine = Math.floor(Math.random() * ( (numOfOneLiners) - 1 + 1) + 1);
        oneLiners[(randomLine - 1)].classList.add('animated', 'slideInDown');
    }

}());

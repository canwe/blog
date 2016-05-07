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


}());

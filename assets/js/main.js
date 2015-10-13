// JavaScript Document

var HE = HE || {};
! function(module) {
    // Resizing Function
    var Resizer = function() {
        this.body = document.getElementsByTagName("body")[0];
        this.main = document.getElementsByTagName("main")[0];
        this.footer = document.getElementsByTagName("footer")[0];
        this.bodyPadding = 100;
    }
    Resizer.prototype.setMainPadding = function() {
        newPadding = (document.body.scrollHeight - this.main.scrollHeight -
            this.bodyPadding - this.footer.scrollHeight) / 2
        this.main.style.paddingTop = newPadding + "px";
    }
    var resize = new Resizer();
    resize.setMainPadding();
    window.addEventListener("resize", resize.setMainPadding.bind(resize));
    // Letter Fading Function
    var time, letters;
    letters = document.getElementsByTagName("div");
    var fadeInItem = function(el) {
        time = Math.floor(Math.random() * 1200);
        setTimeout(function() {
            el.classList.add("show");
        }, time);
    }
    for (var i = 0; i < letters.length; i++) {
        fadeInItem((letters[i]));
    }
}(HE);
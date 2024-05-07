$(window).scroll(function () {
    $('.parallax-container').css("background-position","50% " + ($(window).scrollTop() / 2) + "px");
});
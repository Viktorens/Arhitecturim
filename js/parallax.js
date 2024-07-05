$(window).scroll(function () {
    $('.parallax-container').css("background-position","50% " + ($(window).scrollTop() / 3) + "px");
});
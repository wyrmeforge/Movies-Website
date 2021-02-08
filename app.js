function slowScroll(id) {
    $('body').animate({
        scrollTop: $(id).offset().top
    },500);
}
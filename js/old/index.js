function checkScroll() {
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px
    if ($(window).scrollTop() > (startY + 300)) {
        $('.navbar').addClass("scrolled");
    }
    else {
        $('.navbar').removeClass("scrolled");
    }
}
if ($('.navbar').length > 0) {
    $(window).on("scroll load resize", function () {
        checkScroll();
    });
}
$('.home-down').click(function () {
    var shift = 100;
    $('html, body').animate({
        scrollTop: $("#aboutme").offset().top
    }, 1000);
})

function isElementInViewport(el) {
    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */ rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */ );
}
$(window).on('scroll', function () {
    $('video').each(function () {
        if (isElementInViewport($(this))) {
            $(this)[0].play()
        }
        else {
            $(this)[0].pause()
        }
    })
})
function checkScroll() {
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px
    if ($(window).scrollTop() > (startY + 150)) {
        $('.navbar').addClass("scrolled");
        $('.return-up').addClass("show");
    } else {
        $('.navbar').removeClass("scrolled");
        $('.return-up').removeClass("show");
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
        scrollTop: $("#downscroll").offset().top
    }, 200);
})

$('.return-up').click(function () {
    var shift = 100;
    $('html, body').animate({
        scrollTop: 0
    }, 500);
})

$(function () {
    console.log("ready");
    if (window.location.href.indexOf("#downscroll") > -1) {
        $('html, body').animate({
            scrollTop: $("#downscroll").offset().top - 100
        }, 200);
    }

    $('.text-typer').each(function () {
        if (isElementInViewport($(this))) {
            if ($(this)[0].getAttribute('aria-typed') == 'false') {
                console.log("Typing");
                $(this)[0].setAttribute('aria-typed', "true");
                typeWriter($(this)[0])
            }
        }
    })

    $('video').each(function () {
        $(this)[0].load();
        $(this)[0].addEventListener('loadeddata', function () {
            $(this)[0].pause();
        }, false);
    })
});

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
        } else {
            $(this)[0].pause()
        }
    })

    $('.progress-bar.scripted-anim').each(function () {
        if (isElementInViewport($(this))) {
            $(this).width($(this)[0].getAttribute('aria-valuenow') + "%");
        } else {}
    })
    $('.text-typer').each(function () {
        if (isElementInViewport($(this))) {
            if ($(this)[0].getAttribute('aria-typed') == 'false') {
                console.log("Typing");
                $(this)[0].setAttribute('aria-typed', "true");
                typeWriter($(this)[0])

            }
        }

    })
    $('.video-cover').each(function () {
        if (isElementInViewport($(this))) {
            $(this).addClass('mobile-cover')
        }
    })
})

function typeWriter(typeElement) {
    if (parseInt(typeElement.getAttribute('aria-index')) < typeElement.getAttribute('aria-element-content').length) {
        typeElement.innerHTML += typeElement.getAttribute('aria-element-content').charAt(parseInt(typeElement.getAttribute('aria-index')))
        typeElement.setAttribute('aria-index', parseInt(typeElement.getAttribute('aria-index')) + 1);
        if (typeElement.getAttribute('aria-element-content').length > 100) {
            typeElement.innerHTML += typeElement.getAttribute('aria-element-content').charAt(parseInt(typeElement.getAttribute('aria-index')))
            typeElement.setAttribute('aria-index', parseInt(typeElement.getAttribute('aria-index')) + 1);
        }
        if (typeElement.getAttribute('aria-element-content').length > 200) {
            typeElement.innerHTML += typeElement.getAttribute('aria-element-content').charAt(parseInt(typeElement.getAttribute('aria-index')))
            typeElement.setAttribute('aria-index', parseInt(typeElement.getAttribute('aria-index')) + 1);
        }
        if (typeElement.getAttribute('aria-element-content').length > 400) {
            typeElement.innerHTML += typeElement.getAttribute('aria-element-content').charAt(parseInt(typeElement.getAttribute('aria-index')))
            typeElement.setAttribute('aria-index', parseInt(typeElement.getAttribute('aria-index')) + 1);
        }
        if (typeElement.getAttribute('aria-element-content').length > 600) {
            typeElement.innerHTML += typeElement.getAttribute('aria-element-content').charAt(parseInt(typeElement.getAttribute('aria-index')))
            typeElement.setAttribute('aria-index', parseInt(typeElement.getAttribute('aria-index')) + 1);
        }
        setTimeout(typeWriter, parseFloat(typeElement.getAttribute('aria-typer-speed')), typeElement)
    } else {
        typeElement.removeAttribute("style");
    }

}

$('.text-typer').each(function () {
    $(this).height($(this).height())

    if ($(this)[0].getAttribute('aria-typer-speed') === null) {
        $(this)[0].setAttribute('aria-typer-speed', 6);
        if ($(this)[0].innerHTML.length < 100) {

            $(this)[0].setAttribute('aria-typer-speed', 6);
        }
        if ($(this)[0].innerHTML.length < 50) {
            $(this)[0].setAttribute('aria-typer-speed', 12);
        }
        if ($(this)[0].innerHTML.length < 30) {
            $(this)[0].setAttribute('aria-typer-speed', 24);
        }
    }

    $(this)[0].setAttribute('aria-typed', "false");
    $(this)[0].setAttribute('aria-typed', "false");
    $(this)[0].setAttribute('aria-index', 0);
    $(this)[0].setAttribute('aria-element-content', $(this)[0].innerHTML
        .replace("&amp;", "&").replace("&#40;", "/(").replace("&#41;", "/)"))
    $(this)[0].innerHTML = "";
})

$('.text-typer.skip-scroll').each(function () {
    if ($(this)[0].getAttribute('aria-typed') == 'false') {
        console.log("Typing");
        $(this)[0].setAttribute('aria-typed', "true");
        typeWriter($(this)[0])
    }
})

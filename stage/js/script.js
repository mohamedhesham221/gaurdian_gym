$(function () {

    //slick library install
    $('.slick').slick({
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000
    })

    $('.multiple-items').slick({
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000
    })

    $('.autoplay').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    //close introduction form
        $(".close-form").on('click', function () {
            $('.intro-form').fadeOut(500);
        })

        
    //add class active to li
    $(".nav-item").on('click', function () {
        $(this).addClass('active').siblings().removeClass('active')
    })
    //add class to fix navbar
    $(window).scroll(function () {
        $(this).scrollTop() > 50 ? $('#navigation').addClass('fixed-class') : $('#navigation').removeClass('fixed-class')

        var home = $('.navbar-nav .nav-item:first-child'),
        feature = $('.navbar-nav .nav-item:nth-child(2)'),
        testimonial = $('.navbar-nav .nav-item:nth-child(3)'),
        homeOffset =  $('#home').offset().top,
        featureOffset = $('#features').offset().top,
        testimonialOffset = $('#testimonials').offset().top;
        if($(this).scrollTop() >= homeOffset){
            home.addClass('active').siblings().removeClass('active');
        }else{
            home.removeClass('active');
        }

        if($(this).scrollTop() >= featureOffset){
            feature.addClass('active').siblings().removeClass('active');
        }else{
            feature.removeClass('active');
        }

        if($(this).scrollTop() >= testimonialOffset){
            testimonial.addClass('active').siblings().removeClass('active');
        }else{
            testimonial.removeClass('active');
        }

        $(this).scrollTop() > 700 ?
            $("#top").stop(true, false).animate({right: '0'}, 'fast') : $("#top").stop(true, false).animate({
                right: '-50px'
            }, 'fast')
    })
    //scroll to top
    $('#top').on('click',function(){
        $('html,body').stop(true,false).animate({
            scrollTop : 0
        })
    })
    
    // home page
    //icon show to up
    $("#show1,#up1").hover(function () {
        $("#up1").stop(true, false).animate({
            bottom: '10'
        }, 'slow')
        $(this).not("#up1").css('transform', 'scale(1.3)')
    }, function () {
        $("#up1").stop(true, false).animate({
            bottom: '-40px'
        }, 'slow')
        $(this).not("#up1").css('transform', 'unset')
    })

    $("#show2,#up2").hover(function () {
        $("#up2").stop(true, false).animate({
            bottom: '10'
        }, 'slow')
        $(this).not("#up2").css('transform', 'scale(1.3)')
    }, function () {
        $("#up2").stop(true, false).animate({
            bottom: '-40px'
        }, 'slow')
        $(this).not("#up2").css('transform', 'unset')
    })

    $("#show3,#up3").hover(function () {
        $("#up3").stop(true, false).animate({
            bottom: '10'
        }, 'slow')
        $(this).not("#up3").css('transform', 'scale(1.3)')
    }, function () {
        $("#up3").stop(true, false).animate({
            bottom: '-40px'
        }, 'slow')
        $(this).not("#up3").css('transform', 'unset')
    })

    $("#show4,#up4").hover(function () {
        $("#up4").stop(true, false).animate({
            bottom: '10'
        }, 'slow')
        $(this).not("#up4").css('transform', 'scale(1.3)')
    }, function () {
        $("#up4").stop(true, false).animate({
            bottom: '-40px'
        }, 'slow')
        $(this).not("#up4").css('transform', 'unset')
    })


    $("#show5,#up5").hover(function () {
        $("#up5").stop(true, false).animate({
            bottom: '10',
        }, 'slow')
        $(this).not("#up5").css('transform', 'scale(1.3)')
        $(".sold").animate({
            left: '0'
        }, 'slow')
    }, function () {
        $("#up5").stop(true, false).animate({
            bottom: '-40px'
        }, 'slow')
        $(this).not("#up5").css('transform', 'unset')
        $(".sold").animate({
            left: '-100px'
        }, 'slow')
    })


    $("#show6,#up6").hover(function () {
        $("#up6").stop(true, false).animate({
            bottom: '10'
        }, 'slow')
        $(this).not("#up6").css('transform', 'scale(1.3)')
    }, function () {
        $("#up6").stop(true, false).animate({
            bottom: '-40px'
        }, 'slow')
        $(this).not("#up6").css('transform', 'unset')
    })

    //hover animation on images
    $("#overly1").hover(function () {
        $(".item-hover1").stop(true, false).animate({
            bottom: '-160px',
        }, 'slow')
    }, function () {
        $(".item-hover1").stop(true, false).animate({
            bottom: '120px'
        }, 'slow')
    })

    $("#overly2").hover(function () {
        $(".item-hover2").stop(true, false).animate({
            bottom: '-160px'
        }, 'slow')
    }, function () {
        $(".item-hover2").stop(true, false).animate({
            bottom: '120px'
        }, 'slow')
    })

    $("#overly3").hover(function () {
        $(".item-hover3").stop(true, false).animate({
            bottom: '-160px'
        }, 'slow')
    }, function () {
        $(".item-hover3").stop(true, false).animate({
            bottom: '120px'
        }, 'slow')
    })

    $("#overly4").hover(function () {
        $(".item-hover4").stop(true, false).animate({
            bottom: '-160px'
        }, 'slow')
    }, function () {
        $(".item-hover4").stop(true, false).animate({
            bottom: '120px'
        }, 'slow')
    })

    $("#overly5").hover(function () {
        $(".item-hover5").stop(true, false).animate({
            bottom: '-160px'
        }, 'slow')
    }, function () {
        $(".item-hover5").stop(true, false).animate({
            bottom: '120px'
        }, 'slow')
    })

    $("#overly6").hover(function () {
        $(".item-hover6").stop(true, false).animate({
            bottom: '-160px'
        }, 'slow')
    }, function () {
        $(".item-hover6").stop(true, false).animate({
            bottom: '120px'
        }, 'slow')
    })
    //show button to top    
    // end home page

})


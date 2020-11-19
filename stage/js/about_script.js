$(function(){

    //add class to fix navbar
    $(window).scroll(function (){
        $(this).scrollTop() > 50 ? $('#navigation').addClass('fixed-class') : $('#navigation').removeClass('fixed-class')

        $(this).scrollTop() > 700 ?
            $("#top").stop(true, false).animate({right: '0'}, 'fast') : $("#top").stop(true, false).animate({
                right: '-50px'
            }, 'fast')
    });

    //scroll to top
    $('#top').on('click',function(){
        $('html,body').stop(true,false).animate({
            scrollTop : 0
        })
    })
//start about page
$('.count_up_animate').each(function () {
    $(this).animate({
        counter: $(this).text()
    }, {
        duration: 2500,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now))
        }
    })
})
//end about page
})

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
//start contact page
$("#member").on('click change', function () {

    if ($(this).val() === 'member') {
        $('.second__form').slideDown(200)
    } else if (($(this).val() === 'guest')) {
        $('.third__form').slideDown(200)
    }
})

$("#goldenMember").on('click change', function () {

    if ($(this).val() === 'yes') {
        $(".third__form").slideDown(200)
    } else if ($(this).val() === 'no') {
        $(".third__form").slideDown(200)
    }
})

$("#enquiries").on('click change', function () {
    if ($(this).val() === 'membership') {
        $('#showP1,.membership__enq,.ques1-member,.ques2-member,#showP3,.fillForm').slideDown(400)
        $('.membership__enq,#showP3,#showP1').removeClass('hidden')
        $('.group-fitness__enq,.club-hours__enq,#showP2').addClass('hidden')

    } else if ($(this).val() === 'club hours&amenities') {
        $('#showP1,.club-hours__enq,.ques1-club,#showP3,.fillForm').slideDown(400)
        $('.club-hours__enq,#showP3,#showP1').removeClass('hidden')
        $('.group-fitness__enq,.membership__enq,#showP2').addClass('hidden')

    } else if ($(this).val() === 'group fitness') {
        $('#showP1,.group-fitness__enq,.ques1-fit,#showP3,.fillForm').slideDown(400)
        $('.group-fitness__enq,#showP3,#showP1').removeClass('hidden')
        $('.club-hours__enq,.membership__enq,#showP2').addClass('hidden')

    } else if ($(this).val() === 'couching academy') {
        $('#showP2,.fillForm').removeClass('hidden').slideDown(400)
        $('.group-fitness__enq,.club-hours__enq,.membership__enq,#showP1,#showP3').addClass('hidden')

    } else if ($(this).val() === 'careers') {
        $('#showP2,.fillForm').removeClass('hidden').slideDown(400)
        $('.group-fitness__enq,.club-hours__enq,.membership__enq,#showP1,#showP3').addClass('hidden')

    } else if ($(this).val() === 'marketing') {
        $('#showP2,.fillForm').removeClass('hidden').slideDown(400)
        $('.group-fitness__enq,.club-hours__enq,.membership__enq,#showP1,#showP3').addClass('hidden')
    }
})

$(".ques1-member").on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('is-visible')
    if ($(this).hasClass('is-visible')) {
        $('.answer1-member').slideDown(400)
    } else {
        $('.answer1-member').slideUp(400)
    }
})

$(".ques2-member").on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('is-visible')
    if ($(this).hasClass('is-visible')) {
        $('.answer2-member').slideDown(400)
    } else {
        $('.answer2-member').slideUp(400)
    }
})

$(".ques1-club").on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('is-visible')
    if ($(this).hasClass('is-visible')) {
        $('.answer1-club').slideDown(400)
    } else {
        $('.answer1-club').slideUp(400)
    }
})

$(".ques1-fit").on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('is-visible')
    if ($(this).hasClass('is-visible')) {
        $('.answer1-fit').slideDown(400)
    } else {
        $('.answer1-fit').slideUp(400)
    }
})
//end contact page

})

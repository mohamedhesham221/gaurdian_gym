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
    //products page
    $(".fancybox").fancybox({
        openEffect: 'none',
        closeEffect: 'none',
        caption: function () {
            return $(this).attr('title');
        }
    });

    //tabs change items
    $(".tabs a").eq(0).on('click', function () { //selecting items based on tabs  
        $(".clothes,.equip").show();
        $("#clone").text("All")
        if($("#filter").val() === "bestSell"){
            $(".bestSell").show();
            $(".lowSell").hide();
        }
    }).end()
    .eq(1).on('click', function () {
        $(".clothes").show();
        $(".equip").hide();
        $("#clone").text("Clothes")
        if($("#filter").val() === "bestSell"){
            $(".clothes.bestSell").show();
            $(".clothes.lowSell").hide();
        }
    }).end()
    .eq(2).on('click', function () {
        $(".equip").show();
        $(".clothes").hide();
        $("#clone").text("Equipments")
        if($("#filter").val() === "bestSell"){
            $(".equip.bestSell").show();
            $(".equip.lowSell").hide();
        }
    }).end()
    .eq(3).on('click', function () {
        $(".men").show();
        $(".equip,.women").hide()
        $("#clone").text("Men")
        if($("#filter").val() === "bestSell"){
            $(".men.bestSell").show();
            $(".men.lowSell").hide();
        }
    }).end()
    .eq(4).on('click', function () {
        $(".women").show();
        $(".men,.equip").hide();
        $("#clone").text("women")
        if($("#filter").val() === "bestSell"){
            $(".women.bestSell").show();
            $(".women.lowSell").hide();
        }
    })

    //filtering items
    $("#filter").on('click change', function () {          //filtering items based on best sell for items section
        if ($(this).val() === "bestSell") {
            $(".bestSell").show();
            $(".lowSell").hide();
        } else {
            $(".bestSell,.lowSell").show();
        }

        // from a to z
        if ($(this).val() === "A-Z") {                  //arrange items from a to z for items section
            var alphabetA = $(".all");
            alphabetA.sort(function (a, b) {
                return $(a).data('sort-title') < $(b).data('sort-title') ? -1 :
                    $(a).data('sort-title') > $(b).data('sort-title') ? 1 : 0
            });
            $(".new .row").html(alphabetA)
        }

        //from z to a
        if ($(this).val() === "Z-A") {                  //arrange items from z to a for items section
            var alphabetZ = $(".all");
            alphabetZ.sort(function (a, b) {
                return $(a).data('sort-title') > $(b).data('sort-title') ? -1 :
                    $(a).data('sort-title') < $(b).data('sort-title') ? 1 : 0
            });
            $(".new .row").html(alphabetZ)
        }

        //from low to high price
        if ($(this).val() === "low") {                  //arrange items from lower price to higher price for items section
            var all = $(".all");
            all.sort(function (a, b) {
                return parseInt($(a).data('sort')) < parseInt($(b).data('sort')) ? -1 :
                    parseInt($(a).data('sort')) > parseInt($(b).data('sort')) ? 1 : 0
            });
            $(".new .row").html(all);
        }

        //from high to low price
        if ($(this).val() === "high") {                    //arrange items from  higher price to lower price for items section
            var reverseAll = $(".all");
            reverseAll.sort(function (a, b) {
                return parseInt($(a).data('sort')) > parseInt($(b).data('sort')) ? -1 :
                    parseInt($(a).data('sort')) < parseInt($(b).data('sort')) ? 1 : 0
            });
            $(".new .row").html(reverseAll);
        }
    })

    //filtering items align
    $("#filter").on('click change', function () {              //filtering items based on best sell for items-align section
        if ($(this).val() === "bestSell") {
            $(".bestSell").show();
            $(".lowSell").hide();
        } else {
            $(".bestSell,.lowSell").show();
        }

        // from a to z
        if ($(this).val() === "A-Z") {                  //arrange items from a to z for items-align section
            var alphabetA = $(".all2");
            alphabetA.sort(function (a, b) {
                return $(a).data('sort-title') < $(b).data('sort-title') ? -1 :
                    $(a).data('sort-title') > $(b).data('sort-title') ? 1 : 0
            });
            $(".new2 .row").html(alphabetA)
        }

        //from z to a
        if ($(this).val() === "Z-A") {                     //arrange items from z to a for items section
            var alphabetZ = $(".all2");
            alphabetZ.sort(function (a, b) {
                return $(a).data('sort-title') > $(b).data('sort-title') ? -1 :
                    $(a).data('sort-title') < $(b).data('sort-title') ? 1 : 0
            });
            $(".new2 .row").html(alphabetZ)
        }

        //from low to high price
        if ($(this).val() === "low") {                       //arrange items from lower price to higher price for items section
            var all = $(".all2");
            all.sort(function (a, b) {
                return parseInt($(a).data('sort')) < parseInt($(b).data('sort')) ? -1 :
                    parseInt($(a).data('sort')) > parseInt($(b).data('sort')) ? 1 : 0
            });
            $(".new2 .row").html(all);
        }

        //from high to low price
        if ($(this).val() === "high") {                         //arrange items from  higher price to lower price for items section
            var reverseAll = $(".all2");
            reverseAll.sort(function (a, b) {
                return parseInt($(a).data('sort')) > parseInt($(b).data('sort')) ? -1 :
                    parseInt($(a).data('sort')) < parseInt($(b).data('sort')) ? 1 : 0
            });
            $(".new2 .row").html(reverseAll);
        }
    })

    //change items style from square to paragraph
    $(".change-style i:first-child").on('click', function () {
        $(".items").addClass('is-visible').removeClass('is-hidden')
        $(".items-align").addClass('is-hidden').removeClass('is-visible')
        // localStorage.setItem('style1','active');
        // localStorage.removeItem('style2');
    })
    // if(localStorage.getItem('style1') === 'active'){
    //     $(".items").addClass('is-visible').removeClass('is-hidden')
    //     $(".items-align").addClass('is-hidden').removeClass('is-visible')
    //     }

    $(".change-style i:last-child").on('click', function () {
        $(".items-align").addClass('is-visible').removeClass('is-hidden')
        $(".items").addClass('is-hidden').removeClass('is-visible')
        // localStorage.setItem('style2','active');
        // localStorage.removeItem('style1');
    })
    // if(localStorage.getItem('style2') === 'active'){
    //     $(".items-align").addClass('is-visible').removeClass('is-hidden')
    //     $(".items").addClass('is-hidden').removeClass('is-visible')
    // }


    //add bookmark
    $(".fa-star").each(function(){
        $(this).on("click", function () {
            $(this).toggleClass('add-color');

            if ($(this).hasClass('add-color')) {
                $(this).css("opacity", "1")
                $(".modal-body .box ").css("opacity", "1")
                $(".modal-body .bookmark").empty().html("Added To Bookmark")
            } else {
                $(this).css("opacity", ".3")
                $(".modal-body .box ").css("opacity", "0")
                $(".modal-body .bookmark").empty().html("Removed From Bookmark!!!")
            }
        });
    })

    //clone img and title for clothes and equipments
    $(".clothes").find("i[title=more]").on('click', function () {
        $('#cloneImg,#cloneTitle,#clonePrice').empty();
        var el = $(this).parents('.details__item')
        el.siblings().find('img').clone().appendTo('#cloneImg');
        el.find('.item__title').clone().appendTo('#cloneTitle');
        el.find('.price').clone().appendTo('#clonePrice');
        $('.size,label,input[type=radio]').show()
    })

    $(".equip").find("i[title=more]").on('click', function () {
        $('#cloneImg,#cloneTitle,#clonePrice').empty();
        var el = $(this).parents('.details__item')
        el.siblings().find('img').clone().appendTo('#cloneImg');
        el.find('.item__title').clone().appendTo('#cloneTitle');
        el.find('.price').clone().appendTo('#clonePrice');
        $('.size,label,input[type=radio]').hide()
    })

    //uncheck input radio
    $("#cartModal .modal-header .close").on('click', function () {
        $('#cartModal .modal-body .size_input').each(function () {
            $(this).prop('checked', false)
        });
    })

    //remove attribute disabled
    $(".add-items,.add-items-align ").removeAttr('disabled')

    //count up items
    $(".add-items").on('click', function () {
        var inputNum = parseInt($('input[type=number]').val()),
            cartNum = parseInt($('#countItems').text()),
            result = cartNum + inputNum;
        $("#countItems").html(result);

        //add element and show item-table
        if ($(this).siblings().val() !== '0') {
            $('.item-empty').hide();
            $('.item-table').show();

            //calculate prices
            $('#calc').on('click', function () {
                $('.total__price').show();
                var sum = 0;
                $('.sum').each(function () {
                    sum = sum + parseInt(this.innerText);
                    $('.total__price').html(sum + ' ' + 'USD')
                })
            })

            //append result to an element
            var title = $('#cloneTitle').text(),
                val = parseInt($(this).siblings().val()),
                usd = $('#clonePrice').text(),
                totalPrice = parseInt(val) * parseInt(usd),
                el = $('.item-table .modal-body');

            $('<div class="new-element"> <div class="added">' + title + '</div> <div class="added">' + val + '</div> <div class="added sum">' + totalPrice + '</div> <div id="del" class="remove"><i class="fas fa-times"></i></div> </div>').appendTo(el);
            $('input[type=number]').val('0');

        } else if ($(this).siblings().val() == '0') {
            $('.item-empty').show();
            $('.item-table').hide();
            $('<div class="new-element"> <div class="added">' + title + '</div> <div class="added">' + val + '</div> <div class="added sum">' + totalPrice + '</div> <div id="del" class="remove"><i  class="fas fa-times"></i></div> </div>').remove();
        }
    });
    
    // remove element and minus prices and number of items
    $(document).on('click', '#del', function () {
        var cartNum = parseInt($('#countItems').text()),
            valItem = parseInt($(this).parent().find('.added:nth-child(2)').text()),
            minusPrice = parseInt($(".total__price").text()),
            removedPrice = parseInt($(this).parent().find('.sum').text()),
            result = cartNum - valItem;
        resultAfterMinus = minusPrice - removedPrice;
        $("#countItems").html(result);
        $(".total__price").html(resultAfterMinus +' '+ 'USD')
        $(this).parent().remove()
    })

    //count up items-align
    $(".add-items-align").on('click', function () {
        var input = $(this).parent().find($('input[type=number]')).val();
        inputNum = parseInt(input),
            cartNum = parseInt($('#countItems').text()),
            result = cartNum + inputNum;
        $("#countItems").html(result);
        
        //add element and show item-table
        if ( input !== '0') {
            $('.item-empty').hide();
            $('.item-table').show();

            //calculate prices
            $('#calc').on('click', function () {
                $('.total__price').show();
                var sum = 0;
                $('.sum').each(function () {
                    sum = sum + parseInt(this.innerText);
                    $('.total__price').html(sum +' '+'USD')
                })
            })

            //append result to an element
            var title = $(this).parent().find('.cloneTitle').text(),
                val = $(this).parent().find($('input[type=number]')).val(),
                usd = $(this).parent().find('.clonePrice').text(),
                totalPrice = parseInt(val) * parseInt(usd),
                el = $('.item-table .modal-body');

            $('<div class="new-element"> <div class="added">' + title + '</div> <div class="added">' + val + '</div> <div class="added sum">' + totalPrice + '</div> <div id="del" class="remove"><i class="fas fa-times"></i></div> </div>').appendTo(el)
            $('input[type=number]').val('0');

        } else if (input == '0') {
            $('.item-empty').show();
            $('.item-table').hide();
            $('<div class="new-element"> <div class="added"></div> <div class="added"></div> <div class="added sum"></div> <div id="del" class="remove"><i  class="fas fa-times"></i></div> </div>')
        }
    });

    //hide total price
    $('#checkoutModal .modal-header .close').on('click',function(){
        $('.total__price').hide();
    })

    //show item empty
    $('.fa-shopping-cart').on('click', function(){

        if($('.new-element').length){
                    $('#checkoutModal .modal-header .close').on('click',function(){
                        $('.item-empty').show();
                        $('.item-table').hide();    
                    })
                }
    })

    })

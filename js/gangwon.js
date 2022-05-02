(function($){

//     // 네이게이션 : slideDown / slideUp
    
//     $('.main-btn').mouseenter(function(){
//         $('.sub').stop().slideUp(0);
//         $(this).next().stop().slideDown(300);

//         $('.main-btn').removeClass('on');
//         $(this).addClass('on');
//     });

//     $('#nav').mouseleave(function(){
//         $('.sub').stop().slideUp(300,function(){
//             $('.main-btn').delay(1600).removeClass('on');
//         });
//     });
    
// }


    // 부드럽게 보이고 (fadeIn(300))
    // 부드럽게 사라지고 (fadeOut(0))
    
    $('.main-btn').mouseenter(function(){
        $('.sub').stop().fadeOut(0);
        $(this).next().stop().fadeIn(300);

        $('.main-btn').removeClass('on');
        $(this).addClass('on');
    });

    $('#nav').mouseleave(function(){
        $('.sub').stop().fadeOut(300)
            $('.main-btn').removeClass('on');

    });

    let cnt = 0;
    const slideWrap = $('.slide-wrap');
    const n = 3; //전체슬라이드 갯수

    //1.메인슬라이드

    function mainSlide(){
        slideWrap.animate({left: `${-100*cnt}%`}, 600, function(){
            cnt > n-1 ? cnt=0 : cnt;
            slideWrap.animate({left: `${-100*cnt}%`},0);
            console.log(cnt);
        });
    }

    //2.다음카운트 함수

    function nextCount(){
        cnt++;
        mainSlide();
    }



    //3.자동타이머 함수

    function autoTimer(){
        setInterval(nextCount, 1000);
    }
        autoTimer();
    



    $('.gallery-btn').click(function(){
        $('.notice-btn').addClass('on');
        $('.gallery-btn').addClass('on');
        $('.notice-box').addClass('on');
        $('.gallery-box').addClass('on');
    });
    $('.notice-btn').click(function(){
        $('.notice-btn').removeClass('on');
        $('.gallery-btn').removeClass('on');
        $('.notice-box').removeClass('on');
        $('.gallery-box').removeClass('on');
    
    });
            
    
    $('.link-btn').click(function(){
        $('#modal').stop().fadeIn(600);
    });
    $('.close-btn').click(function(){
        $('#modal').stop().fadeOut(600);
    });

    
    })(jQuery);
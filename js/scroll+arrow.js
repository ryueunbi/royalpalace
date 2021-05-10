// var lastScrollTop = 0, delta = 15;

// $(window).scroll(function(){
//     var scrollTop = $(this).scrollTop()
//     if(Math.abs(lastScrollTop - scrollTop) <= delta)
//     return;
//     if ((scrollTop > lastScrollTop) && (lastScrollTop>0)) {
//         $(".nav_un").css("top","-100px");
//     } else {
//         $(".nav_un").css("top","0px");
//     }
//     lastScrollTop = scrollTop;
// });

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 300){
        $('.menu').css('background', 'transparent');
    } else{
        $('.menu').css('background', 'rgba(0, 0, 0, 0.2)');
    }
});


$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 650){
        $('.hamburger-button').css('color', "#fff");
        $('.logo_w').css('display', "block");
        $('.logo_k').css('display', "none");
    } else{
        $('.hamburger-button').css('color', "#000");
        $('.logo_w').css('display', "none");
        $('.logo_k').css('display', "block");
    }
});


// section 04 - arrows 01
$(function(){
    $(".list01").mouseover(function(){
        $(".arrow01").css("color","#111");
        $(".arrow02").css("color","#fff");
        $(".arrow03").css("color","#fff");
    });
    $(".list01").mouseleave(function(){
        $(".arrow01").css("color","#fff");
        $(".arrow02").css("color","#fff");
        $(".arrow03").css("color","#fff");
    });
});

// section 04 - arrows 02
$(function(){
    $(".list02").mouseover(function(){
        $(".arrow01").css("color","#fff");
        $(".arrow02").css("color","#111");
        $(".arrow03").css("color","#fff");
    });
    $(".list02").mouseleave(function(){
        $(".arrow01").css("color","#fff");
        $(".arrow02").css("color","#fff");
        $(".arrow03").css("color","#fff");
    });
});

// section 04 - arrows 03
$(function(){
    $(".list03").mouseover(function(){
        $(".arrow01").css("color","#fff");
        $(".arrow02").css("color","#fff");
        $(".arrow03").css("color","#111");
    });
    $(".list03").mouseleave(function(){
        $(".arrow01").css("color","#fff");
        $(".arrow02").css("color","#fff");
        $(".arrow03").css("color","#fff");
    });
});
// slide 01
$(function(){
    $('#slide-bn01').hover(function(){
        $('.slide-hover-01').css('display','block');
    });
    $('#slide-bn01').mouseleave(function(){
        $('.slide-hover-01').css('display','none');
    });
});
$(function(){
    $('.list01').click(function(){
        $('.slide-hover-01').css('display','block');
    });
    $('.slide-hover-01').click(function(){
        $('.slide-hover-01').css('display','none');
    });
});

// slide 02
$(function(){
    $('#slide-bn02').hover(function(){
        $('.slide-hover-02').css('display','block');
    });
    $('#slide-bn02').mouseleave(function(){
        $('.slide-hover-02').css('display','none');
    });
});
$(function(){
    $('.list02').click(function(){
        $('.slide-hover-02').css('display','block');
    });
    $('.slide-hover-02').click(function(){
        $('.slide-hover-02').css('display','none');
    });
});

// slide 03
$(function(){
    $('#slide-bn03').hover(function(){
        $('.slide-hover-03').css('display','block');
    });
    $('#slide-bn03').mouseleave(function(){
        $('.slide-hover-03').css('display','none');
    });
});
$(function(){
    $('.list03').click(function(){
        $('.slide-hover-03').css('display','block');
    });
    $('.slide-hover-03').click(function(){
        $('.slide-hover-03').css('display','none');
    });
});
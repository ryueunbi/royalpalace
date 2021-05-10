$(function(){
    $('.tab01').click(function(){
        $('.tab01').css('width', '36%');
        $('.tab02').css('width', '20%');
        $('.tab03').css('width', '20%');
        $('.tab04').css('width', '20%');
    });
    $('.tab02').click(function(){
        $('.tab02').css('width', '36%');
        $('.tab01').css('width', '20%');
        $('.tab03').css('width', '20%');
        $('.tab04').css('width', '20%');
    });
    $('.tab03').click(function(){
        $('.tab03').css('width', '36%');
        $('.tab01').css('width', '20%');
        $('.tab02').css('width', '20%');
        $('.tab04').css('width', '20%');
    });
    $('.tab04').click(function(){
        $('.tab04').css('width', '36%');
        $('.tab01').css('width', '20%');
        $('.tab02').css('width', '20%');
        $('.tab03').css('width', '20%');
    });
});
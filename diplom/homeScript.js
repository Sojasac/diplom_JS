var krestBtn1 = document.getElementById('krest1');
var krestBtn2 = document.getElementById('krest2');
var loginModal = document.getElementById('login');
var registrationModal = document.getElementById('registration');
var elems=document.getElementsByClassName('modal1');
var elems2=document.getElementsByClassName('modal2')

$(document).ready(function(){
    $("#secondCarousel").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        autoplay:true,
        autowidth: true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        dots: false
        
    });
  });





$(document).ready(function(){
    $("#firstCarousel").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        autowidth: true,
        
    });
  });


  /*timer*/
  function timer(f_time) {
    function timer_go() {
        var n_time = Date.now();
        var diff = f_time - n_time;
        if(diff <= 0) return false;
        var left = diff % 1000;

        //секунды
        diff = parseInt(diff / 1000);
        var s = diff % 60;
        if(s < 10) {
            $(".seconds_1").html(0);
            $(".seconds_2").html(s);
        }else {
            $(".seconds_1").html(parseInt(s / 10));
            $(".seconds_2").html(s % 10);
        }
        //минуты
        diff = parseInt(diff / 60);
        var m = diff % 60;
        if(m < 10) {
            $(".minutes_1").html(0);
            $(".minutes_2").html(m);
        }else {
            $(".minutes_1").html(parseInt(m / 10));
            $(".minutes_2").html(m % 10);
        }
        //часы
        diff = parseInt(diff / 60);
        var h = diff % 24;
        if(h < 10) {
            $(".hours_1").html(0);
            $(".hours_2").html(h);
        }else {
            $(".hours_1").html(parseInt(h / 10));
            $(".hours_2").html(h % 10);
        }
        //дни
        var d = parseInt(diff / 24);
        if(d < 10) {
            $(".days_1").html(0);
            $(".days_2").html(d);
        }else {
            $(".days_1").html(parseInt(d / 10));
            $(".days_2").html(d % 10);
        }
        setTimeout(timer_go, left);
    }
    setTimeout(timer_go, 0);
}

$(document).ready(function() {
    var time = $(".timer").attr("data-finish");
    timer(time);
});





krestBtn1.addEventListener('click', function(){
    for(var i=0; i<elems.length; i++)elems[i].style.display='none';
});



krestBtn2.addEventListener('click', function(){
    for(var i=0; i<elems2.length; i++)elems2[i].style.display='none';
});


loginModal.addEventListener('click', function(){
    for(var i=0; i<elems.length; i++)elems[i].style.display='block';
});

registrationModal.addEventListener('click', function(){
    for(var i=0; i<elems2.length; i++)elems2[i].style.display='block';
});




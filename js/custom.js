function verificarRespuestas(){

    var total = 17;
    var puntos = 0;

    var myForm = document.forms["quizForm"];
    // var respuestas = ["a", "b", "c", "d", "a", "a", "b", "c", "d", "a" ,"a", "b", "c", "d", "a", "a", "b"]; /* respuestas correctas */

    for(var i = 1; i <= total; i++){
                console.log(puntos);
        if(myForm["p" + i].value === null || myForm["p" + i].value === ""){
            alert("Por favor responde la pregunta " + i);
                        
            return false;
        }else{
            if(myForm["p" + i].value == 'a')
                puntos = puntos;
                        else if(myForm["p" + i].value == 'b')   
                            puntos += 1;
                        else if(myForm["p" + i].value == 'c')   
                            puntos += 2;
                        else if(myForm["p" + i].value == 'd')   
                            puntos += 3;
        }
    }

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = '<h3>Su puntuación es <span>' + puntos +'</span> de <span>'+ total +' puntos</span></h3>';
    
    return false;
}
(function ($) {
    
    // Init Wow
    wow = new WOW( {
        animateClass: 'animated',
        offset:       100
    });
    wow.init();
    
    // Navigation scrolls
    $('.navbar-nav li a').bind('click', function(event) {
        $('.navbar-nav li').removeClass('active');
        $(this).closest('li').addClass('active');
        var $anchor = $(this);
        var nav = $($anchor.attr('href'));
        if (nav.length) {
        $('html, body').stop().animate({				
            scrollTop: $($anchor.attr('href')).offset().top				
        }, 1500, 'easeInOutExpo');
        
        event.preventDefault();
        }
    });
    
    // About section scroll
    $(".overlay-detail a").on('click', function(event) {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900, function(){
            window.location.hash = hash;
        });
    });
    
    //jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($(".navbar-default").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });
    
    // Testimonials Slider
    $('.bxslider').bxSlider({
      adaptiveHeight: true,
      mode: 'fade'
    });
    
})(jQuery);
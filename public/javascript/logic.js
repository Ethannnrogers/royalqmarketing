$(window).scroll(function() {
    var y = $(this).scrollTop();
    
            if (y > 2) {
                $("#nav").addClass("nav-shadow");
            } else {
                $("nav").removeClass("nav-shadow");
            }
})
    

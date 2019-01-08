$(document).ready(function() {
    $(window).scroll(function() {
        var y = $(this).scrollTop();
        
                if (y > 2) {
                    $("nav").addClass("nav-shadow");
                    console.log("scroll");
                } else {
                    $("nav").removeClass("nav-shadow");
                    console.log("unscroll");
                }
    })
        
    
});


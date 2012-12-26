function myImageSizing() {
    var $img = $(".my-image"); 
    $img.height($img.width());  
}

window.onload = myImageSizing;

$(document).ready(function () {
    $(window).resize(function () {myImageSizing()});
    
    $(".menu-item").click(function(e) {
        var target = e.target,
            $target = $(target);
        
        $(".menu-item.active").removeClass("active");
        $(".content.displayed").removeClass("displayed");
        $target.addClass("active");
  
        $("#" + $target.attr('id') + "-content").addClass("displayed");
        /*
        var displayed = "displayed";
        switch ($target.attr('id')) {
            case "about":
                $("#about-content").addClass(displayed);
                break;
            case "github":
                $("#github-content").addClass(displayed);
                break;
            case "android":
                $("#android-content").addClass(displayed);
                break;
            case "resume":
                $("#resume-content").addClass(displayed);
                break;
            case "contact":
                $("#contact-content").addClass(displayed);
                break;
            
        } Speed test this*/      
    });
});





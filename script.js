var supports_history_api = !!(window.history && history.pushState);

function myImageSizing() {
    var $img = $(".my-image"); 
    $img.height($img.width());  
}

function changeState($target, state, $active) {
    if(typeof $active == "undefined") {
        $active = $(".menu-item.active");   
    }
    
    $active.removeClass("active");
    $(".content.displayed").removeClass("displayed");
    $target.addClass("active");
    $("#" + state + "-content").addClass("displayed");
}


//window.onload = myImageSizing;

$(document).ready(function () {
    myImageSizing();
    
    $(window).resize(function () {myImageSizing()});
    
    if (supports_history_api) {
        window.addEventListener('popstate', function(e) {
            var $active = $(".menu-item.active");
            var state = (e.state != null) ? e.state : $active.attr('id');
            changeState($("#" + state), state, $active);      
        });
    }
    
    $(".menu-item").click(function(e) {
        var $target = $(e.target);
        var href = $target.attr('id')
        changeState($target, href);
        
        if (supports_history_api) {
            history.pushState(href, null, href);
            return event.preventDefault();
        }
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





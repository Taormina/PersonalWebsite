var supports_history_api = !!(window.history && history.pushState);

function changeState($target, state, $active) {
    if(typeof $active == "undefined") {
        $active = $(".active");   
    }
    
    $active.removeClass("active");
    $(".content.displayed").removeClass("displayed");
    $target.addClass("active");
    $("#" + state + "-content").addClass("displayed");
}

$(document).ready(function () {
    if (supports_history_api) {
        window.addEventListener('popstate', function(e) {
            var $active = $(".active");
            var state = (e.state != null) ? e.state : "about";
            changeState($("#" + state), state, $active);      
        });
    }

    $(".navbar-inner").click(function(e) {
        var $target = $(e.target);
        var id = $target.attr('id');
        if (!supports_history_api) {
            window.location = id;
        } else {        
            changeState($target, id);
    
            history.pushState(id, null, id);
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





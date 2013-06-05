var supports_history_api = !!(window.history && history.pushState);

function changeState($state) {
    
    $(".active").removeClass("active");
    $(".content.displayed").removeClass("displayed");
    $("#" + $state).addClass("active");
    $("#" + $state + "-content").addClass("displayed");
}

$(document).ready(function () {
    if (supports_history_api) {
        window.addEventListener('popstate', function(e) {
            var state = (e.state != null) ? e.state : "about";
            changeState(state);      
        });
    }

    $(".nav-item").click(function(e) {
        var id = e.currentTarget.id;
        if (!supports_history_api) {
            window.location = id;
        } else {
            changeState(id);
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





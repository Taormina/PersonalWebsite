var supports_history_api = !!(window.history && History.pushState);

function changeState($state) {
    $(".active").removeClass("active");
    $(".content.displayed").removeClass("displayed");
    $("#" + $state).addClass("active");
    $("#" + $state + "-content").addClass("displayed");
}

$(document).ready(function () {
    if (supports_history_api) {
        window.addEventListener('popstate', function(e) {
	var hash = History.getState().hash.substring(1);
	console.log(hash);
            var state = (hash != "") ? hash : "about";

            changeState(state);      
        });
    }

    $(".nav-item").click(function(e) {
        var id = e.currentTarget.id;
        if (!supports_history_api) {
            window.location = id;
        } else {
            changeState(id);
            History.pushState(id, null, id);
            return event.preventDefault();
        }
    });
});





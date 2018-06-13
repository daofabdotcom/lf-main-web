$(document).ready(function() {
    var delay = 15;
    var url = "http://google.com";

    function countdown() {
        setTimeout(countdown, 1000);
        $('#countmesg').html("Redirecting you to home page in " + delay + " seconds.");
        delay--;
        if (delay < 0) {
            window.location = url;
            delay = 0;
        }
    }
    countdown();
});


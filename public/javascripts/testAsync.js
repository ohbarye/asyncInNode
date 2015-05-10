(function($) {
    "use strict"

    var counter = 1;

    $("#send").on("click", function() {

        $("#display").append("<div id='div" + counter + "' class='red'>" + counter + "</div>");

        var selectorId = "#div" + counter
        $.ajax({
            type: "POST",
            url: "/async",
            success: function(result) {
                $(selectorId).removeClass("red");
                $(selectorId).addClass("green");
            }
        });
        counter++;

    });

})($);

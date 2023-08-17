$(document).ready(function() {
    $(".grid_menu").hover(
        function() {
            var itemText = $(this).text();
            $("#hover-text").text("關於");
        },
        function() {
            $("#hover-text").text("關於<br>about");
        }
    );
});
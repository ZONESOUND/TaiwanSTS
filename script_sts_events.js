function toggleMore(index) {
    var moreInfo = $("#more_info" + index);
    var moreBouton = $("#more_bouton" + index);
    if (moreInfo.is(":visible")) {
        moreInfo.slideUp(1000);
        moreBouton.css("transform", "rotate(0)");
    } else {
        moreInfo.slideDown(1000);
        moreInfo.css("display", "block");
        moreBouton.css("transform", "rotate(45deg)");
    }
}

$(document).ready(function() {
    for (var i = 1; i <= 23; i++) {
        $("#more_bouton" + i).on("click", toggleMore.bind(null, i));
    }
});



/*function intro() {
    var moreInfo = $("#intro");
    var moreBouton = $("#intro_bouton");
    if (moreInfo.is(":visible")) {
        moreInfo.slideUp(1000);
        moreBouton.css("transform", "rotate(0)");

    } else {
        moreInfo.slideDown(1000);
        moreInfo.css("display", "block");
        moreBouton.css("transform", "rotate(45deg)");
    }

}*/




function toggleIntro(index) {
    var moreInfo = $("#intro" + index);
    var moreBouton = $("#intro_bouton" + index);
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
    for (var i = 1; i <= 62; i++) {
        $("#intro_bouton" + i).on("click", toggleIntro.bind(null, i));
    }
});





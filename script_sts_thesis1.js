
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

/*--------------------------------------------------------------------*/


function toggleDetail(index) {
    var moreDetail = $("#detail" + index);
    var moreBouton = $("#detail_bouton" + index);
    if (moreDetail.is(":visible")) {
        moreDetail.slideUp(1000);
        moreBouton.css("transform", "rotate(0)");
    } else {
        moreDetail.slideDown(1000);
        moreDetail.css("display", "block");
        moreBouton.css("transform", "rotate(45deg)");
    }
}

$(document).ready(function() {
    for (var i = 1; i <= 12; i++) {
        $("#detail_bouton" + i).on("click", toggleDetail.bind(null, i));
    }
});



function toggleMoredetail(index) {
    var moreMoredetail = $(".moredetail" + index);
    var moreBouton = $("#moredetail_bouton" + index);
    if (moreMoredetail.is(":visible")) {
        moreMoredetail.slideUp(1000);
        moreBouton.css("transform", "rotate(0)");
    } else {
        moreMoredetail.slideDown(1000);
        moreMoredetail.css("display", "block");
        moreBouton.css("transform", "rotate(45deg)");
    }
}

$(document).ready(function() {
    for (var i = 1; i <= 12; i++) {
        $("#moredetail_bouton" + i).on("click", toggleMoredetail.bind(null, i));
    }
});

function toggleIn(index) {
    var moreMoredetail = $("#in" + index);
    var moreBouton = $("#in_bouton" + index);
    if (moreMoredetail.is(":visible")) {
        moreMoredetail.slideUp(1000);
        moreBouton.css("transform", "rotate(0)");
    } else {
        moreMoredetail.slideDown(1000);
        moreMoredetail.css("display", "block");
        moreBouton.css("transform", "rotate(45deg)");
    }
}

$(document).ready(function() {
    for (var i = 1; i <= 12; i++) {
        $("#in_bouton" + i).on("click", toggleIn.bind(null, i));
    }
});
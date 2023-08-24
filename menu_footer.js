/*function menu1() {
    var moreInfo = $("#menu_content1");
    var moreBouton = $("#button_menu1");
    if (moreInfo.is(":visible")) {
        moreInfo.slideUp(1000);
        moreBouton.css("background-color", "#00ADF1");
        moreBouton.css("color", "#fff");

    } else {
        moreInfo.slideDown(1000);
        moreInfo.css("display", "inline-grid");
        moreBouton.css("background-color", "#fff");
        moreBouton.css("color", "#00ADF1");

    }
}*/

function menu1() {
    var moreInfo = $("#menu_content1");
    var moreBouton = $("#button_menu1");

    moreBouton.prop("disabled", true);

    if (moreInfo.is(":visible")) {
        moreInfo.stop(true, true).fadeOut(500, function() {
            moreBouton.prop("disabled", false);
        });
        moreBouton.css("background-color", "#00ADF1");
        moreBouton.css("color", "#fff");
    } else {
        moreInfo.stop(true, true).fadeIn(500, function() {
            moreBouton.prop("disabled", false);
        });
        moreInfo.css("display", "inline-grid");
        moreBouton.css("background-color", "#fff");
        moreBouton.css("color", "#00ADF1");
    }

    if (window.innerWidth >= 600) {
        moreInfo.css("display", "grid");
    } else {
        moreInfo.css("display", "block");
    }
    
    moreBouton.css("background-color", "#fff");
    moreBouton.css("color", "#00ADF1");
}






$(document).ready(function() {
    $("#block_1").hover(
        function() {
            $(this).find(".text_menu").fadeOut(250); 
            $(this).find(".text_menu2").fadeIn(250); 
            $("#block_2").css({ height: '25vw' });
            $("#block_3").css({ height: '25vw' });
            $("#block_1").css({ height: '25vw' });
        },
        function() {
            $(this).find(".text_menu2").fadeOut(250); 
            $(this).find(".text_menu").fadeIn(250); 
            $("#block_2").css({ height: '15vw' });
            $("#block_3").css({ height: '15vw' });
            $("#block_1").css({ height: '15vw' });
        }    
    );
});


$(document).ready(function() {
    $("#block_2").hover(
        function() {
            $(this).find(".text_menu").fadeOut(250); 
            $(this).find(".text_menu2").fadeIn(250); 
            $("#block_2").css({ height: '25vw' });
            $("#block_3").css({ height: '25vw' });
            $("#block_1").css({ height: '25vw' });

        },
        function() {
            $(this).find(".text_menu2").fadeOut(250); 
            $(this).find(".text_menu").fadeIn(250); 
            $("#block_2").css({ height: '15vw' });
            $("#block_3").css({ height: '15vw' });
            $("#block_1").css({ height: '15vw' });        }
    );
});

$(document).ready(function() {
    $("#block_3").hover(
        function() {
            $(this).find(".text_menu").fadeOut(250); 
            $(this).find(".text_menu2").fadeIn(250); 
            $("#block_2").css({ height: '25vw' });
            $("#block_3").css({ height: '25vw' });
            $("#block_1").css({ height: '25vw' });
        },
        function() {
            $(this).find(".text_menu2").fadeOut(250); 
            $(this).find(".text_menu").fadeIn(250); 
            $("#block_2").css({ height: '15vw' });
            $("#block_3").css({ height: '15vw' });
            $("#block_1").css({ height: '15vw' });
        }
    );
});

$(document).ready(function() {
    $("#block_4").hover(
        function() {
            $(this).find(".text_menu").fadeOut(250); 
            $(this).find(".text_menu2").fadeIn(250); 
        },
        function() {
            $(this).find(".text_menu2").fadeOut(250); 
            $(this).find(".text_menu").fadeIn(250); 
        }
    );
});

$(document).ready(function() {
    $("#block_5").hover(
        function() {
            $(this).find(".text_menu").fadeOut(250); 
            $(this).find(".text_menu2").fadeIn(250); 
        },
        function() {
            $(this).find(".text_menu2").fadeOut(250); 
            $(this).find(".text_menu").fadeIn(250); 
        }
    );
});

$(document).ready(function() {
    $("#block_6").hover(
        function() {
            $(this).find(".text_menu").fadeOut(250); 
            $(this).find(".text_menu2").fadeIn(250); 
        },
        function() {
            $(this).find(".text_menu2").fadeOut(250); 
            $(this).find(".text_menu").fadeIn(250); 
        }
    );
});


    $(document).ready(function() {
        function toggleMenuFunctionality() {
            if ($(window).width() <= 600) {
                // 手機模式，使用點擊功能
                $('.text_menu').on('click', function() {
                    $(this).toggleClass('show_submenu');
                });
            } else {
                // 電腦模式，使用 hover 功能
                $('.text_menu').hover(function() {
                    $(this).toggleClass('show_submenu');
                });
            }
        }
        
        toggleMenuFunctionality();
        
        $(window).resize(function() {
            toggleMenuFunctionality();
        });
    });



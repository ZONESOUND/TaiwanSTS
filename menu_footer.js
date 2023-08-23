function menu1() {
    var moreInfo = $("#menu_content1");
    var moreBouton = $("#button_menu1");
    if (moreInfo.is(":visible")) {
        moreInfo.slideUp(1000);
        moreBouton.css("background-color", "#00ADF1");
        moreBouton.css("color", "#fff");

    } else {
        moreInfo.slideDown(1000);
        moreInfo.css("display", "block");
        moreBouton.css("background-color", "#fff");
        moreBouton.css("color", "#00ADF1");

    }
}

$(document).ready(function() {
    $("#block_1").hover(
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
    $("#block_2").hover(
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
    $("#block_3").hover(
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
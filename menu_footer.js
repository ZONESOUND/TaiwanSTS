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
        moreBouton.css("background-color", "#00ADF1");
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
    

}



$(document).ready(function() {
    if ($(window).width() >= 600) {
        $("#block_1").hover(
            function() {
                $(this).find(".text_menu").fadeOut(250); 
                $(this).find(".text_menu2").fadeIn(250); 
                $(this).find(".menu_text_en").fadeIn(250); 

                $("#block_2").css({ height: '25vw' });
                $("#block_3").css({ height: '25vw' });
                $("#block_1").css({ height: '25vw' });
            },
            function() {
                $(this).find(".text_menu2").fadeOut(250); 
                $(this).find(".text_menu").fadeIn(250); 
                $(this).find(".menu_text_en").fadeOut(250); 

                $("#block_2").css({ height: '15vw' });
                $("#block_3").css({ height: '15vw' });
                $("#block_1").css({ height: '15vw' });
            }    
        );
    } else {
        var block1Clicked = false;

        $("#block_1").on('click', function() {
            if (block1Clicked) {
                $(this).find(".text_menu2").fadeOut(250); 
                $(this).find(".text_menu").fadeIn(250); 
                $("#block_1").css({ height: '30vw' });
            } else {
                $(this).find(".text_menu").fadeOut(250); 
                $(this).find(".text_menu2").fadeIn(250); 
                $("#block_1").css({ height: '35vw' });
            }
            block1Clicked = !block1Clicked;
        });
    }
});



$(document).ready(function() {
    if ($(window).width() >= 600) {
        $("#block_2").hover(
            function() {
                $(this).find(".text_menu").fadeOut(250); 
                $(this).find(".text_menu2").fadeIn(250); 
                $(this).find(".menu_text_en").fadeIn(250); 

                $("#block_2").css({ height: '25vw' });
                $("#block_3").css({ height: '25vw' });
                $("#block_1").css({ height: '25vw' });

            },
            function() {
                $(this).find(".text_menu2").fadeOut(250); 
                $(this).find(".text_menu").fadeIn(250); 
                $(this).find(".menu_text_en").fadeOut(250); 

                $("#block_2").css({ height: '15vw' });
                $("#block_3").css({ height: '15vw' });
                $("#block_1").css({ height: '15vw' });
            }
        );
    } else {
        var block2Clicked = false;

        $("#block_2").on('click', function() {
            if (block2Clicked) {
                $(this).find(".text_menu2").fadeOut(250); 
                $(this).find(".text_menu").fadeIn(250); 
                $("#block_2").css({ height: '30vw' });
            } else {
                $(this).find(".text_menu").fadeOut(250); 
                $(this).find(".text_menu2").fadeIn(250); 
                $("#block_2").css({ height: '75vw' });
            }
            block2Clicked = !block2Clicked;
        });
    }
});

$(document).ready(function() {
    if ($(window).width() >= 600) {
        $("#block_3").hover(
            function() {
                $(this).find(".text_menu").fadeOut(250); 
                $(this).find(".text_menu2").fadeIn(250); 
                $(this).find(".menu_text_en").fadeIn(250); 

                $("#block_2").css({ height: '25vw' });
                $("#block_3").css({ height: '25vw' });
                $("#block_1").css({ height: '25vw' });
            },
            function() {
                $(this).find(".text_menu2").fadeOut(250); 
                $(this).find(".text_menu").fadeIn(250); 
                $(this).find(".menu_text_en").fadeOut(250); 

                $("#block_2").css({ height: '15vw' });
                $("#block_3").css({ height: '15vw' });
                $("#block_1").css({ height: '15vw' });
            }
        );
    } else {
        var block3Clicked = false;

        $("#block_3").on('click', function() {
            if (block3Clicked) {
                $(this).find(".text_menu2").fadeOut(250); 
                $(this).find(".text_menu").fadeIn(250); 
                $("#block_3").css({ height: '30vw' });
            } else {
                $(this).find(".text_menu").fadeOut(250); 
                $(this).find(".text_menu2").fadeIn(250); 
                $("#block_3").css({ height: '60vw' });
            }
            block3Clicked = !block3Clicked;
        });
    }
});


$(document).ready(function() {
    if ($(window).width() >= 600) {
        $("#block_4").hover(
            function() {
                $(this).find(".text_menu").fadeOut(250); 
                $(this).find(".text_menu2").fadeIn(250); 
                $(this).find(".menu_text_en").fadeIn(250); 
                $("#block_4").css({ height: '20vw' });
                $("#block_5").css({ height: '20vw' });
                $("#block_6").css({ height: '20vw' });
            },
            function() {
                $(this).find(".text_menu2").fadeOut(250); 
                $(this).find(".text_menu").fadeIn(250); 
                $(this).find(".menu_text_en").fadeOut(250); 
                $("#block_4").css({ height: '15vw' });
                $("#block_5").css({ height: '15vw' });
                $("#block_6").css({ height: '15vw' });
            }
        );
    } else {
        var block4Clicked = false;

        $("#block_4").on('click', function() {
            if (block4Clicked) {
                $(this).find(".text_menu2").fadeOut(250); 
                $(this).find(".text_menu").fadeIn(250); 
                $("#block_4").css({ height: '30vw' });
            } else {
                $(this).find(".text_menu").fadeOut(250); 
                $(this).find(".text_menu2").fadeIn(250); 
                $("#block_4").css({ height: '48vw' });
            }
            block4Clicked = !block4Clicked;
        });
    }
});


$(document).ready(function() {
    if ($(window).width() >= 600) {
        $("#block_5").hover(
            function() {
                $(this).find(".text_menu").fadeOut(250); 
                $(this).find(".text_menu2").fadeIn(250); 
                $(this).find(".menu_text_en").fadeIn(250); 
                $("#block_4").css({ height: '20vw' });
                $("#block_5").css({ height: '20vw' });
                $("#block_6").css({ height: '20vw' });
            },
            function() {
                $(this).find(".text_menu2").fadeOut(250); 
                $(this).find(".text_menu").fadeIn(250); 
                $(this).find(".menu_text_en").fadeOut(250); 
                $("#block_4").css({ height: '15vw' });
                $("#block_5").css({ height: '15vw' });
                $("#block_6").css({ height: '15vw' });
            }   
        );
    } else {
        var block5Clicked = false;

        $("#block_5").on('click', function() {
            if (block5Clicked) {
                $(this).find(".text_menu2").fadeOut(250); 
                $(this).find(".text_menu").fadeIn(250); 
                $("#block_5").css({ height: '30vw' });
            } else {
                $(this).find(".text_menu").fadeOut(250); 
                $(this).find(".text_menu2").fadeIn(250); 
                $("#block_5").css({ height: '30vw' });
            }
            block5Clicked = !block5Clicked;
        });
    }
});

$(document).ready(function() {
    if ($(window).width() >= 600) {
        $("#block_6").hover(
            function() {
                $(this).find(".text_menu").fadeOut(250); 
                $(this).find(".text_menu2").fadeIn(250); 
                $(this).find(".menu_text_en").fadeIn(250); 
                $("#block_4").css({ height: '20vw' });
                $("#block_5").css({ height: '20vw' });
                $("#block_6").css({ height: '20vw' });
            },
            function() {
                $(this).find(".text_menu2").fadeOut(250); 
                $(this).find(".text_menu").fadeIn(250); 
                $(this).find(".menu_text_en").fadeOut(250); 
                $("#block_4").css({ height: '15vw' });
                $("#block_5").css({ height: '15vw' });
                $("#block_6").css({ height: '15vw' });
            }   
        );
    } else {
        var block6Clicked = false;

        $("#block_6").on('click', function() {
            if (block6Clicked) {
                $(this).find(".text_menu2").fadeOut(250); 
                $(this).find(".text_menu").fadeIn(250); 
                $("#block_6").css({ height: '30vw' });
            } else {
                $(this).find(".text_menu").fadeOut(250); 
                $(this).find(".text_menu2").fadeIn(250); 
                $("#block_6").css({ height: '30vw' });
            }
            block6Clicked = !block6Clicked;
        });
    }
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



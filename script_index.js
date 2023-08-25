


$(document).ready(function() {
    if ($(window).width() >= 600) {
        $("#block_1").hover(
            function() {
                $(this).find(".text_menu").fadeOut(250); 
                $(this).find(".text_menu2").fadeIn(250); 
                $(this).find(".menu_text_en").fadeIn(250); 

                $("#block_2").css({ height: '18vw' });
                $("#block_3").css({ height: '18vw' });
                $("#block_1").css({ height: '18vw' });
            },
            function() {
                $(this).find(".text_menu2").fadeOut(250); 
                $(this).find(".text_menu").fadeIn(250); 
                $(this).find(".menu_text_en").fadeOut(250); 

                $("#block_2").css({ height: '18vw' });
                $("#block_3").css({ height: '18vw' });
                $("#block_1").css({ height: '18vw' });
            }    
        );
    } else {
        var block1Clicked = false;

        $("#block_1").on('click', function() {
            if (block1Clicked) {
                $(this).find(".text_menu2").fadeOut(250); 
                $(this).find(".text_menu").fadeIn(250); 
                $("#block_1").css({ height: '40vw' });
            } else {
                $(this).find(".text_menu").fadeOut(250); 
                $(this).find(".text_menu2").fadeIn(250); 
                $("#block_1").css({ height: '40vw' });
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

                $("#block_2").css({ height: '28vw' });
                $("#block_3").css({ height: '28vw' });
                $("#block_1").css({ height: '28vw' });

            },
            function() {
                $(this).find(".text_menu2").fadeOut(250); 
                $(this).find(".text_menu").fadeIn(250); 
                $(this).find(".menu_text_en").fadeOut(250); 

                $("#block_2").css({ height: '18vw' });
                $("#block_3").css({ height: '18vw' });
                $("#block_1").css({ height: '18vw' });
            }
        );
    } else {
        var block2Clicked = false;

        $("#block_2").on('click', function() {
            if (block2Clicked) {
                $(this).find(".text_menu2").fadeOut(250); 
                $(this).find(".text_menu").fadeIn(250); 
                $("#block_2").css({ height: '40vw' });
            } else {
                $(this).find(".text_menu").fadeOut(250); 
                $(this).find(".text_menu2").fadeIn(250); 
                $("#block_2").css({ height: '100vw' });
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

                $("#block_2").css({ height: '24.5vw' });
                $("#block_3").css({ height: '24.5vw' });
                $("#block_1").css({ height: '24.5vw' });
            },
            function() {
                $(this).find(".text_menu2").fadeOut(250); 
                $(this).find(".text_menu").fadeIn(250); 
                $(this).find(".menu_text_en").fadeOut(250); 

                $("#block_2").css({ height: '18vw' });
                $("#block_3").css({ height: '18vw' });
                $("#block_1").css({ height: '18vw' });
            }
        );
    } else {
        var block3Clicked = false;

        $("#block_3").on('click', function() {
            if (block3Clicked) {
                $(this).find(".text_menu2").fadeOut(250); 
                $(this).find(".text_menu").fadeIn(250); 
                $("#block_3").css({ height: '40vw' });
            } else {
                $(this).find(".text_menu").fadeOut(250); 
                $(this).find(".text_menu2").fadeIn(250); 
                $("#block_3").css({ height: '70vw' });
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

            },
            function() {
                $(this).find(".text_menu2").fadeOut(250); 
                $(this).find(".text_menu").fadeIn(250); 
                $(this).find(".menu_text_en").fadeOut(250); 

            }
        );
    } else {
        var block4Clicked = false;

        $("#block_4").on('click', function() {
            if (block4Clicked) {
                $(this).find(".text_menu2").fadeOut(250); 
                $(this).find(".text_menu").fadeIn(250); 
                $("#block_4").css({ height: '40vw' });
            } else {
                $(this).find(".text_menu").fadeOut(250); 
                $(this).find(".text_menu2").fadeIn(250); 
                $("#block_4").css({ height: '60vw' });
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

            },
            function() {
                $(this).find(".text_menu2").fadeOut(250); 
                $(this).find(".text_menu").fadeIn(250); 
                $(this).find(".menu_text_en").fadeOut(250); 

            }   
        );
    } else {
        var block5Clicked = false;

        $("#block_5").on('click', function() {
            if (block5Clicked) {
                $(this).find(".text_menu2").fadeOut(250); 
                $(this).find(".text_menu").fadeIn(250); 
                $("#block_5").css({ height: '40vw' });
            } else {
                $(this).find(".text_menu").fadeOut(250); 
                $(this).find(".text_menu2").fadeIn(250); 
                $("#block_5").css({ height: '40vw' });
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

            },
            function() {
                $(this).find(".text_menu2").fadeOut(250); 
                $(this).find(".text_menu").fadeIn(250); 
                $(this).find(".menu_text_en").fadeOut(250); 
 
            }   
        );
    } else {
        var block6Clicked = false;

        $("#block_6").on('click', function() {
            if (block6Clicked) {
                $(this).find(".text_menu2").fadeOut(250); 
                $(this).find(".text_menu").fadeIn(250); 
                $("#block_6").css({ height: '40vw' });
            } else {
                $(this).find(".text_menu").fadeOut(250); 
                $(this).find(".text_menu2").fadeIn(250); 
                $("#block_6").css({ height: '40vw' });
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



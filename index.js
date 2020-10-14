
const $sliderNav = $('.slider_nav_item');
const $slides = $('.slide');



if(window.matchMedia('(max-width: 767px)').matches) {
    const $burger = $('.burger');
    $burger.click(function () {
        $burger.toggleClass('active');
        $('.nav_menu').slideToggle();
    });
    $('.nav_menu .sub_menu_title').click(function () { 
        $('.nav_menu .sub_menu_items').slideToggle();
    });
    $('.nav_menu .sub_sub_menu_title').click(function () { 
        $('.nav_menu .sub_sub_menu_items').slideToggle();
    });
} else {
    $('.nav_menu .sub_menu').hover(function () {
            $('.nav_menu .sub_menu_items').slideToggle();
        }
    );
    $('.nav_menu .sub_sub_menu').hover(function () {        
        $('.nav_menu .sub_sub_menu_items').fadeToggle(300);
        $('.nav_menu .sub_sub_menu').toggleClass('active');
    }
);
}


$sliderNav.click(function() {
    showSlide($sliderNav.index(this));
});

showSlide(1);

function showSlide(index) {
    $slides
        .removeClass('active')
        .eq(index).addClass('active');
    $sliderNav
        .removeClass('active')
        .eq(index).addClass('active');
}

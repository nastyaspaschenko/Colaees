const $burger = $('.burger');
const $sliderNav = $('.slider_nav_item');
const $slides = $('.slide');

$burger.click(function () { 
    $burger.toggleClass('active');
    $('.mobile_nav_menu').slideToggle();
});
$('.mobile_nav_menu .sub_menu_title').click(function () { 
    $('.mobile_nav_menu .sub_menu_items').slideToggle();
});
$('.mobile_nav_menu .sub_sub_menu_title').click(function () { 
    $('.mobile_nav_menu .sub_sub_menu_items').slideToggle();
});

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

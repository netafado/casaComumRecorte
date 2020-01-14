
/* Activate smart panels */
$('#js-page-content').smartPanel();

$('#car_areas, #car_lideres, .car_areas').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1
    
});

$('.metaProjetos').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    centerMode: false,
    variableWidth: true
});

$('.tramaHeader > *').on('click', function(){
    $('.tramaItem').hide();
    $($(this).data("alvo")).show()
})



$('#carrocelBanner').slick({
    dots: true,
    slidesToShow: 1,
});

$('[aria-label="Close"]').on('click', function(){
    $('#menu-mobile').toggleClass('mostrar')
})

$('[data-target=".js-modal-settings"]').on('click', function(){
    $('#menu-mobile').toggleClass('mostrar')
})





window.addEventListener('load', function(){
    $('.tramaItem:not(:first-child)').hide();

    if(window.innerWidth < 992){
        $('#valores').slick({
            dots: false,
            slidesToShow: 1,
        });
    }
})



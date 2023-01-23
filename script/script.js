$('.hiring__items > div').on('click', function () {
   $(this).children('.hiring__items-icon').toggleClass('hiring-rotate-icon');
   $(this).parent('.hiring__items').toggleClass('change-color')
   $(this).next('.hiring__items-text').slideToggle(300)
})


$('.features__block').on('click', function (){
   $(this).children('.features__title').toggleClass('change-color-title');
   $(this).children('.features__line').toggleClass('change-features-line')
   $(this).children('.features__text').slideToggle(300)
})



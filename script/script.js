$('.hiring__items > div').on('click', function () {
   $(this).children('.hiring__items-icon').toggleClass('hiring-rotate-icon');
   $(this).parent('.hiring__items').toggleClass('change-color')
   $(this).next('.hiring__items-text').slideToggle(300)
})
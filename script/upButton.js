$(window).on('scroll', function(){
   if($(this).scrollTop() > 500){
   $('#up').fadeIn()
}else{
   $('#up').FadeOut()
   }
})

$('#up').on('click', function (){
   $('html, body').animate({scrollTop:0}, 500)
})


$('#hiring-link').on('click', function (e) {
   e.preventDefault();
   $('html, body').animate({scrollTop: $('#hiring').offset().top}, 1000)
})


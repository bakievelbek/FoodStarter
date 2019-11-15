$(document).ready(function () {
  var scroll = 0;
  
  
  
  $('.btn3').click(function () {
     $('.info').slideToggle(600);
  })  
  //
 $(window).scroll(function(){
   console.log($(this).scrollTop());
   if($(this).scrollTop() > 250){
     $('.upScrollArrow').fadeIn();
   }
   else{
    $('.upScrollArrow').fadeOut();
   }
 }) 
 
 $('.upScrollArrow').click(function () {
  $('html').animate({
    scrollTop: 0
  },500)
 })
 
 
 
 $('#b1').click(function(){
   $('html').animate({
     scrollTop: 2068.8
   },500)
 })
 
 
 $('#b2').click(function(){
   $('html').animate({
     scrollTop: 650.4
   },500)
 })
 
 
 $('#b3').click(function(){
   $('html').animate({
     scrollTop: 1400
   },500)
 })
 
 $('#b4').click(function(){
   $('html').animate({
     scrollTop: 2719.19
   },500)
 })
 
 
 $('.carousel-arrow-left').click(function(){
  
  scroll += 355;
  
  $('.carousel').animate({
    left : "" + scroll + "px"
  },500)
  
  if(scroll == 710)
  {$('.carousel-arrow-left').hide()}
  else{
    $('.carousel-arrow-right').show();
    $('.carousel-arrow-left').show();
  }
  
  console.log(scroll);
 })
 
 $('.carousel-arrow-right').click(function(){
   scroll -= 355;
  $('.carousel').animate({
    left : "" + scroll + "px"
  },500)
  
  if(scroll == -710){$('.carousel-arrow-right').hide()}
  else{
    $('.carousel-arrow-right').show();
    $('.carousel-arrow-left').show();
  }
  console.log(scroll);
  
 })

 
 
 
 $('.title').click(function(){
 
   $(this).next().slideDown();
   $('.expand').not($(this).next()).slideUp();
   
 })
 

 $('.menu').children('h4').click(function(){
   
   var className = $(this).attr('id');
   console.log(className);
  
   $('.list').children().hide();
   
    $('.' + className+ '').animate({
    opacity: 'toggle',
    height: 'toggle'
  }, {
    duration: 500, 
    specialEasing: {
      opacity: 'linear',
      height: 'swing'
    }})

 })
 $('.menu2').children('h4').click(function(){
   
   var className = $(this).attr('type');
   console.log(className);
  
   $('.list').children().hide();
   
    $('.' + className+ '').animate({
    opacity: 'toggle',
    height: 'toggle'
  }, {
    duration: 500, 
    specialEasing: {
      opacity: 'linear',
      height: 'swing'
    }})

 })
 
 
 });

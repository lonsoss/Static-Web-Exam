

$(document).ready(function(){

   $(".pop-Up").fadeOut(0)

$(".play-btn,.watch-btn").click(function(){
   $(".pop-Up").fadeIn()
 })

 $(".xmark").click(function(){
   $(".pop-Up").fadeOut()
 })

})

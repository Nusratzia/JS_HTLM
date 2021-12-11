$(function(){
//   Hide box 
   $(".hide") .click(function(){
     $(".box") .hide(1000);
   });
// Show box 
   $(".show") .click(function(){
       $(".box") .show(1000);
   });
// Hide/Show box 
   $(".hide_show") .click (function(){
       $(".box") .toggle(1000);
   });
// Fade in box 
  $(".fade_out") .click (function(){
      $(".box") .fadeOut(1000);
  });
// Fade out box 
  $(".fade_in") .click (function(){
    $(".box") .fadeIn(1000);
});
// Fadein/Fadeout box 
  $(".fadetoggle") .click (function(){
    $(".box") .fadeToggle(1000);
});
// Slide up box 
  $(".slide_up") .click (function(){
      $(".box") .slideUp(1000);
  });
// Slid down box 
  $(".slide_down") .click (function(){
      $(".box") .slideDown(1000);
  });
// Slideup/Slidedown box 
  $(".slidtoggle") .click (function(){
      $(".box") .slideToggle(1000);
  });
// Change box 
   $(".change") .click (function(){
       $(".box") .addClass("another_box")(1000);
   });
// Back box 
  $(".back") .click (function(){
      $(".box") .removeClass("another_box")(1000);
  });

});
// BOX PART END



// COUNT PART START 
  $(function(){
    (function () {
      const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;
    
      //I'm adding this section so I don't have to keep updating this pen every year :-)
      //remove this if you don't need it
      let today = new Date(),
          dd = String(today.getDate()).padStart(2, "0"),
          mm = String(today.getMonth() + 1).padStart(2, "0"),
          yyyy = today.getFullYear(),
          nextYear = yyyy + 1,
          dayMonth = "09/11/",
          birthday = dayMonth + yyyy;
      
      today = mm + "/" + dd + "/" + yyyy;
      if (today > birthday) {
        birthday = dayMonth + nextYear;
      }
      //end
      
      const countDown = new Date(birthday).getTime(),
          x = setInterval(function() {    
    
            const now = new Date().getTime(),
                  distance = countDown - now;
    
            document.getElementById("days").innerText = Math.floor(distance / (day)),
              document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
              document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
              document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
    
            //do something later when date is reached
            if (distance < 0) {
              document.getElementById("headline").innerText = "It's my birthday!";
              document.getElementById("countdown").style.display = "none";
              document.getElementById("content").style.display = "block";
              clearInterval(x);
            }
            //seconds
          }, 0)
      }());
  });
// COUNT PART END 


// COUNTR PART STERT
    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });
// COUNTR PART END 


// IMAGE PART START 
$(document).ready(function(){
  $('.venobox').venobox(); 
});
// IMAGE PART END 


// VIDEO PART START 
// VIDEO PART END



// ICONE PART STARD
//==== Back-to-top button
$(window).on('scroll', function(event) {
  if($(this).scrollTop() > 100){
      $('.back-to-top').fadeIn(200)
  } else{
      $('.back-to-top').fadeOut(200)
  }
});
//==== Animate the scroll to top
$('.back-to-top').on('click', function(event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: 0,
  }, 3000);
});


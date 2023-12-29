(function ($) {
"use strict";

// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "992"
});

// One Page Nav
var top_offset = $('.header-area').height() - 10;
$('.main-menu nav ul').onePageNav({
	currentClass: 'active',
	scrollOffset: top_offset,
});


$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});



// mainSlider
function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: false,
		autoplaySpeed: 10000,
		dots: false,
		fade: true,
		arrows: false,
		responsive: [
			{ breakpoint: 767, settings: { dots: false, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
}
mainSlider();


// owlCarousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
	items:1,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav:true,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:3
        },
        992:{
            items:5
        }
    }
})


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


// isotop
$('.grid').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.grid-item',
	  }
	});
});

// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});




// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// WOW active
new WOW().init();


const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 120);
});


//Menu JS
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
let body = document.querySelector('.header');

menu.onclick = () => {
    menu.classList.toggle('menu-icon');
    navlist.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('close-icon');
    navlist.classList.remove('active');
}





// Login And Register JS

// document.getElementById("loginForm").addEventListener("submit", function(event) {
//     event.preventDefault();

//     // Retrieve form values
//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;

//     // Perform your login or validation logic here
//     console.log("Username:", username);
//     console.log("Password:", password);
// });
// document.getElementById("loginForm").addEventListener("submit", function(event) {
//     event.preventDefault();

//     // Retrieve form values
//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;
//     const rememberMe = document.getElementById("rememberMe").checked;

//     // Perform your login or validation logic here
//     console.log("Username:", username);
//     console.log("Password:", password);
//     console.log("Remember Me:", rememberMe);
// });


// Slider JS
let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } 
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = "translateX(-" + slideIndex + "00%)";
  }

  setTimeout(() => {
    slideIndex++;
    showSlides();
  }, 2500); // Change slide every 2 seconds (adjust as needed)
}
function plusSlide(n) {
    slideIndex += n;
    showSlides();
  }

  document.querySelector('.prev').addEventListener('click', () => plusSlide(-1));
  document.querySelector('.next').addEventListener('click', () => plusSlide(1));
showSlides();


})(jQuery);

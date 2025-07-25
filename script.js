$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
        $('.navbar').toggleClass("underline"); // Add or remove "underline" class
    });
    
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["BTech CSE Graduate, IIITG", "Upgrading my Skills"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["BTech CSE Graduate, IIITG"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: false,
        autoplay: false,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

// var currentIndex = 0;
//   var totalSlides = document.querySelectorAll('.slide').length;
//   var imageSlider = document.getElementById('image-slider');
//   var slideWidth = document.querySelector('.slide').clientWidth;

//   function nextSlide() {
//     if (currentIndex < totalSlides - 1) {
//       currentIndex++;
//       updateSlider();
//     }
//   }

//   function prevSlide() {
//     if (currentIndex > 0) {
//       currentIndex--;
//       updateSlider();
//     }
//   }

//   function updateSlider() {
//     var translateValue = -currentIndex * slideWidth;
//     imageSlider.style.transform = 'translateX(' + translateValue + 'px)';
//   }

document.getElementById("downloadbtn").addEventListener("click", function() {
    // Specify the URL you want to download
    var urlToDownload = "https://drive.google.com/file/d/1B750YsQaKp7KanYhhKY9OE_s-picPqfL/view?usp=drive_link";

    // Fetch the file using the Fetch API
    fetch(urlToDownload)
    .then(response => response.blob())
    .then(blob => {
        // Create a temporary anchor element
        var downloadAnchor = document.createElement('a');
        var objectURL = window.URL.createObjectURL(blob);

        // Set the anchor's href attribute to the Object URL
        downloadAnchor.href = objectURL;

        // Set the download attribute to specify the filename
        downloadAnchor.download = "PiyushPatale_CV.pdf";

        // Programmatically trigger a click event on the anchor element
        downloadAnchor.click();

        // Clean up by revoking the Object URL
        window.URL.revokeObjectURL(objectURL);
    });
});




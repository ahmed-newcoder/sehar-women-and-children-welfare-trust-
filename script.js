// Scroll to Team Section
document.getElementById("scrollToTeam").addEventListener("click", () => {
    document.getElementById("team").scrollIntoView({ behavior: "smooth" });
  });
  
  // Init Parallax
  new Rellax('.hero-section', {
    speed: -3,
    center: true
  });
  
  // Init AOS Animations
  AOS.init({
    duration: 1000,
    once: true
  });
  
  // Init Slick Carousel
  $(document).ready(function(){
    $('.project-carousel').slick({
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 1,
      adaptiveHeight: true
    });
  });
  
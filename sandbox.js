
// smooth scrolling
$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });
});

// navigation style change on scroll

const header = document.querySelector(".header");
const sectionOne= document.querySelector(".home-intro");

const sectionOneOptions = {
  rootMargin: "-65px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      header.classList.add('nav-scrolled');
    } else {
      header.classList.remove('nav-scrolled');
    }
  });

}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);

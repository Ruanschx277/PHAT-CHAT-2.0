
$(document).ready(function() {
 
    function handleCarouselItemClick(slideIndex) {
      $('#carouselExampleDark').carousel(slideIndex);
    }
  
  
    $('.carousel-item').each(function(index) {
      $(this).on('click', function() {
        handleCarouselItemClick(index);
      });
    });
  });
  

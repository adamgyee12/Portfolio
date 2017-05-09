
// Handle page transitions
document.getElementById("giotto").onclick = function () {
    location.href = "http://localhost:8000/giotto.html";
    //https://adamgyee12.github.io/Portfolio/giotto.html
};

document.getElementById("tmp").onclick = function () {
    location.href = "http://localhost:8000/tmp.html";
    //https://adamgyee12.github.io/Portfolio/giotto.html
};

document.getElementById("pawws").onclick = function () {
    location.href = "http://localhost:8000/pawws.html";
    //https://adamgyee12.github.io/Portfolio/giotto.html
};

document.getElementById("esports").onclick = function () {
    location.href = "http://localhost:8000/esports.html";
    //https://adamgyee12.github.io/Portfolio/giotto.html
};

document.getElementById("comic").onclick = function () {
    location.href = "http://localhost:8000/comic_roulette.html";
    //https://adamgyee12.github.io/Portfolio/giotto.html
};

document.getElementById("gaming").onclick = function () {
    location.href = "http://localhost:8000/gaming_editing.html";
    //https://adamgyee12.github.io/Portfolio/giotto.html
};


// Handle scroll to section
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

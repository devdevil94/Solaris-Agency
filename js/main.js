$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    autoHeight: true,
    dots: false,
    nav: true,
    navText: [
      "<button class='nav-btn prev-slide bg-secondary'><i class='fas fa-arrow-left text-white'></i></button>",
      "<button class='nav-btn next-slide bg-secondary'><i class='fas fa-arrow-right text-white'></i></button>"
    ],
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 5
      }
    }
  });

  const navLinks = $(".navbar > .nav-links > a");
  const navCheckbox = $(".navbar > #nav-checkbox");

  navLinks.each((_, link) =>
    $(link).click(function(event) {
      navCheckbox.prop("checked", false);

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top
          },
          800,
          function() {
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          }
        );
      } // End if
    })
  );
});

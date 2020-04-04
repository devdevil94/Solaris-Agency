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

      if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top
          },
          800,
          () => {
            window.location.hash = hash;
          }
        );
      }
    })
  );

  const navFooterLinks = $("footer .nav-footer > li > a");
  navFooterLinks.each((_, link) =>
    $(link).click(function(event) {
      if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top
          },
          800,
          () => {
            window.location.hash = hash;
          }
        );
      }
    })
  );

  AOS.init({
    once: true
  });
});

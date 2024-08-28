const pathName = window.location.pathname;
const pageName = pathName.split("/").pop();

if(pageName === "home.html"){
    document.querySelector(".home").classList.add("activelink");
}

if(pageName === "services.html"){
    document.querySelector(".services").classList.add("activelink");
}

document.addEventListener('DOMContentLoaded', function() {
    const activeMenuCheckbox = document.getElementById('active-menu');
    const sectionsToToggle = document.querySelectorAll('header, section, footer,  .card-heading');
    const navPhone = document.querySelector('.nav_phone');
    const originalDisplay = {};

    // Store the original display style of the elements
    sectionsToToggle.forEach(section => {
        originalDisplay[section.tagName.toLowerCase()] = section.style.display;
    });

    activeMenuCheckbox.addEventListener('change', function() {
        if (activeMenuCheckbox.checked) {
            // Hide sections, header, and footer
            sectionsToToggle.forEach(section => {
                section.style.display = 'none';
            });
            // Display .nav_phone
            navPhone.style.display = 'block';
        } else {
            // Restore original display of elements
            sectionsToToggle.forEach(section => {
                section.style.display = originalDisplay[section.tagName.toLowerCase()];
            });
            navPhone.style.display = 'none';
        }
    });
});



window.addEventListener('scroll', function() {
    let scrolled = window.scrollY;
    let parallaxBg = document.querySelector('.parallax-bg');
    parallaxBg.style.transform = 'translate3d(0, ' + (scrolled * 0.3) + 'px, 0)';
  });

  document.addEventListener('DOMContentLoaded', function() {
    const section = document.querySelector('.about_hera');
    const elementsToAnimate = section.querySelectorAll('.why_us, .why_us_image1 img, .why_us_image2 img, .customer_service');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          elementsToAnimate.forEach(element => {
            element.classList.add('animate');
          });
        } else {
          elementsToAnimate.forEach(element => {
            element.classList.remove('animate');
          });
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    });
  
    observer.observe(section);
  });


  // Intersection Observer to trigger the animation when the section is in view
const aboutUsSection = document.querySelector('.about_us');
const offers = document.querySelectorAll('.hera_identity > div');

const sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      aboutUsSection.classList.add('show');
      offers.forEach((offer, index) => {
        setTimeout(() => {
          offer.classList.add('show');
        }, index * 2000); // Delay each item's animation
      });
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

sectionObserver.observe(aboutUsSection);

  

document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.querySelector('.login_button');
    const contactButton = document.querySelector('.contact_us');

    loginButton.addEventListener('click', function() {
        const loginLink = loginButton.querySelector('a').getAttribute('href');
        window.location.href = loginLink;
    });

    contactButton.addEventListener('click', function() {
        const contactLink = contactButton.querySelector('a').getAttribute('href');
        window.location.href = contactLink;
    });
});
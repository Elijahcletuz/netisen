document.addEventListener('DOMContentLoaded', function() {
    const serviceItems = document.querySelectorAll('.service_item');

    // Intersection Observer options
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.2 // Trigger animation when 50% of the item is in view
    };

    // Function to handle intersection callback
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }

    // Create a new Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe each service item
    serviceItems.forEach(item => {
        observer.observe(item);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const serviceButtons = document.querySelectorAll('.services_button');

    serviceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const serviceLink = button.querySelector('a').getAttribute('href');
            window.location.href = serviceLink;
        });
    });
});


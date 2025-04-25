// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // Sticky header
    const header = document.getElementById('header');
    const scrollThreshold = 100;

    window.addEventListener('scroll', function() {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });

   

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });

    // Form submission
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const formDataObj = {};
            
            formData.forEach((value, key) => {
                formDataObj[key] = value;
            });
            
            // Simulate form submission
            console.log('Form submitted:', formDataObj);
            
            // Show success message (in a real implementation, this would happen after AJAX)
            alert('Merci pour votre message ! Nous vous contacterons très rapidement.');
            
            // Reset form
            contactForm.reset();
        });
    }

    // Animate stats counters when in viewport
    const counters = document.querySelectorAll('.counter');
    let counted = false;

    function animateCounters() {
        if (counted) return;
        
        const statsSection = document.querySelector('#pourquoi-nous');
        const statsSectionTop = statsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (statsSectionTop < windowHeight - 100) {
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const increment = target / 50; // Speed of counting
                
                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(() => animateCounters(), 20);
                } else {
                    counter.innerText = target;
                }
            });
            
            counted = true;
        }
    }

    window.addEventListener('scroll', animateCounters);
    animateCounters(); // Initial check in case elements are already in viewport

    // Add fade-in animation to elements when they come into view
    const fadeElements = document.querySelectorAll('.fade-in-element');
    
    function checkFadeElements() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 50) {
                element.classList.add('fade-in');
            }
        });
    }
    
    window.addEventListener('scroll', checkFadeElements);
    checkFadeElements(); // Initial check
});
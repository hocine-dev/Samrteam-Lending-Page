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
            
            Swal.fire({
                title: 'Envoi en cours...',
                text: 'Merci de patienter pendant l’envoi de votre message.',
                allowOutsideClick: false,
                didOpen: () => {
                  Swal.showLoading();
                }
              });

            emailjs.sendForm('service_de7cpil', 'template_07hwe8c', contactForm)
            .then(() => {
                Swal.fire({
                    title: 'Merci pour votre message !',
                    text: 'Nous vous contacterons très rapidement.',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true
                });
            }).catch((error) => {
                console.error('Erreur EmailJS:', error);
                Swal.fire({
                    title: 'Erreur',
                    text: 'Une erreur est survenue lors de l’envoi du message.',
                    icon: 'error',
                    confirmButtonColor: '#ef4444'
                });
            }).finally(() => {
                // Reset form
                contactForm.reset();
            });
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
      AOS.init({ once: true, duration: 600 });
    
// Référence du bouton
const backToTopBtn = document.getElementById('back-to-top');

// Afficher/masquer le bouton au scroll
window.addEventListener('scroll', () => {
if (window.scrollY > 200) {
  backToTopBtn.classList.remove('invisible', 'opacity-0', 'translate-y-4');
  backToTopBtn.classList.add('visible', 'opacity-100', 'translate-y-0');
} else {
  backToTopBtn.classList.add('invisible', 'opacity-0', 'translate-y-4');
  backToTopBtn.classList.remove('visible', 'opacity-100', 'translate-y-0');
}
});

// Scroll fluide vers le haut
backToTopBtn.addEventListener('click', () => {
window.scrollTo({ top: 0, behavior: 'smooth' });
});




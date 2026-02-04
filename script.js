'use strict';

/**
 * O-Yo Frozen Yogurts - Interaction Script
 * Minimal vanilla JS for enhanced UX and performance.
 */

document.addEventListener('DOMContentLoaded', () => {
    initSmoothScrolling();
    initScrollReveal();
    initFooterInteractions();
    handleHeaderScroll();
});

/**
 * Enhanced smooth scrolling for anchor links 
 * (though currently single-page, it prepares for future sections)
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Simple Scroll Reveal effect for the Content Card
 * Adds a "fade-up" effect as the user scrolls to the brand vision
 */
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const contentCard = document.querySelector('.content-card');
    if (contentCard) {
        contentCard.style.opacity = '0';
        contentCard.style.transform = 'translateY(30px)';
        contentCard.style.transition = 'all 0.8s ease-out';
        observer.observe(contentCard);
    }
}

/**
 * Adds an active state to the header when scrolling
 */
function handleHeaderScroll() {
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(123, 44, 191, 0.15)';
            header.style.height = '70px';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
            header.style.height = '80px';
        }
    });
}

/**
 * Placeholder for future interactions (e.g. social link tracking or analytics)
 */
function initFooterInteractions() {
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href') === '#') {
                console.log(`O-Yo: Social channel "${link.innerText}" coming soon.`);
                // For demonstration: show mini-toast or alert
            }
        });
    });
}

/**
 * Performance Optimization:
 * Log load time to console for Vercel performance monitoring
 */
window.addEventListener('load', () => {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    console.log(`%c O-Yo Frozen Yogurt %c Page loaded in ${loadTime}ms`, 
        'background: #ff4d91; color: #fff; padding: 2px 5px; border-radius: 3px;', 
        'color: #7b2cbf;');
});
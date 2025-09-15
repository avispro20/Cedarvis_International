/**
 * Master JavaScript - Single Source of Truth for Scripts
 * Handles all global functionality across the website
 */

// ============================================
// NAVBAR FUNCTIONALITY
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
});

// ============================================
// NEWSLETTER FORM
// ============================================
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const email = e.target.querySelector('input[type="email"]').value;
        const button = e.target.querySelector('button[type="submit"]');
        const originalText = button.textContent;
        
        button.textContent = 'Subscribing...';
        button.disabled = true;
        
        try {
            const response = await axios.post('/api/newsletter', { email });
            
            if (response.data.success) {
                showNotification('Successfully subscribed to newsletter!', 'success');
                e.target.reset();
            } else {
                showNotification('Failed to subscribe. Please try again.', 'error');
            }
        } catch (error) {
            showNotification('An error occurred. Please try again.', 'error');
        } finally {
            button.textContent = originalText;
            button.disabled = false;
        }
    });
}

// ============================================
// CONTACT FORM
// ============================================
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        const button = e.target.querySelector('button[type="submit"]');
        const originalText = button.textContent;
        
        button.textContent = 'Sending...';
        button.disabled = true;
        
        try {
            const response = await axios.post('/api/contact', data);
            
            if (response.data.success) {
                showNotification('Message sent successfully!', 'success');
                e.target.reset();
            } else {
                showNotification('Failed to send message. Please try again.', 'error');
            }
        } catch (error) {
            showNotification('An error occurred. Please try again.', 'error');
        } finally {
            button.textContent = originalText;
            button.disabled = false;
        }
    });
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-24 right-4 z-50 max-w-sm p-4 rounded-lg shadow-lg transform translate-x-full transition-transform duration-300`;
    
    const typeStyles = {
        success: 'bg-green-100 text-green-800 border border-green-300',
        error: 'bg-red-100 text-red-800 border border-red-300',
        warning: 'bg-yellow-100 text-yellow-800 border border-yellow-300',
        info: 'bg-blue-100 text-blue-800 border border-blue-300'
    };
    
    notification.className += ` ${typeStyles[type]}`;
    
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        warning: 'fa-exclamation-triangle',
        info: 'fa-info-circle'
    };
    
    notification.innerHTML = `
        <div class="flex items-center">
            <i class="fas ${icons[type]} mr-3 text-xl"></i>
            <p>${message}</p>
            <button onclick="this.parentElement.parentElement.remove()" class="ml-4 text-xl hover:opacity-70">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// ============================================
// SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#0') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offset = 100;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ============================================
// LAZY LOADING IMAGES
// ============================================
const lazyImages = document.querySelectorAll('img[data-src]');
if (lazyImages.length > 0) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                img.classList.add('animate-fade-in');
                observer.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ============================================
// ANIMATION ON SCROLL
// ============================================
const animateElements = document.querySelectorAll('[data-animate]');
if (animateElements.length > 0) {
    const animateObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const animation = element.dataset.animate;
                const delay = element.dataset.delay || 0;
                
                setTimeout(() => {
                    element.classList.add(`animate-${animation}`);
                }, delay);
                
                animateObserver.unobserve(element);
            }
        });
    }, {
        threshold: 0.1
    });
    
    animateElements.forEach(el => animateObserver.observe(el));
}

// ============================================
// MODAL FUNCTIONALITY
// ============================================
window.openModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

window.closeModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

// Close modal on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal:not(.hidden)').forEach(modal => {
            modal.classList.add('hidden');
        });
        document.body.style.overflow = '';
    }
});

// ============================================
// FORM VALIDATION
// ============================================
const forms = document.querySelectorAll('form[data-validate]');
forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('border-red-500');
                
                // Remove error styling on input
                field.addEventListener('input', function() {
                    this.classList.remove('border-red-500');
                }, { once: true });
            }
        });
        
        if (!isValid) {
            e.preventDefault();
            showNotification('Please fill in all required fields', 'warning');
        }
    });
});

// ============================================
// COUNTER ANIMATION
// ============================================
const counters = document.querySelectorAll('[data-counter]');
if (counters.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.counter);
                const duration = parseInt(counter.dataset.duration) || 2000;
                const increment = target / (duration / 16);
                let current = 0;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    }, {
        threshold: 0.5
    });
    
    counters.forEach(counter => counterObserver.observe(counter));
}

// ============================================
// COPY TO CLIPBOARD
// ============================================
window.copyToClipboard = function(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Copied to clipboard!', 'success');
    }).catch(() => {
        showNotification('Failed to copy', 'error');
    });
}

// ============================================
// THEME TOGGLE (if needed)
// ============================================
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    themeToggle.addEventListener('click', function() {
        const theme = document.documentElement.getAttribute('data-theme');
        const newTheme = theme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        const icon = themeToggle.querySelector('i');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
window.debounce = function(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

window.throttle = function(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// ============================================
// PAGE LOAD INDICATOR
// ============================================
window.addEventListener('load', function() {
    const loader = document.getElementById('page-loader');
    if (loader) {
        loader.classList.add('opacity-0');
        setTimeout(() => loader.remove(), 300);
    }
});

// ============================================
// BACK TO TOP BUTTON
// ============================================
const backToTop = document.getElementById('back-to-top');
if (backToTop) {
    window.addEventListener('scroll', throttle(function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.remove('hidden');
        } else {
            backToTop.classList.add('hidden');
        }
    }, 200));
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Export for use in other scripts
window.CedarvisUtils = {
    showNotification,
    openModal,
    closeModal,
    copyToClipboard,
    debounce,
    throttle
};
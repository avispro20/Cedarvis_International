// Main JavaScript for Cedarvis International

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('active');
            
            // Toggle icon
            const icon = mobileMenuBtn.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // Load Testimonials
    loadTestimonials();
    
    // Load Blog Posts
    loadBlogPosts();
    
    // Newsletter Form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const email = e.target.querySelector('input[type="email"]').value;
            const button = e.target.querySelector('button');
            const originalText = button.innerHTML;
            
            // Show loading state
            button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Subscribing...';
            button.disabled = true;
            
            try {
                const response = await axios.post('/api/newsletter', { email });
                
                if (response.data.success) {
                    // Show success message
                    button.innerHTML = '<i class="fas fa-check mr-2"></i> Subscribed!';
                    button.classList.add('bg-green-600');
                    e.target.querySelector('input[type="email"]').value = '';
                    
                    // Reset after 3 seconds
                    setTimeout(() => {
                        button.innerHTML = originalText;
                        button.classList.remove('bg-green-600');
                        button.disabled = false;
                    }, 3000);
                }
            } catch (error) {
                console.error('Newsletter subscription error:', error);
                button.innerHTML = '<i class="fas fa-exclamation-triangle mr-2"></i> Error!';
                button.classList.add('bg-red-600');
                
                setTimeout(() => {
                    button.innerHTML = originalText;
                    button.classList.remove('bg-red-600');
                    button.disabled = false;
                }, 3000);
            }
        });
    }
    
    // Contact Form (if on contact page)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = {
                name: e.target.querySelector('#name').value,
                email: e.target.querySelector('#email').value,
                phone: e.target.querySelector('#phone').value,
                subject: e.target.querySelector('#subject').value,
                message: e.target.querySelector('#message').value
            };
            
            const button = e.target.querySelector('button[type="submit"]');
            const originalText = button.innerHTML;
            
            // Show loading state
            button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Sending...';
            button.disabled = true;
            
            try {
                const response = await axios.post('/api/contact', formData);
                
                if (response.data.success) {
                    // Show success message
                    button.innerHTML = '<i class="fas fa-check mr-2"></i> Message Sent!';
                    button.classList.add('bg-green-600');
                    e.target.reset();
                    
                    // Show success alert
                    showAlert('success', response.data.message);
                    
                    // Reset after 3 seconds
                    setTimeout(() => {
                        button.innerHTML = originalText;
                        button.classList.remove('bg-green-600');
                        button.disabled = false;
                    }, 3000);
                }
            } catch (error) {
                console.error('Contact form error:', error);
                button.innerHTML = '<i class="fas fa-exclamation-triangle mr-2"></i> Error!';
                button.classList.add('bg-red-600');
                
                showAlert('error', 'Failed to send message. Please try again.');
                
                setTimeout(() => {
                    button.innerHTML = originalText;
                    button.classList.remove('bg-red-600');
                    button.disabled = false;
                }, 3000);
            }
        });
    }
    
    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                
                // Trigger count animation for stat numbers
                if (entry.target.classList.contains('stat-number')) {
                    animateCount(entry.target);
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.service-card, .stat-item, .testimonial-card, .blog-card, .stat-number').forEach(el => {
        observer.observe(el);
    });
    
    // Count Animation Function
    function animateCount(element) {
        const target = parseInt(element.getAttribute('data-count'));
        const suffix = element.getAttribute('data-suffix') || '';
        const prefix = element.getAttribute('data-prefix') || '';
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60 FPS
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = prefix + Math.floor(current) + suffix;
        }, 16);
    }
});

// Load Testimonials Function
async function loadTestimonials() {
    const container = document.getElementById('testimonials-container');
    if (!container) return;
    
    try {
        const response = await axios.get('/api/testimonials');
        const testimonials = response.data.testimonials;
        
        container.innerHTML = testimonials.map(testimonial => `
            <div class="testimonial-card">
                <div class="flex items-center mb-4">
                    <img src="${testimonial.image || '/static/images/avatar.jpg'}" 
                         alt="${testimonial.name}" 
                         class="w-16 h-16 rounded-full object-cover mr-4">
                    <div>
                        <h4 class="font-semibold text-lg">${testimonial.name}</h4>
                        <p class="text-gray-600 text-sm">${testimonial.role}</p>
                    </div>
                </div>
                <div class="flex mb-4">
                    ${Array(testimonial.rating).fill().map(() => 
                        '<i class="fas fa-star text-cedarvis-gold"></i>'
                    ).join('')}
                </div>
                <p class="text-gray-700 italic">"${testimonial.content}"</p>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading testimonials:', error);
        container.innerHTML = '<p class="text-center text-gray-600">Unable to load testimonials.</p>';
    }
}

// Load Blog Posts Function
async function loadBlogPosts() {
    const container = document.getElementById('blog-container');
    if (!container) return;
    
    try {
        const response = await axios.get('/api/blog');
        const posts = response.data.posts;
        
        container.innerHTML = posts.map(post => `
            <article class="blog-card">
                <img src="${post.image || '/static/images/blog-placeholder.jpg'}" 
                     alt="${post.title}" 
                     class="w-full h-48 object-cover">
                <div class="p-6">
                    <div class="flex items-center text-sm text-gray-600 mb-3">
                        <i class="far fa-calendar mr-2"></i>
                        <span>${formatDate(post.date)}</span>
                        <span class="mx-2">•</span>
                        <span>${post.author}</span>
                    </div>
                    <h3 class="text-xl font-semibold mb-3">${post.title}</h3>
                    <p class="text-gray-700 mb-4">${post.excerpt}</p>
                    <a href="/blog/${post.id}" class="text-cedarvis-gold font-medium hover:text-cedarvis-green transition-colors">
                        Read More <i class="fas fa-arrow-right ml-1"></i>
                    </a>
                </div>
            </article>
        `).join('');
    } catch (error) {
        console.error('Error loading blog posts:', error);
        container.innerHTML = '<p class="text-center text-gray-600">Unable to load blog posts.</p>';
    }
}

// Format Date Function
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Show Alert Function
function showAlert(type, message) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `fixed top-24 right-6 z-50 p-4 rounded-lg shadow-lg ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
    } text-white max-w-md animate-slide-down`;
    
    alertDiv.innerHTML = `
        <div class="flex items-center">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'} mr-3"></i>
            <p>${message}</p>
        </div>
    `;
    
    document.body.appendChild(alertDiv);
    
    setTimeout(() => {
        alertDiv.classList.add('animate-fade-out');
        setTimeout(() => {
            document.body.removeChild(alertDiv);
        }, 500);
    }, 5000);
}

// Smooth Scroll for Anchor Links
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
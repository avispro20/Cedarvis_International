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

// Slideshow Functionality
class Slideshow {
    constructor(container, options = {}) {
        this.container = container;
        this.wrapper = container.querySelector('.slideshow-wrapper');
        this.slides = container.querySelectorAll('.slideshow-slide');
        this.currentSlide = 0;
        this.totalSlides = this.slides.length;
        this.itemsPerView = options.itemsPerView || 1;
        this.autoPlay = options.autoPlay !== false;
        this.autoPlayInterval = options.interval || 5000;
        this.timer = null;
        
        this.init();
    }
    
    init() {
        // Create navigation buttons
        this.createNavigation();
        
        // Create dots
        this.createDots();
        
        // Start autoplay
        if (this.autoPlay) {
            this.startAutoPlay();
        }
        
        // Handle responsive
        this.handleResponsive();
        
        // Add touch/swipe support
        this.addTouchSupport();
    }
    
    createNavigation() {
        const prevBtn = document.createElement('button');
        prevBtn.className = 'slideshow-nav prev';
        prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prevBtn.onclick = () => this.prevSlide();
        
        const nextBtn = document.createElement('button');
        nextBtn.className = 'slideshow-nav next';
        nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextBtn.onclick = () => this.nextSlide();
        
        this.container.appendChild(prevBtn);
        this.container.appendChild(nextBtn);
    }
    
    createDots() {
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'slideshow-dots';
        
        const totalDots = Math.ceil(this.totalSlides / this.itemsPerView);
        
        for (let i = 0; i < totalDots; i++) {
            const dot = document.createElement('button');
            dot.className = 'slideshow-dot';
            if (i === 0) dot.classList.add('active');
            dot.onclick = () => this.goToSlide(i);
            dotsContainer.appendChild(dot);
        }
        
        this.container.parentElement.appendChild(dotsContainer);
        this.dots = dotsContainer.querySelectorAll('.slideshow-dot');
    }
    
    updateSlidePosition() {
        const slideWidth = 100 / this.itemsPerView;
        const translateX = -this.currentSlide * slideWidth;
        this.wrapper.style.transform = `translateX(${translateX}%)`;
        
        // Update dots
        if (this.dots) {
            this.dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === Math.floor(this.currentSlide / this.itemsPerView));
            });
        }
    }
    
    nextSlide() {
        const maxSlide = this.totalSlides - this.itemsPerView;
        this.currentSlide = (this.currentSlide + this.itemsPerView > maxSlide) ? 0 : this.currentSlide + this.itemsPerView;
        this.updateSlidePosition();
        
        if (this.autoPlay) {
            this.resetAutoPlay();
        }
    }
    
    prevSlide() {
        const maxSlide = this.totalSlides - this.itemsPerView;
        this.currentSlide = (this.currentSlide - this.itemsPerView < 0) ? maxSlide : this.currentSlide - this.itemsPerView;
        this.updateSlidePosition();
        
        if (this.autoPlay) {
            this.resetAutoPlay();
        }
    }
    
    goToSlide(index) {
        this.currentSlide = index * this.itemsPerView;
        this.updateSlidePosition();
        
        if (this.autoPlay) {
            this.resetAutoPlay();
        }
    }
    
    startAutoPlay() {
        this.timer = setInterval(() => {
            this.nextSlide();
        }, this.autoPlayInterval);
    }
    
    stopAutoPlay() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }
    
    resetAutoPlay() {
        this.stopAutoPlay();
        this.startAutoPlay();
    }
    
    handleResponsive() {
        const checkWidth = () => {
            const width = window.innerWidth;
            if (width < 640) {
                this.itemsPerView = 1;
            } else if (width < 1024) {
                this.itemsPerView = Math.min(2, this.slides.length);
            } else {
                this.itemsPerView = Math.min(3, this.slides.length);
            }
            this.updateSlidePosition();
        };
        
        window.addEventListener('resize', checkWidth);
        checkWidth();
    }
    
    addTouchSupport() {
        let startX = 0;
        let endX = 0;
        
        this.wrapper.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        this.wrapper.addEventListener('touchmove', (e) => {
            endX = e.touches[0].clientX;
        });
        
        this.wrapper.addEventListener('touchend', () => {
            const diff = startX - endX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    this.nextSlide();
                } else {
                    this.prevSlide();
                }
            }
        });
    }
}

// Initialize slideshows when DOM is ready
document.addEventListener('DOMContentLoaded', async function() {
    // Services Slideshow
    const servicesContainer = document.querySelector('#services-slideshow');
    if (servicesContainer) {
        new Slideshow(servicesContainer, {
            itemsPerView: 3,
            autoPlay: true,
            interval: 4000
        });
    }
    
    // Load and initialize Testimonials Slideshow
    const testimonialsWrapper = document.querySelector('#testimonials-container');
    if (testimonialsWrapper) {
        try {
            const response = await fetch('/api/testimonials');
            const testimonials = await response.json();
            
            // Create testimonial slides
            testimonials.forEach(testimonial => {
                const slide = document.createElement('div');
                slide.className = 'slideshow-slide three-items px-4';
                slide.innerHTML = `
                    <div class="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col">
                        <div class="flex items-center mb-6">
                            <img src="${testimonial.image}" alt="${testimonial.name}" 
                                 class="w-16 h-16 rounded-full object-cover mr-4">
                            <div>
                                <h4 class="font-semibold text-lg text-cedarvis-dark">${testimonial.name}</h4>
                                <p class="text-gray-600">${testimonial.position}</p>
                                <p class="text-sm text-cedarvis-gold">${testimonial.company}</p>
                            </div>
                        </div>
                        <div class="flex mb-4">
                            ${Array(testimonial.rating).fill().map(() => '<i class="fas fa-star text-cedarvis-gold"></i>').join('')}
                        </div>
                        <p class="text-gray-700 italic flex-grow">"${testimonial.testimonial}"</p>
                    </div>
                `;
                testimonialsWrapper.appendChild(slide);
            });
            
            // Initialize slideshow after content is loaded
            const testimonialsContainer = document.querySelector('#testimonials-slideshow');
            new Slideshow(testimonialsContainer, {
                itemsPerView: 3,
                autoPlay: true,
                interval: 5000
            });
        } catch (error) {
            console.error('Error loading testimonials:', error);
        }
    }
    
    // Load and initialize Blog Slideshow
    const blogWrapper = document.querySelector('#blog-container');
    if (blogWrapper) {
        try {
            const response = await fetch('/api/blog/recent');
            const posts = await response.json();
            
            // Create blog post slides
            posts.forEach(post => {
                const slide = document.createElement('div');
                slide.className = 'slideshow-slide three-items px-4';
                
                // Format date
                const date = new Date(post.publishedAt);
                const formattedDate = date.toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric' 
                });
                
                slide.innerHTML = `
                    <article class="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col group hover:shadow-xl transition-shadow">
                        <div class="relative h-48 overflow-hidden">
                            <img src="${post.image}" alt="${post.title}" 
                                 class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300">
                            <div class="absolute top-4 left-4">
                                <span class="bg-cedarvis-gold text-white px-3 py-1 rounded-full text-sm">
                                    ${post.category}
                                </span>
                            </div>
                        </div>
                        <div class="p-6 flex flex-col flex-grow">
                            <div class="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                <span><i class="far fa-calendar mr-1"></i> ${formattedDate}</span>
                                <span><i class="far fa-clock mr-1"></i> ${post.readTime}</span>
                            </div>
                            <h3 class="text-xl font-semibold text-cedarvis-dark mb-3 line-clamp-2 group-hover:text-cedarvis-green transition-colors">
                                ${post.title}
                            </h3>
                            <p class="text-gray-600 mb-4 line-clamp-3 flex-grow">${post.excerpt}</p>
                            <a href="/blog/${post.slug}" class="inline-flex items-center text-cedarvis-gold font-medium hover:text-cedarvis-green transition-colors">
                                Read More <i class="fas fa-arrow-right ml-2"></i>
                            </a>
                        </div>
                    </article>
                `;
                blogWrapper.appendChild(slide);
            });
            
            // Initialize slideshow after content is loaded
            const blogContainer = document.querySelector('#blog-slideshow');
            new Slideshow(blogContainer, {
                itemsPerView: 3,
                autoPlay: true,
                interval: 6000
            });
        } catch (error) {
            console.error('Error loading blog posts:', error);
        }
    }
});
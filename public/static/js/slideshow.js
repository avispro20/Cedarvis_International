// Slideshow functionality for Services, Testimonials, and Blog sections

class Slideshow {
    constructor(container, options = {}) {
        this.container = container;
        this.slides = container.querySelectorAll('.slide-item');
        this.currentSlide = 0;
        this.totalSlides = this.slides.length;
        this.autoPlay = options.autoPlay !== false;
        this.interval = options.interval || 5000;
        this.showDots = options.showDots !== false;
        this.showArrows = options.showArrows !== false;
        this.slidesPerView = options.slidesPerView || 1;
        this.autoPlayTimer = null;
        
        this.init();
    }
    
    init() {
        if (this.totalSlides <= 0) return;
        
        // Create wrapper structure
        this.createWrapper();
        
        // Add navigation
        if (this.showArrows) this.createArrows();
        if (this.showDots) this.createDots();
        
        // Show initial slide
        this.showSlide(0);
        
        // Start autoplay
        if (this.autoPlay) this.startAutoPlay();
        
        // Add touch support
        this.addTouchSupport();
    }
    
    createWrapper() {
        // Create slideshow wrapper
        const wrapper = document.createElement('div');
        wrapper.className = 'slideshow-wrapper relative overflow-hidden';
        
        const track = document.createElement('div');
        track.className = 'slideshow-track flex transition-transform duration-500 ease-in-out';
        
        // Move slides into track
        this.slides.forEach(slide => {
            slide.style.flex = `0 0 ${100 / this.slidesPerView}%`;
            track.appendChild(slide);
        });
        
        wrapper.appendChild(track);
        this.container.appendChild(wrapper);
        this.track = track;
    }
    
    createArrows() {
        // Previous arrow
        const prevArrow = document.createElement('button');
        prevArrow.className = 'slideshow-arrow slideshow-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-cedarvis-dark rounded-full p-3 shadow-lg transition-all';
        prevArrow.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prevArrow.addEventListener('click', () => this.prevSlide());
        
        // Next arrow
        const nextArrow = document.createElement('button');
        nextArrow.className = 'slideshow-arrow slideshow-next absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-cedarvis-dark rounded-full p-3 shadow-lg transition-all';
        nextArrow.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextArrow.addEventListener('click', () => this.nextSlide());
        
        this.container.querySelector('.slideshow-wrapper').appendChild(prevArrow);
        this.container.querySelector('.slideshow-wrapper').appendChild(nextArrow);
    }
    
    createDots() {
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'slideshow-dots flex justify-center gap-2 mt-6';
        
        const totalDots = Math.ceil(this.totalSlides / this.slidesPerView);
        
        for (let i = 0; i < totalDots; i++) {
            const dot = document.createElement('button');
            dot.className = 'slideshow-dot w-2 h-2 rounded-full bg-gray-300 transition-all';
            dot.addEventListener('click', () => this.showSlide(i * this.slidesPerView));
            dotsContainer.appendChild(dot);
        }
        
        this.container.appendChild(dotsContainer);
        this.dots = dotsContainer.querySelectorAll('.slideshow-dot');
    }
    
    showSlide(index) {
        // Wrap around
        if (index >= this.totalSlides) {
            index = 0;
        } else if (index < 0) {
            index = this.totalSlides - this.slidesPerView;
        }
        
        this.currentSlide = index;
        
        // Move track
        const offset = -(100 / this.slidesPerView) * index;
        this.track.style.transform = `translateX(${offset}%)`;
        
        // Update dots
        if (this.dots) {
            const activeDot = Math.floor(index / this.slidesPerView);
            this.dots.forEach((dot, i) => {
                if (i === activeDot) {
                    dot.classList.add('bg-cedarvis-gold', 'w-8');
                    dot.classList.remove('bg-gray-300', 'w-2');
                } else {
                    dot.classList.remove('bg-cedarvis-gold', 'w-8');
                    dot.classList.add('bg-gray-300', 'w-2');
                }
            });
        }
    }
    
    nextSlide() {
        this.showSlide(this.currentSlide + this.slidesPerView);
        this.resetAutoPlay();
    }
    
    prevSlide() {
        this.showSlide(this.currentSlide - this.slidesPerView);
        this.resetAutoPlay();
    }
    
    startAutoPlay() {
        if (!this.autoPlay) return;
        
        this.autoPlayTimer = setInterval(() => {
            this.nextSlide();
        }, this.interval);
    }
    
    stopAutoPlay() {
        if (this.autoPlayTimer) {
            clearInterval(this.autoPlayTimer);
            this.autoPlayTimer = null;
        }
    }
    
    resetAutoPlay() {
        this.stopAutoPlay();
        this.startAutoPlay();
    }
    
    addTouchSupport() {
        let startX = 0;
        let currentX = 0;
        let isDragging = false;
        
        this.track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        });
        
        this.track.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            currentX = e.touches[0].clientX;
        });
        
        this.track.addEventListener('touchend', () => {
            if (!isDragging) return;
            isDragging = false;
            
            const diff = startX - currentX;
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
document.addEventListener('DOMContentLoaded', function() {
    // Services Slideshow
    const servicesContainer = document.getElementById('services-slideshow');
    if (servicesContainer) {
        new Slideshow(servicesContainer, {
            slidesPerView: window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1,
            interval: 4000,
            showDots: true,
            showArrows: true
        });
    }
    
    // Testimonials Slideshow
    const testimonialsContainer = document.getElementById('testimonials-slideshow');
    if (testimonialsContainer) {
        new Slideshow(testimonialsContainer, {
            slidesPerView: window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1,
            interval: 5000,
            showDots: true,
            showArrows: true
        });
    }
    
    // Blog Slideshow
    const blogContainer = document.getElementById('blog-slideshow');
    if (blogContainer) {
        new Slideshow(blogContainer, {
            slidesPerView: window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1,
            interval: 6000,
            showDots: true,
            showArrows: true
        });
    }
    
    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            // Reinitialize slideshows on resize
            location.reload();
        }, 250);
    });
});
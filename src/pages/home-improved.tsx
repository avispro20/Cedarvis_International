import { Context } from 'hono'
import { ImprovedLayout } from '../components/improved-layout'

export const renderImprovedHome = (c: Context) => {
  const content = `
    <!-- Hero Section with Futuristic Background -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden -mt-20">
        <!-- Futuristic Tech Background -->
        <div class="absolute inset-0 z-0">
            <div class="absolute inset-0 bg-gradient-to-br from-cedarvis-dark via-cedarvis-green to-cedarvis-dark opacity-90"></div>
            <img src="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1920&h=1080&fit=crop" 
                 alt="Futuristic Technology Background" 
                 class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-cedarvis-dark via-transparent to-transparent opacity-80"></div>
        </div>
        
        <!-- Animated Particles Overlay -->
        <div class="absolute inset-0 z-10" id="particles-container">
            <canvas id="particles-canvas"></canvas>
        </div>
        
        <!-- Hero Content -->
        <div class="container mx-auto px-6 relative z-20 text-center">
            <div class="max-w-5xl mx-auto">
                <h1 class="text-5xl md:text-6xl lg:text-7xl font-space font-bold text-white mb-6 animate-fade-in">
                    Transforming Africa Through
                    <span class="text-cedarvis-gold block mt-2">Tech, Training & Talent</span>
                </h1>
                <p class="text-xl md:text-2xl text-gray-200 mb-10 animate-fade-in animation-delay-200 max-w-3xl mx-auto">
                    Leading Digital Tech & Business Solutions Agency empowering African businesses 
                    and individuals with cutting-edge technology and world-class training.
                </p>
                
                <!-- CTA Buttons -->
                <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-400">
                    <a href="/services" class="bg-gradient-to-r from-cedarvis-gold to-yellow-500 text-cedarvis-dark px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all">
                        <i class="fas fa-briefcase mr-2"></i> Hire Us
                    </a>
                    <a href="/ftlafrica" class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-cedarvis-dark transition-all">
                        <i class="fas fa-graduation-cap mr-2"></i> Join FTLAfrica
                    </a>
                    <a href="/contact" class="bg-transparent border-2 border-cedarvis-gold text-cedarvis-gold px-8 py-4 rounded-full font-bold text-lg hover:bg-cedarvis-gold hover:text-cedarvis-dark transition-all">
                        <i class="fas fa-handshake mr-2"></i> Partner With Us
                    </a>
                </div>
            </div>
        </div>
        
        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
            <a href="#services" class="text-white text-2xl hover:text-cedarvis-gold transition-colors">
                <i class="fas fa-chevron-down"></i>
            </a>
        </div>
    </section>
    
    <!-- Services Section with Fixed Slideshow -->
    <section id="services" class="py-20 bg-white">
        <div class="container mx-auto px-6">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-space font-bold text-cedarvis-dark mb-4">Our Services</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive digital solutions for modern African businesses</p>
            </div>
            
            <!-- Services Grid (Better than slideshow for this content) -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Service Card 1 -->
                <div class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <div class="p-8">
                        <div class="w-16 h-16 bg-gradient-to-br from-cedarvis-green to-cedarvis-gold rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <i class="fas fa-bullhorn text-white text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-semibold mb-3">Digital Marketing & Media</h3>
                        <p class="text-gray-600 mb-4">Strategic digital campaigns that drive growth and engagement across all channels.</p>
                        <a href="/services/digital-marketing" class="text-cedarvis-gold font-medium hover:text-cedarvis-green transition-colors inline-flex items-center">
                            Learn More <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
                
                <!-- Service Card 2 -->
                <div class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <div class="p-8">
                        <div class="w-16 h-16 bg-gradient-to-br from-cedarvis-green to-cedarvis-gold rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <i class="fas fa-laptop-code text-white text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-semibold mb-3">Web & Mobile Development</h3>
                        <p class="text-gray-600 mb-4">Custom applications that deliver exceptional user experiences and business value.</p>
                        <a href="/services/web-development" class="text-cedarvis-gold font-medium hover:text-cedarvis-green transition-colors inline-flex items-center">
                            Learn More <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
                
                <!-- Service Card 3 -->
                <div class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <div class="p-8">
                        <div class="w-16 h-16 bg-gradient-to-br from-cedarvis-green to-cedarvis-gold rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <i class="fas fa-chart-line text-white text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-semibold mb-3">Data Analytics</h3>
                        <p class="text-gray-600 mb-4">Transform data into actionable insights that drive informed business decisions.</p>
                        <a href="/services/data-analytics" class="text-cedarvis-gold font-medium hover:text-cedarvis-green transition-colors inline-flex items-center">
                            Learn More <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
                
                <!-- Service Card 4 -->
                <div class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <div class="p-8">
                        <div class="w-16 h-16 bg-gradient-to-br from-cedarvis-green to-cedarvis-gold rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <i class="fas fa-shield-alt text-white text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-semibold mb-3">Cybersecurity Services</h3>
                        <p class="text-gray-600 mb-4">Protect your digital assets with comprehensive security solutions and expertise.</p>
                        <a href="/services/cybersecurity" class="text-cedarvis-gold font-medium hover:text-cedarvis-green transition-colors inline-flex items-center">
                            Learn More <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
                
                <!-- Service Card 5 -->
                <div class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <div class="p-8">
                        <div class="w-16 h-16 bg-gradient-to-br from-cedarvis-green to-cedarvis-gold rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <i class="fas fa-cloud text-white text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-semibold mb-3">Cloud & DevOps</h3>
                        <p class="text-gray-600 mb-4">Modern infrastructure solutions for scalable and efficient operations.</p>
                        <a href="/services/cloud-devops" class="text-cedarvis-gold font-medium hover:text-cedarvis-green transition-colors inline-flex items-center">
                            Learn More <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
                
                <!-- Service Card 6 -->
                <div class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <div class="p-8">
                        <div class="w-16 h-16 bg-gradient-to-br from-cedarvis-green to-cedarvis-gold rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <i class="fas fa-chalkboard-teacher text-white text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-semibold mb-3">Corporate Training</h3>
                        <p class="text-gray-600 mb-4">Empower your team with cutting-edge skills and knowledge for the digital age.</p>
                        <a href="/services/training" class="text-cedarvis-gold font-medium hover:text-cedarvis-green transition-colors inline-flex items-center">
                            Learn More <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="text-center mt-12">
                <a href="/services" class="bg-gradient-to-r from-cedarvis-green to-cedarvis-gold text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all inline-block">
                    View All Services <i class="fas fa-arrow-right ml-2"></i>
                </a>
            </div>
        </div>
    </section>
    
    <!-- Stats Section -->
    <section class="py-20 bg-gradient-to-r from-cedarvis-green to-cedarvis-dark text-white">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div class="stat-item">
                    <div class="text-5xl font-bold text-cedarvis-gold mb-2">
                        <span class="stat-number" data-count="500" data-suffix="+">0</span>
                    </div>
                    <div class="text-lg">Projects Completed</div>
                </div>
                <div class="stat-item">
                    <div class="text-5xl font-bold text-cedarvis-gold mb-2">
                        <span class="stat-number" data-count="200" data-suffix="+">0</span>
                    </div>
                    <div class="text-lg">Happy Clients</div>
                </div>
                <div class="stat-item">
                    <div class="text-5xl font-bold text-cedarvis-gold mb-2">
                        <span class="stat-number" data-count="1000" data-suffix="+">0</span>
                    </div>
                    <div class="text-lg">Students Trained</div>
                </div>
                <div class="stat-item">
                    <div class="text-5xl font-bold text-cedarvis-gold mb-2">
                        <span class="stat-number" data-count="15" data-suffix="+">0</span>
                    </div>
                    <div class="text-lg">African Countries</div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Testimonials Section -->
    <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-6">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-space font-bold text-cedarvis-dark mb-4">Client Testimonials</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">What our clients say about us</p>
            </div>
            
            <!-- Testimonials Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Testimonial 1 -->
                <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                    <div class="flex items-center mb-6">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" 
                             alt="John Adewale" 
                             class="w-16 h-16 rounded-full object-cover mr-4">
                        <div>
                            <h4 class="font-semibold text-lg text-cedarvis-dark">John Adewale</h4>
                            <p class="text-gray-600">CEO, TechStart Nigeria</p>
                            <p class="text-sm text-cedarvis-gold">Lagos, Nigeria</p>
                        </div>
                    </div>
                    <div class="flex mb-4">
                        ${Array(5).fill().map(() => '<i class="fas fa-star text-cedarvis-gold"></i>').join('')}
                    </div>
                    <p class="text-gray-700 italic">"Cedarvis transformed our digital presence completely. Their innovative solutions and professional approach exceeded our expectations."</p>
                </div>
                
                <!-- Testimonial 2 -->
                <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                    <div class="flex items-center mb-6">
                        <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop" 
                             alt="Sarah Mensah" 
                             class="w-16 h-16 rounded-full object-cover mr-4">
                        <div>
                            <h4 class="font-semibold text-lg text-cedarvis-dark">Sarah Mensah</h4>
                            <p class="text-gray-600">Marketing Director</p>
                            <p class="text-sm text-cedarvis-gold">Accra, Ghana</p>
                        </div>
                    </div>
                    <div class="flex mb-4">
                        ${Array(5).fill().map(() => '<i class="fas fa-star text-cedarvis-gold"></i>').join('')}
                    </div>
                    <p class="text-gray-700 italic">"The training programs at FTLAfrica equipped our team with cutting-edge skills. Highly recommend their services!"</p>
                </div>
                
                <!-- Testimonial 3 -->
                <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                    <div class="flex items-center mb-6">
                        <img src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=100&h=100&fit=crop" 
                             alt="Michael Okafor" 
                             class="w-16 h-16 rounded-full object-cover mr-4">
                        <div>
                            <h4 class="font-semibold text-lg text-cedarvis-dark">Michael Okafor</h4>
                            <p class="text-gray-600">Founder, EduTech Kenya</p>
                            <p class="text-sm text-cedarvis-gold">Nairobi, Kenya</p>
                        </div>
                    </div>
                    <div class="flex mb-4">
                        ${Array(5).fill().map(() => '<i class="fas fa-star text-cedarvis-gold"></i>').join('')}
                    </div>
                    <p class="text-gray-700 italic">"Exceptional cybersecurity services that protected our digital infrastructure. Their expertise is unmatched in the region."</p>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Blog Section -->
    <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-space font-bold text-cedarvis-dark mb-4">Latest Insights</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">Stay updated with tech trends and industry insights</p>
            </div>
            
            <!-- Blog Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Blog Post 1 -->
                <article class="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                    <div class="relative h-48 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop" 
                             alt="AI Revolution" 
                             class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300">
                        <div class="absolute top-4 left-4">
                            <span class="bg-cedarvis-gold text-white px-3 py-1 rounded-full text-sm">Technology</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <div class="flex items-center gap-4 text-sm text-gray-500 mb-3">
                            <span><i class="far fa-calendar mr-1"></i> Jan 18, 2024</span>
                            <span><i class="far fa-clock mr-1"></i> 8 min read</span>
                        </div>
                        <h3 class="text-xl font-semibold text-cedarvis-dark mb-3 line-clamp-2">
                            AI Revolution in African Tech: Opportunities and Challenges
                        </h3>
                        <p class="text-gray-600 mb-4 line-clamp-3">
                            Discover how artificial intelligence is transforming businesses across Africa...
                        </p>
                        <a href="/blog/ai-revolution-african-tech" class="text-cedarvis-gold font-medium hover:text-cedarvis-green transition-colors inline-flex items-center">
                            Read More <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </article>
                
                <!-- Blog Post 2 -->
                <article class="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                    <div class="relative h-48 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop" 
                             alt="Cybersecurity" 
                             class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300">
                        <div class="absolute top-4 left-4">
                            <span class="bg-cedarvis-gold text-white px-3 py-1 rounded-full text-sm">Cybersecurity</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <div class="flex items-center gap-4 text-sm text-gray-500 mb-3">
                            <span><i class="far fa-calendar mr-1"></i> Jan 16, 2024</span>
                            <span><i class="far fa-clock mr-1"></i> 10 min read</span>
                        </div>
                        <h3 class="text-xl font-semibold text-cedarvis-dark mb-3 line-clamp-2">
                            Cybersecurity Best Practices for African Enterprises
                        </h3>
                        <p class="text-gray-600 mb-4 line-clamp-3">
                            Learn essential cybersecurity strategies tailored for African businesses...
                        </p>
                        <a href="/blog/cybersecurity-best-practices" class="text-cedarvis-gold font-medium hover:text-cedarvis-green transition-colors inline-flex items-center">
                            Read More <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </article>
                
                <!-- Blog Post 3 -->
                <article class="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                    <div class="relative h-48 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop" 
                             alt="Digital Transformation" 
                             class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300">
                        <div class="absolute top-4 left-4">
                            <span class="bg-cedarvis-gold text-white px-3 py-1 rounded-full text-sm">Business</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <div class="flex items-center gap-4 text-sm text-gray-500 mb-3">
                            <span><i class="far fa-calendar mr-1"></i> Jan 14, 2024</span>
                            <span><i class="far fa-clock mr-1"></i> 6 min read</span>
                        </div>
                        <h3 class="text-xl font-semibold text-cedarvis-dark mb-3 line-clamp-2">
                            Digital Transformation: A Roadmap for African SMEs
                        </h3>
                        <p class="text-gray-600 mb-4 line-clamp-3">
                            A practical guide for small and medium enterprises embarking on digital transformation...
                        </p>
                        <a href="/blog/digital-transformation-roadmap" class="text-cedarvis-gold font-medium hover:text-cedarvis-green transition-colors inline-flex items-center">
                            Read More <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </article>
            </div>
            
            <div class="text-center mt-12">
                <a href="/blog" class="bg-gradient-to-r from-cedarvis-green to-cedarvis-gold text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all inline-block">
                    Read More Articles <i class="fas fa-arrow-right ml-2"></i>
                </a>
            </div>
        </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-cedarvis-gold to-cedarvis-green text-white">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-4xl font-space font-bold mb-6">Ready to Transform Your Business?</h2>
            <p class="text-xl mb-8 max-w-3xl mx-auto">
                Join hundreds of African businesses and individuals who are leveraging technology 
                to achieve extraordinary results.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" class="bg-white text-cedarvis-dark px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all">
                    <i class="fas fa-rocket mr-2"></i> Start Your Project
                </a>
                <a href="/ftlafrica" class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-cedarvis-dark transition-all">
                    <i class="fas fa-users mr-2"></i> Join Our Community
                </a>
            </div>
        </div>
    </section>
    
    <!-- Newsletter -->
    <section class="py-12 bg-cedarvis-dark">
        <div class="container mx-auto px-6">
            <div class="max-w-2xl mx-auto text-center">
                <h3 class="text-2xl font-semibold text-white mb-4">Subscribe to Our Newsletter</h3>
                <p class="text-gray-400 mb-6">Get the latest updates on tech trends, training programs, and exclusive offers.</p>
                <form id="newsletter-form" class="flex flex-col sm:flex-row gap-4">
                    <input type="email" 
                           placeholder="Enter your email" 
                           class="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-cedarvis-gold"
                           required>
                    <button type="submit" class="bg-gradient-to-r from-cedarvis-gold to-yellow-500 text-cedarvis-dark px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
                        Subscribe <i class="fas fa-paper-plane ml-2"></i>
                    </button>
                </form>
            </div>
        </div>
    </section>
    
    <style>
      /* Animation delays */
      .animation-delay-200 { animation-delay: 200ms; }
      .animation-delay-400 { animation-delay: 400ms; }
      
      /* Smooth animations */
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .animate-fade-in {
        animation: fade-in 1s ease-out forwards;
      }
      
      /* Line clamp utility */
      .line-clamp-2 {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      
      .line-clamp-3 {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    </style>
    
    <script>
      // Animated counter for stats
      document.addEventListener('DOMContentLoaded', function() {
        const counters = document.querySelectorAll('.stat-number');
        const speed = 200;
        
        const countUp = (counter) => {
          const target = +counter.getAttribute('data-count');
          const suffix = counter.getAttribute('data-suffix') || '';
          let count = 0;
          const inc = target / speed;
          
          const updateCount = () => {
            count += inc;
            if (count < target) {
              counter.innerText = Math.ceil(count) + suffix;
              requestAnimationFrame(updateCount);
            } else {
              counter.innerText = target + suffix;
            }
          };
          
          updateCount();
        };
        
        // Intersection Observer for triggering animation
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              countUp(entry.target);
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.5 });
        
        counters.forEach(counter => {
          observer.observe(counter);
        });
      });
      
      // Particle animation for hero section
      const canvas = document.getElementById('particles-canvas');
      if (canvas) {
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const particles = [];
        const particleCount = 50;
        
        class Particle {
          constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 3 - 1.5;
            this.speedY = Math.random() * 3 - 1.5;
            this.opacity = Math.random() * 0.5 + 0.2;
          }
          
          update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
          }
          
          draw() {
            ctx.fillStyle = \`rgba(212, 175, 55, \${this.opacity})\`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
          }
        }
        
        for (let i = 0; i < particleCount; i++) {
          particles.push(new Particle());
        }
        
        function animate() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          particles.forEach(particle => {
            particle.update();
            particle.draw();
          });
          requestAnimationFrame(animate);
        }
        
        animate();
        
        window.addEventListener('resize', () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        });
      }
    </script>
  `
  
  return c.html(ImprovedLayout({ 
    title: 'Home', 
    children: content,
    currentPage: 'home'
  }))
}
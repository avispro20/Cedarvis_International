import { Context } from 'hono'
import { Layout } from '../components/layout'

export const renderHome = (c: Context) => {
  const content = `
    <!-- Hero Section with Parallax and Particles -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cedarvis-dark via-cedarvis-green to-cedarvis-dark">
        <!-- Animated Background Particles -->
        <div class="absolute inset-0" id="particles-container">
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
        </div>
        
        <!-- African Pattern Overlay -->
        <div class="absolute inset-0 opacity-10">
            <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <pattern id="african-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="2" fill="white"/>
                    <polygon points="10,2 14,10 10,18 6,10" fill="white" opacity="0.5"/>
                </pattern>
                <rect width="100" height="100" fill="url(#african-pattern)"/>
            </svg>
        </div>
        
        <!-- Hero Content -->
        <div class="container mx-auto px-6 relative z-10">
            <div class="text-center max-w-5xl mx-auto">
                <h1 class="text-5xl md:text-7xl font-space font-bold text-white mb-6 animate-slide-down">
                    Transforming Africa Through
                    <span class="text-cedarvis-gold block mt-2">Tech, Training & Talent</span>
                </h1>
                <p class="text-xl md:text-2xl text-gray-300 mb-10 animate-slide-up">
                    Leading Digital Tech & Business Solutions Agency empowering African businesses 
                    and individuals with cutting-edge technology and world-class training.
                </p>
                
                <!-- CTA Buttons -->
                <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
                    <a href="/services" class="btn-primary-large">
                        <i class="fas fa-briefcase mr-2"></i> Hire Us
                    </a>
                    <a href="/ftlafrica" class="btn-secondary-large">
                        <i class="fas fa-graduation-cap mr-2"></i> Join FTLAfrica
                    </a>
                    <a href="/contact" class="btn-outline-large">
                        <i class="fas fa-handshake mr-2"></i> Partner With Us
                    </a>
                </div>
            </div>
        </div>
        
        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <i class="fas fa-chevron-down text-white text-2xl"></i>
        </div>
    </section>
    
    <!-- Services Preview -->
    <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-space font-bold text-cedarvis-dark mb-4">Our Services</h2>
                <p class="text-xl text-gray-600">Comprehensive digital solutions for modern African businesses</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Service Card 1 -->
                <div class="service-card group">
                    <div class="p-8 border-2 border-gray-100 rounded-xl hover:border-cedarvis-gold transition-all duration-300 hover:shadow-xl">
                        <div class="w-16 h-16 bg-gradient-to-br from-cedarvis-green to-cedarvis-gold rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <i class="fas fa-bullhorn text-white text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-semibold mb-3">Digital Marketing & Media</h3>
                        <p class="text-gray-600 mb-4">Strategic digital campaigns that drive growth and engagement across all channels.</p>
                        <a href="/services/digital-marketing" class="text-cedarvis-gold font-medium hover:text-cedarvis-green transition-colors">
                            Learn More <i class="fas fa-arrow-right ml-1"></i>
                        </a>
                    </div>
                </div>
                
                <!-- Service Card 2 -->
                <div class="service-card group">
                    <div class="p-8 border-2 border-gray-100 rounded-xl hover:border-cedarvis-gold transition-all duration-300 hover:shadow-xl">
                        <div class="w-16 h-16 bg-gradient-to-br from-cedarvis-green to-cedarvis-gold rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <i class="fas fa-laptop-code text-white text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-semibold mb-3">Web & Mobile Development</h3>
                        <p class="text-gray-600 mb-4">Custom applications that deliver exceptional user experiences and business value.</p>
                        <a href="/services/web-development" class="text-cedarvis-gold font-medium hover:text-cedarvis-green transition-colors">
                            Learn More <i class="fas fa-arrow-right ml-1"></i>
                        </a>
                    </div>
                </div>
                
                <!-- Service Card 3 -->
                <div class="service-card group">
                    <div class="p-8 border-2 border-gray-100 rounded-xl hover:border-cedarvis-gold transition-all duration-300 hover:shadow-xl">
                        <div class="w-16 h-16 bg-gradient-to-br from-cedarvis-green to-cedarvis-gold rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <i class="fas fa-chart-line text-white text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-semibold mb-3">Data Analytics</h3>
                        <p class="text-gray-600 mb-4">Transform data into actionable insights that drive informed business decisions.</p>
                        <a href="/services/data-analytics" class="text-cedarvis-gold font-medium hover:text-cedarvis-green transition-colors">
                            Learn More <i class="fas fa-arrow-right ml-1"></i>
                        </a>
                    </div>
                </div>
                
                <!-- Service Card 4 -->
                <div class="service-card group">
                    <div class="p-8 border-2 border-gray-100 rounded-xl hover:border-cedarvis-gold transition-all duration-300 hover:shadow-xl">
                        <div class="w-16 h-16 bg-gradient-to-br from-cedarvis-green to-cedarvis-gold rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <i class="fas fa-shield-alt text-white text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-semibold mb-3">Cybersecurity Services</h3>
                        <p class="text-gray-600 mb-4">Protect your digital assets with comprehensive security solutions and expertise.</p>
                        <a href="/services/cybersecurity" class="text-cedarvis-gold font-medium hover:text-cedarvis-green transition-colors">
                            Learn More <i class="fas fa-arrow-right ml-1"></i>
                        </a>
                    </div>
                </div>
                
                <!-- Service Card 5 -->
                <div class="service-card group">
                    <div class="p-8 border-2 border-gray-100 rounded-xl hover:border-cedarvis-gold transition-all duration-300 hover:shadow-xl">
                        <div class="w-16 h-16 bg-gradient-to-br from-cedarvis-green to-cedarvis-gold rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <i class="fas fa-cloud text-white text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-semibold mb-3">Cloud & DevOps</h3>
                        <p class="text-gray-600 mb-4">Modern infrastructure solutions for scalable and efficient operations.</p>
                        <a href="/services/cloud-devops" class="text-cedarvis-gold font-medium hover:text-cedarvis-green transition-colors">
                            Learn More <i class="fas fa-arrow-right ml-1"></i>
                        </a>
                    </div>
                </div>
                
                <!-- Service Card 6 -->
                <div class="service-card group">
                    <div class="p-8 border-2 border-gray-100 rounded-xl hover:border-cedarvis-gold transition-all duration-300 hover:shadow-xl">
                        <div class="w-16 h-16 bg-gradient-to-br from-cedarvis-green to-cedarvis-gold rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <i class="fas fa-chalkboard-teacher text-white text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-semibold mb-3">Corporate Training</h3>
                        <p class="text-gray-600 mb-4">Empower your team with cutting-edge skills and knowledge for the digital age.</p>
                        <a href="/services/training" class="text-cedarvis-gold font-medium hover:text-cedarvis-green transition-colors">
                            Learn More <i class="fas fa-arrow-right ml-1"></i>
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="text-center mt-12">
                <a href="/services" class="btn-primary">
                    View All Services <i class="fas fa-arrow-right ml-2"></i>
                </a>
            </div>
        </div>
    </section>
    
    <!-- Stats Section -->
    <section class="py-20 bg-gradient-to-r from-cedarvis-green to-cedarvis-dark text-white">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div class="stat-item">
                    <div class="text-5xl font-bold text-cedarvis-gold mb-2 stat-number" data-count="500" data-suffix="+">0</div>
                    <div class="text-lg">Projects Completed</div>
                </div>
                <div class="stat-item">
                    <div class="text-5xl font-bold text-cedarvis-gold mb-2 stat-number" data-count="200" data-suffix="+">0</div>
                    <div class="text-lg">Happy Clients</div>
                </div>
                <div class="stat-item">
                    <div class="text-5xl font-bold text-cedarvis-gold mb-2 stat-number" data-count="1000" data-suffix="+">0</div>
                    <div class="text-lg">Students Trained</div>
                </div>
                <div class="stat-item">
                    <div class="text-5xl font-bold text-cedarvis-gold mb-2 stat-number" data-count="15" data-suffix="+">0</div>
                    <div class="text-lg">African Countries</div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Testimonials -->
    <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-6">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-space font-bold text-cedarvis-dark mb-4">Client Testimonials</h2>
                <p class="text-xl text-gray-600">What our clients say about us</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8" id="testimonials-container">
                <!-- Testimonials will be loaded dynamically -->
            </div>
        </div>
    </section>
    
    <!-- Blog Highlights -->
    <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-space font-bold text-cedarvis-dark mb-4">Latest Insights</h2>
                <p class="text-xl text-gray-600">Stay updated with tech trends and industry insights</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8" id="blog-container">
                <!-- Blog posts will be loaded dynamically -->
            </div>
            
            <div class="text-center mt-12">
                <a href="/blog" class="btn-primary">
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
                <a href="/contact" class="btn-white-large">
                    <i class="fas fa-rocket mr-2"></i> Start Your Project
                </a>
                <a href="/ftlafrica" class="btn-outline-white-large">
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
                           class="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cedarvis-gold"
                           required>
                    <button type="submit" class="btn-primary">
                        Subscribe <i class="fas fa-paper-plane ml-2"></i>
                    </button>
                </form>
            </div>
        </div>
    </section>
  `
  
  return c.html(Layout({ 
    title: 'Home', 
    children: content,
    currentPage: 'home'
  }))
}
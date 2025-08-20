import { Context } from 'hono'
import { Layout } from '../components/layout'

export const renderAbout = (c: Context) => {
  const content = `
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-cedarvis-dark via-cedarvis-green to-cedarvis-dark text-white">
        <div class="absolute inset-0 opacity-10 african-pattern"></div>
        <div class="container mx-auto px-6 relative z-10">
            <div class="text-center max-w-4xl mx-auto">
                <h1 class="text-5xl font-space font-bold mb-6 animate-slide-down">About Cedarvis</h1>
                <p class="text-xl text-gray-300 animate-slide-up">
                    Pioneering digital transformation across Africa with innovation, 
                    expertise, and a commitment to excellence.
                </p>
            </div>
        </div>
    </section>
    
    <!-- Company Story -->
    <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 class="text-4xl font-space font-bold text-cedarvis-dark mb-6">Our Story</h2>
                    <p class="text-gray-700 mb-4">
                        Founded with a vision to bridge the digital divide in Africa, Cedarvis International 
                        has grown from a small startup to a leading digital tech and business solutions agency 
                        serving clients across 15+ African countries.
                    </p>
                    <p class="text-gray-700 mb-4">
                        Our journey began with a simple belief: that African businesses deserve world-class 
                        technology solutions tailored to local contexts. Today, we're proud to have helped 
                        hundreds of organizations transform their digital presence and achieve remarkable growth.
                    </p>
                    <p class="text-gray-700">
                        Through our training arm, FTLAfrica, we're also committed to developing the next 
                        generation of tech talent, ensuring that Africa's digital future is built by Africans, 
                        for Africa and the world.
                    </p>
                </div>
                <div class="relative">
                    <div class="w-full h-96 bg-gradient-to-br from-cedarvis-green to-cedarvis-gold rounded-xl flex items-center justify-center">
                        <i class="fas fa-globe-africa text-white text-9xl opacity-20"></i>
                    </div>
                    <div class="absolute -bottom-6 -right-6 w-48 h-48 bg-cedarvis-gold rounded-full opacity-20"></div>
                    <div class="absolute -top-6 -left-6 w-32 h-32 bg-cedarvis-green rounded-full opacity-20"></div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Mission, Vision, Values -->
    <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Mission -->
                <div class="text-center">
                    <div class="w-20 h-20 bg-gradient-to-br from-cedarvis-green to-cedarvis-gold rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-bullseye text-white text-3xl"></i>
                    </div>
                    <h3 class="text-2xl font-semibold mb-4">Our Mission</h3>
                    <p class="text-gray-700">
                        To empower African businesses and individuals with cutting-edge technology 
                        solutions and skills that drive sustainable growth and innovation.
                    </p>
                </div>
                
                <!-- Vision -->
                <div class="text-center">
                    <div class="w-20 h-20 bg-gradient-to-br from-cedarvis-green to-cedarvis-gold rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-eye text-white text-3xl"></i>
                    </div>
                    <h3 class="text-2xl font-semibold mb-4">Our Vision</h3>
                    <p class="text-gray-700">
                        To be Africa's most trusted partner in digital transformation, creating a 
                        continent where technology serves as a catalyst for prosperity and progress.
                    </p>
                </div>
                
                <!-- Values -->
                <div class="text-center">
                    <div class="w-20 h-20 bg-gradient-to-br from-cedarvis-green to-cedarvis-gold rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-heart text-white text-3xl"></i>
                    </div>
                    <h3 class="text-2xl font-semibold mb-4">Our Values</h3>
                    <p class="text-gray-700">
                        Innovation, Excellence, Integrity, Collaboration, and African Pride guide 
                        everything we do and every solution we deliver.
                    </p>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Leadership Team -->
    <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-space font-bold text-cedarvis-dark mb-4">Leadership Team</h2>
                <p class="text-xl text-gray-600">Meet the visionaries driving our success</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Team Member 1 -->
                <div class="team-card">
                    <div class="w-full h-64 bg-gradient-to-br from-cedarvis-green to-cedarvis-gold flex items-center justify-center">
                        <i class="fas fa-user-tie text-white text-6xl"></i>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-1">John Adebayo</h3>
                        <p class="text-cedarvis-gold mb-3">CEO & Founder</p>
                        <p class="text-gray-700 text-sm mb-4">
                            Visionary leader with 15+ years in tech innovation and business transformation across Africa.
                        </p>
                        <div class="flex space-x-3">
                            <a href="#" class="text-gray-400 hover:text-cedarvis-gold transition-colors">
                                <i class="fab fa-linkedin"></i>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-cedarvis-gold transition-colors">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                <!-- Team Member 2 -->
                <div class="team-card">
                    <div class="w-full h-64 bg-gradient-to-br from-cedarvis-green to-cedarvis-gold flex items-center justify-center">
                        <i class="fas fa-user-tie text-white text-6xl"></i>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-1">Amara Okonkwo</h3>
                        <p class="text-cedarvis-gold mb-3">CTO</p>
                        <p class="text-gray-700 text-sm mb-4">
                            Technology architect driving innovation with expertise in cloud, AI, and emerging technologies.
                        </p>
                        <div class="flex space-x-3">
                            <a href="#" class="text-gray-400 hover:text-cedarvis-gold transition-colors">
                                <i class="fab fa-linkedin"></i>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-cedarvis-gold transition-colors">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                <!-- Team Member 3 -->
                <div class="team-card">
                    <div class="w-full h-64 bg-gradient-to-br from-cedarvis-green to-cedarvis-gold flex items-center justify-center">
                        <i class="fas fa-user-tie text-white text-6xl"></i>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-1">Fatima Diallo</h3>
                        <p class="text-cedarvis-gold mb-3">Head of FTLAfrica</p>
                        <p class="text-gray-700 text-sm mb-4">
                            Education innovator passionate about developing Africa's next generation of tech leaders.
                        </p>
                        <div class="flex space-x-3">
                            <a href="#" class="text-gray-400 hover:text-cedarvis-gold transition-colors">
                                <i class="fab fa-linkedin"></i>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-cedarvis-gold transition-colors">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Impact Metrics -->
    <section class="py-20 bg-gradient-to-r from-cedarvis-green to-cedarvis-dark text-white">
        <div class="container mx-auto px-6">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-space font-bold mb-4">Our Impact</h2>
                <p class="text-xl text-gray-300">Making a difference across Africa</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                    <div class="text-5xl font-bold text-cedarvis-gold mb-2">500+</div>
                    <div class="text-lg">Projects Delivered</div>
                </div>
                <div>
                    <div class="text-5xl font-bold text-cedarvis-gold mb-2">200+</div>
                    <div class="text-lg">Clients Served</div>
                </div>
                <div>
                    <div class="text-5xl font-bold text-cedarvis-gold mb-2">1000+</div>
                    <div class="text-lg">Talents Trained</div>
                </div>
                <div>
                    <div class="text-5xl font-bold text-cedarvis-gold mb-2">95%</div>
                    <div class="text-lg">Client Satisfaction</div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Partners -->
    <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-space font-bold text-cedarvis-dark mb-4">Trusted Partners</h2>
                <p class="text-xl text-gray-600">Collaborating with industry leaders</p>
            </div>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                ${[1,2,3,4,5,6,7,8].map(i => `
                    <div class="flex items-center justify-center p-8 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div class="text-gray-400 text-center">
                            <i class="fas fa-building text-4xl mb-2"></i>
                            <p class="text-sm">Partner ${i}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
    
    <!-- CTA -->
    <section class="py-20 bg-gradient-to-r from-cedarvis-gold to-cedarvis-green text-white">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-4xl font-space font-bold mb-6">Join Our Journey</h2>
            <p class="text-xl mb-8 max-w-3xl mx-auto">
                Whether you're a business looking for digital solutions or a talent seeking growth opportunities, 
                we're here to help you succeed.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/services" class="btn-white-large">
                    <i class="fas fa-briefcase mr-2"></i> Explore Services
                </a>
                <a href="/careers" class="btn-outline-white-large">
                    <i class="fas fa-users mr-2"></i> Join Our Team
                </a>
            </div>
        </div>
    </section>
  `
  
  return c.html(Layout({ 
    title: 'About Us', 
    children: content,
    currentPage: 'about'
  }))
}
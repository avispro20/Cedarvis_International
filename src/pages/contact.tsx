import { Context } from 'hono'
import { Layout } from '../components/layout'

export const renderContact = (c: Context) => {
  const content = `
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-cedarvis-dark via-cedarvis-green to-cedarvis-dark text-white">
        <div class="absolute inset-0 opacity-10 african-pattern"></div>
        <div class="container mx-auto px-6 relative z-10">
            <div class="text-center max-w-4xl mx-auto">
                <h1 class="text-5xl font-space font-bold mb-6 animate-slide-down">Get In Touch</h1>
                <p class="text-xl text-gray-300 animate-slide-up">
                    Let's discuss how we can help transform your business
                </p>
            </div>
        </div>
    </section>
    
    <!-- Contact Content -->
    <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <!-- Contact Form -->
                <div>
                    <h2 class="text-3xl font-semibold mb-6">Send Us a Message</h2>
                    <form id="contact-form" class="space-y-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                                <input type="text" id="name" class="form-input" required>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                                <input type="email" id="email" class="form-input" required>
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                <input type="tel" id="phone" class="form-input">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                                <select id="subject" class="form-input" required>
                                    <option value="">Select a subject</option>
                                    <option value="services">Services Inquiry</option>
                                    <option value="training">Training Programs</option>
                                    <option value="partnership">Partnership</option>
                                    <option value="careers">Careers</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                            <textarea id="message" rows="6" class="form-textarea" required></textarea>
                        </div>
                        
                        <button type="submit" class="btn-primary">
                            <i class="fas fa-paper-plane mr-2"></i> Send Message
                        </button>
                    </form>
                </div>
                
                <!-- Contact Information -->
                <div>
                    <h2 class="text-3xl font-semibold mb-6">Contact Information</h2>
                    
                    <div class="space-y-6">
                        <div class="flex items-start">
                            <div class="w-12 h-12 bg-gradient-to-br from-cedarvis-green to-cedarvis-gold rounded-lg flex items-center justify-center flex-shrink-0">
                                <i class="fas fa-map-marker-alt text-white"></i>
                            </div>
                            <div class="ml-4">
                                <h3 class="font-semibold mb-1">Office Address</h3>
                                <p class="text-gray-600">
                                    Victoria Island, Lagos<br>
                                    Nigeria
                                </p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="w-12 h-12 bg-gradient-to-br from-cedarvis-green to-cedarvis-gold rounded-lg flex items-center justify-center flex-shrink-0">
                                <i class="fas fa-envelope text-white"></i>
                            </div>
                            <div class="ml-4">
                                <h3 class="font-semibold mb-1">Email</h3>
                                <p class="text-gray-600">
                                    info@cedarvis.com<br>
                                    support@cedarvis.com
                                </p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="w-12 h-12 bg-gradient-to-br from-cedarvis-green to-cedarvis-gold rounded-lg flex items-center justify-center flex-shrink-0">
                                <i class="fas fa-phone text-white"></i>
                            </div>
                            <div class="ml-4">
                                <h3 class="font-semibold mb-1">Phone</h3>
                                <p class="text-gray-600">
                                    <a href="tel:+2347054649447" class="hover:text-cedarvis-gold transition-colors">+234 705 464 9447</a>
                                </p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="w-12 h-12 bg-gradient-to-br from-cedarvis-green to-cedarvis-gold rounded-lg flex items-center justify-center flex-shrink-0">
                                <i class="fab fa-whatsapp text-white"></i>
                            </div>
                            <div class="ml-4">
                                <h3 class="font-semibold mb-1">WhatsApp</h3>
                                <p class="text-gray-600">
                                    +234 705 464 9447
                                </p>
                                <a href="https://wa.me/2347054649447" target="_blank" class="text-cedarvis-gold hover:text-cedarvis-green mt-2 inline-block">
                                    Chat on WhatsApp <i class="fas fa-external-link-alt ml-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Social Media -->
                    <div class="mt-8">
                        <h3 class="font-semibold mb-4">Follow Us</h3>
                        <div class="flex space-x-4">
                            <a href="https://www.facebook.com/cedarvistech" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-cedarvis-gold hover:text-white transition-all">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.linkedin.com/company/cedarvis-international/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-cedarvis-gold hover:text-white transition-all">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://www.instagram.com/cedarvisng" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-cedarvis-gold hover:text-white transition-all">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.tiktok.com/@cedarvisng" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-cedarvis-gold hover:text-white transition-all">
                                <i class="fab fa-tiktok"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Map Section -->
    <section class="h-96 bg-gray-200">
        <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-cedarvis-green/20 to-cedarvis-gold/20">
            <div class="text-center">
                <i class="fas fa-map-marked-alt text-6xl text-cedarvis-green mb-4"></i>
                <p class="text-gray-700">Interactive map will be embedded here</p>
            </div>
        </div>
    </section>
  `
  
  return c.html(Layout({ 
    title: 'Contact', 
    children: content,
    currentPage: 'contact'
  }))
}
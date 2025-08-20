import { Context } from 'hono'
import { Layout } from '../components/layout'

export const renderCareers = (c: Context) => {
  const content = `
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-cedarvis-dark via-cedarvis-green to-cedarvis-dark text-white">
        <div class="absolute inset-0 opacity-10 african-pattern"></div>
        <div class="container mx-auto px-6 relative z-10">
            <div class="text-center max-w-4xl mx-auto">
                <h1 class="text-5xl font-space font-bold mb-6 animate-slide-down">Join Our Team</h1>
                <p class="text-xl text-gray-300 animate-slide-up">
                    Be part of Africa's digital transformation journey
                </p>
            </div>
        </div>
    </section>
    
    <!-- Why Join Us -->
    <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-space font-bold text-cedarvis-dark mb-4">Why Cedarvis?</h2>
                <p class="text-xl text-gray-600">Build your career while building Africa's future</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="text-center">
                    <div class="w-20 h-20 bg-gradient-to-br from-cedarvis-green to-cedarvis-gold rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-rocket text-white text-3xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-3">Growth Opportunities</h3>
                    <p class="text-gray-700">Continuous learning and career advancement paths</p>
                </div>
                
                <div class="text-center">
                    <div class="w-20 h-20 bg-gradient-to-br from-cedarvis-green to-cedarvis-gold rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-globe-africa text-white text-3xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-3">Impact Work</h3>
                    <p class="text-gray-700">Work on projects that transform businesses and communities</p>
                </div>
                
                <div class="text-center">
                    <div class="w-20 h-20 bg-gradient-to-br from-cedarvis-green to-cedarvis-gold rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-users text-white text-3xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-3">Great Culture</h3>
                    <p class="text-gray-700">Collaborative, innovative, and inclusive work environment</p>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Open Positions -->
    <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-6">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-space font-bold text-cedarvis-dark mb-4">Open Positions</h2>
                <p class="text-xl text-gray-600">Find your next opportunity</p>
            </div>
            
            <div class="max-w-4xl mx-auto space-y-6">
                ${['Senior Full-Stack Developer', 'UI/UX Designer', 'Digital Marketing Manager', 'Data Analyst', 'DevOps Engineer', 'Business Development Manager'].map((position, i) => `
                    <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div class="flex justify-between items-start">
                            <div>
                                <h3 class="text-xl font-semibold mb-2">${position}</h3>
                                <div class="flex gap-4 text-sm text-gray-600 mb-3">
                                    <span><i class="fas fa-map-marker-alt mr-1"></i> Lagos, Nigeria</span>
                                    <span><i class="fas fa-clock mr-1"></i> Full-time</span>
                                    <span><i class="fas fa-building mr-1"></i> ${i % 2 === 0 ? 'On-site' : 'Remote'}</span>
                                </div>
                                <p class="text-gray-700">
                                    Join our team to work on exciting projects that shape the future of technology in Africa.
                                </p>
                            </div>
                            <a href="/contact?position=${position}" class="btn-primary">
                                Apply Now
                            </a>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
    
    <!-- Internships & Volunteering -->
    <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h3 class="text-2xl font-semibold mb-4">Internship Program</h3>
                    <p class="text-gray-700 mb-4">
                        Gain hands-on experience working with cutting-edge technologies and 
                        learn from industry experts. Our 3-6 month internship programs are 
                        designed to kickstart your career in tech.
                    </p>
                    <a href="/contact?type=internship" class="text-cedarvis-gold font-medium hover:text-cedarvis-green">
                        Apply for Internship <i class="fas fa-arrow-right ml-1"></i>
                    </a>
                </div>
                
                <div>
                    <h3 class="text-2xl font-semibold mb-4">Volunteer & Mentor</h3>
                    <p class="text-gray-700 mb-4">
                        Give back to the community by mentoring aspiring tech professionals 
                        through FTLAfrica. Share your expertise and help shape the next 
                        generation of African tech leaders.
                    </p>
                    <a href="/contact?type=volunteer" class="text-cedarvis-gold font-medium hover:text-cedarvis-green">
                        Become a Mentor <i class="fas fa-arrow-right ml-1"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
  `
  
  return c.html(Layout({ 
    title: 'Careers', 
    children: content,
    currentPage: 'careers'
  }))
}
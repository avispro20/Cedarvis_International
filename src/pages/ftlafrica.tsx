import { Context } from 'hono'
import { Layout } from '../components/layout'

export const renderFTLAfrica = (c: Context) => {
  const programs = [
    {
      title: 'Data Analytics Bootcamp',
      duration: '12 weeks',
      mode: 'Hybrid',
      description: 'Master data analysis, visualization, and machine learning fundamentals.',
      skills: ['Python', 'SQL', 'Tableau', 'Power BI', 'Machine Learning']
    },
    {
      title: 'UI/UX Design Program',
      duration: '10 weeks',
      mode: 'Online',
      description: 'Learn user-centered design principles and modern design tools.',
      skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping', 'Design Systems']
    },
    {
      title: 'Digital Marketing Mastery',
      duration: '8 weeks',
      mode: 'Online',
      description: 'Comprehensive digital marketing strategies and tools.',
      skills: ['SEO/SEM', 'Social Media', 'Content Marketing', 'Analytics', 'Email Marketing']
    },
    {
      title: 'Full-Stack Development',
      duration: '16 weeks',
      mode: 'Hybrid',
      description: 'Build modern web applications from frontend to backend.',
      skills: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Cloud Deployment']
    },
    {
      title: 'Cybersecurity Fundamentals',
      duration: '12 weeks',
      mode: 'Online',
      description: 'Essential cybersecurity skills for the digital age.',
      skills: ['Network Security', 'Ethical Hacking', 'Risk Management', 'Compliance']
    },
    {
      title: 'Product Management',
      duration: '8 weeks',
      mode: 'Online',
      description: 'Learn to build and manage successful digital products.',
      skills: ['Agile/Scrum', 'Product Strategy', 'User Stories', 'Roadmapping']
    }
  ]

  const content = `
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-cedarvis-dark via-cedarvis-green to-cedarvis-dark text-white">
        <div class="absolute inset-0 opacity-10 african-pattern"></div>
        <div class="container mx-auto px-6 relative z-10">
            <div class="text-center max-w-4xl mx-auto">
                <h1 class="text-5xl font-space font-bold mb-6 animate-slide-down">FTLAfrica</h1>
                <p class="text-2xl text-cedarvis-gold mb-4">Future Tech Leaders Africa</p>
                <p class="text-xl text-gray-300 animate-slide-up">
                    Empowering the next generation of African tech leaders through 
                    world-class training, mentorship, and real-world experience.
                </p>
                <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#programs" class="btn-primary-large">
                        <i class="fas fa-graduation-cap mr-2"></i> View Programs
                    </a>
                    <a href="#application" class="btn-secondary-large">
                        <i class="fas fa-paper-plane mr-2"></i> Apply Now
                    </a>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Why FTLAfrica -->
    <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-space font-bold text-cedarvis-dark mb-4">Why Choose FTLAfrica?</h2>
                <p class="text-xl text-gray-600">Transform your career with Africa's leading tech training program</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="text-center">
                    <div class="w-20 h-20 bg-gradient-to-br from-cedarvis-green to-cedarvis-gold rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-chalkboard-teacher text-white text-3xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-3">Industry Expert Instructors</h3>
                    <p class="text-gray-700">Learn from professionals with real-world experience in leading tech companies.</p>
                </div>
                
                <div class="text-center">
                    <div class="w-20 h-20 bg-gradient-to-br from-cedarvis-green to-cedarvis-gold rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-laptop-code text-white text-3xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-3">Hands-On Projects</h3>
                    <p class="text-gray-700">Work on real projects that build your portfolio and practical skills.</p>
                </div>
                
                <div class="text-center">
                    <div class="w-20 h-20 bg-gradient-to-br from-cedarvis-green to-cedarvis-gold rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-briefcase text-white text-3xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-3">Career Support</h3>
                    <p class="text-gray-700">Get job placement assistance, interview prep, and networking opportunities.</p>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Programs -->
    <section id="programs" class="py-20 bg-gray-50">
        <div class="container mx-auto px-6">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-space font-bold text-cedarvis-dark mb-4">Our Programs</h2>
                <p class="text-xl text-gray-600">Choose from our comprehensive training programs</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${programs.map(program => `
                    <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
                        <h3 class="text-xl font-semibold mb-3">${program.title}</h3>
                        <div class="flex items-center gap-4 text-sm text-gray-600 mb-4">
                            <span><i class="far fa-clock mr-1"></i> ${program.duration}</span>
                            <span><i class="fas fa-laptop mr-1"></i> ${program.mode}</span>
                        </div>
                        <p class="text-gray-700 mb-4">${program.description}</p>
                        <div class="mb-4">
                            <p class="text-sm font-semibold text-gray-600 mb-2">Skills You'll Learn:</p>
                            <div class="flex flex-wrap gap-2">
                                ${program.skills.map(skill => `
                                    <span class="text-xs bg-cedarvis-light text-cedarvis-dark px-2 py-1 rounded">
                                        ${skill}
                                    </span>
                                `).join('')}
                            </div>
                        </div>
                        <a href="#application" class="text-cedarvis-gold font-medium hover:text-cedarvis-green transition-colors">
                            Apply Now <i class="fas fa-arrow-right ml-1"></i>
                        </a>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
    
    <!-- Success Stories -->
    <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-space font-bold text-cedarvis-dark mb-4">Alumni Success Stories</h2>
                <p class="text-xl text-gray-600">See how FTLAfrica transformed their careers</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="testimonial-card">
                    <div class="flex items-center mb-4">
                        <div class="w-16 h-16 bg-gradient-to-br from-cedarvis-green to-cedarvis-gold rounded-full flex items-center justify-center mr-4">
                            <i class="fas fa-user text-white text-2xl"></i>
                        </div>
                        <div>
                            <h4 class="font-semibold">Kemi Adeleke</h4>
                            <p class="text-sm text-gray-600">Data Analyst at TechCorp</p>
                        </div>
                    </div>
                    <p class="text-gray-700 italic">
                        "FTLAfrica's Data Analytics bootcamp completely changed my career trajectory. 
                        Within 3 months of graduating, I landed my dream job!"
                    </p>
                    <div class="mt-4">
                        <span class="text-sm text-cedarvis-gold">Salary increase: 150%</span>
                    </div>
                </div>
                
                <div class="testimonial-card">
                    <div class="flex items-center mb-4">
                        <div class="w-16 h-16 bg-gradient-to-br from-cedarvis-green to-cedarvis-gold rounded-full flex items-center justify-center mr-4">
                            <i class="fas fa-user text-white text-2xl"></i>
                        </div>
                        <div>
                            <h4 class="font-semibold">David Osei</h4>
                            <p class="text-sm text-gray-600">UI/UX Designer at FinTech Pro</p>
                        </div>
                    </div>
                    <p class="text-gray-700 italic">
                        "The hands-on projects and mentorship I received were invaluable. 
                        I now work remotely for an international company!"
                    </p>
                    <div class="mt-4">
                        <span class="text-sm text-cedarvis-gold">Now earning in USD</span>
                    </div>
                </div>
                
                <div class="testimonial-card">
                    <div class="flex items-center mb-4">
                        <div class="w-16 h-16 bg-gradient-to-br from-cedarvis-green to-cedarvis-gold rounded-full flex items-center justify-center mr-4">
                            <i class="fas fa-user text-white text-2xl"></i>
                        </div>
                        <div>
                            <h4 class="font-semibold">Grace Mwangi</h4>
                            <p class="text-sm text-gray-600">Full-Stack Developer</p>
                        </div>
                    </div>
                    <p class="text-gray-700 italic">
                        "From zero coding experience to building full applications in 16 weeks. 
                        FTLAfrica made the impossible possible!"
                    </p>
                    <div class="mt-4">
                        <span class="text-sm text-cedarvis-gold">Started own tech startup</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Scholarships -->
    <section class="py-20 bg-gradient-to-r from-cedarvis-green to-cedarvis-dark text-white">
        <div class="container mx-auto px-6">
            <div class="text-center">
                <h2 class="text-4xl font-space font-bold mb-6">Scholarships Available</h2>
                <p class="text-xl mb-8 max-w-3xl mx-auto">
                    We believe talent is equally distributed but opportunity is not. 
                    That's why we offer various scholarship programs to ensure no one is left behind.
                </p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                        <h3 class="text-xl font-semibold mb-3">Merit Scholarship</h3>
                        <p class="text-gray-300">Up to 100% tuition coverage based on assessment performance</p>
                    </div>
                    <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                        <h3 class="text-xl font-semibold mb-3">Women in Tech</h3>
                        <p class="text-gray-300">50% discount for female applicants in STEM programs</p>
                    </div>
                    <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                        <h3 class="text-xl font-semibold mb-3">Early Bird</h3>
                        <p class="text-gray-300">30% discount for early registrations</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Application Form -->
    <section id="application" class="py-20 bg-white">
        <div class="container mx-auto px-6">
            <div class="max-w-3xl mx-auto">
                <div class="text-center mb-12">
                    <h2 class="text-4xl font-space font-bold text-cedarvis-dark mb-4">Start Your Journey</h2>
                    <p class="text-xl text-gray-600">Apply now and transform your career</p>
                </div>
                
                <form class="bg-gray-50 rounded-xl p-8">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                            <input type="text" class="form-input" required>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                            <input type="text" class="form-input" required>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input type="email" class="form-input" required>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                            <input type="tel" class="form-input" required>
                        </div>
                        <div class="md:col-span-2">
                            <label class="block text-sm font-medium text-gray-700 mb-2">Program of Interest</label>
                            <select class="form-input" required>
                                <option value="">Select a program</option>
                                ${programs.map(p => `<option value="${p.title}">${p.title}</option>`).join('')}
                            </select>
                        </div>
                        <div class="md:col-span-2">
                            <label class="block text-sm font-medium text-gray-700 mb-2">Tell us about yourself</label>
                            <textarea class="form-textarea" rows="4" required></textarea>
                        </div>
                    </div>
                    
                    <div class="mt-8 text-center">
                        <button type="submit" class="btn-primary">
                            <i class="fas fa-paper-plane mr-2"></i> Submit Application
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  `
  
  return c.html(Layout({ 
    title: 'FTLAfrica', 
    children: content,
    currentPage: 'ftlafrica'
  }))
}
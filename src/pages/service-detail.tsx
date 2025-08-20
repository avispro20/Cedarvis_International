import { Context } from 'hono'
import { Layout } from '../components/layout'

export const renderServiceDetail = (c: Context) => {
  const slug = c.req.param('slug')
  
  // In a real app, this would fetch from a database
  const serviceData = {
    'digital-marketing': {
      title: 'Digital Marketing & Media Buying',
      description: 'Strategic digital campaigns that drive growth and engagement across all channels.',
      icon: 'fa-bullhorn'
    },
    'web-development': {
      title: 'Web & Mobile App Development',
      description: 'Custom applications that deliver exceptional user experiences.',
      icon: 'fa-laptop-code'
    }
    // Add more services as needed
  }
  
  const service = serviceData[slug as keyof typeof serviceData] || serviceData['digital-marketing']
  
  const content = `
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-cedarvis-dark via-cedarvis-green to-cedarvis-dark text-white">
        <div class="absolute inset-0 opacity-10 african-pattern"></div>
        <div class="container mx-auto px-6 relative z-10">
            <div class="text-center max-w-4xl mx-auto">
                <div class="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-6">
                    <i class="fas ${service.icon} text-cedarvis-gold text-4xl"></i>
                </div>
                <h1 class="text-5xl font-space font-bold mb-6 animate-slide-down">${service.title}</h1>
                <p class="text-xl text-gray-300 animate-slide-up">
                    ${service.description}
                </p>
            </div>
        </div>
    </section>
    
    <!-- Service Details -->
    <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto">
                <h2 class="text-3xl font-semibold mb-6">What We Offer</h2>
                <p class="text-gray-700 mb-8">
                    Our comprehensive ${service.title.toLowerCase()} services help businesses achieve their goals 
                    through innovative strategies and cutting-edge technologies. We combine deep industry expertise 
                    with local market knowledge to deliver solutions that drive real results.
                </p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div>
                        <h3 class="text-xl font-semibold mb-4">Key Features</h3>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <i class="fas fa-check text-cedarvis-gold mt-1 mr-3"></i>
                                <span class="text-gray-700">Data-driven approach</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check text-cedarvis-gold mt-1 mr-3"></i>
                                <span class="text-gray-700">Customized solutions</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check text-cedarvis-gold mt-1 mr-3"></i>
                                <span class="text-gray-700">Experienced team</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check text-cedarvis-gold mt-1 mr-3"></i>
                                <span class="text-gray-700">Proven track record</span>
                            </li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 class="text-xl font-semibold mb-4">Benefits</h3>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <i class="fas fa-arrow-right text-cedarvis-green mt-1 mr-3"></i>
                                <span class="text-gray-700">Increased ROI</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-arrow-right text-cedarvis-green mt-1 mr-3"></i>
                                <span class="text-gray-700">Enhanced brand visibility</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-arrow-right text-cedarvis-green mt-1 mr-3"></i>
                                <span class="text-gray-700">Competitive advantage</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-arrow-right text-cedarvis-green mt-1 mr-3"></i>
                                <span class="text-gray-700">Sustainable growth</span>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div class="bg-gray-50 rounded-xl p-8">
                    <h3 class="text-2xl font-semibold mb-4">Ready to Get Started?</h3>
                    <p class="text-gray-700 mb-6">
                        Let's discuss how our ${service.title.toLowerCase()} services can help transform your business.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4">
                        <a href="/contact?service=${slug}" class="btn-primary">
                            <i class="fas fa-comment-dots mr-2"></i> Get a Quote
                        </a>
                        <a href="/portfolio" class="btn-outline-large">
                            <i class="fas fa-briefcase mr-2"></i> View Our Work
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `
  
  return c.html(Layout({ 
    title: service.title, 
    children: content,
    currentPage: 'services'
  }))
}
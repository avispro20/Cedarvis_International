import { Context } from 'hono'
import { Layout } from '../components/layout'

export const renderServices = (c: Context) => {
  const services = [
    {
      id: 'digital-marketing',
      icon: 'fa-bullhorn',
      title: 'Digital Marketing & Media Buying',
      description: 'Strategic digital campaigns that drive growth and engagement.',
      features: [
        'Social Media Marketing',
        'Search Engine Optimization (SEO)',
        'Pay-Per-Click Advertising (PPC)',
        'Content Marketing Strategy',
        'Email Marketing Campaigns',
        'Influencer Marketing'
      ]
    },
    {
      id: 'growth-strategy',
      icon: 'fa-chart-line',
      title: 'Digital Growth Strategy',
      description: 'Data-driven strategies to accelerate your business growth.',
      features: [
        'Market Analysis & Research',
        'Customer Journey Mapping',
        'Conversion Rate Optimization',
        'Growth Hacking Techniques',
        'Performance Analytics',
        'ROI Tracking & Reporting'
      ]
    },
    {
      id: 'web-development',
      icon: 'fa-laptop-code',
      title: 'Web & Mobile App Development',
      description: 'Custom applications that deliver exceptional user experiences.',
      features: [
        'Responsive Web Design',
        'Progressive Web Apps',
        'iOS & Android Development',
        'E-commerce Solutions',
        'API Development & Integration',
        'Cross-platform Development'
      ]
    },
    {
      id: 'content-creation',
      icon: 'fa-pen-fancy',
      title: 'Content Creation & Corporate Rebranding',
      description: 'Creative content and brand identity that resonates with your audience.',
      features: [
        'Brand Strategy & Identity',
        'Logo & Visual Design',
        'Video Production',
        'Copywriting & Content Creation',
        'Brand Guidelines Development',
        'Marketing Collateral Design'
      ]
    },
    {
      id: 'business-analysis',
      icon: 'fa-chart-pie',
      title: 'Business Growth Hacking & Analysis',
      description: 'Innovative strategies and insights to accelerate business growth.',
      features: [
        'Business Process Optimization',
        'Market Opportunity Analysis',
        'Competitive Intelligence',
        'Revenue Optimization',
        'Customer Acquisition Strategies',
        'Business Intelligence Solutions'
      ]
    },
    {
      id: 'data-analytics',
      icon: 'fa-database',
      title: 'Data Analytics',
      description: 'Transform data into actionable insights for informed decisions.',
      features: [
        'Data Mining & Processing',
        'Predictive Analytics',
        'Business Intelligence Dashboards',
        'Data Visualization',
        'Machine Learning Models',
        'Real-time Analytics'
      ]
    },
    {
      id: 'cybersecurity',
      icon: 'fa-shield-alt',
      title: 'Cybersecurity Services',
      description: 'Protect your digital assets with comprehensive security solutions.',
      features: [
        'Security Audits & Assessments',
        'Penetration Testing',
        'Incident Response Planning',
        'Security Training & Awareness',
        'Compliance Management',
        'Network Security Solutions'
      ]
    },
    {
      id: 'product-design',
      icon: 'fa-palette',
      title: 'Product Design & Development',
      description: 'User-centered design and development for innovative products.',
      features: [
        'UI/UX Design',
        'Product Strategy',
        'Prototyping & Wireframing',
        'User Research & Testing',
        'Design Systems',
        'Product Management'
      ]
    },
    {
      id: 'training',
      icon: 'fa-chalkboard-teacher',
      title: 'Corporate Training & Project Management',
      description: 'Empower your team with cutting-edge skills and methodologies.',
      features: [
        'Technical Skills Training',
        'Leadership Development',
        'Agile & Scrum Training',
        'Project Management Certification',
        'Digital Transformation Workshops',
        'Custom Training Programs'
      ]
    },
    {
      id: 'cloud-devops',
      icon: 'fa-cloud',
      title: 'Cloud & DevOps Services',
      description: 'Modern infrastructure solutions for scalable operations.',
      features: [
        'Cloud Migration Services',
        'Infrastructure as Code',
        'CI/CD Pipeline Setup',
        'Container Orchestration',
        'Cloud Cost Optimization',
        'Monitoring & Logging Solutions'
      ]
    }
  ]

  const content = `
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-cedarvis-dark via-cedarvis-green to-cedarvis-dark text-white">
        <div class="absolute inset-0 opacity-10 african-pattern"></div>
        <div class="container mx-auto px-6 relative z-10">
            <div class="text-center max-w-4xl mx-auto">
                <h1 class="text-5xl font-space font-bold mb-6 animate-slide-down">Our Services</h1>
                <p class="text-xl text-gray-300 animate-slide-up">
                    Comprehensive digital solutions tailored for African businesses. 
                    We combine innovation with local expertise to deliver exceptional results.
                </p>
            </div>
        </div>
    </section>
    
    <!-- Services Grid -->
    <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                ${services.map(service => `
                    <div id="${service.id}" class="service-detail group">
                        <div class="flex items-start">
                            <div class="w-20 h-20 bg-gradient-to-br from-cedarvis-green to-cedarvis-gold rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                <i class="fas ${service.icon} text-white text-3xl"></i>
                            </div>
                            <div class="ml-6 flex-1">
                                <h3 class="text-2xl font-semibold mb-3">${service.title}</h3>
                                <p class="text-gray-600 mb-4">${service.description}</p>
                                <ul class="space-y-2">
                                    ${service.features.map(feature => `
                                        <li class="flex items-start">
                                            <i class="fas fa-check text-cedarvis-gold mt-1 mr-2"></i>
                                            <span class="text-gray-700">${feature}</span>
                                        </li>
                                    `).join('')}
                                </ul>
                                <div class="mt-6">
                                    <a href="/services/${service.id}" class="text-cedarvis-gold font-medium hover:text-cedarvis-green transition-colors">
                                        Learn More <i class="fas fa-arrow-right ml-1"></i>
                                    </a>
                                    <span class="mx-3 text-gray-400">|</span>
                                    <a href="/contact?service=${service.id}" class="text-cedarvis-green font-medium hover:text-cedarvis-gold transition-colors">
                                        Get Quote <i class="fas fa-comment-dollar ml-1"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
    
    <!-- Process Section -->
    <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-6">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-space font-bold text-cedarvis-dark mb-4">Our Process</h2>
                <p class="text-xl text-gray-600">How we deliver exceptional results</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div class="text-center">
                    <div class="w-20 h-20 bg-gradient-to-br from-cedarvis-green to-cedarvis-gold rounded-full flex items-center justify-center mx-auto mb-4">
                        <span class="text-white text-2xl font-bold">1</span>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Discovery</h3>
                    <p class="text-gray-600">Understanding your business goals and challenges</p>
                </div>
                
                <div class="text-center">
                    <div class="w-20 h-20 bg-gradient-to-br from-cedarvis-green to-cedarvis-gold rounded-full flex items-center justify-center mx-auto mb-4">
                        <span class="text-white text-2xl font-bold">2</span>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Strategy</h3>
                    <p class="text-gray-600">Developing tailored solutions and roadmaps</p>
                </div>
                
                <div class="text-center">
                    <div class="w-20 h-20 bg-gradient-to-br from-cedarvis-green to-cedarvis-gold rounded-full flex items-center justify-center mx-auto mb-4">
                        <span class="text-white text-2xl font-bold">3</span>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Execution</h3>
                    <p class="text-gray-600">Implementing solutions with excellence</p>
                </div>
                
                <div class="text-center">
                    <div class="w-20 h-20 bg-gradient-to-br from-cedarvis-green to-cedarvis-gold rounded-full flex items-center justify-center mx-auto mb-4">
                        <span class="text-white text-2xl font-bold">4</span>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Growth</h3>
                    <p class="text-gray-600">Continuous optimization and support</p>
                </div>
            </div>
        </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-cedarvis-green to-cedarvis-dark text-white">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-4xl font-space font-bold mb-6">Ready to Get Started?</h2>
            <p class="text-xl mb-8 max-w-3xl mx-auto">
                Let's discuss how we can help transform your business with our comprehensive digital solutions.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" class="btn-primary-large">
                    <i class="fas fa-rocket mr-2"></i> Start Your Project
                </a>
                <a href="/portfolio" class="btn-outline-large">
                    <i class="fas fa-briefcase mr-2"></i> View Our Work
                </a>
            </div>
        </div>
    </section>
  `
  
  return c.html(Layout({ 
    title: 'Services', 
    children: content,
    currentPage: 'services'
  }))
}
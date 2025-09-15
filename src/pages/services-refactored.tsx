import { html } from 'hono/html'
import { MasterLayout } from '../components/master-layout'
import { ServiceCard, Section, Button, Breadcrumb, HeroSection } from '../components/ui-components'

/**
 * Refactored Services Page using Master Layout
 */

export const renderRefactoredServices = (c: any) => {
  const breadcrumb = Breadcrumb({
    items: [
      { label: 'Services' }
    ]
  })

  const heroContent = HeroSection({
    title: 'Our Services',
    subtitle: 'Comprehensive digital solutions tailored to your business needs',
    backgroundImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop'
  })

  const content = html`
    ${heroContent}
    
    <div class="py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        ${breadcrumb}
      </div>
    </div>

    ${Section({
      title: 'Digital Transformation Services',
      subtitle: 'End-to-end solutions to digitize and optimize your business operations',
      children: html`
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${ServiceCard({
            title: 'Digital Marketing & Media Buying',
            description: 'Strategic online marketing campaigns that deliver measurable results',
            icon: 'fas fa-bullhorn',
            features: [
              'Search Engine Optimization (SEO)',
              'Pay-Per-Click Advertising (PPC)',
              'Social Media Marketing',
              'Content Marketing Strategy',
              'Email Marketing Automation'
            ],
            link: '/services/digital-marketing'
          })}
          
          ${ServiceCard({
            title: 'Web Development',
            description: 'Custom web solutions built with cutting-edge technologies',
            icon: 'fas fa-code',
            features: [
              'Custom Website Development',
              'E-commerce Platforms',
              'Progressive Web Apps (PWA)',
              'API Development & Integration',
              'Website Maintenance & Support'
            ],
            link: '/services/web-development'
          })}
          
          ${ServiceCard({
            title: 'Mobile App Development',
            description: 'Native and cross-platform mobile applications',
            icon: 'fas fa-mobile-alt',
            features: [
              'iOS App Development',
              'Android App Development',
              'React Native Solutions',
              'Flutter Applications',
              'App Store Optimization'
            ],
            link: '/services/mobile-apps'
          })}
          
          ${ServiceCard({
            title: 'Data Analytics & BI',
            description: 'Transform raw data into actionable business insights',
            icon: 'fas fa-chart-line',
            features: [
              'Business Intelligence Solutions',
              'Predictive Analytics',
              'Data Visualization Dashboards',
              'Big Data Processing',
              'Machine Learning Models'
            ],
            link: '/services/data-analytics'
          })}
          
          ${ServiceCard({
            title: 'Cybersecurity Services',
            description: 'Comprehensive security solutions to protect your digital assets',
            icon: 'fas fa-shield-alt',
            features: [
              'Security Audits & Assessments',
              'Penetration Testing',
              'Compliance Management',
              'Incident Response Planning',
              'Security Training & Awareness'
            ],
            link: '/services/cybersecurity'
          })}
          
          ${ServiceCard({
            title: 'Cloud & DevOps',
            description: 'Modern cloud infrastructure and automation solutions',
            icon: 'fas fa-cloud',
            features: [
              'Cloud Migration Services',
              'Infrastructure as Code',
              'CI/CD Pipeline Setup',
              'Container Orchestration',
              'Cloud Cost Optimization'
            ],
            link: '/services/cloud-devops'
          })}
          
          ${ServiceCard({
            title: 'UI/UX Design',
            description: 'User-centered design that delivers exceptional experiences',
            icon: 'fas fa-palette',
            features: [
              'User Research & Testing',
              'Wireframing & Prototyping',
              'Visual Design & Branding',
              'Design Systems',
              'Usability Testing'
            ],
            link: '/services/ui-ux-design'
          })}
          
          ${ServiceCard({
            title: 'Corporate Training',
            description: 'Upskill your team with cutting-edge technology training',
            icon: 'fas fa-graduation-cap',
            features: [
              'Technical Skills Training',
              'Leadership Development',
              'Digital Transformation Workshops',
              'Certification Programs',
              'Custom Training Solutions'
            ],
            link: '/services/corporate-training'
          })}
          
          ${ServiceCard({
            title: 'Business Consulting',
            description: 'Strategic consulting to drive business growth',
            icon: 'fas fa-briefcase',
            features: [
              'Digital Strategy Consulting',
              'Process Optimization',
              'Change Management',
              'Technology Roadmapping',
              'Innovation Workshops'
            ],
            link: '/services/business-consulting'
          })}
        </div>
      `
    })}

    <section class="bg-gray-100 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="font-space font-bold text-4xl text-center text-gray-800 mb-12">
          Our Process
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-20 h-20 bg-cedarvis-green text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 class="font-semibold text-xl mb-2">Discover</h3>
            <p class="text-gray-600">Understanding your business needs and objectives</p>
          </div>
          <div class="text-center">
            <div class="w-20 h-20 bg-cedarvis-green text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 class="font-semibold text-xl mb-2">Design</h3>
            <p class="text-gray-600">Creating tailored solutions for your challenges</p>
          </div>
          <div class="text-center">
            <div class="w-20 h-20 bg-cedarvis-green text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 class="font-semibold text-xl mb-2">Develop</h3>
            <p class="text-gray-600">Building and implementing with best practices</p>
          </div>
          <div class="text-center">
            <div class="w-20 h-20 bg-cedarvis-green text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              4
            </div>
            <h3 class="font-semibold text-xl mb-2">Deliver</h3>
            <p class="text-gray-600">Launching and providing ongoing support</p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gradient-to-r from-cedarvis-green to-green-700 py-20">
      <div class="max-w-4xl mx-auto text-center px-4">
        <h2 class="font-space font-bold text-4xl text-white mb-6">
          Need a Custom Solution?
        </h2>
        <p class="text-xl text-gray-100 mb-8">
          Let's discuss how we can help transform your business with our comprehensive services
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          ${Button({ 
            text: 'Get Free Consultation', 
            href: '/contact?action=consultation', 
            variant: 'gold', 
            size: 'lg',
            icon: 'fas fa-comments'
          })}
          ${Button({ 
            text: 'Download Service Catalog', 
            href: '#', 
            variant: 'outline', 
            size: 'lg',
            icon: 'fas fa-download',
            onClick: 'CedarvisUtils.showNotification("Service catalog will be sent to your email", "info")'
          })}
        </div>
      </div>
    </section>
  `

  return c.html(
    MasterLayout({
      title: 'Services',
      description: 'Comprehensive digital transformation services - Web Development, Mobile Apps, Digital Marketing, Data Analytics, Cybersecurity, and more',
      content,
      currentPath: '/services'
    })
  )
}
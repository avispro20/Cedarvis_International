import { html } from 'hono/html'
import { MasterLayout } from '../components/master-layout'
import { 
  Button, 
  ServiceCard, 
  TestimonialCard, 
  Card, 
  Section,
  HeroSection,
  StatsSection 
} from '../components/ui-components'

/**
 * Refactored Home Page using Master Layout and Centralized Components
 */

export const renderRefactoredHome = (c: any) => {
  const heroContent = HeroSection({
    title: 'Transforming Africa Through Tech, Training & Talent',
    subtitle: 'Leading Digital Tech & Business Solutions Agency',
    backgroundImage: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1920&h=1080&fit=crop',
    ctaText: 'Start Your Digital Journey',
    ctaLink: '/contact?action=hire',
    secondaryCtaText: 'Explore Our Services',
    secondaryCtaLink: '/services'
  })

  const servicesContent = Section({
    title: 'Our Services',
    subtitle: 'Comprehensive digital solutions to transform your business',
    children: html`
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        ${ServiceCard({
          title: 'Digital Marketing',
          description: 'Strategic online marketing to grow your brand',
          icon: 'fas fa-bullhorn',
          features: ['SEO Optimization', 'Social Media Marketing', 'Content Strategy'],
          link: '/services/digital-marketing'
        })}
        
        ${ServiceCard({
          title: 'Web Development',
          description: 'Custom websites and web applications',
          icon: 'fas fa-code',
          features: ['Responsive Design', 'E-commerce Solutions', 'Progressive Web Apps'],
          link: '/services/web-development'
        })}
        
        ${ServiceCard({
          title: 'Mobile Apps',
          description: 'Native and cross-platform mobile solutions',
          icon: 'fas fa-mobile-alt',
          features: ['iOS Development', 'Android Development', 'React Native'],
          link: '/services/mobile-apps'
        })}
        
        ${ServiceCard({
          title: 'Data Analytics',
          description: 'Transform data into actionable insights',
          icon: 'fas fa-chart-line',
          features: ['Business Intelligence', 'Predictive Analytics', 'Data Visualization'],
          link: '/services/data-analytics'
        })}
        
        ${ServiceCard({
          title: 'Cybersecurity',
          description: 'Protect your digital assets and infrastructure',
          icon: 'fas fa-shield-alt',
          features: ['Security Audits', 'Penetration Testing', 'Compliance Management'],
          link: '/services/cybersecurity'
        })}
        
        ${ServiceCard({
          title: 'Cloud & DevOps',
          description: 'Modern cloud infrastructure and automation',
          icon: 'fas fa-cloud',
          features: ['Cloud Migration', 'CI/CD Pipelines', 'Infrastructure as Code'],
          link: '/services/cloud-devops'
        })}
      </div>
    `
  })

  const statsContent = StatsSection({
    stats: [
      { number: '500+', label: 'Projects Completed', icon: 'fas fa-project-diagram' },
      { number: '200+', label: 'Happy Clients', icon: 'fas fa-users' },
      { number: '50+', label: 'Team Members', icon: 'fas fa-user-tie' },
      { number: '15+', label: 'Years Experience', icon: 'fas fa-award' }
    ]
  })

  const testimonialsContent = Section({
    title: 'Client Testimonials',
    subtitle: 'What our clients say about us',
    children: html`
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        ${TestimonialCard({
          quote: 'Cedarvis transformed our digital presence completely. Their expertise in web development and digital marketing helped us achieve 300% growth in online sales.',
          author: 'Sarah Johnson',
          position: 'CEO',
          company: 'TechStart Nigeria',
          image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
          rating: 5
        })}
        
        ${TestimonialCard({
          quote: 'The mobile app they developed for us exceeded all expectations. User engagement increased by 250% within the first month.',
          author: 'Michael Chen',
          position: 'Product Manager',
          company: 'FinTech Solutions',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
          rating: 5
        })}
        
        ${TestimonialCard({
          quote: 'Their cybersecurity team helped us achieve ISO 27001 certification. Professional, knowledgeable, and always available.',
          author: 'Amara Okonkwo',
          position: 'CTO',
          company: 'SecureBank Africa',
          image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop',
          rating: 5
        })}
      </div>
    `
  })

  const blogContent = Section({
    title: 'Latest Insights',
    subtitle: 'Stay updated with the latest tech trends and insights',
    children: html`
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        ${Card({
          title: 'The Future of AI in African Tech',
          description: 'Exploring how artificial intelligence is reshaping the African technology landscape and creating new opportunities.',
          image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
          link: '/blog/future-of-ai-africa',
          linkText: 'Read More'
        })}
        
        ${Card({
          title: 'Cloud Migration Best Practices',
          description: 'A comprehensive guide to successfully migrating your infrastructure to the cloud with minimal disruption.',
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
          link: '/blog/cloud-migration-guide',
          linkText: 'Read More'
        })}
        
        ${Card({
          title: 'Mobile-First Development Strategy',
          description: 'Why mobile-first approach is crucial for African markets and how to implement it effectively.',
          image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
          link: '/blog/mobile-first-strategy',
          linkText: 'Read More'
        })}
      </div>
    `
  })

  const ctaContent = html`
    <section class="bg-gradient-to-r from-cedarvis-green to-green-700 py-20">
      <div class="max-w-4xl mx-auto text-center px-4">
        <h2 class="font-space font-bold text-4xl text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p class="text-xl text-gray-100 mb-8">
          Join hundreds of successful companies that have partnered with us for their digital transformation journey.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          ${Button({ 
            text: 'Schedule a Consultation', 
            href: '/contact?action=consultation', 
            variant: 'gold', 
            size: 'lg',
            icon: 'fas fa-calendar-alt'
          })}
          ${Button({ 
            text: 'View Our Portfolio', 
            href: '/portfolio', 
            variant: 'outline', 
            size: 'lg',
            icon: 'fas fa-briefcase'
          })}
        </div>
      </div>
    </section>
  `

  const content = html`
    ${heroContent}
    ${servicesContent}
    ${statsContent}
    ${testimonialsContent}
    ${blogContent}
    ${ctaContent}
  `

  return c.html(
    MasterLayout({
      title: 'Home',
      description: 'Transforming Africa Through Tech, Training & Talent',
      content,
      currentPath: '/'
    })
  )
}
import { html } from 'hono/html'
import { MasterLayout } from '../components/master-layout'
import { Section, Card, Button, Breadcrumb } from '../components/ui-components'

/**
 * Refactored About Page using Master Layout
 */

export const renderRefactoredAbout = (c: any) => {
  const breadcrumb = Breadcrumb({
    items: [
      { label: 'About Us' }
    ]
  })

  const content = html`
    <div class="bg-gray-50 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        ${breadcrumb}
        <h1 class="font-space font-bold text-5xl text-gray-800">About Cedarvis International</h1>
      </div>
    </div>

    ${Section({
      title: 'Our Story',
      subtitle: 'Building Africa\'s Digital Future Since 2009',
      children: html`
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p class="text-lg text-gray-700 mb-6">
              Founded in 2009, Cedarvis International has been at the forefront of Africa's digital transformation. 
              What started as a small team of passionate technologists has grown into a leading digital agency 
              serving clients across the continent and beyond.
            </p>
            <p class="text-lg text-gray-700 mb-6">
              Our journey has been marked by innovation, dedication, and an unwavering commitment to excellence. 
              We've helped hundreds of businesses navigate the digital landscape, from startups to established enterprises.
            </p>
            <p class="text-lg text-gray-700">
              Today, we stand as a testament to African innovation, combining global best practices with deep 
              local understanding to deliver solutions that truly make a difference.
            </p>
          </div>
          <div class="relative">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                 alt="Our Team" 
                 class="rounded-xl shadow-2xl">
            <div class="absolute -bottom-6 -right-6 bg-cedarvis-gold text-cedarvis-dark font-bold text-2xl px-6 py-3 rounded-lg shadow-lg">
              15+ Years of Excellence
            </div>
          </div>
        </div>
      `
    })}

    <section class="bg-cedarvis-dark py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <i class="fas fa-bullseye text-5xl text-cedarvis-gold mb-6"></i>
            <h3 class="font-space font-bold text-2xl text-white mb-4">Our Mission</h3>
            <p class="text-gray-300">
              To empower African businesses with cutting-edge technology solutions that drive growth, 
              innovation, and sustainable success in the digital economy.
            </p>
          </div>
          <div>
            <i class="fas fa-eye text-5xl text-cedarvis-gold mb-6"></i>
            <h3 class="font-space font-bold text-2xl text-white mb-4">Our Vision</h3>
            <p class="text-gray-300">
              To be Africa's most trusted and innovative digital transformation partner, bridging the 
              technology gap and creating opportunities for millions.
            </p>
          </div>
          <div>
            <i class="fas fa-heart text-5xl text-cedarvis-gold mb-6"></i>
            <h3 class="font-space font-bold text-2xl text-white mb-4">Our Values</h3>
            <p class="text-gray-300">
              Innovation, Integrity, Excellence, Collaboration, and Social Impact guide everything we do, 
              ensuring we deliver value beyond expectations.
            </p>
          </div>
        </div>
      </div>
    </section>

    ${Section({
      title: 'Leadership Team',
      subtitle: 'Meet the visionaries driving our success',
      children: html`
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${Card({
            title: 'John Adebayo',
            description: 'Founder & CEO - Visionary leader with 20+ years in tech innovation',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
            variant: 'hover'
          })}
          ${Card({
            title: 'Sarah Mensah',
            description: 'CTO - Leading our technical excellence and innovation initiatives',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
            variant: 'hover'
          })}
          ${Card({
            title: 'Michael Okoro',
            description: 'COO - Ensuring operational excellence and client satisfaction',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
            variant: 'hover'
          })}
        </div>
      `
    })}

    ${Section({
      title: 'Why Choose Cedarvis?',
      centered: false,
      children: html`
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="flex items-start">
            <i class="fas fa-check-circle text-3xl text-cedarvis-green mr-4 mt-1"></i>
            <div>
              <h4 class="font-semibold text-xl mb-2">Proven Track Record</h4>
              <p class="text-gray-600">500+ successful projects delivered across various industries</p>
            </div>
          </div>
          <div class="flex items-start">
            <i class="fas fa-check-circle text-3xl text-cedarvis-green mr-4 mt-1"></i>
            <div>
              <h4 class="font-semibold text-xl mb-2">Expert Team</h4>
              <p class="text-gray-600">50+ certified professionals with deep domain expertise</p>
            </div>
          </div>
          <div class="flex items-start">
            <i class="fas fa-check-circle text-3xl text-cedarvis-green mr-4 mt-1"></i>
            <div>
              <h4 class="font-semibold text-xl mb-2">24/7 Support</h4>
              <p class="text-gray-600">Round-the-clock support to ensure your systems run smoothly</p>
            </div>
          </div>
          <div class="flex items-start">
            <i class="fas fa-check-circle text-3xl text-cedarvis-green mr-4 mt-1"></i>
            <div>
              <h4 class="font-semibold text-xl mb-2">Cutting-Edge Technology</h4>
              <p class="text-gray-600">Latest technologies and best practices for optimal results</p>
            </div>
          </div>
        </div>
      `
    })}

    <section class="bg-gradient-to-r from-cedarvis-green to-green-700 py-20">
      <div class="max-w-4xl mx-auto text-center px-4">
        <h2 class="font-space font-bold text-4xl text-white mb-6">
          Ready to Join Our Success Story?
        </h2>
        <p class="text-xl text-gray-100 mb-8">
          Let's work together to transform your vision into reality
        </p>
        ${Button({ 
          text: 'Get Started Today', 
          href: '/contact', 
          variant: 'gold', 
          size: 'lg',
          icon: 'fas fa-rocket'
        })}
      </div>
    </section>
  `

  return c.html(
    MasterLayout({
      title: 'About Us',
      description: 'Learn about Cedarvis International - Leading Digital Tech & Business Solutions Agency in Africa',
      content,
      currentPath: '/about'
    })
  )
}
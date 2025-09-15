import { html } from 'hono/html'

/**
 * Centralized UI Components Library
 * Single source of truth for all reusable components
 */

// ============================================
// BUTTON COMPONENTS
// ============================================

interface ButtonProps {
  text: string
  href?: string
  onClick?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'gold'
  size?: 'sm' | 'md' | 'lg'
  icon?: string
  fullWidth?: boolean
  type?: 'button' | 'submit'
}

export const Button = ({ 
  text, 
  href, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  icon, 
  fullWidth = false,
  type = 'button' 
}: ButtonProps) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  const variantClasses = {
    primary: 'bg-cedarvis-green text-white hover:bg-cedarvis-dark',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    outline: 'border-2 border-cedarvis-green text-cedarvis-green hover:bg-cedarvis-green hover:text-white',
    gold: 'bg-cedarvis-gold text-cedarvis-dark hover:bg-yellow-500'
  }

  const baseClasses = `
    inline-flex items-center justify-center font-semibold rounded-lg 
    transform hover:scale-105 transition-all duration-300 shadow-lg
    ${sizeClasses[size]} ${variantClasses[variant]} ${fullWidth ? 'w-full' : ''}
  `

  if (href) {
    return html`
      <a href="${href}" class="${baseClasses}">
        ${icon ? html`<i class="${icon} mr-2"></i>` : ''}
        ${text}
      </a>
    `
  }

  return html`
    <button type="${type}" ${onClick ? `onclick="${onClick}"` : ''} class="${baseClasses}">
      ${icon ? html`<i class="${icon} mr-2"></i>` : ''}
      ${text}
    </button>
  `
}

// ============================================
// CARD COMPONENTS
// ============================================

interface CardProps {
  title: string
  description: string
  image?: string
  icon?: string
  link?: string
  linkText?: string
  variant?: 'default' | 'hover' | 'gradient'
}

export const Card = ({ 
  title, 
  description, 
  image, 
  icon, 
  link, 
  linkText = 'Learn More',
  variant = 'default' 
}: CardProps) => {
  const variantClasses = {
    default: 'bg-white hover:shadow-xl',
    hover: 'bg-white hover:shadow-2xl hover:-translate-y-2',
    gradient: 'bg-gradient-to-br from-cedarvis-green to-green-700 text-white'
  }

  return html`
    <div class="rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${variantClasses[variant]}">
      ${image ? html`
        <div class="h-48 overflow-hidden">
          <img src="${image}" alt="${title}" class="w-full h-full object-cover hover:scale-110 transition-transform duration-300">
        </div>
      ` : ''}
      
      <div class="p-6">
        ${icon ? html`
          <div class="w-16 h-16 bg-cedarvis-gold rounded-full flex items-center justify-center mb-4">
            <i class="${icon} text-2xl text-cedarvis-dark"></i>
          </div>
        ` : ''}
        
        <h3 class="font-space font-semibold text-xl mb-3 ${variant === 'gradient' ? 'text-white' : 'text-gray-800'}">${title}</h3>
        <p class="${variant === 'gradient' ? 'text-gray-100' : 'text-gray-600'} mb-4">${description}</p>
        
        ${link ? html`
          <a href="${link}" class="inline-flex items-center ${variant === 'gradient' ? 'text-cedarvis-gold' : 'text-cedarvis-green'} font-semibold hover:underline">
            ${linkText}
            <i class="fas fa-arrow-right ml-2"></i>
          </a>
        ` : ''}
      </div>
    </div>
  `
}

// ============================================
// SERVICE CARD COMPONENT
// ============================================

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  features: string[]
  link: string
}

export const ServiceCard = ({ title, description, icon, features, link }: ServiceCardProps) => html`
  <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
    <div class="w-20 h-20 bg-gradient-to-br from-cedarvis-green to-green-600 rounded-full flex items-center justify-center mb-6">
      <i class="${icon} text-3xl text-white"></i>
    </div>
    
    <h3 class="font-space font-bold text-2xl mb-4 text-gray-800">${title}</h3>
    <p class="text-gray-600 mb-6">${description}</p>
    
    <ul class="space-y-2 mb-6">
      ${features.map(feature => html`
        <li class="flex items-start">
          <i class="fas fa-check-circle text-cedarvis-green mt-1 mr-2"></i>
          <span class="text-gray-700">${feature}</span>
        </li>
      `).join('')}
    </ul>
    
    <a href="${link}" class="inline-flex items-center text-cedarvis-green font-semibold hover:underline">
      Learn More
      <i class="fas fa-arrow-right ml-2"></i>
    </a>
  </div>
`

// ============================================
// TESTIMONIAL CARD COMPONENT
// ============================================

interface TestimonialProps {
  quote: string
  author: string
  position: string
  company: string
  image: string
  rating?: number
}

export const TestimonialCard = ({ quote, author, position, company, image, rating = 5 }: TestimonialProps) => html`
  <div class="bg-white rounded-xl shadow-lg p-8">
    <div class="flex mb-4">
      ${Array.from({ length: 5 }).map((_, i) => html`
        <i class="fas fa-star ${i < rating ? 'text-cedarvis-gold' : 'text-gray-300'}"></i>
      `).join('')}
    </div>
    
    <p class="text-gray-700 italic mb-6">"${quote}"</p>
    
    <div class="flex items-center">
      <img src="${image}" alt="${author}" class="w-12 h-12 rounded-full mr-4 object-cover">
      <div>
        <h4 class="font-semibold text-gray-800">${author}</h4>
        <p class="text-sm text-gray-600">${position}, ${company}</p>
      </div>
    </div>
  </div>
`

// ============================================
// FORM COMPONENTS
// ============================================

interface InputProps {
  type?: string
  name: string
  label: string
  placeholder?: string
  required?: boolean
  icon?: string
  value?: string
}

export const FormInput = ({ 
  type = 'text', 
  name, 
  label, 
  placeholder, 
  required = false, 
  icon,
  value = '' 
}: InputProps) => html`
  <div class="mb-6">
    <label for="${name}" class="block text-gray-700 font-semibold mb-2">
      ${label} ${required ? html`<span class="text-red-500">*</span>` : ''}
    </label>
    <div class="relative">
      ${icon ? html`
        <i class="${icon} absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
      ` : ''}
      <input 
        type="${type}" 
        id="${name}" 
        name="${name}" 
        placeholder="${placeholder || ''}"
        value="${value}"
        ${required ? 'required' : ''}
        class="w-full px-4 py-3 ${icon ? 'pl-10' : ''} rounded-lg border border-gray-300 focus:border-cedarvis-green focus:outline-none focus:ring-2 focus:ring-cedarvis-green/20 transition"
      >
    </div>
  </div>
`

export const FormTextarea = ({ name, label, placeholder, required = false, rows = 4 }: any) => html`
  <div class="mb-6">
    <label for="${name}" class="block text-gray-700 font-semibold mb-2">
      ${label} ${required ? html`<span class="text-red-500">*</span>` : ''}
    </label>
    <textarea 
      id="${name}" 
      name="${name}" 
      rows="${rows}"
      placeholder="${placeholder || ''}"
      ${required ? 'required' : ''}
      class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cedarvis-green focus:outline-none focus:ring-2 focus:ring-cedarvis-green/20 transition resize-none"
    ></textarea>
  </div>
`

export const FormSelect = ({ name, label, options, required = false }: any) => html`
  <div class="mb-6">
    <label for="${name}" class="block text-gray-700 font-semibold mb-2">
      ${label} ${required ? html`<span class="text-red-500">*</span>` : ''}
    </label>
    <select 
      id="${name}" 
      name="${name}"
      ${required ? 'required' : ''}
      class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cedarvis-green focus:outline-none focus:ring-2 focus:ring-cedarvis-green/20 transition"
    >
      <option value="">Select ${label}</option>
      ${options.map((opt: any) => html`
        <option value="${opt.value}">${opt.label}</option>
      `).join('')}
    </select>
  </div>
`

// ============================================
// SECTION COMPONENTS
// ============================================

interface SectionProps {
  title: string
  subtitle?: string
  centered?: boolean
  children: any
}

export const Section = ({ title, subtitle, centered = true, children }: SectionProps) => html`
  <section class="py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="${centered ? 'text-center' : ''} mb-12">
        <h2 class="font-space font-bold text-4xl text-gray-800 mb-4">${title}</h2>
        ${subtitle ? html`
          <p class="text-xl text-gray-600 max-w-3xl ${centered ? 'mx-auto' : ''}">${subtitle}</p>
        ` : ''}
      </div>
      ${children}
    </div>
  </section>
`

// ============================================
// HERO SECTION COMPONENT
// ============================================

interface HeroProps {
  title: string
  subtitle: string
  backgroundImage?: string
  ctaText?: string
  ctaLink?: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
}

export const HeroSection = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  ctaText, 
  ctaLink, 
  secondaryCtaText, 
  secondaryCtaLink 
}: HeroProps) => html`
  <section class="relative min-h-[600px] flex items-center justify-center overflow-hidden">
    ${backgroundImage ? html`
      <div class="absolute inset-0 z-0">
        <img src="${backgroundImage}" alt="Hero Background" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-cedarvis-dark/90 to-cedarvis-dark/70"></div>
      </div>
    ` : html`
      <div class="absolute inset-0 bg-gradient-to-br from-cedarvis-green to-green-700"></div>
    `}
    
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
      <h1 class="font-space font-bold text-5xl md:text-6xl lg:text-7xl mb-6 animate-fade-in-up">
        ${title}
      </h1>
      <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
        ${subtitle}
      </p>
      
      ${(ctaText || secondaryCtaText) ? html`
        <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
          ${ctaText ? Button({ text: ctaText, href: ctaLink, size: 'lg', variant: 'gold' }) : ''}
          ${secondaryCtaText ? Button({ text: secondaryCtaText, href: secondaryCtaLink, size: 'lg', variant: 'outline' }) : ''}
        </div>
      ` : ''}
    </div>
  </section>
`

// ============================================
// STATS COMPONENT
// ============================================

interface StatProps {
  number: string
  label: string
  icon?: string
}

export const StatsSection = ({ stats }: { stats: StatProps[] }) => html`
  <section class="bg-cedarvis-dark py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        ${stats.map(stat => html`
          <div class="text-center">
            ${stat.icon ? html`
              <i class="${stat.icon} text-4xl text-cedarvis-gold mb-4"></i>
            ` : ''}
            <div class="text-4xl font-bold text-white mb-2">${stat.number}</div>
            <div class="text-gray-400">${stat.label}</div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>
`

// ============================================
// BREADCRUMB COMPONENT
// ============================================

interface BreadcrumbItem {
  label: string
  href?: string
}

export const Breadcrumb = ({ items }: { items: BreadcrumbItem[] }) => html`
  <nav class="flex items-center space-x-2 text-sm text-gray-600 mb-8">
    <a href="/" class="hover:text-cedarvis-green transition">
      <i class="fas fa-home"></i>
    </a>
    ${items.map((item, index) => html`
      <i class="fas fa-chevron-right text-xs"></i>
      ${item.href ? html`
        <a href="${item.href}" class="hover:text-cedarvis-green transition">${item.label}</a>
      ` : html`
        <span class="text-gray-800 font-semibold">${item.label}</span>
      `}
    `).join('')}
  </nav>
`

// ============================================
// ALERT COMPONENT
// ============================================

interface AlertProps {
  message: string
  type?: 'success' | 'error' | 'warning' | 'info'
  icon?: string
}

export const Alert = ({ message, type = 'info', icon }: AlertProps) => {
  const typeStyles = {
    success: 'bg-green-100 text-green-800 border-green-300',
    error: 'bg-red-100 text-red-800 border-red-300',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    info: 'bg-blue-100 text-blue-800 border-blue-300'
  }

  const defaultIcons = {
    success: 'fas fa-check-circle',
    error: 'fas fa-exclamation-circle',
    warning: 'fas fa-exclamation-triangle',
    info: 'fas fa-info-circle'
  }

  return html`
    <div class="p-4 rounded-lg border ${typeStyles[type]} flex items-center">
      <i class="${icon || defaultIcons[type]} mr-3"></i>
      <span>${message}</span>
    </div>
  `
}

// ============================================
// LOADING SPINNER COMPONENT
// ============================================

export const LoadingSpinner = ({ size = 'md', color = 'cedarvis-green' }: any) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  return html`
    <div class="flex justify-center items-center">
      <div class="${sizeClasses[size]} border-4 border-${color}/20 border-t-${color} rounded-full animate-spin"></div>
    </div>
  `
}

// ============================================
// MODAL COMPONENT
// ============================================

interface ModalProps {
  id: string
  title: string
  content: any
  footer?: any
}

export const Modal = ({ id, title, content, footer }: ModalProps) => html`
  <div id="${id}" class="fixed inset-0 z-50 hidden">
    <div class="flex items-center justify-center min-h-screen px-4">
      <div class="fixed inset-0 bg-black/50" onclick="document.getElementById('${id}').classList.add('hidden')"></div>
      
      <div class="relative bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div class="flex items-center justify-between p-6 border-b">
          <h3 class="font-space font-bold text-xl text-gray-800">${title}</h3>
          <button onclick="document.getElementById('${id}').classList.add('hidden')" class="text-gray-400 hover:text-gray-600">
            <i class="fas fa-times text-xl"></i>
          </button>
        </div>
        
        <div class="p-6">
          ${content}
        </div>
        
        ${footer ? html`
          <div class="p-6 border-t bg-gray-50 rounded-b-xl">
            ${footer}
          </div>
        ` : ''}
      </div>
    </div>
  </div>
`

// ============================================
// EXPORT ALL COMPONENTS
// ============================================

export default {
  Button,
  Card,
  ServiceCard,
  TestimonialCard,
  FormInput,
  FormTextarea,
  FormSelect,
  Section,
  HeroSection,
  StatsSection,
  Breadcrumb,
  Alert,
  LoadingSpinner,
  Modal
}
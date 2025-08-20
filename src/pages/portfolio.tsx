import { Context } from 'hono'
import { Layout } from '../components/layout'

export const renderPortfolio = (c: Context) => {
  const projects = [
    {
      title: 'FinTech Mobile App',
      client: 'PayFlow Africa',
      category: 'Mobile Development',
      description: 'Revolutionary mobile banking app serving 1M+ users across 5 African countries.',
      tags: ['React Native', 'Node.js', 'MongoDB', 'AWS']
    },
    {
      title: 'E-Commerce Platform',
      client: 'MarketHub Nigeria',
      category: 'Web Development',
      description: 'Multi-vendor marketplace connecting 10,000+ sellers with millions of buyers.',
      tags: ['Next.js', 'PostgreSQL', 'Redis', 'Kubernetes']
    },
    {
      title: 'Data Analytics Dashboard',
      client: 'HealthTech Kenya',
      category: 'Data Analytics',
      description: 'Real-time healthcare analytics platform processing millions of records daily.',
      tags: ['Python', 'Tableau', 'Apache Spark', 'Azure']
    },
    {
      title: 'Digital Marketing Campaign',
      client: 'TourismGhana',
      category: 'Digital Marketing',
      description: 'Integrated campaign that increased tourism bookings by 300%.',
      tags: ['SEO', 'Social Media', 'Content Marketing', 'Analytics']
    },
    {
      title: 'Cybersecurity Implementation',
      client: 'BankSecure SA',
      category: 'Cybersecurity',
      description: 'Enterprise security solution protecting critical financial infrastructure.',
      tags: ['Zero Trust', 'SIEM', 'Penetration Testing', 'Compliance']
    },
    {
      title: 'Cloud Migration',
      client: 'RetailChain Africa',
      category: 'Cloud & DevOps',
      description: 'Seamless migration of legacy systems to cloud, reducing costs by 40%.',
      tags: ['AWS', 'Docker', 'CI/CD', 'Terraform']
    }
  ]

  const content = `
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-cedarvis-dark via-cedarvis-green to-cedarvis-dark text-white">
        <div class="absolute inset-0 opacity-10 african-pattern"></div>
        <div class="container mx-auto px-6 relative z-10">
            <div class="text-center max-w-4xl mx-auto">
                <h1 class="text-5xl font-space font-bold mb-6 animate-slide-down">Our Portfolio</h1>
                <p class="text-xl text-gray-300 animate-slide-up">
                    Showcasing our impact across industries and technologies
                </p>
            </div>
        </div>
    </section>
    
    <!-- Filter Buttons -->
    <section class="py-8 bg-white border-b">
        <div class="container mx-auto px-6">
            <div class="flex flex-wrap gap-4 justify-center">
                <button class="px-6 py-2 bg-cedarvis-gold text-white rounded-lg">All</button>
                <button class="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-cedarvis-gold hover:text-white transition-colors">Web Development</button>
                <button class="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-cedarvis-gold hover:text-white transition-colors">Mobile Development</button>
                <button class="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-cedarvis-gold hover:text-white transition-colors">Data Analytics</button>
                <button class="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-cedarvis-gold hover:text-white transition-colors">Digital Marketing</button>
                <button class="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-cedarvis-gold hover:text-white transition-colors">Cloud & DevOps</button>
            </div>
        </div>
    </section>
    
    <!-- Portfolio Grid -->
    <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${projects.map(project => `
                    <div class="portfolio-item bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                        <div class="h-48 bg-gradient-to-br from-cedarvis-green to-cedarvis-gold flex items-center justify-center">
                            <i class="fas fa-project-diagram text-white text-5xl opacity-50"></i>
                        </div>
                        <div class="p-6">
                            <span class="text-xs text-cedarvis-gold font-semibold uppercase">${project.category}</span>
                            <h3 class="text-xl font-semibold mt-2 mb-1">${project.title}</h3>
                            <p class="text-sm text-gray-600 mb-3">${project.client}</p>
                            <p class="text-gray-700 mb-4">${project.description}</p>
                            <div class="flex flex-wrap gap-2 mb-4">
                                ${project.tags.map(tag => `
                                    <span class="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                                        ${tag}
                                    </span>
                                `).join('')}
                            </div>
                            <a href="#" class="text-cedarvis-gold font-medium hover:text-cedarvis-green transition-colors">
                                View Case Study <i class="fas fa-arrow-right ml-1"></i>
                            </a>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
    
    <!-- Stats -->
    <section class="py-20 bg-gradient-to-r from-cedarvis-green to-cedarvis-dark text-white">
        <div class="container mx-auto px-6">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-space font-bold mb-4">Project Impact</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                    <div class="text-5xl font-bold text-cedarvis-gold mb-2">500+</div>
                    <div class="text-lg">Projects Completed</div>
                </div>
                <div>
                    <div class="text-5xl font-bold text-cedarvis-gold mb-2">15+</div>
                    <div class="text-lg">Countries Served</div>
                </div>
                <div>
                    <div class="text-5xl font-bold text-cedarvis-gold mb-2">10M+</div>
                    <div class="text-lg">End Users Reached</div>
                </div>
                <div>
                    <div class="text-5xl font-bold text-cedarvis-gold mb-2">95%</div>
                    <div class="text-lg">Client Retention</div>
                </div>
            </div>
        </div>
    </section>
  `
  
  return c.html(Layout({ 
    title: 'Portfolio', 
    children: content,
    currentPage: 'portfolio'
  }))
}
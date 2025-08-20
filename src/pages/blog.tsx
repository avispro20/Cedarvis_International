import { Context } from 'hono'
import { Layout } from '../components/layout'
import { blogPosts } from '../data/blog-posts'

export const renderBlog = (c: Context) => {
  const content = `
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-cedarvis-dark via-cedarvis-green to-cedarvis-dark text-white">
        <div class="absolute inset-0 opacity-10 african-pattern"></div>
        <div class="container mx-auto px-6 relative z-10">
            <div class="text-center max-w-4xl mx-auto">
                <h1 class="text-5xl font-space font-bold mb-6 animate-slide-down">Insights & Updates</h1>
                <p class="text-xl text-gray-300 animate-slide-up">
                    Tech trends, industry insights, and community updates from Cedarvis
                </p>
            </div>
        </div>
    </section>
    
    <!-- Blog Grid -->
    <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="blog-posts-grid">
                ${blogPosts.map(post => `
                    <article class="blog-card group">
                        <div class="relative h-48 overflow-hidden">
                            <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300">
                            <div class="absolute top-4 left-4">
                                <span class="bg-cedarvis-gold text-white px-3 py-1 rounded-full text-xs font-semibold">
                                    ${post.category}
                                </span>
                            </div>
                        </div>
                        <div class="p-6">
                            <div class="flex items-center text-sm text-gray-600 mb-3">
                                <i class="far fa-calendar mr-2"></i>
                                <span>${new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                <span class="mx-2">•</span>
                                <span>${post.readTime} min read</span>
                            </div>
                            <h3 class="text-xl font-semibold mb-3 line-clamp-2">${post.title}</h3>
                            <p class="text-gray-700 mb-4 line-clamp-3">
                                ${post.excerpt}
                            </p>
                            <div class="flex items-center justify-between">
                                <a href="/blog/${post.id}" class="text-cedarvis-gold font-medium hover:text-cedarvis-green transition-colors">
                                    Read More <i class="fas fa-arrow-right ml-1"></i>
                                </a>
                                <div class="flex items-center">
                                    <img src="${post.authorImage}" alt="${post.author}" class="w-6 h-6 rounded-full mr-2">
                                    <span class="text-sm text-gray-600">${post.author.split(' ')[0]}</span>
                                </div>
                            </div>
                        </div>
                    </article>
                `).join('')}
                
                <!-- More blog posts coming soon -->
                ${[4, 5, 6].map(i => `
                    <article class="blog-card opacity-60">
                        <div class="h-48 bg-gradient-to-br from-cedarvis-green to-cedarvis-gold flex items-center justify-center">
                            <i class="fas fa-newspaper text-white text-5xl opacity-50"></i>
                        </div>
                        <div class="p-6">
                            <div class="flex items-center text-sm text-gray-600 mb-3">
                                <span class="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-xs">Coming Soon</span>
                            </div>
                            <h3 class="text-xl font-semibold mb-3">More Insights Coming Soon</h3>
                            <p class="text-gray-700 mb-4">
                                We're constantly creating valuable content to help African businesses thrive in the digital age.
                            </p>
                            <span class="text-gray-400 font-medium">
                                Stay Tuned <i class="fas fa-bell ml-1"></i>
                            </span>
                        </div>
                    </article>
                `).join('')}
            </div>
            
            <!-- Pagination -->
            <div class="flex justify-center mt-12 gap-2">
                <button class="px-4 py-2 bg-cedarvis-gold text-white rounded">1</button>
                <button class="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-cedarvis-gold hover:text-white">2</button>
                <button class="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-cedarvis-gold hover:text-white">3</button>
                <button class="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-cedarvis-gold hover:text-white">Next</button>
            </div>
        </div>
    </section>
    
    <!-- Newsletter CTA -->
    <section class="py-16 bg-gradient-to-r from-cedarvis-gold to-cedarvis-green text-white">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-3xl font-bold mb-4">Stay Updated</h2>
            <p class="text-xl mb-6">Get the latest tech insights delivered to your inbox</p>
            <form class="max-w-md mx-auto flex gap-4">
                <input type="email" placeholder="Your email" class="flex-1 px-4 py-3 rounded-lg text-gray-900">
                <button type="submit" class="btn-white-large">Subscribe</button>
            </form>
        </div>
    </section>
  `
  
  return c.html(Layout({ 
    title: 'Blog', 
    children: content,
    currentPage: 'blog'
  }))
}
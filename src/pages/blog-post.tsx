import { Context } from 'hono'
import { Layout } from '../components/layout'
import { blogPosts } from '../data/blog-posts'

export const renderBlogPost = (c: Context) => {
  const id = parseInt(c.req.param('id'))
  const post = blogPosts.find(p => p.id === id)
  
  if (!post) {
    return c.html(Layout({
      title: 'Post Not Found',
      children: `
        <div class="min-h-screen flex items-center justify-center">
          <div class="text-center">
            <h1 class="text-6xl font-bold text-cedarvis-dark mb-4">404</h1>
            <p class="text-xl text-gray-600 mb-8">Blog post not found</p>
            <a href="/blog" class="btn-primary">Back to Blog</a>
          </div>
        </div>
      `,
      currentPage: 'blog'
    }))
  }
  
  // Get related posts
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 2)
  
  const content = `
    <!-- Hero Section -->
    <section class="relative h-96 bg-gradient-to-br from-cedarvis-dark via-cedarvis-green to-cedarvis-dark">
        <img src="${post.image}" alt="${post.title}" class="absolute inset-0 w-full h-full object-cover opacity-30">
        <div class="absolute inset-0 bg-gradient-to-t from-cedarvis-dark to-transparent"></div>
        <div class="container mx-auto px-6 h-full flex items-end pb-12 relative z-10">
            <div class="max-w-4xl">
                <div class="flex items-center gap-4 text-white/80 text-sm mb-4">
                    <span class="bg-cedarvis-gold/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        ${post.category}
                    </span>
                    <span><i class="far fa-calendar mr-2"></i>${new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <span><i class="far fa-clock mr-2"></i>${post.readTime} min read</span>
                </div>
                <h1 class="text-4xl md:text-5xl font-space font-bold text-white mb-4">${post.title}</h1>
                <p class="text-xl text-gray-300">${post.excerpt}</p>
            </div>
        </div>
    </section>
    
    <!-- Article Content -->
    <article class="py-12 bg-white">
        <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto">
                <!-- Author Info -->
                <div class="flex items-center mb-8 pb-8 border-b">
                    <img src="${post.authorImage}" alt="${post.author}" class="w-16 h-16 rounded-full object-cover mr-4">
                    <div>
                        <h3 class="font-semibold text-lg">${post.author}</h3>
                        <p class="text-gray-600">Technology Expert at Cedarvis International</p>
                    </div>
                </div>
                
                <!-- Article Body -->
                <div class="prose prose-lg max-w-none">
                    ${post.content}
                </div>
                
                <!-- Tags -->
                <div class="mt-12 pt-8 border-t">
                    <h3 class="font-semibold mb-4">Tags:</h3>
                    <div class="flex flex-wrap gap-2">
                        ${post.tags.map(tag => `
                            <span class="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">
                                ${tag}
                            </span>
                        `).join('')}
                    </div>
                </div>
                
                <!-- Share Buttons -->
                <div class="mt-8 pt-8 border-t">
                    <h3 class="font-semibold mb-4">Share this article:</h3>
                    <div class="flex gap-4">
                        <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://cedarvis.com/blog/' + post.id)}" 
                           target="_blank" 
                           class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                            <i class="fab fa-facebook-f mr-2"></i> Facebook
                        </a>
                        <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent('https://cedarvis.com/blog/' + post.id)}" 
                           target="_blank" 
                           class="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                            <i class="fab fa-x-twitter mr-2"></i> Twitter
                        </a>
                        <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://cedarvis.com/blog/' + post.id)}" 
                           target="_blank" 
                           class="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                            <i class="fab fa-linkedin-in mr-2"></i> LinkedIn
                        </a>
                        <a href="https://wa.me/?text=${encodeURIComponent(post.title + ' - https://cedarvis.com/blog/' + post.id)}" 
                           target="_blank" 
                           class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                            <i class="fab fa-whatsapp mr-2"></i> WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </article>
    
    <!-- Related Posts -->
    ${relatedPosts.length > 0 ? `
        <section class="py-12 bg-gray-50">
            <div class="container mx-auto px-6">
                <h2 class="text-3xl font-space font-bold text-cedarvis-dark mb-8 text-center">Related Articles</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    ${relatedPosts.map(related => `
                        <article class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                            <img src="${related.image}" alt="${related.title}" class="w-full h-48 object-cover">
                            <div class="p-6">
                                <div class="flex items-center text-sm text-gray-600 mb-3">
                                    <span class="bg-cedarvis-gold/10 text-cedarvis-gold px-2 py-1 rounded text-xs mr-3">
                                        ${related.category}
                                    </span>
                                    <span>${related.readTime} min read</span>
                                </div>
                                <h3 class="text-xl font-semibold mb-3">${related.title}</h3>
                                <p class="text-gray-700 mb-4 line-clamp-3">${related.excerpt}</p>
                                <a href="/blog/${related.id}" class="text-cedarvis-gold font-medium hover:text-cedarvis-green transition-colors">
                                    Read More <i class="fas fa-arrow-right ml-1"></i>
                                </a>
                            </div>
                        </article>
                    `).join('')}
                </div>
            </div>
        </section>
    ` : ''}
    
    <!-- CTA Section -->
    <section class="py-16 bg-gradient-to-r from-cedarvis-green to-cedarvis-dark text-white">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-3xl font-space font-bold mb-4">Ready to Transform Your Business?</h2>
            <p class="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss how Cedarvis can help you leverage technology for growth.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" class="btn-primary-large">
                    <i class="fas fa-rocket mr-2"></i> Get Started
                </a>
                <a href="/services" class="btn-outline-large">
                    <i class="fas fa-briefcase mr-2"></i> Explore Services
                </a>
            </div>
        </div>
    </section>
  `
  
  return c.html(Layout({ 
    title: post.title, 
    children: content,
    currentPage: 'blog'
  }))
}
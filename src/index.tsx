import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderHome } from './pages/home'
import { renderAbout } from './pages/about'
import { renderServices } from './pages/services'
import { renderFTLAfrica } from './pages/ftlafrica'
import { renderPortfolio } from './pages/portfolio'
import { renderBlog } from './pages/blog'
import { renderBlogPost } from './pages/blog-post'
import { renderCareers } from './pages/careers'
import { renderContact } from './pages/contact'
import { renderServiceDetail } from './pages/service-detail'
import { blogPosts } from './data/blog-posts'
import { testimonials } from './data/testimonials'

type Bindings = {
  // Future bindings for D1, KV, R2 as needed
}

const app = new Hono<{ Bindings: Bindings }>()

// Enable CORS for API endpoints
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))
app.use('/assets/*', serveStatic({ root: './public' }))

// Page Routes
app.get('/', (c) => renderHome(c))
app.get('/about', (c) => renderAbout(c))
app.get('/services', (c) => renderServices(c))
app.get('/services/:slug', (c) => renderServiceDetail(c))
app.get('/ftlafrica', (c) => renderFTLAfrica(c))
app.get('/portfolio', (c) => renderPortfolio(c))
app.get('/blog', (c) => renderBlog(c))
app.get('/blog/:id', (c) => renderBlogPost(c))
app.get('/careers', (c) => renderCareers(c))
app.get('/contact', (c) => renderContact(c))

// API Routes
app.post('/api/contact', async (c) => {
  const body = await c.req.json()
  // Process contact form submission
  // In production, integrate with email service or CRM
  return c.json({ 
    success: true, 
    message: 'Thank you for contacting us. We will get back to you soon!' 
  })
})

app.post('/api/newsletter', async (c) => {
  const body = await c.req.json()
  // Process newsletter subscription
  // In production, integrate with email marketing service
  return c.json({ 
    success: true, 
    message: 'Successfully subscribed to our newsletter!' 
  })
})

app.get('/api/blog', (c) => {
  // Return actual blog posts from our data
  return c.json({
    posts: blogPosts.map(post => ({
      id: post.id,
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      image: post.image,
      date: post.date,
      author: post.author,
      category: post.category,
      readTime: post.readTime
    }))
  })
})

app.get('/api/testimonials', (c) => {
  return c.json({ testimonials })
})

export default app
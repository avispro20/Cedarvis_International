import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { setCookie, getCookie, deleteCookie } from 'hono/cookie'
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

// Admin imports
import { renderAdminLogin } from './pages/admin/login'
import { renderAdminDashboard } from './pages/admin/dashboard'
import { renderBlogEditor } from './pages/admin/blog-editor'
import { renderBlogList } from './pages/admin/blog-list'
import { renderMediaLibrary } from './pages/admin/media-library'

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
  return c.json(testimonials)
})

app.get('/api/blog/recent', (c) => {
  const recentPosts = blogPosts.slice(0, 6)
  return c.json(recentPosts.map(post => ({
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    image: post.image,
    publishedAt: post.date,
    author: post.author,
    category: post.category,
    readTime: post.readTime
  })))
})

// Admin Routes

// Admin login page
app.get('/admin/login', (c) => renderAdminLogin(c))

// Admin login handler
app.post('/admin/login', async (c) => {
  const body = await c.req.parseBody()
  const username = body.username as string
  const password = body.password as string
  
  // Simple authentication (in production, use proper auth)
  if (username === 'admin' && password === 'Cedarvis@2024') {
    // Set cookie for session
    setCookie(c, 'admin_session', 'authenticated', {
      httpOnly: true,
      secure: true,
      sameSite: 'Strict',
      maxAge: 60 * 60 * 24 // 24 hours
    })
    return c.redirect('/admin')
  } else {
    return c.redirect('/admin/login?error=1')
  }
})

// Admin logout
app.get('/admin/logout', (c) => {
  deleteCookie(c, 'admin_session')
  return c.redirect('/admin/login')
})

// Protected admin routes (with simple auth check)
const adminAuth = async (c: any, next: any) => {
  const session = getCookie(c, 'admin_session')
  if (session !== 'authenticated') {
    return c.redirect('/admin/login')
  }
  await next()
}

// Admin dashboard
app.get('/admin', adminAuth, (c) => renderAdminDashboard(c))
app.get('/admin/dashboard', adminAuth, (c) => renderAdminDashboard(c))

// Blog management
app.get('/admin/blog', adminAuth, (c) => renderBlogList(c))
app.get('/admin/blog/new', adminAuth, (c) => renderBlogEditor(c))
app.get('/admin/blog/edit/:id', adminAuth, (c) => renderBlogEditor(c))

// Media library
app.get('/admin/media', adminAuth, (c) => renderMediaLibrary(c))

// Admin API endpoints for saving data
app.post('/api/admin/blog', adminAuth, async (c) => {
  const body = await c.req.json()
  // In production, save to database
  // For now, we'll store in memory or return success
  return c.json({ 
    success: true, 
    message: 'Blog post saved successfully',
    id: Date.now()
  })
})

app.delete('/api/admin/blog/:id', adminAuth, async (c) => {
  const id = c.req.param('id')
  // In production, delete from database
  return c.json({ 
    success: true, 
    message: 'Blog post deleted successfully'
  })
})

app.post('/api/admin/media/upload', adminAuth, async (c) => {
  // Handle file upload
  // In production, save to R2 or similar storage
  return c.json({ 
    success: true, 
    url: '/static/images/placeholder.jpg'
  })
})

// Placeholder routes for other admin sections (to be implemented)
app.get('/admin/content', adminAuth, (c) => {
  return c.html(`<h1>Content Manager - Coming Soon</h1>`)
})

app.get('/admin/services', adminAuth, (c) => {
  return c.html(`<h1>Services Manager - Coming Soon</h1>`)
})

app.get('/admin/services/new', adminAuth, (c) => {
  return c.html(`<h1>New Service - Coming Soon</h1>`)
})

app.get('/admin/testimonials', adminAuth, (c) => {
  return c.html(`<h1>Testimonials Manager - Coming Soon</h1>`)
})

app.get('/admin/testimonials/new', adminAuth, (c) => {
  return c.html(`<h1>New Testimonial - Coming Soon</h1>`)
})

app.get('/admin/team', adminAuth, (c) => {
  return c.html(`<h1>Team Manager - Coming Soon</h1>`)
})

app.get('/admin/settings', adminAuth, (c) => {
  return c.html(`<h1>Settings - Coming Soon</h1>`)
})

export default app
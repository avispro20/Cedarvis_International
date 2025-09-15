# Cedarvis International - Digital Tech Agency Website

## Project Overview
- **Name**: Cedarvis International Website
- **Goal**: Modern, futuristic African-inspired website for a digital tech and business solutions agency
- **Features**: 
  - Animated hero section with parallax effects and particles
  - Comprehensive service offerings showcase
  - FTLAfrica training program section
  - Portfolio/case studies
  - Blog/insights section
  - Contact forms with integration capabilities
  - Responsive design with African-inspired aesthetics
  - Performance-optimized with Cloudflare Pages

## URLs
- **Production**: https://cedarvis-international.pages.dev
- **Admin Panel**: https://cedarvis-international.pages.dev/admin/login
- **GitHub**: https://github.com/avispro20/Cedarvis_International
- **Development**: Local development at http://localhost:3000

## Tech Stack
- **Framework**: Hono (Lightweight, edge-optimized)
- **Deployment**: Cloudflare Pages
- **Styling**: Tailwind CSS (CDN)
- **Icons**: Font Awesome
- **JavaScript**: Vanilla JS with Axios for API calls
- **Build Tool**: Vite
- **Process Manager**: PM2 (for development)

## Project Structure
```
cedarvis/
├── src/
│   ├── index.tsx           # Main app entry with routes
│   ├── components/
│   │   └── layout.tsx      # Shared layout component
│   └── pages/
│       ├── home.tsx        # Homepage with hero section
│       ├── about.tsx       # About Us page
│       ├── services.tsx    # Services listing
│       ├── service-detail.tsx # Individual service details
│       ├── ftlafrica.tsx   # Training programs
│       ├── portfolio.tsx   # Case studies
│       ├── blog.tsx        # Blog/insights
│       ├── careers.tsx     # Job opportunities
│       └── contact.tsx     # Contact form
├── public/
│   └── static/
│       ├── css/
│       │   └── main.css    # Custom styles and animations
│       └── js/
│           └── main.js     # Frontend JavaScript
├── ecosystem.config.cjs    # PM2 configuration
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Vite configuration
└── wrangler.jsonc         # Cloudflare configuration
```

## Core Features

### 1. Homepage
- **Hero Section**: Animated particles, parallax background, African patterns
- **Services Slideshow**: 6 key service offerings with auto-rotating carousel
  - 3 items visible on desktop, 2 on tablet, 1 on mobile
  - Auto-play with 4-second intervals
  - Navigation arrows and dot indicators
  - Touch/swipe support for mobile
- **Stats Section**: Animated counters (500+ projects, 200+ clients, etc.)
- **Testimonials Slideshow**: Dynamic carousel of client testimonials
  - Loaded dynamically from API endpoint
  - Auto-play with 5-second intervals
  - Responsive design with smooth transitions
- **Blog Slideshow**: Latest insights and articles
  - Dynamic content from API endpoint  
  - Auto-play with 6-second intervals
  - Featured images and formatted excerpts
- **Newsletter**: Email subscription form
- **CTAs**: "Hire Us", "Join FTLAfrica", "Partner With Us"

### 2. Services
- Digital Marketing & Media Buying
- Digital Growth Strategy
- Web & Mobile App Development
- Content Creation & Corporate Rebranding
- Business Growth Hacking & Analysis
- Data Analytics
- Cybersecurity Services
- Product Design & Development
- Corporate Training & Project Management
- Cloud & DevOps Services

### 3. FTLAfrica (Training Arm)
- **Programs**: Data Analytics, UI/UX Design, Digital Marketing, Full-Stack Development, Cybersecurity, Product Management
- **Features**: Bootcamps, Mentorship, Scholarships
- **Alumni Success Stories**: Career transformation testimonials
- **Application Form**: Integrated enrollment system

### 4. Additional Pages
- **About Us**: Company story, mission, vision, values, leadership team
- **Portfolio**: Showcase of completed projects with filters
- **Blog**: Tech insights and thought leadership
- **Careers**: Job openings, internships, volunteer opportunities
- **Contact**: Contact form, office location, WhatsApp integration

## Design System

### Colors
- **Primary Green**: `#0A4A3B` (cedarvis-green)
- **Accent Gold**: `#D4AF37` (cedarvis-gold)
- **Dark**: `#1A1A1A` (cedarvis-dark)
- **Light**: `#F5F5F5` (cedarvis-light)

### Typography
- **Headings**: Space Grotesk
- **Body**: Plus Jakarta Sans

### Animations & Interactive Elements
- Floating particles in hero section
- Scroll-triggered animations
- Hover effects on cards
- Smooth page transitions
- Parallax scrolling effects
- **Slideshow Components**:
  - Services carousel with navigation controls
  - Testimonials auto-rotating display
  - Blog posts slideshow with dynamic content
  - Touch/swipe support for mobile devices
  - Responsive breakpoints for different screen sizes
- Count-up animations for statistics

## Admin Dashboard

### Access Credentials
- **URL**: `/admin/login`
- **Username**: `admin`
- **Password**: `Cedarvis@2024`

### Features
- **Content Management**: Edit all website content from one place
- **Blog Editor**: Rich text editor with full formatting capabilities
  - Bold, italic, underline, strikethrough
  - Headers (H1-H6)
  - Lists (ordered/unordered)
  - Links, images, videos
  - Code blocks and quotes
  - Text alignment and colors
- **Media Library**: 
  - Drag-and-drop file upload
  - Grid/list view toggle
  - Image preview and management
  - Copy image URLs
- **SEO Management**: Meta titles, descriptions, and URL slugs
- **Dashboard Analytics**: View statistics and recent activity

## Development

### Local Development
```bash
# Install dependencies
npm install

# Build the project
npm run build

# Start development server (in sandbox)
pm2 start ecosystem.config.cjs

# View logs
pm2 logs cedarvis --nostream

# Stop server
pm2 stop cedarvis

# Access the site
# Public: http://localhost:3000
# Admin: http://localhost:3000/admin/login
```

### Production Deployment
```bash
# Build for production
npm run build

# Deploy to Cloudflare Pages (initial deployment)
npx wrangler pages project create cedarvis-international --production-branch main
npx wrangler pages deploy dist --project-name cedarvis-international

# Subsequent deployments
npx wrangler pages deploy dist --project-name cedarvis-international

# Or use npm script
npm run deploy
```

### Deployment Information
- **Platform**: Cloudflare Pages
- **Project Name**: cedarvis-international
- **Production URL**: https://cedarvis-international.pages.dev
- **Deployment ID**: 800f5729
- **Branch**: main
- **Build Output**: ./dist

## API Endpoints

### Public Routes
- `GET /` - Homepage
- `GET /about` - About page
- `GET /services` - Services listing
- `GET /services/:slug` - Service details
- `GET /ftlafrica` - Training programs
- `GET /portfolio` - Case studies
- `GET /blog` - Blog listing
- `GET /careers` - Career opportunities
- `GET /contact` - Contact page

### API Routes
- `POST /api/contact` - Contact form submission
- `POST /api/newsletter` - Newsletter subscription
- `GET /api/testimonials` - Fetch testimonials
- `GET /api/blog` - Fetch blog posts
- `GET /api/blog/recent` - Fetch recent blog posts

### Admin Routes (Protected)
- `GET /admin/login` - Admin login page
- `POST /admin/login` - Admin authentication
- `GET /admin` - Admin dashboard
- `GET /admin/blog` - Blog post management
- `GET /admin/blog/new` - Create new blog post
- `GET /admin/blog/edit/:id` - Edit existing blog post
- `GET /admin/media` - Media library
- `POST /api/admin/blog` - Save blog post
- `DELETE /api/admin/blog/:id` - Delete blog post
- `POST /api/admin/media/upload` - Upload media files

## Performance Optimizations
- Edge deployment with Cloudflare Workers
- CDN-hosted libraries (Tailwind, Font Awesome)
- Optimized bundle size with Vite
- Lazy loading for images
- Minimal JavaScript footprint
- Server-side rendering with Hono

## Future Enhancements
- [ ] Integrate with CMS (Strapi/Sanity) for blog content
- [ ] Add payment gateway (Paystack/Flutterwave) for services
- [ ] Implement user dashboard for clients/students
- [ ] Add live chat support
- [ ] Integrate with CRM system
- [ ] Add multi-language support
- [ ] Implement advanced analytics tracking
- [ ] Add progressive web app (PWA) features

## Recent Updates (2025-09-11)

### Major UI/UX Improvements
- ✅ **8-Point Grid System**: Implemented consistent spacing throughout the site
- ✅ **Centered Navbar**: Three-part layout with logo left, menu center, CTA right
- ✅ **Fixed Blog Slideshow**: Replaced problematic carousel with responsive grid layout
- ✅ **Tech Hero Background**: Replaced generic background with futuristic technology imagery
- ✅ **Real Images**: Added actual images for testimonials and blog posts
- ✅ **Mobile Responsive**: Complete mobile-first responsive design
- ✅ **Improved CSS Architecture**: CSS variables for spacing, typography, colors, shadows

### Admin Dashboard Enhancements
- ✅ **Settings Page**: Comprehensive settings management with tabs
- ✅ **Brand Identity Management**: Logo and favicon upload interface
- ✅ **Color & Typography**: Brand color and font management
- ✅ **SEO Settings**: Meta tags and social media configuration
- ✅ **Email Configuration**: SMTP and notification settings
- ✅ **API Keys Management**: Secure storage for third-party integrations
- ✅ **Dashboard Stats**: Real-time statistics and analytics

### Previous Updates (2025-09-03)
- ✅ **Logo Update**: Replaced logo with new transparent version
- ✅ **Favicon Added**: Added Cedarvis favicon with transparent background
- ✅ **Blog Posts**: Added 3 comprehensive SEO-optimized articles
- ✅ **Testimonials**: Added 6 detailed client testimonials
- ✅ **GitHub Integration**: Repository connected and code pushed
- ✅ **Admin Dashboard**: Complete content management system added

## Status
- **Development**: ✅ Complete with all requested features
- **Testing**: ✅ Fully tested and operational
- **Production**: ✅ Successfully deployed to Cloudflare Pages
- **Live Site**: 🌐 https://cedarvis-international.pages.dev
- **Last Updated**: 2025-09-11
- **Last Deployment**: 2025-09-11 (Build 190b5c6a)

## Notes
- Website uses lightweight Hono framework instead of React/Next.js for better edge performance
- All static assets are served from CDN for optimal loading speed
- African-inspired design elements include custom patterns and color scheme
- Forms are ready for backend integration with email/CRM services
- Project is optimized for Cloudflare Pages deployment
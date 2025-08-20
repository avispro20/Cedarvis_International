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
- **Development**: https://3000-ikgowhvu8oapj360xfygw-6532622b.e2b.dev
- **Production**: Will be deployed to Cloudflare Pages
- **GitHub**: https://github.com/avispro20/Cedarvis_International

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
- **Services Preview**: 6 key service offerings with hover effects
- **Stats Section**: Impact metrics (500+ projects, 200+ clients, etc.)
- **Testimonials**: Dynamic carousel of client testimonials
- **Blog Highlights**: Latest 3 blog posts
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

### Animations
- Floating particles in hero section
- Scroll-triggered animations
- Hover effects on cards
- Smooth page transitions
- Parallax scrolling effects

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
```

### Production Deployment
```bash
# Build for production
npm run build

# Deploy to Cloudflare Pages
npm run deploy
```

## API Endpoints
- `GET /` - Homepage
- `GET /about` - About page
- `GET /services` - Services listing
- `GET /services/:slug` - Service details
- `GET /ftlafrica` - Training programs
- `GET /portfolio` - Case studies
- `GET /blog` - Blog listing
- `GET /careers` - Career opportunities
- `GET /contact` - Contact page
- `POST /api/contact` - Contact form submission
- `POST /api/newsletter` - Newsletter subscription
- `GET /api/testimonials` - Fetch testimonials
- `GET /api/blog` - Fetch blog posts

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

## Status
- **Development**: ✅ Complete
- **Testing**: ✅ Running on development server
- **Production**: ⏳ Ready for deployment
- **Last Updated**: 2024-01-18

## Notes
- Website uses lightweight Hono framework instead of React/Next.js for better edge performance
- All static assets are served from CDN for optimal loading speed
- African-inspired design elements include custom patterns and color scheme
- Forms are ready for backend integration with email/CRM services
- Project is optimized for Cloudflare Pages deployment
export const Layout = ({ 
  title, 
  children, 
  currentPage = 'home' 
}: { 
  title: string, 
  children: string, 
  currentPage?: string 
}) => {
  const navItems = [
    { href: '/', label: 'Home', id: 'home' },
    { href: '/about', label: 'About', id: 'about' },
    { href: '/services', label: 'Services', id: 'services' },
    { href: '/ftlafrica', label: 'FTLAfrica', id: 'ftlafrica' },
    { href: '/portfolio', label: 'Portfolio', id: 'portfolio' },
    { href: '/blog', label: 'Blog', id: 'blog' },
    { href: '/careers', label: 'Careers', id: 'careers' },
    { href: '/contact', label: 'Contact', id: 'contact' }
  ]

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title} - Cedarvis International</title>
        <meta name="description" content="Transforming Africa Through Tech, Training & Talent. Leading Digital Tech & Business Solutions Agency.">
        <meta name="keywords" content="Digital Marketing, Web Development, Mobile Apps, Data Analytics, Cybersecurity, Cloud Services, DevOps, Training, Africa, Tech">
        
        <!-- Favicon -->
        <link rel="icon" type="image/png" href="/static/images/favicon.png">
        <link rel="shortcut icon" type="image/png" href="/static/images/favicon.png">
        <link rel="apple-touch-icon" href="/static/images/favicon.png">
        
        <!-- Open Graph -->
        <meta property="og:title" content="${title} - Cedarvis International">
        <meta property="og:description" content="Transforming Africa Through Tech, Training & Talent">
        <meta property="og:image" content="/static/images/og-image.jpg">
        <meta property="og:url" content="https://cedarvis.com">
        
        <!-- Tailwind CSS -->
        <script src="https://cdn.tailwindcss.com"></script>
        
        <!-- Font Awesome -->
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        
        <!-- Google Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        
        <!-- Custom Styles -->
        <link href="/static/css/main.css" rel="stylesheet">
        
        <!-- Tailwind Config -->
        <script>
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  'cedarvis-green': '#0A4A3B',
                  'cedarvis-gold': '#D4AF37',
                  'cedarvis-dark': '#1A1A1A',
                  'cedarvis-light': '#F5F5F5'
                },
                fontFamily: {
                  'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
                  'space': ['Space Grotesk', 'sans-serif']
                },
                animation: {
                  'float': 'float 6s ease-in-out infinite',
                  'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                  'slide-up': 'slideUp 0.5s ease-out',
                  'slide-down': 'slideDown 0.5s ease-out',
                  'fade-in': 'fadeIn 0.5s ease-out',
                  'spin-slow': 'spin 8s linear infinite'
                },
                keyframes: {
                  float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' }
                  },
                  slideUp: {
                    '0%': { transform: 'translateY(100px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' }
                  },
                  slideDown: {
                    '0%': { transform: 'translateY(-100px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' }
                  },
                  fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                  }
                }
              }
            }
          }
        </script>
    </head>
    <body class="font-jakarta bg-white text-cedarvis-dark">
        <!-- Navigation -->
        <nav id="navbar" class="fixed top-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm shadow-sm">
            <div class="container mx-auto px-6">
                <div class="flex items-center justify-between py-4">
                    <!-- Logo -->
                    <a href="/" class="flex items-center">
                        <img src="/static/images/cedarvis-logo-new.png" alt="Cedarvis International" class="h-14 w-auto object-contain" style="filter: drop-shadow(0 0 2px rgba(255,255,255,0.1));">
                    </a>
                    
                    <!-- Desktop Menu -->
                    <div class="hidden lg:flex items-center space-x-8">
                        ${navItems.map(item => `
                            <a href="${item.href}" 
                               class="text-sm font-medium transition-colors hover:text-cedarvis-gold ${currentPage === item.id ? 'text-cedarvis-gold' : 'text-cedarvis-dark'}">
                                ${item.label}
                            </a>
                        `).join('')}
                        <a href="/contact" class="btn-primary">
                            Get Started
                        </a>
                    </div>
                    
                    <!-- Mobile Menu Button -->
                    <button id="mobile-menu-btn" class="lg:hidden text-cedarvis-dark">
                        <i class="fas fa-bars text-2xl"></i>
                    </button>
                </div>
                
                <!-- Mobile Menu -->
                <div id="mobile-menu" class="hidden lg:hidden pb-6">
                    ${navItems.map(item => `
                        <a href="${item.href}" 
                           class="block py-3 text-sm font-medium transition-colors hover:text-cedarvis-gold ${currentPage === item.id ? 'text-cedarvis-gold' : 'text-cedarvis-dark'}">
                            ${item.label}
                        </a>
                    `).join('')}
                    <a href="/contact" class="btn-primary inline-block mt-4">
                        Get Started
                    </a>
                </div>
            </div>
        </nav>
        
        <!-- Main Content -->
        <main class="pt-20">
            ${children}
        </main>
        
        <!-- Footer -->
        <footer class="bg-cedarvis-dark text-white py-16">
            <div class="container mx-auto px-6">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <!-- Company Info -->
                    <div>
                        <div class="mb-4">
                            <img src="/static/images/cedarvis-logo-new.png" alt="Cedarvis International" class="h-12 w-auto" style="filter: brightness(0) invert(1);">
                        </div>
                        <p class="text-gray-400 text-sm mb-4">
                            Transforming Africa Through Tech, Training & Talent
                        </p>
                        <div class="flex space-x-4">
                            <a href="https://www.facebook.com/cedarvistech" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-cedarvis-gold transition-colors">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.linkedin.com/company/cedarvis-international/" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-cedarvis-gold transition-colors">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://www.instagram.com/cedarvisng" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-cedarvis-gold transition-colors">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.tiktok.com/@cedarvisng" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-cedarvis-gold transition-colors">
                                <i class="fab fa-tiktok"></i>
                            </a>
                        </div>
                    </div>
                    
                    <!-- Quick Links -->
                    <div>
                        <h3 class="font-semibold text-lg mb-4">Quick Links</h3>
                        <ul class="space-y-2">
                            <li><a href="/about" class="text-gray-400 hover:text-cedarvis-gold transition-colors text-sm">About Us</a></li>
                            <li><a href="/services" class="text-gray-400 hover:text-cedarvis-gold transition-colors text-sm">Services</a></li>
                            <li><a href="/ftlafrica" class="text-gray-400 hover:text-cedarvis-gold transition-colors text-sm">FTLAfrica</a></li>
                            <li><a href="/portfolio" class="text-gray-400 hover:text-cedarvis-gold transition-colors text-sm">Portfolio</a></li>
                            <li><a href="/careers" class="text-gray-400 hover:text-cedarvis-gold transition-colors text-sm">Careers</a></li>
                        </ul>
                    </div>
                    
                    <!-- Services -->
                    <div>
                        <h3 class="font-semibold text-lg mb-4">Services</h3>
                        <ul class="space-y-2">
                            <li><a href="/services#digital-marketing" class="text-gray-400 hover:text-cedarvis-gold transition-colors text-sm">Digital Marketing</a></li>
                            <li><a href="/services#web-development" class="text-gray-400 hover:text-cedarvis-gold transition-colors text-sm">Web Development</a></li>
                            <li><a href="/services#data-analytics" class="text-gray-400 hover:text-cedarvis-gold transition-colors text-sm">Data Analytics</a></li>
                            <li><a href="/services#cybersecurity" class="text-gray-400 hover:text-cedarvis-gold transition-colors text-sm">Cybersecurity</a></li>
                            <li><a href="/services#training" class="text-gray-400 hover:text-cedarvis-gold transition-colors text-sm">Corporate Training</a></li>
                        </ul>
                    </div>
                    
                    <!-- Contact Info -->
                    <div>
                        <h3 class="font-semibold text-lg mb-4">Contact</h3>
                        <ul class="space-y-2 text-gray-400 text-sm">
                            <li class="flex items-start">
                                <i class="fas fa-map-marker-alt mt-1 mr-2 text-cedarvis-gold"></i>
                                Lagos, Nigeria
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-envelope mt-1 mr-2 text-cedarvis-gold"></i>
                                info@cedarvis.com
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-phone mt-1 mr-2 text-cedarvis-gold"></i>
                                <a href="tel:+2347054649447" class="hover:text-cedarvis-gold transition-colors">+234 705 464 9447</a>
                            </li>
                            <li class="flex items-start">
                                <i class="fab fa-whatsapp mt-1 mr-2 text-cedarvis-gold"></i>
                                <a href="https://wa.me/2347054649447" target="_blank" rel="noopener noreferrer" class="hover:text-cedarvis-gold transition-colors">WhatsApp Support</a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; 2024 Cedarvis International. All rights reserved.</p>
                </div>
            </div>
        </footer>
        
        <!-- Scripts -->
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="/static/js/main.js"></script>
    </body>
    </html>
  `
}
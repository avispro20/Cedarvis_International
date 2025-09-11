export const ImprovedLayout = ({ 
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
        <link rel="icon" type="image/png" href="/static/images/cedarvis-favicon.png">
        <link rel="shortcut icon" type="image/png" href="/static/images/cedarvis-favicon.png">
        <link rel="apple-touch-icon" href="/static/images/cedarvis-favicon.png">
        
        <!-- Open Graph -->
        <meta property="og:title" content="${title} - Cedarvis International">
        <meta property="og:description" content="Transforming Africa Through Tech, Training & Talent">
        <meta property="og:image" content="/static/images/og-image.jpg">
        <meta property="og:url" content="https://cedarvis-international.pages.dev">
        
        <!-- Tailwind CSS -->
        <script src="https://cdn.tailwindcss.com"></script>
        
        <!-- Font Awesome -->
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        
        <!-- Google Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        
        <!-- Improved Styles -->
        <link href="/static/css/improved-main.css" rel="stylesheet">
        
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
                }
              }
            }
          }
        </script>
        
        <style>
          /* Additional inline styles for immediate rendering */
          .navbar-fixed {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            background: rgba(255, 255, 255, 0.97);
            backdrop-filter: blur(10px);
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
          }
          
          .navbar-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 1rem 1.5rem;
            display: grid;
            grid-template-columns: 200px 1fr 200px;
            align-items: center;
            gap: 2rem;
          }
          
          .navbar-menu-center {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .navbar-menu-list {
            display: flex;
            list-style: none;
            gap: 2rem;
            margin: 0;
            padding: 0;
          }
          
          .navbar-end {
            display: flex;
            justify-content: flex-end;
            align-items: center;
          }
          
          @media (max-width: 1024px) {
            .navbar-container {
              grid-template-columns: auto 1fr auto;
            }
            
            .navbar-menu-list {
              gap: 1rem;
            }
          }
          
          @media (max-width: 768px) {
            .navbar-container {
              grid-template-columns: 1fr auto;
            }
            
            .navbar-menu-center {
              position: fixed;
              top: 0;
              left: -100%;
              width: 100%;
              height: 100vh;
              background: white;
              flex-direction: column;
              justify-content: center;
              transition: left 0.3s ease;
              z-index: 999;
            }
            
            .navbar-menu-center.active {
              left: 0;
            }
            
            .navbar-menu-list {
              flex-direction: column;
              text-align: center;
              gap: 1.5rem;
            }
            
            .navbar-end.desktop {
              display: none;
            }
          }
          
          /* Ensure content starts below fixed navbar */
          body {
            padding-top: 80px;
          }
        </style>
    </head>
    <body class="font-jakarta bg-white text-cedarvis-dark">
        <!-- Improved Centered Navbar -->
        <nav class="navbar-fixed">
            <div class="navbar-container">
                <!-- Logo (Far Left) -->
                <div class="navbar-logo">
                    <a href="/" class="flex items-center">
                        <img src="/static/images/cedarvis-logo-new.png" 
                             alt="Cedarvis International" 
                             class="h-12 w-auto object-contain"
                             style="filter: drop-shadow(0 0 2px rgba(255,255,255,0.1));">
                    </a>
                </div>
                
                <!-- Menu (Center) -->
                <div class="navbar-menu-center" id="navbar-menu">
                    <ul class="navbar-menu-list">
                        ${navItems.map(item => `
                            <li>
                                <a href="${item.href}" 
                                   class="font-medium ${currentPage === item.id 
                                     ? 'text-cedarvis-gold' 
                                     : 'text-gray-700 hover:text-cedarvis-green'} 
                                   transition-colors duration-200">
                                    ${item.label}
                                </a>
                            </li>
                        `).join('')}
                    </ul>
                    
                    <!-- Mobile CTA (shown in mobile menu) -->
                    <div class="block md:hidden mt-8">
                        <a href="/contact" class="inline-block bg-gradient-to-r from-cedarvis-green to-cedarvis-gold text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
                            Get Started
                        </a>
                    </div>
                </div>
                
                <!-- CTA Button (Far Right - Desktop) -->
                <div class="navbar-end desktop hidden md:flex">
                    <a href="/contact" class="bg-gradient-to-r from-cedarvis-green to-cedarvis-gold text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                        Get Started
                    </a>
                </div>
                
                <!-- Mobile Menu Toggle -->
                <button class="md:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer z-[1001]" 
                        id="navbar-toggle"
                        aria-label="Toggle navigation menu">
                    <span class="block w-6 h-0.5 bg-gray-700 mb-1.5 transition-all" id="bar1"></span>
                    <span class="block w-6 h-0.5 bg-gray-700 mb-1.5 transition-all" id="bar2"></span>
                    <span class="block w-6 h-0.5 bg-gray-700 transition-all" id="bar3"></span>
                </button>
            </div>
        </nav>

        <!-- Main Content -->
        <main>
            ${children}
        </main>

        <!-- Improved Footer -->
        <footer class="bg-gradient-to-br from-cedarvis-dark to-gray-900 text-white pt-16 pb-8">
            <div class="max-w-7xl mx-auto px-6">
                <!-- Footer Content Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <!-- Company Info -->
                    <div class="space-y-4">
                        <img src="/static/images/cedarvis-logo-new.png" 
                             alt="Cedarvis International" 
                             class="h-12 w-auto mb-4"
                             style="filter: brightness(0) invert(1);">
                        <p class="text-gray-300 text-sm leading-relaxed">
                            Transforming Africa through innovative technology solutions, 
                            comprehensive training programs, and exceptional talent development.
                        </p>
                        <!-- Social Icons -->
                        <div class="flex space-x-3 pt-4">
                            <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-cedarvis-gold rounded-full flex items-center justify-center transition-all hover:-translate-y-1">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-cedarvis-gold rounded-full flex items-center justify-center transition-all hover:-translate-y-1">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-cedarvis-gold rounded-full flex items-center justify-center transition-all hover:-translate-y-1">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-cedarvis-gold rounded-full flex items-center justify-center transition-all hover:-translate-y-1">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                    
                    <!-- Quick Links -->
                    <div>
                        <h4 class="text-cedarvis-gold font-semibold text-lg mb-4">Quick Links</h4>
                        <ul class="space-y-3">
                            <li><a href="/about" class="text-gray-300 hover:text-cedarvis-gold transition-colors">About Us</a></li>
                            <li><a href="/services" class="text-gray-300 hover:text-cedarvis-gold transition-colors">Our Services</a></li>
                            <li><a href="/portfolio" class="text-gray-300 hover:text-cedarvis-gold transition-colors">Portfolio</a></li>
                            <li><a href="/blog" class="text-gray-300 hover:text-cedarvis-gold transition-colors">Blog</a></li>
                            <li><a href="/careers" class="text-gray-300 hover:text-cedarvis-gold transition-colors">Careers</a></li>
                        </ul>
                    </div>
                    
                    <!-- Services -->
                    <div>
                        <h4 class="text-cedarvis-gold font-semibold text-lg mb-4">Services</h4>
                        <ul class="space-y-3">
                            <li><a href="/services/web-development" class="text-gray-300 hover:text-cedarvis-gold transition-colors">Web Development</a></li>
                            <li><a href="/services/digital-marketing" class="text-gray-300 hover:text-cedarvis-gold transition-colors">Digital Marketing</a></li>
                            <li><a href="/services/data-analytics" class="text-gray-300 hover:text-cedarvis-gold transition-colors">Data Analytics</a></li>
                            <li><a href="/services/cybersecurity" class="text-gray-300 hover:text-cedarvis-gold transition-colors">Cybersecurity</a></li>
                            <li><a href="/ftlafrica" class="text-gray-300 hover:text-cedarvis-gold transition-colors">Training Programs</a></li>
                        </ul>
                    </div>
                    
                    <!-- Contact -->
                    <div>
                        <h4 class="text-cedarvis-gold font-semibold text-lg mb-4">Get In Touch</h4>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <i class="fas fa-map-marker-alt text-cedarvis-gold mt-1 mr-3"></i>
                                <span class="text-gray-300 text-sm">Lagos, Nigeria</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-phone text-cedarvis-gold mt-1 mr-3"></i>
                                <span class="text-gray-300 text-sm">+234 123 456 7890</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-envelope text-cedarvis-gold mt-1 mr-3"></i>
                                <span class="text-gray-300 text-sm">info@cedarvis.com</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fab fa-whatsapp text-cedarvis-gold mt-1 mr-3"></i>
                                <span class="text-gray-300 text-sm">+234 123 456 7890</span>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <!-- Footer Bottom -->
                <div class="border-t border-gray-800 pt-8">
                    <div class="flex flex-col md:flex-row justify-between items-center">
                        <p class="text-gray-400 text-sm mb-4 md:mb-0">
                            © 2024 Cedarvis International. All rights reserved.
                        </p>
                        <div class="flex space-x-6">
                            <a href="/privacy" class="text-gray-400 hover:text-cedarvis-gold text-sm transition-colors">Privacy Policy</a>
                            <a href="/terms" class="text-gray-400 hover:text-cedarvis-gold text-sm transition-colors">Terms of Service</a>
                            <a href="/sitemap" class="text-gray-400 hover:text-cedarvis-gold text-sm transition-colors">Sitemap</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <!-- JavaScript Files -->
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="/static/js/main.js"></script>
        <script src="/static/js/particles.js"></script>
        
        <!-- Mobile Menu Toggle Script -->
        <script>
            // Mobile menu toggle
            const navbarToggle = document.getElementById('navbar-toggle');
            const navbarMenu = document.getElementById('navbar-menu');
            const bar1 = document.getElementById('bar1');
            const bar2 = document.getElementById('bar2');
            const bar3 = document.getElementById('bar3');
            
            navbarToggle?.addEventListener('click', () => {
                navbarMenu.classList.toggle('active');
                
                // Animate hamburger to X
                if (navbarMenu.classList.contains('active')) {
                    bar1.style.transform = 'rotate(45deg) translateY(6px)';
                    bar2.style.opacity = '0';
                    bar3.style.transform = 'rotate(-45deg) translateY(-6px)';
                } else {
                    bar1.style.transform = 'none';
                    bar2.style.opacity = '1';
                    bar3.style.transform = 'none';
                }
            });
            
            // Close mobile menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!navbarToggle.contains(e.target) && !navbarMenu.contains(e.target)) {
                    navbarMenu.classList.remove('active');
                    bar1.style.transform = 'none';
                    bar2.style.opacity = '1';
                    bar3.style.transform = 'none';
                }
            });
            
            // Navbar scroll effect
            window.addEventListener('scroll', () => {
                const navbar = document.querySelector('.navbar-fixed');
                if (window.scrollY > 50) {
                    navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                } else {
                    navbar.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
                }
            });
        </script>
    </body>
    </html>
  `
}
import { html } from 'hono/html'

/**
 * Master Layout Component - Single Source of Truth
 * This component wraps all pages ensuring consistent design across the entire website
 */

interface LayoutProps {
  title: string
  description?: string
  content: any
  currentPath?: string
}

// Master Layout with improved navbar and footer
export const MasterLayout = ({ title, description, content, currentPath = '/' }: LayoutProps) => html`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - Cedarvis International</title>
    <meta name="description" content="${description || 'Transforming Africa Through Tech, Training & Talent. Leading Digital Tech & Business Solutions Agency.'}">
    <meta name="keywords" content="Digital Marketing, Web Development, Mobile Apps, Data Analytics, Cybersecurity, Cloud Services, DevOps, Training, Africa, Tech">
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="/static/images/cedarvis-favicon.png">
    <link rel="shortcut icon" type="image/png" href="/static/images/cedarvis-favicon.png">
    <link rel="apple-touch-icon" href="/static/images/cedarvis-favicon.png">
    
    <!-- Open Graph -->
    <meta property="og:title" content="${title} - Cedarvis International">
    <meta property="og:description" content="${description || 'Transforming Africa Through Tech, Training & Talent'}">
    <meta property="og:image" content="/static/images/og-image.jpg">
    <meta property="og:url" content="https://cedarvis-international.pages.dev">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
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
              'space': ['Space Grotesk', 'sans-serif'],
              'jakarta': ['Plus Jakarta Sans', 'sans-serif']
            }
          }
        }
      }
    </script>
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">
    
    <!-- Font Awesome -->
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    
    <!-- Master CSS with 8-point grid system -->
    <link href="/static/css/master.css" rel="stylesheet">
</head>
<body class="font-jakarta text-gray-800">
    <!-- Master Global Navbar - Centered Design -->
    <nav id="navbar" class="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-3 items-center h-20">
                <!-- Logo Section (Left) -->
                <div class="flex items-center">
                    <a href="/" class="flex items-center space-x-3">
                        <img src="/static/images/cedarvis-logo.png" alt="Cedarvis International" class="h-12 w-auto">
                        <span class="hidden lg:block font-space font-bold text-xl text-cedarvis-green">Cedarvis</span>
                    </a>
                </div>

                <!-- Navigation Menu (Center) -->
                <div class="hidden md:flex items-center justify-center">
                    <div class="flex items-center space-x-8">
                        <a href="/" class="nav-link ${currentPath === '/' ? 'text-cedarvis-green font-semibold' : 'text-gray-700 hover:text-cedarvis-green'} transition">Home</a>
                        <a href="/about" class="nav-link ${currentPath === '/about' ? 'text-cedarvis-green font-semibold' : 'text-gray-700 hover:text-cedarvis-green'} transition">About</a>
                        
                        <!-- Services Dropdown -->
                        <div class="relative group">
                            <a href="/services" class="nav-link ${currentPath?.startsWith('/services') ? 'text-cedarvis-green font-semibold' : 'text-gray-700 hover:text-cedarvis-green'} transition flex items-center">
                                Services
                                <i class="fas fa-chevron-down ml-1 text-xs"></i>
                            </a>
                            <div class="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                <div class="py-2">
                                    <a href="/services/digital-marketing" class="block px-4 py-2 hover:bg-cedarvis-light transition">Digital Marketing</a>
                                    <a href="/services/web-development" class="block px-4 py-2 hover:bg-cedarvis-light transition">Web Development</a>
                                    <a href="/services/mobile-apps" class="block px-4 py-2 hover:bg-cedarvis-light transition">Mobile Apps</a>
                                    <a href="/services/data-analytics" class="block px-4 py-2 hover:bg-cedarvis-light transition">Data Analytics</a>
                                    <a href="/services/cybersecurity" class="block px-4 py-2 hover:bg-cedarvis-light transition">Cybersecurity</a>
                                    <a href="/services/cloud-devops" class="block px-4 py-2 hover:bg-cedarvis-light transition">Cloud & DevOps</a>
                                </div>
                            </div>
                        </div>
                        
                        <a href="/ftlafrica" class="nav-link ${currentPath === '/ftlafrica' ? 'text-cedarvis-green font-semibold' : 'text-gray-700 hover:text-cedarvis-green'} transition">FTLAfrica</a>
                        <a href="/portfolio" class="nav-link ${currentPath === '/portfolio' ? 'text-cedarvis-green font-semibold' : 'text-gray-700 hover:text-cedarvis-green'} transition">Portfolio</a>
                        <a href="/blog" class="nav-link ${currentPath === '/blog' ? 'text-cedarvis-green font-semibold' : 'text-gray-700 hover:text-cedarvis-green'} transition">Blog</a>
                        <a href="/contact" class="nav-link ${currentPath === '/contact' ? 'text-cedarvis-green font-semibold' : 'text-gray-700 hover:text-cedarvis-green'} transition">Contact</a>
                    </div>
                </div>

                <!-- CTA Section (Right) -->
                <div class="flex items-center justify-end space-x-4">
                    <a href="/contact?action=hire" class="hidden sm:inline-flex px-6 py-2.5 bg-cedarvis-green text-white font-semibold rounded-lg hover:bg-cedarvis-dark transform hover:scale-105 transition-all duration-300 shadow-lg">
                        Hire Us
                    </a>
                    
                    <!-- Mobile Menu Button -->
                    <button id="mobile-menu-btn" class="md:hidden p-2 rounded-lg hover:bg-gray-100">
                        <i class="fas fa-bars text-2xl text-cedarvis-green"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="md:hidden bg-white border-t border-gray-200 hidden">
            <div class="px-4 py-4 space-y-3">
                <a href="/" class="block py-2 text-gray-700 hover:text-cedarvis-green transition">Home</a>
                <a href="/about" class="block py-2 text-gray-700 hover:text-cedarvis-green transition">About</a>
                <a href="/services" class="block py-2 text-gray-700 hover:text-cedarvis-green transition">Services</a>
                <a href="/ftlafrica" class="block py-2 text-gray-700 hover:text-cedarvis-green transition">FTLAfrica</a>
                <a href="/portfolio" class="block py-2 text-gray-700 hover:text-cedarvis-green transition">Portfolio</a>
                <a href="/blog" class="block py-2 text-gray-700 hover:text-cedarvis-green transition">Blog</a>
                <a href="/contact" class="block py-2 text-gray-700 hover:text-cedarvis-green transition">Contact</a>
                <a href="/contact?action=hire" class="block py-3 px-4 bg-cedarvis-green text-white text-center font-semibold rounded-lg">Hire Us</a>
            </div>
        </div>
    </nav>

    <!-- Main Content Area -->
    <main class="pt-20">
        ${content}
    </main>

    <!-- Master Global Footer -->
    <footer class="bg-cedarvis-dark text-white pt-16 pb-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <!-- Company Info -->
                <div>
                    <div class="flex items-center space-x-3 mb-6">
                        <img src="/static/images/cedarvis-logo.png" alt="Cedarvis" class="h-10 w-auto brightness-0 invert">
                        <span class="font-space font-bold text-xl">Cedarvis</span>
                    </div>
                    <p class="text-gray-400 mb-6">Transforming Africa Through Tech, Training & Talent</p>
                    <div class="flex space-x-4">
                        <a href="https://facebook.com/cedarvis" class="text-gray-400 hover:text-cedarvis-gold transition">
                            <i class="fab fa-facebook-f text-xl"></i>
                        </a>
                        <a href="https://twitter.com/cedarvis" class="text-gray-400 hover:text-cedarvis-gold transition">
                            <i class="fab fa-twitter text-xl"></i>
                        </a>
                        <a href="https://linkedin.com/company/cedarvis" class="text-gray-400 hover:text-cedarvis-gold transition">
                            <i class="fab fa-linkedin-in text-xl"></i>
                        </a>
                        <a href="https://instagram.com/cedarvis" class="text-gray-400 hover:text-cedarvis-gold transition">
                            <i class="fab fa-instagram text-xl"></i>
                        </a>
                    </div>
                </div>

                <!-- Quick Links -->
                <div>
                    <h3 class="font-space font-semibold text-lg mb-6">Quick Links</h3>
                    <ul class="space-y-3">
                        <li><a href="/about" class="text-gray-400 hover:text-cedarvis-gold transition">About Us</a></li>
                        <li><a href="/services" class="text-gray-400 hover:text-cedarvis-gold transition">Our Services</a></li>
                        <li><a href="/portfolio" class="text-gray-400 hover:text-cedarvis-gold transition">Portfolio</a></li>
                        <li><a href="/careers" class="text-gray-400 hover:text-cedarvis-gold transition">Careers</a></li>
                        <li><a href="/blog" class="text-gray-400 hover:text-cedarvis-gold transition">Blog</a></li>
                    </ul>
                </div>

                <!-- Services -->
                <div>
                    <h3 class="font-space font-semibold text-lg mb-6">Services</h3>
                    <ul class="space-y-3">
                        <li><a href="/services/web-development" class="text-gray-400 hover:text-cedarvis-gold transition">Web Development</a></li>
                        <li><a href="/services/mobile-apps" class="text-gray-400 hover:text-cedarvis-gold transition">Mobile Apps</a></li>
                        <li><a href="/services/digital-marketing" class="text-gray-400 hover:text-cedarvis-gold transition">Digital Marketing</a></li>
                        <li><a href="/services/data-analytics" class="text-gray-400 hover:text-cedarvis-gold transition">Data Analytics</a></li>
                        <li><a href="/ftlafrica" class="text-gray-400 hover:text-cedarvis-gold transition">Training Programs</a></li>
                    </ul>
                </div>

                <!-- Contact Info -->
                <div>
                    <h3 class="font-space font-semibold text-lg mb-6">Contact Us</h3>
                    <ul class="space-y-3 text-gray-400">
                        <li class="flex items-start">
                            <i class="fas fa-map-marker-alt mt-1 mr-3 text-cedarvis-gold"></i>
                            <span>123 Tech Hub, Victoria Island, Lagos, Nigeria</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-phone mr-3 text-cedarvis-gold"></i>
                            <span>+234 801 234 5678</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-envelope mr-3 text-cedarvis-gold"></i>
                            <span>info@cedarvis.com</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fab fa-whatsapp mr-3 text-cedarvis-gold"></i>
                            <span>+234 801 234 5678</span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Newsletter Section -->
            <div class="border-t border-gray-700 pt-8 mb-8">
                <div class="max-w-2xl mx-auto text-center">
                    <h3 class="font-space font-semibold text-xl mb-4">Subscribe to Our Newsletter</h3>
                    <p class="text-gray-400 mb-6">Get the latest updates on tech trends and opportunities</p>
                    <form id="newsletter-form" class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input type="email" placeholder="Enter your email" required
                               class="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-cedarvis-gold focus:outline-none">
                        <button type="submit" class="px-6 py-3 bg-cedarvis-gold text-cedarvis-dark font-semibold rounded-lg hover:bg-yellow-500 transition">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p class="text-gray-400 text-sm mb-4 md:mb-0">
                    © 2024 Cedarvis International. All rights reserved.
                </p>
                <div class="flex space-x-6 text-sm">
                    <a href="/privacy" class="text-gray-400 hover:text-cedarvis-gold transition">Privacy Policy</a>
                    <a href="/terms" class="text-gray-400 hover:text-cedarvis-gold transition">Terms of Service</a>
                    <a href="/cookies" class="text-gray-400 hover:text-cedarvis-gold transition">Cookie Policy</a>
                </div>
            </div>
        </div>
    </footer>

    <!-- Axios for API calls -->
    <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
    
    <!-- Master JavaScript -->
    <script src="/static/js/master.js"></script>
</body>
</html>
`
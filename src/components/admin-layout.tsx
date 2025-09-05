export const AdminLayout = ({ title, children, currentPage }: { title: string, children: string, currentPage: string }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'fa-tachometer-alt', href: '/admin' },
    { id: 'content', label: 'Content Manager', icon: 'fa-file-alt', href: '/admin/content' },
    { id: 'blog', label: 'Blog Posts', icon: 'fa-blog', href: '/admin/blog' },
    { id: 'services', label: 'Services', icon: 'fa-briefcase', href: '/admin/services' },
    { id: 'testimonials', label: 'Testimonials', icon: 'fa-comments', href: '/admin/testimonials' },
    { id: 'team', label: 'Team', icon: 'fa-users', href: '/admin/team' },
    { id: 'media', label: 'Media Library', icon: 'fa-images', href: '/admin/media' },
    { id: 'settings', label: 'Settings', icon: 'fa-cog', href: '/admin/settings' },
  ]
  
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title} - Admin Dashboard</title>
        <link rel="icon" type="image/png" href="/static/images/favicon.png">
        
        <!-- Tailwind CSS -->
        <script src="https://cdn.tailwindcss.com"></script>
        
        <!-- Font Awesome -->
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        
        <!-- Quill Rich Text Editor -->
        <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
        <script src="https://cdn.quilljs.com/1.3.6/quill.js"></script>
        
        <!-- Chart.js for analytics -->
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        
        <!-- Custom Styles -->
        <style>
            .sidebar-transition {
                transition: margin-left 0.3s ease-in-out;
            }
            .content-transition {
                transition: margin-left 0.3s ease-in-out;
            }
            .menu-item-active {
                background: linear-gradient(90deg, #059669 0%, #10b981 100%);
                color: white;
            }
            .cedarvis-gradient {
                background: linear-gradient(135deg, #0A4A3B 0%, #D4AF37 100%);
            }
            /* Quill editor custom styles */
            .ql-toolbar {
                border-radius: 0.5rem 0.5rem 0 0;
                border-color: #e5e7eb;
            }
            .ql-container {
                border-radius: 0 0 0.5rem 0.5rem;
                border-color: #e5e7eb;
                min-height: 300px;
            }
            /* Scrollbar styling */
            ::-webkit-scrollbar {
                width: 8px;
                height: 8px;
            }
            ::-webkit-scrollbar-track {
                background: #f1f1f1;
            }
            ::-webkit-scrollbar-thumb {
                background: #888;
                border-radius: 4px;
            }
            ::-webkit-scrollbar-thumb:hover {
                background: #555;
            }
        </style>
    </head>
    <body class="bg-gray-50">
        <!-- Sidebar -->
        <aside id="sidebar" class="fixed left-0 top-0 h-full w-64 bg-gray-900 text-white shadow-2xl z-40 sidebar-transition">
            <!-- Logo Section -->
            <div class="p-6 border-b border-gray-800">
                <div class="flex items-center space-x-3">
                    <img src="/static/images/cedarvis-logo-new.png" alt="Cedarvis" class="h-10 w-auto">
                    <div>
                        <h2 class="text-xl font-bold">Admin Panel</h2>
                        <p class="text-xs text-gray-400">Content Management</p>
                    </div>
                </div>
            </div>
            
            <!-- Navigation -->
            <nav class="p-4">
                <ul class="space-y-2">
                    ${menuItems.map(item => `
                        <li>
                            <a href="${item.href}" 
                               class="flex items-center space-x-3 px-4 py-3 rounded-lg transition-all hover:bg-gray-800 ${currentPage === item.id ? 'menu-item-active' : ''}">
                                <i class="fas ${item.icon} w-5 text-center"></i>
                                <span>${item.label}</span>
                                ${currentPage === item.id ? '<i class="fas fa-chevron-right ml-auto"></i>' : ''}
                            </a>
                        </li>
                    `).join('')}
                </ul>
            </nav>
            
            <!-- User Section -->
            <div class="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800">
                <div class="flex items-center justify-between px-4 py-2">
                    <div class="flex items-center space-x-3">
                        <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                            <i class="fas fa-user text-white text-sm"></i>
                        </div>
                        <div>
                            <p class="text-sm font-medium">Admin</p>
                            <p class="text-xs text-gray-400">Super Admin</p>
                        </div>
                    </div>
                    <a href="/admin/logout" class="text-gray-400 hover:text-white transition-colors" title="Logout">
                        <i class="fas fa-sign-out-alt"></i>
                    </a>
                </div>
            </div>
        </aside>
        
        <!-- Main Content Area -->
        <main class="ml-64 min-h-screen content-transition">
            <!-- Top Bar -->
            <header class="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
                <div class="flex items-center justify-between px-8 py-4">
                    <div class="flex items-center space-x-4">
                        <button id="toggle-sidebar" class="text-gray-600 hover:text-gray-800 transition-colors">
                            <i class="fas fa-bars text-xl"></i>
                        </button>
                        <h1 class="text-2xl font-semibold text-gray-800">${title}</h1>
                    </div>
                    
                    <div class="flex items-center space-x-4">
                        <!-- View Site Button -->
                        <a href="/" target="_blank" 
                           class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                            <i class="fas fa-external-link-alt mr-2"></i>
                            View Site
                        </a>
                        
                        <!-- Notifications -->
                        <button class="relative text-gray-600 hover:text-gray-800 transition-colors">
                            <i class="fas fa-bell text-xl"></i>
                            <span class="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                        </button>
                        
                        <!-- Quick Actions -->
                        <div class="relative group">
                            <button class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                                <i class="fas fa-plus mr-2"></i>
                                Quick Add
                            </button>
                            <div class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <a href="/admin/blog/new" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-t-lg">
                                    <i class="fas fa-pen mr-2"></i> New Blog Post
                                </a>
                                <a href="/admin/services/new" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                    <i class="fas fa-briefcase mr-2"></i> New Service
                                </a>
                                <a href="/admin/testimonials/new" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-b-lg">
                                    <i class="fas fa-comment mr-2"></i> New Testimonial
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
            <!-- Page Content -->
            <div class="p-8">
                ${children}
            </div>
        </main>
        
        <!-- Admin JavaScript -->
        <script>
            // Toggle Sidebar
            const toggleBtn = document.getElementById('toggle-sidebar');
            const sidebar = document.getElementById('sidebar');
            const mainContent = document.querySelector('main');
            let sidebarOpen = true;
            
            toggleBtn.addEventListener('click', () => {
                sidebarOpen = !sidebarOpen;
                if (sidebarOpen) {
                    sidebar.style.marginLeft = '0';
                    mainContent.style.marginLeft = '16rem';
                } else {
                    sidebar.style.marginLeft = '-16rem';
                    mainContent.style.marginLeft = '0';
                }
            });
            
            // Auto-save indicator
            let saveTimeout;
            function showAutoSave() {
                const indicator = document.getElementById('autosave-indicator');
                if (indicator) {
                    indicator.classList.remove('hidden');
                    clearTimeout(saveTimeout);
                    saveTimeout = setTimeout(() => {
                        indicator.classList.add('hidden');
                    }, 2000);
                }
            }
            
            // Initialize tooltips
            document.querySelectorAll('[title]').forEach(el => {
                el.classList.add('relative');
            });
        </script>
    </body>
    </html>
  `
}
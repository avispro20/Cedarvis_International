import { Context } from 'hono'
import { AdminLayout } from '../../components/admin-layout'

export const renderAdminSettings = (c: Context) => {
  const content = `
    <!-- Page Header -->
    <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-800">Settings</h1>
        <p class="text-gray-600 mt-2">Manage your website configuration and brand identity</p>
    </div>
    
    <!-- Settings Tabs -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
        <div class="border-b border-gray-200">
            <nav class="flex -mb-px">
                <button class="tab-btn active px-6 py-3 border-b-2 border-green-600 text-green-600 font-medium" data-tab="brand">
                    <i class="fas fa-palette mr-2"></i> Brand Identity
                </button>
                <button class="tab-btn px-6 py-3 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium" data-tab="general">
                    <i class="fas fa-cog mr-2"></i> General
                </button>
                <button class="tab-btn px-6 py-3 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium" data-tab="seo">
                    <i class="fas fa-search mr-2"></i> SEO
                </button>
                <button class="tab-btn px-6 py-3 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium" data-tab="email">
                    <i class="fas fa-envelope mr-2"></i> Email
                </button>
                <button class="tab-btn px-6 py-3 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium" data-tab="api">
                    <i class="fas fa-key mr-2"></i> API Keys
                </button>
            </nav>
        </div>
        
        <!-- Brand Identity Tab -->
        <div class="tab-content" id="brand-tab">
            <div class="p-8">
                <h2 class="text-2xl font-semibold text-gray-800 mb-6">Brand Identity Settings</h2>
                
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <!-- Logo Upload -->
                    <div class="space-y-4">
                        <h3 class="text-lg font-medium text-gray-700 mb-3">
                            <i class="fas fa-image mr-2 text-green-600"></i> Website Logo
                        </h3>
                        <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-500 transition-colors">
                            <div id="logo-preview" class="mb-4">
                                <img src="/static/images/cedarvis-logo-new.png" 
                                     alt="Current Logo" 
                                     class="max-h-24 mx-auto">
                            </div>
                            <p class="text-sm text-gray-600 mb-3">Current logo</p>
                            <input type="file" id="logo-upload" accept="image/*" class="hidden">
                            <button onclick="document.getElementById('logo-upload').click()" 
                                    class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                <i class="fas fa-upload mr-2"></i> Upload New Logo
                            </button>
                            <p class="text-xs text-gray-500 mt-3">Recommended: PNG with transparent background, max 500KB</p>
                        </div>
                    </div>
                    
                    <!-- Favicon Upload -->
                    <div class="space-y-4">
                        <h3 class="text-lg font-medium text-gray-700 mb-3">
                            <i class="fas fa-star mr-2 text-green-600"></i> Website Favicon
                        </h3>
                        <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-500 transition-colors">
                            <div id="favicon-preview" class="mb-4">
                                <img src="/static/images/cedarvis-favicon.png" 
                                     alt="Current Favicon" 
                                     class="w-16 h-16 mx-auto">
                            </div>
                            <p class="text-sm text-gray-600 mb-3">Current favicon</p>
                            <input type="file" id="favicon-upload" accept="image/*" class="hidden">
                            <button onclick="document.getElementById('favicon-upload').click()" 
                                    class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                <i class="fas fa-upload mr-2"></i> Upload New Favicon
                            </button>
                            <p class="text-xs text-gray-500 mt-3">Recommended: 32x32 or 64x64 PNG</p>
                        </div>
                    </div>
                </div>
                
                <!-- Brand Colors -->
                <div class="mt-8">
                    <h3 class="text-lg font-medium text-gray-700 mb-4">
                        <i class="fas fa-palette mr-2 text-green-600"></i> Brand Colors
                    </h3>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-600 mb-2">Primary Color</label>
                            <div class="flex items-center space-x-2">
                                <input type="color" value="#0A4A3B" class="w-full h-10 rounded cursor-pointer">
                                <input type="text" value="#0A4A3B" class="w-24 px-2 py-1 border rounded text-sm">
                            </div>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-600 mb-2">Secondary Color</label>
                            <div class="flex items-center space-x-2">
                                <input type="color" value="#D4AF37" class="w-full h-10 rounded cursor-pointer">
                                <input type="text" value="#D4AF37" class="w-24 px-2 py-1 border rounded text-sm">
                            </div>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-600 mb-2">Dark Color</label>
                            <div class="flex items-center space-x-2">
                                <input type="color" value="#1A1A1A" class="w-full h-10 rounded cursor-pointer">
                                <input type="text" value="#1A1A1A" class="w-24 px-2 py-1 border rounded text-sm">
                            </div>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-600 mb-2">Light Color</label>
                            <div class="flex items-center space-x-2">
                                <input type="color" value="#F5F5F5" class="w-full h-10 rounded cursor-pointer">
                                <input type="text" value="#F5F5F5" class="w-24 px-2 py-1 border rounded text-sm">
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Typography -->
                <div class="mt-8">
                    <h3 class="text-lg font-medium text-gray-700 mb-4">
                        <i class="fas fa-font mr-2 text-green-600"></i> Typography
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-600 mb-2">Heading Font</label>
                            <select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                                <option value="Space Grotesk" selected>Space Grotesk</option>
                                <option value="Montserrat">Montserrat</option>
                                <option value="Poppins">Poppins</option>
                                <option value="Inter">Inter</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-600 mb-2">Body Font</label>
                            <select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                                <option value="Plus Jakarta Sans" selected>Plus Jakarta Sans</option>
                                <option value="Inter">Inter</option>
                                <option value="Open Sans">Open Sans</option>
                                <option value="Roboto">Roboto</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <!-- Save Button -->
                <div class="mt-8 flex justify-end">
                    <button id="save-brand" class="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                        <i class="fas fa-save mr-2"></i> Save Brand Settings
                    </button>
                </div>
            </div>
        </div>
        
        <!-- General Tab -->
        <div class="tab-content hidden" id="general-tab">
            <div class="p-8">
                <h2 class="text-2xl font-semibold text-gray-800 mb-6">General Settings</h2>
                
                <div class="space-y-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Site Title</label>
                        <input type="text" value="Cedarvis International" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Tagline</label>
                        <input type="text" value="Transforming Africa Through Tech, Training & Talent" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
                        <input type="email" value="info@cedarvis.com" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <input type="tel" value="+234 123 456 7890" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Address</label>
                        <textarea rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">Lagos, Nigeria</textarea>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Time Zone</label>
                        <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                            <option value="Africa/Lagos" selected>Africa/Lagos (WAT)</option>
                            <option value="Africa/Nairobi">Africa/Nairobi (EAT)</option>
                            <option value="Africa/Johannesburg">Africa/Johannesburg (SAST)</option>
                            <option value="Africa/Cairo">Africa/Cairo (EET)</option>
                        </select>
                    </div>
                </div>
                
                <div class="mt-8 flex justify-end">
                    <button class="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                        <i class="fas fa-save mr-2"></i> Save General Settings
                    </button>
                </div>
            </div>
        </div>
        
        <!-- SEO Tab -->
        <div class="tab-content hidden" id="seo-tab">
            <div class="p-8">
                <h2 class="text-2xl font-semibold text-gray-800 mb-6">SEO Settings</h2>
                
                <div class="space-y-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Meta Title</label>
                        <input type="text" value="Cedarvis International - Digital Tech & Business Solutions Agency" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Meta Description</label>
                        <textarea rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">Leading Digital Tech & Business Solutions Agency empowering African businesses and individuals with cutting-edge technology and world-class training.</textarea>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Keywords</label>
                        <input type="text" value="Digital Marketing, Web Development, Mobile Apps, Data Analytics, Cybersecurity, Cloud Services, DevOps, Training, Africa, Tech" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Google Analytics ID</label>
                        <input type="text" placeholder="G-XXXXXXXXXX" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Google Tag Manager ID</label>
                        <input type="text" placeholder="GTM-XXXXXXX" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Robots.txt</label>
                        <textarea rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-green-500">User-agent: *
Allow: /
Sitemap: https://cedarvis-international.pages.dev/sitemap.xml</textarea>
                    </div>
                </div>
                
                <div class="mt-8 flex justify-end">
                    <button class="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                        <i class="fas fa-save mr-2"></i> Save SEO Settings
                    </button>
                </div>
            </div>
        </div>
        
        <!-- Email Tab -->
        <div class="tab-content hidden" id="email-tab">
            <div class="p-8">
                <h2 class="text-2xl font-semibold text-gray-800 mb-6">Email Settings</h2>
                
                <div class="space-y-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">SMTP Host</label>
                        <input type="text" placeholder="smtp.gmail.com" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                    </div>
                    
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">SMTP Port</label>
                            <input type="number" placeholder="587" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Encryption</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                                <option value="tls">TLS</option>
                                <option value="ssl">SSL</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">SMTP Username</label>
                        <input type="text" placeholder="your-email@gmail.com" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">SMTP Password</label>
                        <input type="password" placeholder="••••••••" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">From Email</label>
                        <input type="email" placeholder="noreply@cedarvis.com" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">From Name</label>
                        <input type="text" placeholder="Cedarvis International" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                    </div>
                </div>
                
                <div class="mt-8 flex justify-between">
                    <button class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        <i class="fas fa-paper-plane mr-2"></i> Send Test Email
                    </button>
                    <button class="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                        <i class="fas fa-save mr-2"></i> Save Email Settings
                    </button>
                </div>
            </div>
        </div>
        
        <!-- API Keys Tab -->
        <div class="tab-content hidden" id="api-tab">
            <div class="p-8">
                <h2 class="text-2xl font-semibold text-gray-800 mb-6">API Keys</h2>
                
                <div class="space-y-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">OpenAI API Key</label>
                        <div class="flex gap-2">
                            <input type="password" placeholder="sk-..." class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                            <button class="px-4 py-2 text-gray-600 hover:text-gray-800">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Google Maps API Key</label>
                        <div class="flex gap-2">
                            <input type="password" placeholder="AIza..." class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                            <button class="px-4 py-2 text-gray-600 hover:text-gray-800">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Stripe API Key</label>
                        <div class="flex gap-2">
                            <input type="password" placeholder="pk_..." class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                            <button class="px-4 py-2 text-gray-600 hover:text-gray-800">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">PayPal Client ID</label>
                        <div class="flex gap-2">
                            <input type="password" placeholder="AX..." class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                            <button class="px-4 py-2 text-gray-600 hover:text-gray-800">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">SendGrid API Key</label>
                        <div class="flex gap-2">
                            <input type="password" placeholder="SG..." class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                            <button class="px-4 py-2 text-gray-600 hover:text-gray-800">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                    </div>
                </div>
                
                <div class="mt-8 flex justify-end">
                    <button class="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                        <i class="fas fa-save mr-2"></i> Save API Keys
                    </button>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Quick Actions -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h3 class="text-lg font-semibold text-gray-800 mb-3">
                <i class="fas fa-database text-blue-600 mr-2"></i> Database Backup
            </h3>
            <p class="text-gray-600 text-sm mb-4">Last backup: 2 hours ago</p>
            <button class="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Create Backup Now
            </button>
        </div>
        
        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h3 class="text-lg font-semibold text-gray-800 mb-3">
                <i class="fas fa-broom text-orange-600 mr-2"></i> Clear Cache
            </h3>
            <p class="text-gray-600 text-sm mb-4">Free up space and improve performance</p>
            <button class="w-full px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                Clear All Cache
            </button>
        </div>
        
        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h3 class="text-lg font-semibold text-gray-800 mb-3">
                <i class="fas fa-file-export text-green-600 mr-2"></i> Export Data
            </h3>
            <p class="text-gray-600 text-sm mb-4">Download all content as JSON</p>
            <button class="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Export All Data
            </button>
        </div>
    </div>
    
    <script>
        // Tab switching
        const tabButtons = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');
        
        tabButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetTab = btn.dataset.tab;
                
                // Remove active class from all buttons and contents
                tabButtons.forEach(b => {
                    b.classList.remove('active', 'border-green-600', 'text-green-600');
                    b.classList.add('border-transparent', 'text-gray-500');
                });
                tabContents.forEach(c => c.classList.add('hidden'));
                
                // Add active class to clicked button and show corresponding content
                btn.classList.add('active', 'border-green-600', 'text-green-600');
                btn.classList.remove('border-transparent', 'text-gray-500');
                document.getElementById(targetTab + '-tab').classList.remove('hidden');
            });
        });
        
        // Logo upload preview
        document.getElementById('logo-upload')?.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    document.getElementById('logo-preview').innerHTML = 
                        '<img src="' + e.target.result + '" alt="New Logo" class="max-h-24 mx-auto">';
                };
                reader.readAsDataURL(file);
            }
        });
        
        // Favicon upload preview
        document.getElementById('favicon-upload')?.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    document.getElementById('favicon-preview').innerHTML = 
                        '<img src="' + e.target.result + '" alt="New Favicon" class="w-16 h-16 mx-auto">';
                };
                reader.readAsDataURL(file);
            }
        });
        
        // Save brand settings
        document.getElementById('save-brand')?.addEventListener('click', function() {
            // Collect form data
            const formData = new FormData();
            const logoFile = document.getElementById('logo-upload').files[0];
            const faviconFile = document.getElementById('favicon-upload').files[0];
            
            if (logoFile) formData.append('logo', logoFile);
            if (faviconFile) formData.append('favicon', faviconFile);
            
            // Add color values
            formData.append('primaryColor', document.querySelector('input[value="#0A4A3B"]').value);
            formData.append('secondaryColor', document.querySelector('input[value="#D4AF37"]').value);
            
            // Send to API
            fetch('/api/admin/settings/brand', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Brand settings saved successfully!');
                    // Optionally reload to see changes
                    window.location.reload();
                }
            })
            .catch(error => {
                console.error('Error saving brand settings:', error);
                alert('Error saving settings. Please try again.');
            });
        });
        
        // Password field toggle
        document.querySelectorAll('.fa-eye').forEach(icon => {
            icon.parentElement.addEventListener('click', function() {
                const input = this.previousElementSibling;
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        });
    </script>
  `
  
  return c.html(AdminLayout({ 
    title: 'Settings', 
    children: content,
    currentPage: 'settings'
  }))
}
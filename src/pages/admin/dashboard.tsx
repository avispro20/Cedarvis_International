import { Context } from 'hono'
import { AdminLayout } from '../../components/admin-layout'

export const renderAdminDashboard = (c: Context) => {
  const content = `
    <!-- Dashboard Stats -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <!-- Total Posts -->
        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-gray-500 text-sm">Total Blog Posts</p>
                    <p class="text-3xl font-bold text-gray-800 mt-1">24</p>
                    <p class="text-green-600 text-sm mt-2">
                        <i class="fas fa-arrow-up mr-1"></i>
                        12% from last month
                    </p>
                </div>
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <i class="fas fa-blog text-blue-600 text-xl"></i>
                </div>
            </div>
        </div>
        
        <!-- Services -->
        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-gray-500 text-sm">Active Services</p>
                    <p class="text-3xl font-bold text-gray-800 mt-1">12</p>
                    <p class="text-gray-600 text-sm mt-2">
                        <i class="fas fa-check-circle mr-1"></i>
                        All published
                    </p>
                </div>
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <i class="fas fa-briefcase text-green-600 text-xl"></i>
                </div>
            </div>
        </div>
        
        <!-- Testimonials -->
        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-gray-500 text-sm">Testimonials</p>
                    <p class="text-3xl font-bold text-gray-800 mt-1">18</p>
                    <p class="text-blue-600 text-sm mt-2">
                        <i class="fas fa-star mr-1"></i>
                        4.9 avg rating
                    </p>
                </div>
                <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <i class="fas fa-comments text-yellow-600 text-xl"></i>
                </div>
            </div>
        </div>
        
        <!-- Team Members -->
        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-gray-500 text-sm">Team Members</p>
                    <p class="text-3xl font-bold text-gray-800 mt-1">8</p>
                    <p class="text-purple-600 text-sm mt-2">
                        <i class="fas fa-user-plus mr-1"></i>
                        2 new this month
                    </p>
                </div>
                <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <i class="fas fa-users text-purple-600 text-xl"></i>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Quick Actions -->
    <div class="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-200">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">
            <i class="fas fa-bolt text-yellow-500 mr-2"></i>
            Quick Actions
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="/admin/blog/new" class="flex flex-col items-center justify-center p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg hover:from-blue-100 hover:to-blue-200 transition-all">
                <i class="fas fa-pen-fancy text-blue-600 text-2xl mb-2"></i>
                <span class="text-sm font-medium text-gray-700">New Blog Post</span>
            </a>
            <a href="/admin/services/new" class="flex flex-col items-center justify-center p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg hover:from-green-100 hover:to-green-200 transition-all">
                <i class="fas fa-plus-circle text-green-600 text-2xl mb-2"></i>
                <span class="text-sm font-medium text-gray-700">Add Service</span>
            </a>
            <a href="/admin/media" class="flex flex-col items-center justify-center p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg hover:from-purple-100 hover:to-purple-200 transition-all">
                <i class="fas fa-upload text-purple-600 text-2xl mb-2"></i>
                <span class="text-sm font-medium text-gray-700">Upload Media</span>
            </a>
            <a href="/admin/settings" class="flex flex-col items-center justify-center p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg hover:from-yellow-100 hover:to-yellow-200 transition-all">
                <i class="fas fa-cog text-yellow-600 text-2xl mb-2"></i>
                <span class="text-sm font-medium text-gray-700">Settings</span>
            </a>
        </div>
    </div>
    
    <!-- Recent Activity and Analytics -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Recent Blog Posts -->
        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div class="flex items-center justify-between mb-4">
                <h2 class="text-xl font-semibold text-gray-800">
                    <i class="fas fa-clock text-gray-500 mr-2"></i>
                    Recent Blog Posts
                </h2>
                <a href="/admin/blog" class="text-blue-600 hover:text-blue-700 text-sm">
                    View All <i class="fas fa-arrow-right ml-1"></i>
                </a>
            </div>
            <div class="space-y-3">
                <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div class="flex-1">
                        <h3 class="font-medium text-gray-800">AI Revolution in African Tech</h3>
                        <p class="text-sm text-gray-500 mt-1">Published 2 days ago</p>
                    </div>
                    <div class="flex space-x-2">
                        <button class="text-blue-600 hover:text-blue-700">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="text-red-600 hover:text-red-700">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
                <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div class="flex-1">
                        <h3 class="font-medium text-gray-800">Cybersecurity Best Practices</h3>
                        <p class="text-sm text-gray-500 mt-1">Published 5 days ago</p>
                    </div>
                    <div class="flex space-x-2">
                        <button class="text-blue-600 hover:text-blue-700">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="text-red-600 hover:text-red-700">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
                <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div class="flex-1">
                        <h3 class="font-medium text-gray-800">Digital Transformation Guide</h3>
                        <p class="text-sm text-gray-500 mt-1">Published 1 week ago</p>
                    </div>
                    <div class="flex space-x-2">
                        <button class="text-blue-600 hover:text-blue-700">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="text-red-600 hover:text-red-700">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Website Analytics -->
        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div class="flex items-center justify-between mb-4">
                <h2 class="text-xl font-semibold text-gray-800">
                    <i class="fas fa-chart-line text-gray-500 mr-2"></i>
                    Website Analytics
                </h2>
                <select class="text-sm border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Last 3 months</option>
                </select>
            </div>
            <div class="space-y-4">
                <div class="flex items-center justify-between">
                    <span class="text-gray-600">Page Views</span>
                    <span class="font-semibold text-gray-800">12,543</span>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-gray-600">Unique Visitors</span>
                    <span class="font-semibold text-gray-800">3,821</span>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-gray-600">Avg. Session Duration</span>
                    <span class="font-semibold text-gray-800">4m 32s</span>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-gray-600">Bounce Rate</span>
                    <span class="font-semibold text-gray-800">32.4%</span>
                </div>
            </div>
            <div class="mt-6 pt-6 border-t border-gray-200">
                <canvas id="analyticsChart" height="150"></canvas>
            </div>
        </div>
    </div>
    
    <!-- Initialize Chart -->
    <script>
        // Analytics Chart
        const ctx = document.getElementById('analyticsChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Page Views',
                    data: [1543, 1821, 1932, 1654, 1987, 1432, 1654],
                    borderColor: 'rgb(59, 130, 246)',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            display: false
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    </script>
  `
  
  return c.html(AdminLayout({ 
    title: 'Dashboard', 
    children: content,
    currentPage: 'dashboard'
  }))
}
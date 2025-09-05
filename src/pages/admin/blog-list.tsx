import { Context } from 'hono'
import { AdminLayout } from '../../components/admin-layout'

export const renderBlogList = (c: Context) => {
  const content = `
    <!-- Page Header -->
    <div class="mb-8">
        <div class="flex items-center justify-between">
            <div>
                <h1 class="text-3xl font-bold text-gray-800">Blog Posts</h1>
                <p class="text-gray-600 mt-2">Manage all your blog content</p>
            </div>
            <a href="/admin/blog/new" class="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center">
                <i class="fas fa-plus mr-2"></i>
                New Blog Post
            </a>
        </div>
    </div>
    
    <!-- Filters and Search -->
    <div class="bg-white rounded-xl shadow-sm p-6 mb-6 border border-gray-200">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <!-- Search -->
            <div class="md:col-span-2">
                <div class="relative">
                    <input 
                        type="text" 
                        placeholder="Search blog posts..."
                        class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                    <i class="fas fa-search absolute left-3 top-3 text-gray-400"></i>
                </div>
            </div>
            
            <!-- Category Filter -->
            <div>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                    <option value="">All Categories</option>
                    <option value="technology">Technology</option>
                    <option value="business">Business</option>
                    <option value="marketing">Marketing</option>
                    <option value="design">Design</option>
                    <option value="development">Development</option>
                </select>
            </div>
            
            <!-- Status Filter -->
            <div>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                    <option value="">All Status</option>
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                    <option value="scheduled">Scheduled</option>
                </select>
            </div>
        </div>
    </div>
    
    <!-- Blog Posts Table -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div class="overflow-x-auto">
            <table class="w-full">
                <thead class="bg-gray-50 border-b border-gray-200">
                    <tr>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            <input type="checkbox" class="rounded border-gray-300">
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Post
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Category
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Author
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <!-- Blog Post Row 1 -->
                    <tr class="hover:bg-gray-50">
                        <td class="px-6 py-4">
                            <input type="checkbox" class="rounded border-gray-300">
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center">
                                <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995" 
                                     alt="Post thumbnail" 
                                     class="h-10 w-16 object-cover rounded mr-3">
                                <div>
                                    <div class="text-sm font-medium text-gray-900">
                                        AI Revolution in African Tech: Opportunities and Challenges
                                    </div>
                                    <div class="text-sm text-gray-500">
                                        /blog/ai-revolution-african-tech
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <span class="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                                Technology
                            </span>
                        </td>
                        <td class="px-6 py-4 text-sm text-gray-900">
                            Dr. Kwame Asante
                        </td>
                        <td class="px-6 py-4">
                            <span class="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                                Published
                            </span>
                        </td>
                        <td class="px-6 py-4 text-sm text-gray-500">
                            Jan 15, 2024
                        </td>
                        <td class="px-6 py-4 text-sm font-medium">
                            <div class="flex space-x-2">
                                <a href="/blog/ai-revolution-african-tech" target="_blank" class="text-gray-600 hover:text-gray-900">
                                    <i class="fas fa-eye"></i>
                                </a>
                                <a href="/admin/blog/edit/1" class="text-blue-600 hover:text-blue-900">
                                    <i class="fas fa-edit"></i>
                                </a>
                                <button class="text-red-600 hover:text-red-900">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                    
                    <!-- Blog Post Row 2 -->
                    <tr class="hover:bg-gray-50">
                        <td class="px-6 py-4">
                            <input type="checkbox" class="rounded border-gray-300">
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center">
                                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b" 
                                     alt="Post thumbnail" 
                                     class="h-10 w-16 object-cover rounded mr-3">
                                <div>
                                    <div class="text-sm font-medium text-gray-900">
                                        Cybersecurity Best Practices for African Businesses
                                    </div>
                                    <div class="text-sm text-gray-500">
                                        /blog/cybersecurity-best-practices
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <span class="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                                Cybersecurity
                            </span>
                        </td>
                        <td class="px-6 py-4 text-sm text-gray-900">
                            Sarah Mwangi
                        </td>
                        <td class="px-6 py-4">
                            <span class="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                                Published
                            </span>
                        </td>
                        <td class="px-6 py-4 text-sm text-gray-500">
                            Jan 12, 2024
                        </td>
                        <td class="px-6 py-4 text-sm font-medium">
                            <div class="flex space-x-2">
                                <a href="/blog/cybersecurity-best-practices" target="_blank" class="text-gray-600 hover:text-gray-900">
                                    <i class="fas fa-eye"></i>
                                </a>
                                <a href="/admin/blog/edit/2" class="text-blue-600 hover:text-blue-900">
                                    <i class="fas fa-edit"></i>
                                </a>
                                <button class="text-red-600 hover:text-red-900">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                    
                    <!-- Blog Post Row 3 -->
                    <tr class="hover:bg-gray-50">
                        <td class="px-6 py-4">
                            <input type="checkbox" class="rounded border-gray-300">
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center">
                                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                                     alt="Post thumbnail" 
                                     class="h-10 w-16 object-cover rounded mr-3">
                                <div>
                                    <div class="text-sm font-medium text-gray-900">
                                        Digital Transformation: A Roadmap for Success
                                    </div>
                                    <div class="text-sm text-gray-500">
                                        /blog/digital-transformation-roadmap
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <span class="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">
                                Business
                            </span>
                        </td>
                        <td class="px-6 py-4 text-sm text-gray-900">
                            Michael Okafor
                        </td>
                        <td class="px-6 py-4">
                            <span class="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                                Draft
                            </span>
                        </td>
                        <td class="px-6 py-4 text-sm text-gray-500">
                            Jan 10, 2024
                        </td>
                        <td class="px-6 py-4 text-sm font-medium">
                            <div class="flex space-x-2">
                                <a href="/blog/digital-transformation-roadmap" target="_blank" class="text-gray-600 hover:text-gray-900">
                                    <i class="fas fa-eye"></i>
                                </a>
                                <a href="/admin/blog/edit/3" class="text-blue-600 hover:text-blue-900">
                                    <i class="fas fa-edit"></i>
                                </a>
                                <button class="text-red-600 hover:text-red-900">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <!-- Pagination -->
        <div class="bg-gray-50 px-6 py-3 border-t border-gray-200">
            <div class="flex items-center justify-between">
                <div class="text-sm text-gray-700">
                    Showing <span class="font-medium">1</span> to <span class="font-medium">10</span> of 
                    <span class="font-medium">24</span> results
                </div>
                <div class="flex space-x-2">
                    <button class="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50" disabled>
                        Previous
                    </button>
                    <button class="px-3 py-1 bg-green-600 text-white rounded-lg">1</button>
                    <button class="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-100">2</button>
                    <button class="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-100">3</button>
                    <button class="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-100">
                        Next
                    </button>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Bulk Actions -->
    <div class="mt-6 flex items-center justify-between">
        <div class="flex items-center space-x-4">
            <span class="text-sm text-gray-600">With selected:</span>
            <button class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                <i class="fas fa-trash mr-2"></i>
                Delete
            </button>
            <button class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                <i class="fas fa-archive mr-2"></i>
                Archive
            </button>
        </div>
        <button class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            <i class="fas fa-download mr-2"></i>
            Export
        </button>
    </div>
    
    <script>
        // Handle bulk selection
        const mainCheckbox = document.querySelector('thead input[type="checkbox"]');
        const rowCheckboxes = document.querySelectorAll('tbody input[type="checkbox"]');
        
        mainCheckbox?.addEventListener('change', function() {
            rowCheckboxes.forEach(checkbox => {
                checkbox.checked = this.checked;
            });
        });
        
        // Delete confirmation
        document.querySelectorAll('.fa-trash').forEach(btn => {
            btn.parentElement.addEventListener('click', function(e) {
                if (!confirm('Are you sure you want to delete this post?')) {
                    e.preventDefault();
                }
            });
        });
    </script>
  `
  
  return c.html(AdminLayout({ 
    title: 'Blog Posts', 
    children: content,
    currentPage: 'blog'
  }))
}
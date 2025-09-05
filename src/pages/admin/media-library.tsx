import { Context } from 'hono'
import { AdminLayout } from '../../components/admin-layout'

export const renderMediaLibrary = (c: Context) => {
  const content = `
    <!-- Page Header -->
    <div class="mb-8">
        <div class="flex items-center justify-between">
            <div>
                <h1 class="text-3xl font-bold text-gray-800">Media Library</h1>
                <p class="text-gray-600 mt-2">Manage all your images and media files</p>
            </div>
            <button id="uploadBtn" class="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center">
                <i class="fas fa-cloud-upload-alt mr-2"></i>
                Upload Files
            </button>
        </div>
    </div>
    
    <!-- Upload Area (Hidden by default) -->
    <div id="uploadArea" class="hidden bg-white rounded-xl shadow-sm p-8 mb-6 border-2 border-dashed border-gray-300">
        <div class="text-center">
            <i class="fas fa-cloud-upload-alt text-6xl text-gray-400 mb-4"></i>
            <h3 class="text-xl font-semibold text-gray-700 mb-2">Drop files here or click to upload</h3>
            <p class="text-gray-500 mb-4">Support for JPG, PNG, GIF, SVG, WebP (Max 10MB per file)</p>
            <input type="file" id="fileInput" multiple accept="image/*" class="hidden">
            <button id="browseBtn" class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Browse Files
            </button>
        </div>
        
        <!-- Upload Progress -->
        <div id="uploadProgress" class="hidden mt-6">
            <div class="bg-gray-200 rounded-full h-2 overflow-hidden">
                <div id="progressBar" class="bg-green-600 h-full transition-all duration-300" style="width: 0%"></div>
            </div>
            <p class="text-sm text-gray-600 mt-2">Uploading: <span id="uploadStatus">0%</span></p>
        </div>
    </div>
    
    <!-- Filters -->
    <div class="bg-white rounded-xl shadow-sm p-6 mb-6 border border-gray-200">
        <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
            <!-- Search -->
            <div class="md:col-span-2">
                <div class="relative">
                    <input 
                        type="text" 
                        placeholder="Search media..."
                        class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                    <i class="fas fa-search absolute left-3 top-3 text-gray-400"></i>
                </div>
            </div>
            
            <!-- Type Filter -->
            <div>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                    <option value="">All Types</option>
                    <option value="jpg">JPG</option>
                    <option value="png">PNG</option>
                    <option value="gif">GIF</option>
                    <option value="svg">SVG</option>
                    <option value="webp">WebP</option>
                </select>
            </div>
            
            <!-- Date Filter -->
            <div>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                    <option value="">All Dates</option>
                    <option value="today">Today</option>
                    <option value="week">This Week</option>
                    <option value="month">This Month</option>
                    <option value="year">This Year</option>
                </select>
            </div>
            
            <!-- View Toggle -->
            <div class="flex space-x-2">
                <button id="gridView" class="flex-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                    <i class="fas fa-th"></i>
                </button>
                <button id="listView" class="flex-1 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                    <i class="fas fa-list"></i>
                </button>
            </div>
        </div>
    </div>
    
    <!-- Media Grid -->
    <div id="mediaGrid" class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <!-- Media Item 1 -->
        <div class="media-item group relative bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
            <div class="aspect-square">
                <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995" 
                     alt="AI Technology" 
                     class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300">
            </div>
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div class="flex space-x-2">
                    <button class="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors" title="View">
                        <i class="fas fa-eye text-gray-700"></i>
                    </button>
                    <button class="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors" title="Copy URL">
                        <i class="fas fa-link text-gray-700"></i>
                    </button>
                    <button class="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors" title="Delete">
                        <i class="fas fa-trash text-red-600"></i>
                    </button>
                </div>
            </div>
            <div class="absolute top-2 left-2">
                <input type="checkbox" class="rounded border-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
            </div>
        </div>
        
        <!-- Media Item 2 -->
        <div class="media-item group relative bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
            <div class="aspect-square">
                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b" 
                     alt="Cybersecurity" 
                     class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300">
            </div>
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div class="flex space-x-2">
                    <button class="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors" title="View">
                        <i class="fas fa-eye text-gray-700"></i>
                    </button>
                    <button class="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors" title="Copy URL">
                        <i class="fas fa-link text-gray-700"></i>
                    </button>
                    <button class="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors" title="Delete">
                        <i class="fas fa-trash text-red-600"></i>
                    </button>
                </div>
            </div>
            <div class="absolute top-2 left-2">
                <input type="checkbox" class="rounded border-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
            </div>
        </div>
        
        <!-- Add more media items -->
        ${Array(10).fill(0).map((_, i) => `
        <div class="media-item group relative bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
            <div class="aspect-square">
                <img src="https://picsum.photos/400?random=${i}" 
                     alt="Media ${i + 3}" 
                     class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300">
            </div>
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div class="flex space-x-2">
                    <button class="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors" title="View">
                        <i class="fas fa-eye text-gray-700"></i>
                    </button>
                    <button class="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors" title="Copy URL">
                        <i class="fas fa-link text-gray-700"></i>
                    </button>
                    <button class="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors" title="Delete">
                        <i class="fas fa-trash text-red-600"></i>
                    </button>
                </div>
            </div>
            <div class="absolute top-2 left-2">
                <input type="checkbox" class="rounded border-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
            </div>
        </div>
        `).join('')}
    </div>
    
    <!-- Media List View (Hidden by default) -->
    <div id="mediaList" class="hidden bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table class="w-full">
            <thead class="bg-gray-50 border-b border-gray-200">
                <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <input type="checkbox" class="rounded border-gray-300">
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Preview
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        File Name
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Size
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
                <!-- List items would go here -->
            </tbody>
        </table>
    </div>
    
    <!-- Load More -->
    <div class="mt-8 text-center">
        <button class="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            <i class="fas fa-plus mr-2"></i>
            Load More
        </button>
    </div>
    
    <!-- Image Preview Modal -->
    <div id="imageModal" class="hidden fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4">
        <div class="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div class="p-6 border-b border-gray-200">
                <div class="flex items-center justify-between">
                    <h3 class="text-xl font-semibold">Image Details</h3>
                    <button id="closeModal" class="text-gray-500 hover:text-gray-700">
                        <i class="fas fa-times text-xl"></i>
                    </button>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                <div>
                    <img id="modalImage" src="" alt="" class="w-full rounded-lg">
                </div>
                <div class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">File Name</label>
                        <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg" value="image-name.jpg">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Alt Text</label>
                        <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="Describe the image">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">URL</label>
                        <div class="flex">
                            <input type="text" id="imageUrl" class="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg" readonly>
                            <button class="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700">
                                <i class="fas fa-copy"></i>
                            </button>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Type</label>
                            <p class="text-gray-600">JPG</p>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Size</label>
                            <p class="text-gray-600">2.4 MB</p>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Dimensions</label>
                            <p class="text-gray-600">1920 x 1080</p>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Uploaded</label>
                            <p class="text-gray-600">Jan 18, 2024</p>
                        </div>
                    </div>
                    <div class="flex space-x-3 pt-4">
                        <button class="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                            Update
                        </button>
                        <button class="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <script>
        // Upload functionality
        const uploadBtn = document.getElementById('uploadBtn');
        const uploadArea = document.getElementById('uploadArea');
        const fileInput = document.getElementById('fileInput');
        const browseBtn = document.getElementById('browseBtn');
        
        uploadBtn.addEventListener('click', () => {
            uploadArea.classList.toggle('hidden');
        });
        
        browseBtn.addEventListener('click', () => {
            fileInput.click();
        });
        
        // Drag and drop
        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.classList.add('border-green-500', 'bg-green-50');
        });
        
        uploadArea.addEventListener('dragleave', () => {
            uploadArea.classList.remove('border-green-500', 'bg-green-50');
        });
        
        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.classList.remove('border-green-500', 'bg-green-50');
            handleFiles(e.dataTransfer.files);
        });
        
        fileInput.addEventListener('change', (e) => {
            handleFiles(e.target.files);
        });
        
        function handleFiles(files) {
            const uploadProgress = document.getElementById('uploadProgress');
            const progressBar = document.getElementById('progressBar');
            const uploadStatus = document.getElementById('uploadStatus');
            
            uploadProgress.classList.remove('hidden');
            
            // Simulate upload progress
            let progress = 0;
            const interval = setInterval(() => {
                progress += 10;
                progressBar.style.width = progress + '%';
                uploadStatus.textContent = progress + '%';
                
                if (progress >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        uploadProgress.classList.add('hidden');
                        uploadArea.classList.add('hidden');
                        alert('Files uploaded successfully!');
                    }, 500);
                }
            }, 200);
        }
        
        // View toggle
        const gridView = document.getElementById('gridView');
        const listView = document.getElementById('listView');
        const mediaGrid = document.getElementById('mediaGrid');
        const mediaList = document.getElementById('mediaList');
        
        gridView.addEventListener('click', () => {
            mediaGrid.classList.remove('hidden');
            mediaList.classList.add('hidden');
            gridView.classList.add('bg-gray-100');
            listView.classList.remove('bg-gray-100');
        });
        
        listView.addEventListener('click', () => {
            mediaGrid.classList.add('hidden');
            mediaList.classList.remove('hidden');
            listView.classList.add('bg-gray-100');
            gridView.classList.remove('bg-gray-100');
        });
        
        // Image modal
        const imageModal = document.getElementById('imageModal');
        const closeModal = document.getElementById('closeModal');
        const modalImage = document.getElementById('modalImage');
        
        document.querySelectorAll('.media-item img').forEach(img => {
            img.addEventListener('click', () => {
                modalImage.src = img.src;
                imageModal.classList.remove('hidden');
            });
        });
        
        closeModal.addEventListener('click', () => {
            imageModal.classList.add('hidden');
        });
        
        // Copy URL functionality
        document.querySelectorAll('.fa-link').forEach(btn => {
            btn.parentElement.addEventListener('click', (e) => {
                e.stopPropagation();
                const img = e.target.closest('.media-item').querySelector('img');
                navigator.clipboard.writeText(img.src);
                alert('Image URL copied to clipboard!');
            });
        });
    </script>
  `
  
  return c.html(AdminLayout({ 
    title: 'Media Library', 
    children: content,
    currentPage: 'media'
  }))
}
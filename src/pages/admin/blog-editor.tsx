import { Context } from 'hono'
import { AdminLayout } from '../../components/admin-layout'

export const renderBlogEditor = (c: Context) => {
  const postId = c.req.param('id')
  const isEdit = !!postId
  
  const content = `
    <!-- Page Header -->
    <div class="mb-8">
        <div class="flex items-center justify-between">
            <div>
                <h1 class="text-3xl font-bold text-gray-800">
                    ${isEdit ? 'Edit Blog Post' : 'Create New Blog Post'}
                </h1>
                <p class="text-gray-600 mt-2">
                    ${isEdit ? 'Update your blog post content and settings' : 'Write and publish a new article'}
                </p>
            </div>
            <div class="flex space-x-3">
                <button id="saveDraft" class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    <i class="fas fa-save mr-2"></i>
                    Save Draft
                </button>
                <button id="publishPost" class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    <i class="fas fa-paper-plane mr-2"></i>
                    Publish
                </button>
            </div>
        </div>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Main Editor -->
        <div class="lg:col-span-2 space-y-6">
            <!-- Title -->
            <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <label class="block text-sm font-medium text-gray-700 mb-2">
                    Post Title <span class="text-red-500">*</span>
                </label>
                <input 
                    type="text" 
                    id="postTitle"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-xl font-semibold"
                    placeholder="Enter your blog post title..."
                    required
                >
                <p class="text-sm text-gray-500 mt-2">
                    <span id="titleCharCount">0</span> / 100 characters
                </p>
            </div>
            
            <!-- Excerpt -->
            <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <label class="block text-sm font-medium text-gray-700 mb-2">
                    Post Excerpt
                </label>
                <textarea 
                    id="postExcerpt"
                    rows="3"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Brief description of your post (appears in blog listing)..."
                ></textarea>
                <p class="text-sm text-gray-500 mt-2">
                    <span id="excerptCharCount">0</span> / 160 characters
                </p>
            </div>
            
            <!-- Rich Text Editor -->
            <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <label class="block text-sm font-medium text-gray-700 mb-4">
                    Post Content <span class="text-red-500">*</span>
                </label>
                
                <!-- Custom Toolbar -->
                <div class="border border-gray-200 rounded-t-lg p-2 bg-gray-50">
                    <div class="flex flex-wrap gap-2">
                        <!-- Text Formatting -->
                        <div class="flex items-center space-x-1 border-r pr-2">
                            <button class="editor-btn" data-format="bold" title="Bold">
                                <i class="fas fa-bold"></i>
                            </button>
                            <button class="editor-btn" data-format="italic" title="Italic">
                                <i class="fas fa-italic"></i>
                            </button>
                            <button class="editor-btn" data-format="underline" title="Underline">
                                <i class="fas fa-underline"></i>
                            </button>
                            <button class="editor-btn" data-format="strike" title="Strikethrough">
                                <i class="fas fa-strikethrough"></i>
                            </button>
                        </div>
                        
                        <!-- Headers -->
                        <div class="flex items-center space-x-1 border-r pr-2">
                            <select class="editor-select" id="headerSelect">
                                <option value="">Normal</option>
                                <option value="1">Heading 1</option>
                                <option value="2">Heading 2</option>
                                <option value="3">Heading 3</option>
                                <option value="4">Heading 4</option>
                            </select>
                        </div>
                        
                        <!-- Lists -->
                        <div class="flex items-center space-x-1 border-r pr-2">
                            <button class="editor-btn" data-format="list" data-value="ordered" title="Numbered List">
                                <i class="fas fa-list-ol"></i>
                            </button>
                            <button class="editor-btn" data-format="list" data-value="bullet" title="Bullet List">
                                <i class="fas fa-list-ul"></i>
                            </button>
                            <button class="editor-btn" data-format="indent" data-value="-1" title="Decrease Indent">
                                <i class="fas fa-outdent"></i>
                            </button>
                            <button class="editor-btn" data-format="indent" data-value="+1" title="Increase Indent">
                                <i class="fas fa-indent"></i>
                            </button>
                        </div>
                        
                        <!-- Alignment -->
                        <div class="flex items-center space-x-1 border-r pr-2">
                            <button class="editor-btn" data-format="align" data-value="" title="Align Left">
                                <i class="fas fa-align-left"></i>
                            </button>
                            <button class="editor-btn" data-format="align" data-value="center" title="Align Center">
                                <i class="fas fa-align-center"></i>
                            </button>
                            <button class="editor-btn" data-format="align" data-value="right" title="Align Right">
                                <i class="fas fa-align-right"></i>
                            </button>
                            <button class="editor-btn" data-format="align" data-value="justify" title="Justify">
                                <i class="fas fa-align-justify"></i>
                            </button>
                        </div>
                        
                        <!-- Insert -->
                        <div class="flex items-center space-x-1 border-r pr-2">
                            <button class="editor-btn" data-format="link" title="Insert Link">
                                <i class="fas fa-link"></i>
                            </button>
                            <button class="editor-btn" data-format="image" title="Insert Image">
                                <i class="fas fa-image"></i>
                            </button>
                            <button class="editor-btn" data-format="video" title="Insert Video">
                                <i class="fas fa-video"></i>
                            </button>
                            <button class="editor-btn" data-format="code-block" title="Code Block">
                                <i class="fas fa-code"></i>
                            </button>
                            <button class="editor-btn" data-format="blockquote" title="Blockquote">
                                <i class="fas fa-quote-right"></i>
                            </button>
                        </div>
                        
                        <!-- Colors -->
                        <div class="flex items-center space-x-1">
                            <input type="color" id="textColor" class="w-8 h-8 border rounded cursor-pointer" title="Text Color">
                            <input type="color" id="bgColor" class="w-8 h-8 border rounded cursor-pointer" title="Background Color">
                        </div>
                    </div>
                </div>
                
                <!-- Quill Editor Container -->
                <div id="editor" class="min-h-[400px] bg-white"></div>
                
                <!-- Word Count -->
                <div class="flex items-center justify-between mt-4 text-sm text-gray-500">
                    <span>Word count: <span id="wordCount">0</span></span>
                    <span>Reading time: <span id="readingTime">0</span> min</span>
                </div>
            </div>
        </div>
        
        <!-- Sidebar Settings -->
        <div class="lg:col-span-1 space-y-6">
            <!-- Featured Image -->
            <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <h3 class="text-lg font-semibold text-gray-800 mb-4">Featured Image</h3>
                <div id="imagePreview" class="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                    <div class="text-center">
                        <i class="fas fa-image text-gray-400 text-4xl mb-2"></i>
                        <p class="text-gray-500 text-sm">No image selected</p>
                    </div>
                </div>
                <button id="selectImage" class="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <i class="fas fa-upload mr-2"></i>
                    Select Image
                </button>
                <input type="file" id="imageInput" accept="image/*" class="hidden">
            </div>
            
            <!-- Post Settings -->
            <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <h3 class="text-lg font-semibold text-gray-800 mb-4">Post Settings</h3>
                
                <!-- Category -->
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <select id="postCategory" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                        <option value="">Select Category</option>
                        <option value="technology">Technology</option>
                        <option value="business">Business</option>
                        <option value="marketing">Marketing</option>
                        <option value="design">Design</option>
                        <option value="development">Development</option>
                        <option value="cybersecurity">Cybersecurity</option>
                        <option value="data">Data Analytics</option>
                        <option value="cloud">Cloud Computing</option>
                    </select>
                </div>
                
                <!-- Tags -->
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                    <input 
                        type="text" 
                        id="postTags"
                        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                        placeholder="Enter tags separated by commas"
                    >
                </div>
                
                <!-- Author -->
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Author</label>
                    <input 
                        type="text" 
                        id="postAuthor"
                        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                        value="Admin"
                    >
                </div>
                
                <!-- Publish Date -->
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Publish Date</label>
                    <input 
                        type="datetime-local" 
                        id="publishDate"
                        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    >
                </div>
                
                <!-- Status -->
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Status</label>
                    <select id="postStatus" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                        <option value="draft">Draft</option>
                        <option value="published">Published</option>
                        <option value="scheduled">Scheduled</option>
                    </select>
                </div>
            </div>
            
            <!-- SEO Settings -->
            <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <h3 class="text-lg font-semibold text-gray-800 mb-4">SEO Settings</h3>
                
                <!-- Meta Title -->
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Meta Title</label>
                    <input 
                        type="text" 
                        id="metaTitle"
                        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                        placeholder="SEO optimized title"
                    >
                </div>
                
                <!-- Meta Description -->
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Meta Description</label>
                    <textarea 
                        id="metaDescription"
                        rows="3"
                        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                        placeholder="SEO meta description"
                    ></textarea>
                </div>
                
                <!-- URL Slug -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">URL Slug</label>
                    <input 
                        type="text" 
                        id="urlSlug"
                        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                        placeholder="post-url-slug"
                    >
                </div>
            </div>
        </div>
    </div>
    
    <!-- Initialize Quill Editor -->
    <script>
        // Initialize Quill
        const quill = new Quill('#editor', {
            theme: 'snow',
            placeholder: 'Start writing your amazing blog post...',
            modules: {
                toolbar: [
                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                    ['bold', 'italic', 'underline', 'strike'],
                    ['blockquote', 'code-block'],
                    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                    [{ 'indent': '-1'}, { 'indent': '+1' }],
                    [{ 'align': [] }],
                    [{ 'color': [] }, { 'background': [] }],
                    ['link', 'image', 'video'],
                    ['clean']
                ]
            }
        });
        
        // Character counters
        document.getElementById('postTitle').addEventListener('input', function() {
            document.getElementById('titleCharCount').textContent = this.value.length;
        });
        
        document.getElementById('postExcerpt').addEventListener('input', function() {
            document.getElementById('excerptCharCount').textContent = this.value.length;
        });
        
        // Word count and reading time
        quill.on('text-change', function() {
            const text = quill.getText();
            const words = text.trim().split(/\\s+/).length;
            const readingTime = Math.ceil(words / 200);
            
            document.getElementById('wordCount').textContent = words;
            document.getElementById('readingTime').textContent = readingTime;
        });
        
        // Image upload
        document.getElementById('selectImage').addEventListener('click', () => {
            document.getElementById('imageInput').click();
        });
        
        document.getElementById('imageInput').addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    document.getElementById('imagePreview').innerHTML = 
                        '<img src="' + e.target.result + '" class="w-full h-full object-cover">';
                };
                reader.readAsDataURL(file);
            }
        });
        
        // Auto-generate slug from title
        document.getElementById('postTitle').addEventListener('input', function() {
            const slug = this.value
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-+|-+$/g, '');
            document.getElementById('urlSlug').value = slug;
        });
        
        // Save and publish functions
        document.getElementById('saveDraft').addEventListener('click', () => {
            savePost('draft');
        });
        
        document.getElementById('publishPost').addEventListener('click', () => {
            savePost('published');
        });
        
        function savePost(status) {
            const postData = {
                title: document.getElementById('postTitle').value,
                excerpt: document.getElementById('postExcerpt').value,
                content: quill.root.innerHTML,
                category: document.getElementById('postCategory').value,
                tags: document.getElementById('postTags').value.split(',').map(t => t.trim()),
                author: document.getElementById('postAuthor').value,
                status: status,
                publishDate: document.getElementById('publishDate').value,
                metaTitle: document.getElementById('metaTitle').value,
                metaDescription: document.getElementById('metaDescription').value,
                slug: document.getElementById('urlSlug').value,
                featuredImage: document.getElementById('imagePreview').querySelector('img')?.src
            };
            
            // Send to API
            fetch('/api/admin/blog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert(status === 'published' ? 'Post published successfully!' : 'Draft saved successfully!');
                    window.location.href = '/admin/blog';
                }
            })
            .catch(error => {
                console.error('Error saving post:', error);
                alert('Error saving post. Please try again.');
            });
        }
    </script>
    
    <style>
        .editor-btn {
            padding: 0.375rem 0.5rem;
            border-radius: 0.25rem;
            transition: all 0.2s;
            color: #4b5563;
        }
        .editor-btn:hover {
            background-color: #e5e7eb;
            color: #1f2937;
        }
        .editor-select {
            padding: 0.25rem 0.5rem;
            border: 1px solid #d1d5db;
            border-radius: 0.25rem;
            font-size: 0.875rem;
        }
        .ql-container {
            font-size: 16px;
            font-family: 'Plus Jakarta Sans', sans-serif;
        }
    </style>
  `
  
  return c.html(AdminLayout({ 
    title: isEdit ? 'Edit Blog Post' : 'New Blog Post', 
    children: content,
    currentPage: 'blog'
  }))
}
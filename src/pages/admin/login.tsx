import { Context } from 'hono'

export const renderAdminLogin = (c: Context) => {
  const error = c.req.query('error')
  
  const content = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Admin Login - Cedarvis International</title>
        <link rel="icon" type="image/png" href="/static/images/favicon.png">
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <style>
            .bg-gradient-cedarvis {
                background: linear-gradient(135deg, #0A4A3B 0%, #D4AF37 100%);
            }
        </style>
    </head>
    <body class="min-h-screen bg-gradient-cedarvis flex items-center justify-center p-4">
        <div class="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
            <div class="text-center mb-8">
                <img src="/static/images/cedarvis-logo-new.png" alt="Cedarvis International" class="h-16 mx-auto mb-4">
                <h1 class="text-3xl font-bold text-gray-800">Admin Portal</h1>
                <p class="text-gray-600 mt-2">Sign in to manage your website</p>
            </div>
            
            ${error ? `
            <div class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                <i class="fas fa-exclamation-circle mr-2"></i>
                Invalid username or password
            </div>
            ` : ''}
            
            <form action="/admin/login" method="POST" class="space-y-6">
                <div>
                    <label for="username" class="block text-sm font-medium text-gray-700 mb-2">
                        <i class="fas fa-user mr-1"></i> Username
                    </label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        required
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        placeholder="Enter your username"
                    >
                </div>
                
                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
                        <i class="fas fa-lock mr-1"></i> Password
                    </label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        required
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        placeholder="Enter your password"
                    >
                </div>
                
                <div class="flex items-center justify-between">
                    <label class="flex items-center">
                        <input type="checkbox" name="remember" class="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500">
                        <span class="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                    <a href="#" class="text-sm text-green-600 hover:text-green-500">Forgot password?</a>
                </div>
                
                <button 
                    type="submit" 
                    class="w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold py-3 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                    <i class="fas fa-sign-in-alt mr-2"></i>
                    Sign In
                </button>
            </form>
            
            <div class="mt-8 pt-6 border-t border-gray-200 text-center">
                <p class="text-sm text-gray-600">
                    <i class="fas fa-shield-alt mr-1"></i>
                    Secure admin access only
                </p>
                <p class="text-xs text-gray-500 mt-2">
                    © 2024 Cedarvis International. All rights reserved.
                </p>
            </div>
        </div>
        
        <script>
            // Add loading state to form submission
            document.querySelector('form').addEventListener('submit', function(e) {
                const button = this.querySelector('button[type="submit"]');
                button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Signing in...';
                button.disabled = true;
            });
        </script>
    </body>
    </html>
  `
  
  return c.html(content)
}
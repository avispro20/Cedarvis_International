import { Context, Next } from 'hono'
import { getCookie } from 'hono/cookie'
import { jwt } from 'hono/jwt'

// For development, using a simple secret. In production, use environment variables
const JWT_SECRET = 'cedarvis-admin-secret-2024'

export const authMiddleware = async (c: Context, next: Next) => {
  const token = getCookie(c, 'admin_token')
  
  if (!token) {
    return c.redirect('/admin/login')
  }
  
  try {
    // Verify the JWT token
    const payload = await jwt.verify(token, JWT_SECRET)
    c.set('admin', payload)
    await next()
  } catch (error) {
    // Invalid token, redirect to login
    return c.redirect('/admin/login')
  }
}

export const generateToken = (username: string) => {
  return jwt.sign(
    { 
      username, 
      role: 'admin',
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24) // 24 hours
    }, 
    JWT_SECRET
  )
}

export const verifyCredentials = (username: string, password: string): boolean => {
  // For development, using hardcoded credentials
  // In production, this should check against a database
  return username === 'admin' && password === 'Cedarvis@2024'
}
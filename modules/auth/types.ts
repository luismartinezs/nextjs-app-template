export interface User {
  id: string
  email: string
  name?: string
  imageUrl?: string
}

export interface Session {
  user: User
  expiresAt: Date
}

export interface AuthConfig {
  baseUrl: string
  loginUrl: string
  signupUrl: string
  afterLoginUrl: string
  afterSignupUrl: string
}
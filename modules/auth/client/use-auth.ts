"use client"

import { User, Session } from "../types"

export interface UseAuth {
  // State
  user: User | null
  session: Session | null
  isLoading: boolean
  isAuthenticated: boolean

  // Actions
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, data?: Partial<User>) => Promise<void>
  signOut: () => Promise<void>
  updateProfile: (data: Partial<User>) => Promise<void>
}

export function useAuth(): UseAuth {
  // Implementation will depend on the auth provider
  throw new Error("Not implemented")
}
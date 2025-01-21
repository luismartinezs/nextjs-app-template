"use client"

import { Product, Subscription } from "../types"

export interface UseSubscription {
  // State
  subscription: Subscription | null
  isLoading: boolean
  products: Product[]

  // Actions
  subscribe: (priceId: string) => Promise<void>
  cancel: () => Promise<void>
  reactivate: () => Promise<void>
  redirectToPortal: () => Promise<void>
  redirectToCheckout: (priceId: string) => Promise<void>
}

export function useSubscription(): UseSubscription {
  // Implementation will depend on the payment provider
  throw new Error("Not implemented")
}
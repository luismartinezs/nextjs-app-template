export type Currency = "usd" | "eur" | "gbp"

export interface Price {
  id: string
  amount: number
  currency: Currency
  interval?: "month" | "year"
  productId: string
}

export interface Product {
  id: string
  name: string
  description?: string
  active: boolean
  prices: Price[]
}

export interface PaymentMethod {
  id: string
  type: "card" | "bank_transfer"
  last4?: string
  expiryMonth?: number
  expiryYear?: number
}

export interface Subscription {
  id: string
  userId: string
  status: "active" | "canceled" | "past_due" | "incomplete"
  priceId: string
  currentPeriodEnd: Date
  cancelAtPeriodEnd: boolean
}

export interface Invoice {
  id: string
  userId: string
  amount: number
  currency: Currency
  status: "paid" | "open" | "void" | "uncollectible"
  subscriptionId?: string
  createdAt: Date
}
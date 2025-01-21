import {
  Invoice,
  PaymentMethod,
  Price,
  Product,
  Subscription
} from "../types"

export interface PaymentService {
  // Products & Prices
  getProducts(): Promise<Product[]>
  getProduct(productId: string): Promise<Product | null>
  getPrices(productId: string): Promise<Price[]>
  getPrice(priceId: string): Promise<Price | null>

  // Payment Methods
  getPaymentMethods(userId: string): Promise<PaymentMethod[]>
  addPaymentMethod(userId: string, data: any): Promise<PaymentMethod>
  removePaymentMethod(paymentMethodId: string): Promise<void>
  setDefaultPaymentMethod(userId: string, paymentMethodId: string): Promise<void>

  // Subscriptions
  getSubscription(subscriptionId: string): Promise<Subscription | null>
  getUserSubscription(userId: string): Promise<Subscription | null>
  createSubscription(userId: string, priceId: string): Promise<Subscription>
  cancelSubscription(subscriptionId: string): Promise<Subscription>
  reactivateSubscription(subscriptionId: string): Promise<Subscription>

  // Invoices
  getInvoices(userId: string): Promise<Invoice[]>
  getInvoice(invoiceId: string): Promise<Invoice | null>

  // Customer Portal
  createCustomerPortalSession(userId: string): Promise<string>
  createCheckoutSession(userId: string, priceId: string): Promise<string>
}
export interface User {
  id: string
  clerkId: string
  email: string
  firstName?: string
  lastName?: string
  imageUrl?: string
  credits: number
  subscriptionTier: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface AITool {
  id: string
  name: string
  slug: string
  description: string
  category: string
  icon?: string
  isActive: boolean
  creditCost: number
  promptTemplate: string
  inputFields: any
  outputFormat: string
  createdAt: Date
  updatedAt: Date
}

export interface ToolUsage {
  id: string
  userId: string
  toolId: string
  inputData: any
  output: string
  creditsUsed: number
  status: string
  errorMessage?: string
  createdAt: Date
  tool?: AITool
}

export interface PromptPack {
  id: string
  name: string
  slug: string
  description: string
  category: string
  price: number
  isActive: boolean
  prompts: any
  tags: string[]
  createdAt: Date
  updatedAt: Date
  owned?: boolean
}

export interface Subscription {
  id: string
  userId: string
  stripeCustomerId?: string
  stripeSubscriptionId?: string
  stripePriceId?: string
  status: string
  tier: string
  creditsPerMonth: number
  currentPeriodStart?: Date
  currentPeriodEnd?: Date
  cancelAtPeriodEnd: boolean
  createdAt: Date
  updatedAt: Date
}

export interface UsageRecord {
  id: string
  userId: string
  credits: number
  type: string
  source: string
  description?: string
  createdAt: Date
}
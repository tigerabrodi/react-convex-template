import { authTables } from '@convex-dev/auth/server'
import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

// Define the schema for the application
export default defineSchema({
  // Include Convex Auth tables
  ...authTables,

  // Users table (extends the auth user)
  users: defineTable({
    email: v.string(),
    updatedAt: v.number(),
    apiKey: v.optional(
      v.object({
        encryptedKey: v.array(v.number()), // For encrypted API key storage
        initializationVector: v.array(v.number()), // IV for encryption
      })
    ),
  }).index('by_email', ['email']),
})

import { getAuthUserId } from '@convex-dev/auth/server'
import { ConvexError, v } from 'convex/values'

import { mutation } from '../_generated/server'

/**
 * Update user data
 */
export const updateUser = mutation({
  args: {
    userId: v.id('users'),
    data: v.object({
      apiKey: v.optional(
        v.object({
          encryptedKey: v.array(v.number()),
          initializationVector: v.array(v.number()),
        })
      ),
    }),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx)
    if (!userId) {
      throw new ConvexError('Not authenticated')
    }

    // Ensure user can only update their own data
    if (userId !== args.userId) {
      throw new ConvexError('Not authorized')
    }

    return await ctx.db.patch(args.userId, {
      ...args.data,
      updatedAt: Date.now(),
    })
  },
})

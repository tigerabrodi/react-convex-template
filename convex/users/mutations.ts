import { getAuthUserId } from '@convex-dev/auth/server'
import { v } from 'convex/values'

import { mutation } from '../_generated/server'
import { sharedErrors } from '../errors'

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
      throw sharedErrors.USER_NOT_AUTHENTICATED
    }

    return await ctx.db.patch(args.userId, {
      ...args.data,
      updatedAt: Date.now(),
    })
  },
})

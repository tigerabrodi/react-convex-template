import { ConvexError } from 'convex/values'

/**
 * Our own error class extending ConvexError, not strictly necessary,
 * but by using this we ensure that the `.data` property is always a string.
 * This means we do not need to type cast `.data` as string elsewhere.
 */
export class CustomConvexError extends ConvexError<string> {
  constructor(message: string) {
    super(message)
  }
}

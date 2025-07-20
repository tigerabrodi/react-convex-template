import { CustomConvexError } from './error'

/**
 * Utility function to handle promises and return [error, result] tuple
 */
export async function handlePromise<PromiseResult>(
  promise: Promise<PromiseResult>
): Promise<[Error, null] | [null, PromiseResult]> {
  try {
    const result = await promise
    return [null, result]
  } catch (error) {
    return [
      error instanceof CustomConvexError ? error : new Error(String(error)),
      null,
    ]
  }
}

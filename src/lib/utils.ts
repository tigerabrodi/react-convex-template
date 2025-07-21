import { clsx, type ClassValue } from 'clsx'
import { ConvexError } from 'convex/values'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: Array<ClassValue>) {
  return twMerge(clsx(inputs))
}

export async function handlePromise<PromiseResult>(
  promise: Promise<PromiseResult>
): Promise<[Error, null] | [null, PromiseResult]> {
  try {
    const result = await promise
    return [null, result]
  } catch (error) {
    return [error instanceof Error ? error : new Error(String(error)), null]
  }
}

export function getErrorMessage({
  error,
  fallbackText,
}: {
  error: Error
  fallbackText?: string
}): string {
  if (error instanceof ConvexError) {
    return error.data as string
  }

  return fallbackText ?? error.message
}

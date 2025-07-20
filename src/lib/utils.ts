import { CustomConvexError } from '@convex/error'
import { clsx, type ClassValue } from 'clsx'
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
    return [
      error instanceof CustomConvexError ? error : new Error(String(error)),
      null,
    ]
  }
}

import { Doc } from '@convex/_generated/dataModel'
import { useOutletContext } from 'react-router'

export type AuthenticatedLayoutContext = {
  currentUser: Doc<'users'>
}

export const useAuthLayoutContext = () => {
  return useOutletContext<AuthenticatedLayoutContext>()
}

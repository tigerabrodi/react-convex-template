export class ErrorWithCode extends Error {
  code: string

  constructor({ code, message }: { code: string; message: string }) {
    super(message)
    this.code = code
  }
}

export const sharedErrors = {
  USER_NOT_AUTHENTICATED: new ErrorWithCode({
    code: 'USER_NOT_AUTHENTICATED',
    message: 'User not authenticated',
  }),
}

export type LoginRequestType = { password: string; username: string }
export type LoginResponseType = {
  data: {
    accessToken: string
    refreshToken: string
  }
}

export type RegisterRequestType = {
  confirm_password: string
  password: string
  username: string
}
export type ErrorResponseBody = { response: { data: { message: string } } }

import { gql } from "@apollo/client"

class authService {
  REGISTER = gql`
    mutation Register($body: Object!) {
      Register(input: $body)
        @rest(
          type: "Post"
          path: "/users/sign-up"
          method: "POST"
          input: $input
        ) {
        NoResponse
      }
    }
  `
  LOGIN = gql`
    mutation Login($body: Object!) {
        Login(input: $body)
        @rest(
          type: "Post"
          path: "/users/sign-in"
          method: "POST"
          input: $input
        ) {
        accessToken,
        refreshToken
      }
    }
  `
  REFRESH = gql`
    mutation Refresh($body: Object!) {
      Refresh(input: $body)
        @rest(
          type: "Post"
          path: "/users/auth/refresh"
          method: "POST"
          input: $input
        ) {
        NoResponse
      }
    }
  `
  ME = gql`
  query Me($body: Object!) {
    Me(input: $body)
      @rest(
        type: "Get"
        path: "/users/me"
        method: "GET"
        input: $input
      ) {
      id,
      username
    }
  }
`
  setAccessToken = (token: string) => {
    localStorage.setItem("access", token)
  }
  setRefreshToken = (token: string) => {
    localStorage.setItem("refresh", token)
  }
  getAccessToken = () => localStorage.getItem('access')
  getRefreshToken = () => localStorage.getItem('refresh')

  removeAccessToken = () => localStorage.removeItem('access')
  removeRefreshToken = () => localStorage.removeItem('refresh')
}
export default new authService()

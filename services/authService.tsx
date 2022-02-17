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
}
export default new authService()

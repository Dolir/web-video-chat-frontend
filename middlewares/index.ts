import { RestLink } from "apollo-link-rest"
import { ApolloLink } from "@apollo/client"
import { onError } from "@apollo/client/link/error"
import { fromPromise } from "@apollo/client"
import { isLoggedIn, isAccessTokenValid } from "../utility"
import authService from "../services/authService"
const restLink = new RestLink({ uri: "http://192.168.88.32:8000/api/v1" })

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: `Bearer ${authService.getAccessToken()}`
    }
  }))
  return forward(operation)
})
// const authMiddleware = new ApolloLink((operation, forward) => {
//   operation.setContext(({ headers = {} }) => ({
//     headers: {
//       ...headers,
//       authorization: `Bearer adawdawdawd`
//     }
//   }))
//   if (isLoggedIn()) {
//     if (authService.getAccessToken() && !isRefreshing) {
//       isRefreshing = true
//       fetch("http://192.168.88.32:8000/api/v1/users/auth/refresh", {
//         method: "POST",
//         body: JSON.stringify({
//           token: authService.getRefreshToken()
//         })
//       }).then((res) => {
//         res.json().then((result) => {
//           isRefreshing = false
//           console.log(result)
//           authService.setAccessToken(accessToken)
//           authService.setRefreshToken(refreshToken)
//           return forward(operation).map((data) => {
//             return data
//           })
//         })
//       })
//     }
//   }

//   return forward(operation).map((data) => {
//     return data
//   })
// })

let isRefreshing = false
let pendingRequests: (() => void)[] = []

const resolvePendingRequests = () => {
  pendingRequests.map((callback) => callback())
  pendingRequests = []
}

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        switch (err.extensions.code) {
          case "UNAUTHENTICATED":
            // error code is set to UNAUTHENTICATED
            // when AuthenticationError thrown in resolver
            let forward$

            if (!isRefreshing) {
              isRefreshing = true
              forward$ = fromPromise(
                fetch("http://192.168.88.32:8000/api/v1/users/auth/refresh", {
                  method: "POST",
                  body: JSON.stringify({
                    token: authService.getRefreshToken()
                  })
                })
                  .then((res) => res.json())
                  .then(({ accessToken, refreshToken }) => {
                    // Store the new tokens for your auth link
                    authService.setAccessToken(accessToken)
                    authService.setRefreshToken(refreshToken)
                    resolvePendingRequests()
                    return accessToken
                  })
                  .catch((error) => {
                    pendingRequests = []
                    // Handle token refresh errors e.g clear stored tokens, redirect to login, ...
                    console.log(error)
                    return
                  })
                  .finally(() => {
                    isRefreshing = false
                  })
              ).filter((value) => Boolean(value))
            } else {
              // Will only emit once the Promise is resolved
              forward$ = fromPromise(
                new Promise<void>((resolve) => {
                  pendingRequests.push(() => resolve())
                })
              )
            }

            return forward$.flatMap(() => forward(operation))
        }
      }
    }
    if (networkError) {
      console.log(networkError)
      switch (networkError.statusCode) {
        
        case 401:
          // error code is set to UNAUTHENTICATED
          // when AuthenticationError thrown in resolver

          if (!isRefreshing) {
            isRefreshing = true
            fetch("http://192.168.88.32:8000/api/v1/users/auth/refresh", {
              method: "POST",
              body: JSON.stringify({
                token: authService.getRefreshToken()
              })
            })
              .then((res) => {
                console.log(res)
                if (!res.ok) throw new Error()
                res.json()
              })
              .then((result) => {
                // Store the new tokens for your auth link
                console.log("something happend", result)
                authService.setAccessToken(result.accessToken)
                authService.setRefreshToken(result.refreshToken)
                resolvePendingRequests()
                return result.accessToken
              })
              .catch((error) => {
                pendingRequests = []
                // Handle token refresh errors e.g clear stored tokens, redirect to login, ...
                authService.removeAccessToken()
                authService.removeRefreshToken()
                console.log(error)
                return
              })
              .finally(() => {
                isRefreshing = false
              })
          } else {
            // Will only emit once the Promise is resolved

            new Promise<void>((resolve) => {
              console.log(resolve, resolve)
              pendingRequests.push(() => resolve())
            })
          }

          return forward(operation)
      }
    }
  }
)

const middlewares = [authLink, errorLink, restLink]
export default middlewares

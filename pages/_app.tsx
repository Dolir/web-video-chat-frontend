import "../src/styles/globals.scss"
import type { AppProps } from "next/app"
import "bootstrap/dist/css/bootstrap.min.css"
import { Provider } from "react-redux"
import { store } from "../src/redux/store"
import { ApolloClient, InMemoryCache } from "@apollo/client"
import PageTransition from "../src/components/layout/PageTransition"
import { ApolloProvider, from } from "@apollo/client"
import middlewares from "../src/middlewares"
function MyApp({ Component, pageProps, router }: AppProps) {
 
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: from(middlewares)
  })

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <PageTransition router={router}>
          <Component {...pageProps} />
        </PageTransition>
      </ApolloProvider>
    </Provider>
  )
}

export default MyApp

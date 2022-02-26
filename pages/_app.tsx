import "../src/styles/globals.scss"
import type { AppProps } from "next/app"
import "bootstrap/dist/css/bootstrap.min.css"
import { Provider } from "react-redux"
import { store } from "../src/redux/store"
import { ApolloClient, InMemoryCache } from "@apollo/client"
import PageTransition from "../src/components/layout/PageTransition"
import { ApolloProvider, from } from "@apollo/client"
import middlewares from "../src/middlewares"
import Wrapper from "../src/components/layout/Wrapper"
import NavSidebar from "../src/components/navigation/NavSidebar"
function MyApp({ Component, pageProps, router }: AppProps) {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: from(middlewares)
  })

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Wrapper router={router}>
          <PageTransition router={router}>
            <Component {...pageProps} />
          </PageTransition>
        </Wrapper>
      </ApolloProvider>
    </Provider>
  )
}

export default MyApp

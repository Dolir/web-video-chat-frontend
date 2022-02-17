import "../styles/globals.scss"
import type { AppProps } from "next/app"
import "bootstrap/dist/css/bootstrap.min.css"
import { motion, AnimatePresence } from "framer-motion"
import Router from "next/router"
import { useEffect } from "react"
import { ApolloClient, InMemoryCache } from "@apollo/client"
import { RestLink } from "apollo-link-rest"
import PageTransition from "../components/layout/PageTransition"
import { ApolloProvider } from "@apollo/client"
function MyApp({ Component, pageProps, router }: AppProps) {
  const restLink = new RestLink({ uri: "http://192.168.88.32:8000/api/v1" })

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: restLink
  })

  return (
    <ApolloProvider client={client}>
      <PageTransition router={router}>
        <Component {...pageProps} />
      </PageTransition>
    </ApolloProvider>
  )
}

export default MyApp

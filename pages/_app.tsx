import "../src/styles/globals.scss"
import type { AppProps } from "next/app"
import "bootstrap/dist/css/bootstrap.min.css"
import { Provider } from "react-redux"
import { store } from "../src/redux/store"
import PageTransition from "../src/components/layout/PageTransition"
import Wrapper from "../src/components/layout/Wrapper"
import NavSidebar from "../src/components/navigation/NavSidebar"
import { QueryClient, QueryClientProvider } from "react-query"
function MyApp({ Component, pageProps, router }: AppProps) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Wrapper router={router}>
          <PageTransition router={router}>
            <Component {...pageProps} />
          </PageTransition>
        </Wrapper>
      </Provider>
    </QueryClientProvider>
  )
}

export default MyApp

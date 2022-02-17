import "../styles/globals.scss"
import type { AppProps } from "next/app"
import "bootstrap/dist/css/bootstrap.min.css"
import { motion, AnimatePresence } from "framer-motion"
function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
          pageExit: {
            opacity: 0,
          }
        }}
        transition={{ duration: 2 }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}

export default MyApp

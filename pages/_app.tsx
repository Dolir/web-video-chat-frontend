import "../styles/globals.scss"
import type { AppProps } from "next/app"
import "bootstrap/dist/css/bootstrap.min.css"
import { motion, AnimatePresence } from "framer-motion"
 import Router from "next/router";

function MyApp({ Component, pageProps, router }: AppProps) {
      // Add that code to _app.tsx / _app.jsx

     
      const routeChange = () => {
        // Temporary fix to avoid flash of unstyled content
        // during route transitions. Keep an eye on this
        // issue and remove this code when resolved:
        // https://github.com/vercel/next.js/issues/17464
  
        const tempFix = () => {
          const allStyleElems = document.querySelectorAll('style[media="x"]');
          allStyleElems.forEach((elem) => {
            elem.removeAttribute("media");
          });
        };
        tempFix();
      };
  
     Router.events.on("routeChangeComplete", routeChange );
     Router.events.on("routeChangeStart", routeChange );
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
        transition={{ duration: 0.5 }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}

export default MyApp

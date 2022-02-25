import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Router from "next/router"
import { useEffect } from "react"
const PageTransition = (props: { children: React.ReactNode; router: any }) => {
  const { router, children } = props
  const routeChange = () => {
    const tempFix = () => {
      const allStyleElems = document.querySelectorAll('style[media="x"]')
      allStyleElems.forEach((elem) => {
        elem.removeAttribute("media")
      })
    }
    tempFix()
  }

  Router.events.on("routeChangeComplete", routeChange)
  Router.events.on("routeChangeStart", routeChange)

  useEffect(() => {
    router.push(window.location.pathname)
  }, [])
  return (
    <AnimatePresence>
      <motion.div
        className=""
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          // pageInitial: {
          //   opacity: 0
          // },
          // pageAnimate: {
          //   opacity: 1
          // },
          // pageExit: {
          //   opacity: 0
          // }
        }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition

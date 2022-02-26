import React, { Fragment } from "react"

import NavSidebar from "../navigation/NavSidebar"
const Wrapper = (props: { children: React.ReactNode; router: any }) => {
  const { children, router } = props

  const routesExclude = ["/", "/auth"]
  const showNav = routesExclude.some((route) => {
    if (router.asPath === '/') return false
    return !router.asPath.startsWith(route)
  })
  return (
    <div className="d-flex">
      {showNav && <NavSidebar />}
      <div className="flex-grow-1">
        {children}
      </div>
      
    </div>
  )
}

export default Wrapper

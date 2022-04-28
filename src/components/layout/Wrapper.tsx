import React, { Fragment } from "react"

import NavSidebar from "../navigation/NavSidebar"
import classNames from "classnames"

const Wrapper = (props: { children: React.ReactNode; router: any }) => {
  const { children, router } = props

  const routesExclude = ["/", "/auth"]
  const showNav = routesExclude.some((route) => {
    if (router.asPath === '/') return false
    return !router.asPath.startsWith(route)
  })
  return (
    <div className="">
      {showNav && <NavSidebar />}
      <div className={classNames({'content': showNav})}>
        {children}
      </div>
      
    </div>
  )
}

export default Wrapper

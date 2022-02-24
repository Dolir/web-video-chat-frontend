import React, { Fragment } from "react"
import withAuth from "../../src/components/auth/withAuth"
import NavSidebar from "../../src/components/navigation/NavSidebar"
const Chats = () => {
  return (
    <Fragment>
      <NavSidebar /> <div>Chats</div>
    </Fragment>
  )
}

export default withAuth(Chats)

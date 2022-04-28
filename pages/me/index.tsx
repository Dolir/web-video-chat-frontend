import Image from "next/image"
import React, { Fragment } from "react"
import main from "../../src/assets/images/main.png"
import Router from "next/router"
import authService from "../../src/services/auth/authService"
import NavSidebar from "../../src/components/navigation/NavSidebar"
import withAuth from "../../src/components/auth/withAuth"
import { useQuery } from "react-query"
import clientService, {
  clientAlias
} from "../../src/services/client/clientService"

export const Me = () => {
  const clientQuery = useQuery(clientAlias.GET_ME, () => clientService.getMe())
  if (clientQuery.isLoading) return null
  if (clientQuery.isError) return null
  return (
    <Fragment>
      {/* <NavSidebar/> */}
      <div className={"absolute-bg"}>
        <Image
          layout="fill"
          objectFit="cover"
          src={main}
          sizes="100%"
          alt="main"
        />
      </div>{" "}
      <h1>You have successfully signed in</h1>
    </Fragment>
  )
}
export default withAuth(Me)

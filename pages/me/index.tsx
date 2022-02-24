import Image from "next/image"
import React, { Fragment } from "react"
import main from "../../src/assets/images/main.png"
import Router from "next/router"
import { useQuery } from "@apollo/client"
import authService from "../../src/services/authService"
import NavSidebar from "../../src/components/navigation/NavSidebar"
export const Me = () => {
const query = useQuery(authService.ME, {
    variables: { num: 1 },
  })
  console.log(Router)
  return (
    <Fragment>
      <NavSidebar/>
      <div className={"absolute-bg"}>
        <Image
          layout="fill"
          objectFit="cover"
          src={main}
          sizes="100%"
          alt="main"
        />
       
      </div> <h1>You have successfully signed in</h1>
    </Fragment>
  )
}
export default Me

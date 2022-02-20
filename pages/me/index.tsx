import Image from "next/image"
import React, { useEffect } from "react"
import main from "../../assets/images/main.png"
import Router from "next/router"
import { useQuery } from "@apollo/client"
import authService from "../../services/authService"
export const Me = () => {
const query = useQuery(authService.ME, {
    variables: { num: 1 },
  })
  console.log(Router)
  return (
    <div>
      <div className={"absolute-bg"}>
        <Image
          layout="fill"
          objectFit="cover"
          src={main}
          sizes="100%"
          alt="main"
        />
       
      </div> <h1>You have successfully signed in</h1>
    </div>
  )
}
export default Me

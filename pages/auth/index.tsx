import Image from "next/image"
import React, { useEffect } from "react"
import main from "../../src/assets/images/main.png"
import Router from "next/router"
export const Auth = () => {
  useEffect(() => {
    Router.push("/auth/login")
  }, [])

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
      </div>
    </div>
  )
}
export default Auth

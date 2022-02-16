import Image from "next/image"
import React from "react"
import { useRouter } from "next/router"
import main from "../../assets/images/main.png"
import LoginForm from "../../components/auth/LoginForm"
import RegisterForm from "../../components/auth/RegisterForm"
import { useTransition, animated } from "@react-spring/web"
import useUnscroll from "../../utility/hooks/useUnscroll"
export const Auth = () => {
  const router = useRouter()
  useUnscroll(true)
  const { state } = router.query
  const transitions = useTransition(state === "login", {
    from: {opacity: 0,transform: "translateY(-50vh)" },
    enter: { opacity: 1,transform: "translateY(50vh)" },
    leave: {opacity: 0,transform: "translateY(150vh)" },
  })
  
  return (
    <div >
      <div className={"absolute-bg"}>
        <Image
          layout="fill"
          objectFit="cover"
          src={main}
          sizes="100%"
          alt="main"
        />
      </div>
      {transitions((styles, item) => (
        <animated.div style={styles}>
         {item ? <LoginForm/> : <RegisterForm/> }
        </animated.div>
      ))}
    </div>
  )
}
export default Auth

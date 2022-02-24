import Image from "next/image"
import React from "react"
import { useRouter } from "next/router"
import main from "../../src/assets/images/main.png"
import LoginForm from "../../src/components/auth/LoginForm"
import RegisterForm from "../../src/components/auth/RegisterForm"
import { useTransition, animated } from "@react-spring/web"
import useUnscroll from "../../src/utility/hooks/useUnscroll"

export const Auth = () => {
  const router = useRouter()
  useUnscroll(true)
  const { state } = router.query
  const transitions = useTransition(state, {
    from: { opacity: 0, transform: "translate(-100vw, 0vh)" },
    enter: { opacity: 1, transform: "translate(0vw, 50vh)" },
    leave: { opacity: 0, transform: "translate(200vw, 0vh)" }
  })

  return (
    <div className="position-absolute start-0 end-0 top-0">
      <div className={"absolute-bg"}>
        <Image
          layout="responsive"
          className=""
          objectFit="cover"
          src={main}
          sizes="100%"
          alt="main"
        />
      </div>
      {transitions((styles, item) => (
        <animated.div style={styles}>
          {item === 'login' ? <LoginForm /> : <RegisterForm />}
        </animated.div>
      ))}
    </div>
  )
}
export default Auth

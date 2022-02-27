import React from "react"
import { useTransition, animated } from "@react-spring/web"

const FadeTransition = (props: { children: React.ReactNode; state: any }) => {
  const { state, children } = props
  const transitions = useTransition(state, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  })
  return transitions((styles, item) => (
    <animated.div style={styles}>{children}</animated.div>
  ))
}

export default FadeTransition

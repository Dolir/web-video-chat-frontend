import React, { FunctionComponent, ReactNode, useEffect, useState } from "react"
import Router, { useRouter } from "next/router"
import { isLoggedIn, isAccessTokenValid } from "../../utility"

const withAuth = (Component: FunctionComponent<any>) => {
  const AuthenticatedComponent = (props: any) => {
    const router = useRouter()
    const [show, setShow] = useState(false)
    const checkUserAuthentication = () => {
      return isLoggedIn() && isAccessTokenValid()
    }
    useEffect(() => {
      if (!checkUserAuthentication()) router.push("/auth/login")
      else {
        setShow(true)
      }
      
    }, [])

    return show ? <Component {...props}/> : <></> 
  }

  return AuthenticatedComponent
}
export default withAuth
// import React from "react"
// import Router from "next/router"
// import {isLoggedIn, isAccessTokenValid} from '../../utility'
// const login = "/auth/login" // Define your login route address.

// const checkUserAuthentication = () => {
//   return { auth: isLoggedIn() && isAccessTokenValid() } // change null to { isAdmin: true } for test it.
// }
// interface IWrappedComponent extends React.FunctionComponent<any> {
//   getInitialProps?: Function
// }

// const withAuth = (WrappedComponent: IWrappedComponent) => {
//   const hocComponent = ({ ...props }) => <WrappedComponent {...props} />

//   hocComponent.getInitialProps = async (context: {
//     res: {
//       writeHead: (arg0: number, arg1: { Location: string }) => void
//       end: () => void
//     }
//   }) => {
//     const userAuth = await checkUserAuthentication()

//     // Are you an authorized user or not?
//     if (!userAuth?.auth) {
//       // Handle server-side and client-side rendering.
//       if (context.res) {
//         context.res?.writeHead(302, {
//           Location: login
//         })
//         context.res?.end()
//       } else {
//         Router.replace(login)
//       }
//     } else if (WrappedComponent.getInitialProps) {
//       const wrappedProps = await WrappedComponent.getInitialProps({
//         ...context,
//         auth: userAuth
//       })
//       return { ...wrappedProps, userAuth }
//     }

//     return { userAuth }
//   }

//   return hocComponent
// }
// export default withAuth

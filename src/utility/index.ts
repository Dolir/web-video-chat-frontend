import jwtDecode from "jwt-decode"
export const isLoggedIn = () => {
  if (localStorage.getItem("access")) return true
  return false
}
export const isAccessTokenValid = () => {
  const token = localStorage.getItem("access")
  if (!token) return false
  // const jwtToken: { exp: number } = jwtDecode(token)
  // if (jwtToken.exp * 1000 < Date.now()) return false
  return true
}

export const validatePassword = (password: string) => {
   if (!password) return 'Invalid password'
   if (password.length < 8) return 'Password should be at least 8 characters'
   return false
}
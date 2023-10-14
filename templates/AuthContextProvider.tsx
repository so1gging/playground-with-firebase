import { createContext, PropsWithChildren, useContext, useState } from 'react'
import { User } from '@/libs/types/User'

type AuthContextType = {
  user: User | null
  isLogin: boolean
  login: (user: User) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLogin, setIsLogin] = useState(false)
  const login = (loginUser: User) => {
    setUser(loginUser)
    setIsLogin(true)
  }

  const logout = () => {
    setUser(null)
    setIsLogin(false)
  }

  return <AuthContext.Provider value={{ user, isLogin, login, logout }}>{children}</AuthContext.Provider>
}

const useAuthContext = () => {
  return useContext(AuthContext)
}

export { useAuthContext }

export default AuthContextProvider

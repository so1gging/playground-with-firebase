import { createContext, PropsWithChildren, useContext, useRef, useState } from 'react'
import { User } from '@/libs/types/User'
import { GoogleAuthProvider } from '@firebase/auth'

type AuthContextType = {
  user: User | null
  authProvider: GoogleAuthProvider
  isLogin: boolean
  login: (user: User) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const authProvider = useRef(new GoogleAuthProvider())
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

  return (
    <AuthContext.Provider value={{ user, isLogin, authProvider: authProvider.current, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuthContext = () => {
  return useContext(AuthContext)
}

export { useAuthContext }

export default AuthContextProvider

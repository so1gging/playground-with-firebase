import { signInWithPopup } from '@firebase/auth'
import fireAuth from '@/firebase/fireAuth'
import { useAuthContext } from '@/templates/AuthContextProvider'

export default function Header() {
  const context = useAuthContext()
  const handleLogin = async () => {
    const { user } = await signInWithPopup(fireAuth, context!.authProvider) // 팝업창 띄워서 로그인
    context?.login({ name: user.displayName ?? 'no named', email: user.email ?? 'no email', loginTime: new Date() })
  }

  const handleLogout = () => {
    context?.logout()
  }

  return (
    <>
      <button onClick={context?.isLogin ? handleLogout : handleLogin}>
        {context?.isLogin ? '로그아웃' : '로그인'}
      </button>
    </>
  )
}

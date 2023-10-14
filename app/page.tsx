'use client'
import { doc, getDoc } from '@firebase/firestore'
import fireStore from '@/firebase/firestore'
import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth'
import fireAuth from '@/firebase/fireAuth'

export default function Home() {
  const onClickUpLoadButton = async () => {
    const query = await getDoc(doc(fireStore, '사용자', 'fDilP6RhwRBQnMosqrCe'))
    console.log(query.data())
  }

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider() // provider 구글 설정
    const data = await signInWithPopup(fireAuth, provider) // 팝업창 띄워서 로그인

    console.log(data.user)
  }

  return (
    <main>
      <div>
        <button onClick={onClickUpLoadButton}>전송</button>
        <button onClick={handleLogin}>로그인</button>
      </div>
    </main>
  )
}

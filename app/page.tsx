'use client'
import { doc, getDoc } from '@firebase/firestore'
import fireStore from '@/firebase/firestore'

export default function Home() {
  const onClickUpLoadButton = async () => {
    const query = await getDoc(doc(fireStore, '사용자', 'fDilP6RhwRBQnMosqrCe'))
    console.log(query.data())
  }

  return (
    <main>
      <div>
        <button onClick={onClickUpLoadButton}>전송</button>
      </div>
    </main>
  )
}

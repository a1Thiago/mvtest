import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'

export default function Home() {

  const [t, setT] = useState(null)

  useEffect(() => {
    const api = fetch('./api/hello')
      .then(r => r.json())
      .then(rr => setT(rr))
  }, [])

  console.log(t)

  return (
    <div className={styles.container}>
      <h1>test</h1>
      <h2>{JSON.stringify(t) !== JSON.stringify({}) && t?.name[0]?.result?.id}</h2>
    </div>
  )
}

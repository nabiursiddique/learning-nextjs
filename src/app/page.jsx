"use client"

import Link from 'next/link';
import styles from './page.module.css'
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const navigate = (route) => {
    router.push(route)
  }
  return (
    <main>
      <h1>Home page</h1>
      <button onClick={() => navigate("/login")}>Go to Login </button>
      <br />
      <Link href={'/login'}>Go to login with link</Link>
      <br />
      <br />
      <button onClick={() => navigate('/about')}>Go to about</button>
      <Link href={'/about'}>Goto About</Link>
    </main>
  )
}

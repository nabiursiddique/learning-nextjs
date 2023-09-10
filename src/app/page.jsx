"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import profileImage from '../../public/vercel.svg'

export default function Home() {
  const router = useRouter();
  const navigate = (route) => {
    router.push(route)
  }
  console.log(profileImage);
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
      <br />
      <br />
      <hr />
      <button onClick={() => navigate('/productlist')}>Product Page</button>
      <br />
      <hr />
      <button onClick={() => navigate('/productlistserver')}>Product Page server</button>
      <br />
      <Image
        src={profileImage}
        alt='profile'
      />

    </main>
  )
}

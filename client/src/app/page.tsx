import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1>Hello World</h1>
      <p>More content</p>
      <div className="w-full h-screen bg-green-300"></div>
      <p>More content 2</p>
    </div>

    /*<main><h1>Hello World</h1>
    <Link href="/users">Users</Link>
    </main>*/
  )
}

//https://youtu.be/ZVnjOPwW4ZA?si=1z_f9LhXTXvRGNex&t=1145
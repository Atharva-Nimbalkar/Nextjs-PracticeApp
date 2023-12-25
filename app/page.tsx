import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

//we have to router in next js app router and general router
//we want to rerender only spefic part so insetead anchor tag use use Link componenet
// server components cann't have interactivity
//all componets inside app folder are server components
//page router doesn't support server components so move forward n use app router
// whenever u fetch data,fetch it in server componenets
export default function Home() {
  return (
    <main>
    <h1>Hello world</h1>
    <Link href="/users">Users</Link>
    <ProductCard/>
    </main>
  )
}

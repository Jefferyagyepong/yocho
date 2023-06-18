
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Content1 from '../components/Content1'
import Links from '../components/Links'
import Cho from '../components/Cho'
import Location from '../components/Location'

import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })





export default function Home() {
  return (
    <>
      <Head>
        <title>Yo! Cho</title>
           <meta property="og:title" content="Restaurant" />
<meta property="og:type" content="" />
<meta property="og:url" content="https://jjefferyagyepong.com"/>
<meta property="og:image" content="" />
             
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Jeffery Agyepong" />
        <meta name="description" content="Designer, Front-end Developer, Website development Agency" />
         <meta
      name="keywords"
      content="Restaurant, order food online, Ghanaian dishes, beverage "
    />
     
     
    
      </Head>
      <main>
        <Header />
        <Content1 />
        <Links />
        <Cho />
        <Location/>
        
        <Footer />
    
        
      </main>
    </>
  )
}

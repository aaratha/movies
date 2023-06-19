import Image from 'next/image'
import { Movie_window } from '../components/movie-window';
import { Info_window } from '../components/info-window';
import { AI } from '../components/ai';
import { Header } from '../components/header';
import Head from 'next/head';

export default function Home() {
  return (
    <main className=" m-3 p-[2px] rounded-xl bg-co2 bg-gradient-to-r from-co2 to-grad border-co2  flex flex-col items-center justify-between">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&display=swap" rel="stylesheet" />
      </Head>
      <div className='glow-in p-3 rounded-xl bg-co1'>
        <Header className='flex' />
        <div className='flex flex-row'>
            <Info_window className='flex'/>
            <AI className='' />
            <Movie_window className='' />
        </div>
      </div>
    </main>
  )
}

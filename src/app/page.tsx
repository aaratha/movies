import Image from 'next/image'
import { Movie_window } from '../components/movie-window';
import { Info_window } from '../components/info-window';
import { AI } from '../components/ai';
import { Header } from '../components/header';
import Head from 'next/head';

export default function Home() {
  return (
    <main className="bg-co1 w-[100%] h-screen p-[0px] flex flex-col items-center justify-between">
      <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7106001278051966"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&display=swap" rel="stylesheet" />
      </Head>
      <div className='h-screen p-4 bg-co1'>
        <Header className='flex' />
        <div className='flex flex-row'>
            <Info_window className='flex'/>
            <AI className='' />
            <Movie_window className='' />
        </div>
        <p className='text-sm pl-3 pt-1'>Movie information provided by The Movie Database</p>
      </div>
    </main>
  )
}

import Image from 'next/image'
import { Movie_window } from '../components/movie-window';
import { Info_window } from '../components/info-window';
import { AI } from '../components/ai';
import { Header } from '../components/header';

export default function Home() {
  return (
    <main className=" glow-in p-2 rounded-xl border border-co2 bg-co1 m-3 flex flex-col items-center justify-between">
      <Header className='flex' />
      <div className='flex flex-row'>
          <div className='flex flex-col'>
              <Info_window />
              <AI className='' />
          </div>
          <Movie_window className='' />
      </div>
    </main>
  )
}

import Image from 'next/image'
import { Movie_window } from '../components/movie-window';
import { Info_window } from '../components/info-window';
import { AI } from '../components/ai';
import { Header } from '../components/header';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header className='flex' />
      <div className=''>
          <div className=''>
              <Info_window />
              <AI className='' />
          </div>
          <Movie_window className='' />
      </div>
    </main>
  )
}

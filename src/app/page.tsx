import Image from 'next/image'
import { Movie_window } from '../components/movie-window';
import { Info_window } from '../components/info-window';
import { AI } from '../components/ai';
import { Header } from '../components/header';
import Head from 'next/head';


export default function Home() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzgxNjU1NmEzMjlmMzA2ODU3NzJiYjQ1MDIyMjg1OSIsInN1YiI6IjY0OTFmYzg2NTU5ZDIyMDBmZjEyYjRmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FyyaenNgZngm1RrcfvJEqT7FNF7bZzXNED5la_nq-Wg'
    }
  };
  const terms = 'uncle%20boonmee'
  fetch('https://api.themoviedb.org/3/search/movie?query=' + terms + '&include_adult=false&language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

  return (
    <main className="bg-gradient-to-b from-bg1 to-bg2 w-[100%] p-6 pb-1 flex flex-col items-center justify-between">
      <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7106001278051966"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&display=swap" rel="stylesheet" />
      </Head>
      <div className=' h-full '>
        <Header className='flex' />
        <div className='flex lg:h-[88vh] flex-col lg:flex-row'>        
            <Info_window className='flex'/>
            <AI className='' />
            <Movie_window className='' />
        </div>
      </div>
      <p className='text-sm pl-1 pt-1'>Movie information provided by The Movie Database</p>
    </main>
  )
}

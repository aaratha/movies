'use client';

import Image from 'next/image'
import { Movie_window } from '../components/movie-window';
import { Info_window } from '../components/info-window';
import { AI } from '../components/ai';
import { Header } from '../components/header';
import Head from 'next/head';
import { Roboto } from 'next/font/google';
import { useState } from 'react';

const roboto = Roboto({
  weight: ['300', '400', '500'],
  style: ['normal'],
  subsets: ['latin-ext'],
  variable: '--font-roboto',
});

export default function Home() {
  const [terms, setTerms] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const handleSearch = (inputValue: string) => {
    setTerms(inputValue);
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzgxNjU1NmEzMjlmMzA2ODU3NzJiYjQ1MDIyMjg1OSIsInN1YiI6IjY0OTFmYzg2NTU5ZDIyMDBmZjEyYjRmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FyyaenNgZngm1RrcfvJEqT7FNF7bZzXNED5la_nq-Wg'
      }
    };
    fetch('https://api.themoviedb.org/3/search/movie?query=' + terms + '&include_adult=false&language=en-US&page=1', options)
      .then(response => response.json())
      .then(response => {
        const topResults = response.results.slice(0, 5).map((result: any) => result.title);
        console.log(topResults); // Log topResults to the console
        setSearchResults(topResults);
      })
      .catch(err => console.error(err));
  };

  return (
    <main className={'${inter.variable} font-sans h-screen bg-gradient-to-b from-bg1 to-bg2 w-[100%] p-6 pb-1 flex flex-col items-center justify-between'}>
      <div className=' h-full '>
        <Header onSearch={handleSearch} className='flex' />
        <div className='flex lg:h-[87.2vh] flex-col lg:flex-row'>        
            <Info_window className='flex'/>
            <AI className='' />
            <Movie_window className='' />
        </div>
      </div>
      <p className='text-sm pl-1 pt-1'>Movie information provided by The Movie Database</p>
    </main>
  )
}

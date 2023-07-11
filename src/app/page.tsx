'use client';

import Image from 'next/image'
import { Movie_window } from '../components/movie-window';
import { Info_window } from '../components/info-window';
import { AI } from '../components/ai';
import { Header } from '../components/header';
import Head from 'next/head';
import { Roboto } from 'next/font/google';
import { SetStateAction, useState } from 'react';

const roboto = Roboto({
  weight: ['300', '400', '500'],
  style: ['normal'],
  subsets: ['latin-ext'],
  variable: '--font-roboto',
});

export default function Home() {
  return (
    <main className={'${inter.variable} font-sans h-screen bg-gradient-to-b from-bg1 to-bg2 w-[100%] p-3 pb-1 flex flex-col items-center justify-between'}>
      <div className=' h-full '>
        <Header />
        <div className='flex lg:h-[87.2vh] flex-col lg:flex-row'>        
            <Info_window className='flex' selectedMovieID={0}/>
            <AI className='' />
            <Movie_window className='' />
        </div>
      </div>
      <p className='text-sm pl-1 pt-1'>Movie information provided by The Movie Database</p>
    </main>
  )
}

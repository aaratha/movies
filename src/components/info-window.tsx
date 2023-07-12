import classNames from 'classnames';
import React from 'react';
import { useEffect, useState } from 'react';

export interface Info_windowProps {
    className?: string;
    selectedMovieID: number;
    movieDescription?: string;
}

/* One morning, Jessica Holland, a Scottish orchid farmer visiting her sister in Bogotá, is woken by a loud ‘bang’. This haunting sound dispels her sleep for days, calling into question her identity and guiding her from recording studios to secluded jungle villages in an attempt to find its source. */

export const Info_window = ({ className, selectedMovieID }: Info_windowProps) => {
    const [movieDescription, setMovieDescription] = useState<string>('');
    const [isDescriptionLoaded, setIsDescriptionLoaded] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
          const fetchMovieDescription = async () => {
            if (selectedMovieID && selectedMovieID !== 0) {
              console.log('Fetching movie description for movie ID:', selectedMovieID);
              const response = await fetch(`https://api.themoviedb.org/3/movie/${selectedMovieID}?api_key=87816556a329f30685772bb450222859`);
              const data = await response.json();
              if (typeof data.overview !== 'undefined' && data.overview.length > 2) {
                setMovieDescription(data.overview);
                setIsDescriptionLoaded(true);
              }
            }
          };
    
          fetchMovieDescription();
        }
      }, [selectedMovieID]);

    useEffect(() => {
        console.log('Movie description:', movieDescription);
    }, [movieDescription]);

    console.log('Info_window component re-rendered');


    return (
        <div className='justify-between flex flex-col h-full p-3 bg-co1  rounded-lgmt-3 lg:w-[42.86%] mt-3 rounded-lg '>
            <div>
                <h1 className=' bg-gradient-to-r from-co2 to-grad text-black font-bold rounded-lg p-2 pl-4 text-center mb-4 text-lg'>Memoria (2021)</h1>
                <p className=' text-slate-300'>Apichatpong Weerasethakul</p>
                <p className='pb-2 italic text-slate-400 text-sm'> Director, Writer</p>
                {isDescriptionLoaded ? (
                    <p>{movieDescription}</p>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <div className='mt-4'>
                <h1 className=' w-14 rounded-t-lg text-center text-black bg-co2'>Cast</h1>
                <div className=' rounded-lg rounded-tl-none bg-gradient-to-r from-co2 to-grad p-[2px]'>
                    <div className=' overflow-x-scroll overflow-y-hidden nu-in scrollbar-none rounded-lg p-3 bg-slate-700 bg-opacity-50 flex flex-row'>
                        <div className='p-2 mr-2 rounded-lg border-gray-200 border hover:bg-gray-200 transition-all hover:text-black'>placeholder</div>
                        <div className='p-2 mr-2 rounded-lg border-gray-200 border hover:bg-gray-200 transition-all hover:text-black'>placeholder</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

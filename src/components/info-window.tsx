import classNames from 'classnames';
import React from 'react';

export interface Info_windowProps {
    className?: string;
}



const username = 'MEMBER_USERNAME';
const apiKey = 'YOUR_API_KEY';

const url = `https://api.letterboxd.com/api/v0/user/${username}/watchlist?api_key=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

export const Info_window = ({ className }: Info_windowProps) => {
    return (
        <div className='mt-6 nu lg:w-[42.86%] p-[2px] bg-gradient-to-r from-co2 to-grad rounded-lg justify-between flex-col flex'>
            <div className=' justify-between flex flex-col h-full p-4 bg-gradient-to-b from-bg2 to-gray-900 rounded-lg'>
                <div>
                    <h1 className='nu bg-gradient-to-r from-co2 to-grad text-black rounded-lg p-2 pl-4 text-center mb-4 text-lg'>The Hourglass Sanitorium</h1>
                    <p className='pb-2 italic text-slate-300'>1973 ‘Sanatorium pod klepsydrą’ Directed by Wojciech Has</p>
                    <p>
                        A young man named Josef visits a dilapidated Sanatorium to see his father Jakob. On
                        his arrival, a sinister doctor informs him that his father had stopped breathing but
                        hasn’t died yet, perhaps due to Josef’s arrival which may have halted time in the
                        sanatorium. Josef undertakes a strange journey through the many rooms of the
                        sanatorium, each which conjures worlds composed of his memories, dreams and
                        nightmares.
                    </p>
                </div>
                <div className='mt-4'>
                    <h1 className=' w-14 rounded-t-lg text-center text-black bg-co2'>Cast</h1>
                    <div className='rounded-lg rounded-tl-none bg-gradient-to-r from-co2 to-grad p-[2px]'>
                        <div className='rounded-lg p-3 nu-in bg-bg2 flex flex-row '>
                            <div className='p-2 mr-2 rounded-lg border-gray-200 border hover:bg-gray-200 transition-all hover:text-black'>placeholder</div>
                            <div className='p-2 mr-2 rounded-lg border-gray-200 border hover:bg-gray-200 transition-all hover:text-black'>placeholder</div>
                            <div className='p-2 mr-2 rounded-lg border-gray-200 border hover:bg-gray-200 transition-all hover:text-black'>placeholder</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

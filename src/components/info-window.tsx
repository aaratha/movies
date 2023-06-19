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
        <div className='w-2/5 p-[2px] bg-gradient-to-r from-co2 to-grad rounded-lg mt-4'>
            <div className='flex flex-col h-full p-4 bg-co1 rounded-lg'>
                <h1 className=''>The Hourglass Sanitorium</h1>
                <p>1973 ‘Sanatorium pod klepsydrą’ Directed by Wojciech Has</p>
                <p>
                    A young man named Josef visits a dilapidated Sanatorium to see his father Jakob. On
                    his arrival, a sinister doctor informs him that his father had stopped breathing but
                    hasn’t died yet, perhaps due to Josef’s arrival which may have halted time in the
                    sanatorium. Josef undertakes a strange journey through the many rooms of the
                    sanatorium, each which conjures worlds composed of his memories, dreams and
                    nightmares.
                </p>
            </div>
        </div>
    );
};

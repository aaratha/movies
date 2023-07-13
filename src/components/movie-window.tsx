import classNames from 'classnames';
import React from 'react';
import Image from 'next/image';
import img from './images/19573-the-hourglass-sanatorium-0-500-0-750-crop.jpg'

export interface Movie_windowProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Movie_window = ({ className }: Movie_windowProps) => {
    return (
        <div className=' relative lg:w-[14.28%] p-[0px] bg-gradient-to-r from-co2 to-grad rounded-lg mt-3 flex h-full flex-col'>
            <h1 className='ml-1 p-3 text-center text-black font-bold'>Similar Movies</h1>
            <div className=' relative scrollbar-none flex overflow-scroll lg:h-full flex-row lg:flex-col p-4 bg-gradient-to-b from-co1 to-co12  rounded-none rounded-b-lg lg:w-auto'>
                <Image
                    src={img}
                    className=' lg:w-[90%] mr-4 lg:mr-auto lg:h-[90%] w-28 h-28 but m-auto mb-4 mt-3 hover:scale-[94%] rounded-lg hover:rounded-none'
                    alt="The Hourglass Sanatorium movie poster"
                />
                <Image
                    src={img}
                    className='lg:w-[90%] mr-4 lg:mr-auto lg:h-[90%] w-28 h-28 but m-auto mb-4 mt-3 hover:scale-[94%] rounded-lg hover:rounded-none'
                    alt="The Hourglass Sanatorium movie poster"
                />
                <Image
                    src={img}
                    className='lg:w-[90%] mr-4 lg:mr-auto lg:h-[90%] w-28 h-28 but m-auto mb-4 mt-3 hover:scale-[94%] rounded-lg hover:rounded-none'
                    alt="The Hourglass Sanatorium movie poster"
                />
                <Image
                    src={img}
                    className='lg:w-[90%] mr-4 lg:mr-auto lg:h-[90%] w-28 h-28 but m-auto mb-4 mt-3 hover:scale-[94%] rounded-lg hover:rounded-none'
                    alt="The Hourglass Sanatorium movie poster"
                />
                <Image
                    src={img}
                    className='lg:w-[90%] mr-4 lg:mr-auto lg:h-[90%] w-28 h-28 but m-auto mb-4 mt-3 hover:scale-[94%] rounded-lg hover:rounded-none'
                    alt="The Hourglass Sanatorium movie poster"
                />
                <div className='h-[10vh] w-full sticky bottom-0 left-0 bg-gradient-to-t from-co1 to-transparent'></div>
            </div>
        </div>
    );
};

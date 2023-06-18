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
        <div className='w-1/5  p-[2px] bg-gradient-to-r from-co2 to-grad rounded-xl mt-3 mr-1'>
            <div className='flex flex-col h-full p-4 bg-co1 rounded-xl'>
                <Image
                    src={img}
                    className=''
                    alt="The Hourglass Sanatorium movie poster"
                />
                <Image
                    src={img}
                    className=''
                    alt="The Hourglass Sanatorium movie poster"
                />
                <Image
                    src={img}
                    className=''
                    alt="The Hourglass Sanatorium movie poster"
                />
            </div>
        </div>
    );
};

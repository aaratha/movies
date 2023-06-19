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
        <div className='glow-out w-1/5   p-[2px] bg-gradient-to-r from-co2 to-grad rounded-xl mt-3'>
            <div className='glow-in flex overflow-scroll h-[85.2vh] flex-col p-4 bg-co1 rounded-xl'>
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

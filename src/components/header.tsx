import React from 'react';

export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header = ({ className }: HeaderProps) => {
    return (
        <div className=' rounded-lg p-[2px] bg-gradient-to-r from-co2 to-grad flex flex-row justify-between items-center' style={{ width: '100%' }}>
            <div className='rounded-lg p-2 bg-co1 flex flex-row justify-between pl-5 pr-3 items-center' style={{ width: '100%' }}>
                <h1 className=''>
                    Cinebrief
                </h1>
                <div className='flex flex-row'>
                    <div className='flex bg-gradient-to-r from-co2 mr-3 to-grad rounded-full'>
                        <input type='text' className=' placeholder-black placeholder-opacity-50 bg-gradient-to-r from-co2 to-grad pl-3 m-[2px] w-[25vw] min-w-[150px] rounded-full p-1' placeholder='Enter Movie Title' />
                    </div>
                    <button className='w-20 hover:border-grad glow-out bg-gradient-to-r from-co2 to-grad rounded-full p-1 pl-2 pr-2 hover:shadow-none transition-all  hover:scale-95'>Submit</button>
                </div>
                <button className='w-20 glow-out bg-gradient-to-r from-co2 to-grad rounded-full p-1 pl-2 pr-2 hover:shadow-none transition-all hover hover:scale-95'>Info</button>
            </div>
        </div>
    );
};
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
        <div className='nu rounded-lg p-[2px] bg-gradient-to-r from-co2 to-grad flex flex-row justify-between items-center' style={{ width: '100%' }}>
            <div className=' rounded-lg p-2 bg-co1 flex flex-row justify-between pl-5 pr-3 items-center' style={{ width: '100%' }}>
                <h1 className=' text-2xl'>
                    Cinebrief
                </h1>
                <div className='flex flex-row'>
                    <div className='flex bg-gradient-to-r from-co2 mr-3 to-grad rounded-full'>
                        <input type='text' className='relative placeholder-black placeholder-opacity-50 bg-gradient-to-r from-co2 to-grad pl-4 m-[2px] w-[30vw] min-w-[150px] rounded-full p-1 z-10' placeholder='Enter movie title...' />
                        {/*<div className='absolute mt-5 w-[30.33vw] min-w-[150px] pt-7 p-4 bg-gradient-to-r from-co2 to-grad rounded-br-lg rounded-bl-lg z-1 text-black '>
                            <ul>
                                <li>asdjahsfu asjfhsjf</li>
                                <li>bfjasfn asfj</li>
                                <li>cfasjf ajsfnasfna</li>
                                <li>dasjf</li>
                            </ul>
                        </div>*/}
                    </div>
                    <button className='but w-20 bg-gradient-to-r from-co2 to-grad rounded-full p-1 pl-2 pr-2 transition-all hover:scale-95 hover:bg-yellow'>Submit</button>
                </div>
                <button className='but w-20 bg-gradient-to-r from-co2 to-grad rounded-full p-1 pl-2 pr-2 transition-all hover hover:scale-95'>Info</button>
            </div>
        </div>
    );
};
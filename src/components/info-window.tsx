import classNames from 'classnames';
import React from 'react';

export interface Info_windowProps {
    className?: string;
}

export const Info_window = ({ className }: Info_windowProps) => {
    return (
        <div className='mt-6 nu lg:w-[42.86%] p-[2px] bg-gradient-to-r from-co2 to-grad rounded-lg justify-between flex-col flex'>
            <div className=' justify-between flex flex-col h-full p-4 bg-gradient-to-b from-bg2 to-gray-900 rounded-lg'>
                <div>
                    <h1 className='nu bg-gradient-to-r from-co2 to-grad text-black font-bold rounded-lg p-2 pl-4 text-center mb-4 text-lg'>Memoria (2021)</h1>
                    <p className=' text-slate-300'>Apichatpong Weerasethakul</p>
                    <p className='pb-2 italic text-slate-400 text-sm'> Director, Writer</p>
                    <p className='font-mono'>
                        One morning, Jessica Holland, a Scottish orchid farmer visiting her sister in Bogotá, is woken by a loud ‘bang’. This haunting sound dispels her sleep for days, calling into question her identity and guiding her from recording studios to secluded jungle villages in an attempt to find its source.
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

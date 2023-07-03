import React from 'react';

export interface AIProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const AI = ({ className }: AIProps) => {
    return (
        <div className='nu xl:w-[42.86%] p-[2px] bg-gradient-to-r from-co2 to-grad rounded-lg xl:ml-4 mt-4 xl:mr-4'>
            <div className=' flex flex-col h-full  rounded-lg'>
                <div className='justify-between nestflex flex flex-row pl-4 pr-4 p-1 rounded-xl items-center'>
                    <h1 className='ml-1 text-black font-bold'>AI:</h1>
                    <div>
                        <button className='but2 scale-93 hover:pl-3 hover:pr-3 transition-all text-black border-black ml-1 p-1 rounded-full border-2 hover:border-opacity-0'>Convincing</button>
                        <button className='but2 ml-2 p-1 pl-2 pr-2 scale-93 rounded-full border-2 text-black border-black hover:border-opacity-0'>Academic</button>
                        <button className='but2 ml-2 mr-1 p-1 pl-2 pr-2 scale-93 rounded-full border-2 text-black border-black hover:border-opacity-0'>Background</button>
                    </div>
                </div>
                <div className=' mt-[2px] p-4 h-full bg-co1 rounded-lg'>
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
        </div>
    );
};

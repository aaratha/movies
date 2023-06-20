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
        <div className=' w-2/5 p-[2px] bg-gradient-to-r from-co2 to-grad rounded-lg ml-4 mt-4 mr-4'>
            <div className=' flex flex-col h-full  rounded-lg'>
                <div className='justify-between nestflex flex flex-row pl-4 pr-4 p-1 rounded-xl items-center'>
                    <h1 className='ml-3 text-black font-bold'>AI:</h1>
                    <button className='scale-90 hover:scale-[80%] transition-all text-black border-black ml-1 p-1 pl-2 pr-2 rounded-full border-2'>Convincing</button>
                    <button className='ml-1 p-1 pl-2 pr-2 scale-90 hover:scale-[80%] rounded-full border-2 text-black border-black transition-all'>Academic</button>
                    <button className='ml-1 mr-3 p-1 pl-2 pr-2 scale-90 hover:scale-[80%] rounded-full border-2 text-black border-black transition-all'>Background</button>
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

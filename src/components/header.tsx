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
        <div className='glow-out rounded-full border p-1.5 border-co2 flex flex-row justify-between pl-4 pr-2 items-center' style={{ width: '100%' }}>
            <h1 className=''>
                Boxd Picker
            </h1>
            <div className=''>
                <input className='w-[25vw] min-w-[150px] mr-3 rounded-full p-1' />
                <button className='border glow-in border-co2 rounded-full p-1 pl-2 pr-2 hover:shadow-none transition-all hover:scale-95'>Submit</button>
            </div>
            <button className='border glow-in border-co2 rounded-full p-1 pl-2 pr-2 hover:shadow-none transition-all hover hover:scale-95'>Login</button>
        </div>
    );
};
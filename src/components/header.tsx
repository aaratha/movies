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
        <div className='flex flex-row w-screen justify-between m-auto'>
            <h1 className=''>
              Boxd Picker
              <div className=''>
                  <input className='' />
                  <button className=''>Submit</button>
              </div>
            </h1>
        </div>
    );
};
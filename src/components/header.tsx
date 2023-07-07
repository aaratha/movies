"use client";

import React from 'react';
import { useState } from 'react';
import InfoIcon from './info.svg';

export interface HeaderProps {
    onSearch: (inputValue: string) => void;
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header: React.FC<HeaderProps> = ({ onSearch, className }) => {
    const [inputValue, setInputValue] = useState('');
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [searchResults, setSearchResults] = useState<string[]>([]);

    const handleInputFocus = () => {
        setIsInputFocused(true);
    };

    const handleInputBlur = () => {
        setIsInputFocused(false);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(inputValue); // Call onSearch function with input value
      };
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
      };
    
    return (
        <div className='nu rounded-lg p-[2px] bg-gradient-to-r from-co2 to-grad flex flex-row justify-between items-center' style={{ width: '100%' }}>
            <div className=' rounded-lg p-2 bg-gradient-to-r from-bg2 to-gray-900 flex flex-row justify-between pl-4 pr-3 items-center' style={{ width: '100%' }}>
                <h1 className='text-lg lg:text-2xl'>
                    Cinebrief
                </h1>
                <div className='flex flex-row'>
                    <form className='flex flex-row' onSubmit={handleSubmit}>
                        <div className='flex bg-gradient-to-r from-co2 mr-3 to-grad rounded-full'>
                            <input type='text' value={inputValue} onChange={handleChange} className='relative placeholder-black placeholder-opacity-50 bg-gradient-to-r from-co2 to-grad pl-1 m-[2px] w-[30vw] min-w-[150px] rounded-full p-1 z-10' placeholder='Enter movie title...' onFocus={handleInputFocus} onBlur={handleInputBlur} />
                            {isInputFocused && (
                                <div className={`inputshadow absolute mt-5 w-[30.33vw] min-w-[150px] pt-7 p-4 bg-gradient-to-r from-co2 to-grad rounded-br-lg rounded-bl-lg z-1 text-black`}>
                                <ul className='text-black'>
                                    {searchResults.map((result, index) => (
                                    <li key={index}>{result}</li>
                                    ))}
                                </ul>
                                </div>
                            )}
                        </div>
                        <button type='submit' className='w-9 h-9 but bg-gradient-to-r from-co2 to-grad rounded-full p-1 pl-2 pr-2 transition-all hover:scale-95 hover:bg-yellow'>
                            <svg className='' fill="#000000" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g>
                                        <path d="M480,0H32C14.328,0,0,14.328,0,32v64c0,17.672,14.328,32,32,32s32-14.328,32-32V64h384v384H64v-32 c0-17.672-14.328-32-32-32S0,398.328,0,416v64c0,17.672,14.328,32,32,32h448c17.672,0,32-14.328,32-32V32 C512,14.328,497.672,0,480,0z"></path>
                                        <path d="M240.906,348.211C245.625,350.742,250.828,352,256,352c6.203,0,12.391-1.805,17.75-5.375l96-64 C378.656,276.688,384,266.703,384,256s-5.344-20.688-14.25-26.625l-96-64c-9.828-6.555-22.484-7.156-32.844-1.586 C230.5,169.352,224,180.195,224,192v32H32c-17.672,0-32,14.328-32,32s14.328,32,32,32h192v32 C224,331.805,230.5,342.648,240.906,348.211z"></path>
                                    </g>
                                </g>
                            </svg>
                        </button>
                    </form>
                    {isInputFocused && (
                        <ul>
                        {searchResults.map((result, index) => (
                            <li key={index}>{result}</li>
                        ))}
                        </ul>
                    )}
                </div>
                <button className='w-9 h-9 but bg-gradient-to-r from-co2 to-grad rounded-full p-1 transition-all hover hover:scale-95'><svg className='' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Warning / Info"> <path id="Vector" d="M12 11V16M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21ZM12.0498 8V8.1L11.9502 8.1002V8H12.0498Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg> </button>
                
                
            </div>
        </div>
    );
};

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
            <div className=' rounded-lg p-2 bg-gradient-to-r from-bg2 to-gray-900 flex flex-row justify-between pl-5 pr-3 items-center' style={{ width: '100%' }}>
                <h1 className=' text-2xl'>
                    Cinebrief
                </h1>
                <div className='flex flex-row'>
                    <form className='flex flex-row' onSubmit={handleSubmit}>
                        <div className='flex bg-gradient-to-r from-co2 mr-3 to-grad rounded-full'>
                            <input type='text' value={inputValue} onChange={handleChange} className='relative placeholder-black placeholder-opacity-50 bg-gradient-to-r from-co2 to-grad pl-4 m-[2px] w-[30vw] min-w-[150px] rounded-full p-1 z-10' placeholder='Enter movie title...' onFocus={handleInputFocus} onBlur={handleInputBlur} />
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
                        <button type='submit' className='but w-20 bg-gradient-to-r from-co2 to-grad rounded-full p-1 pl-2 pr-2 transition-all hover:scale-95 hover:bg-yellow'>Submit</button>
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

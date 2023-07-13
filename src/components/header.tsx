"use client";
import React, { FormEvent } from 'react';
import { useState } from 'react';
import { Info_window } from './info-window';
import Image from 'next/image';
import logo from './Cine__1_-removebg-preview.png';

export interface HeaderProps {
}

export const Header = ({ }: HeaderProps) => { 
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);
    const API_KEY = '87816556a329f30685772bb450222859';

    const handleInputFocus = () => {
        setIsInputFocused(true);
    };

    const handleInputBlur = () => {
        setIsInputFocused(false);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
      };

    const [searchResults, setSearchResults] = useState<{ id: number; title: string }[]>([]);
    
    const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
          const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${inputValue}`);
          const data = await response.json();
          const results = data.results.map((result: { id: any; title: any; }) => ({
            id: result.id,
            title: result.title,
          }));
          setSearchResults(results);
        } catch (error) {
          console.error(error);
        }
      };

    const handleMovieClick = (id: number) => {
        console.log('Clicked movie ID:', id);
        setSelectedMovieId(id);
    };

    return (
        <div className='rounded-lg p-1 bg-gradient-to-r from-co1 to-co12 flex flex-row justify-between pl-4 pr-3 items-center' style={{ width: '100%' }}>
            <h1 className='text-lg lg:text-2xl'>
                <Image src={logo} alt={''} className=' w-28 h-12 '></Image>
            </h1>
            <div className='flex flex-row'>
                <form className='flex flex-row' onSubmit={handleSearch}>
                    <div className='flex bg-gradient-to-r from-co2 mr-3 to-grad rounded-full'>
                        <input 
                            type='text' 
                            value={inputValue} 
                            className='relative z-30 placeholder-black placeholder-opacity-50 bg-gradient-to-r from-co2 to-grad pl-3 m-[2px] w-[30vw] min-w-[150px] rounded-full p-1'
                            placeholder='Enter movie title...'
                            onFocus={handleInputFocus} 
                            onBlur={handleInputBlur} 
                            onChange={handleInputChange} 
                        />
                        {isInputFocused && (
                            <div className={`overflow-x-hidden  scrollbar-none h-40 z-20 overflow-scroll inputshadow absolute mt-5 w-[30vw] min-w-[150px] pt-7 p-4 bg-gradient-to-r from-co2 to-grad rounded-br-lg rounded-bl-lg z-1 text-black`} >
                            {searchResults.map((result) => (
                                <button className='text-black border' type="button" key={result.id} tabIndex={0} style={{ zIndex: 1 }} onMouseDown={(e) => e.preventDefault()} onClick={() => handleMovieClick(result.id)}>{result.title} {result.id}</button>
                            ))}
                            {selectedMovieId && (
                                <Info_window  selectedMovieID={selectedMovieId} />
                                )}
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
            </div>
            <button className='w-9 h-9 but bg-gradient-to-r from-co2 to-grad rounded-full p-1 transition-all hover hover:scale-95'><svg className='' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Warning / Info"> <path id="Vector" d="M12 11V16M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21ZM12.0498 8V8.1L11.9502 8.1002V8H12.0498Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg> </button>
            
            
        </div>
    );
};
function setTerms(inputValue: string) {
    throw new Error('Function not implemented.');
}

function setSearchResults(results: any) {
    throw new Error('Function not implemented.');
}

function setSelectedMovieId(id: number) {
    throw new Error('Function not implemented.');
}


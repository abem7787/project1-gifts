import React from 'react';
import { Person } from '../types';

interface GifterBoxProps {
  person: Person;
  onClick?: () => void;
}

export const GifterBox: React.FC<GifterBoxProps> = ({ person, onClick }) => {
  const [firstName, lastName] = person.name.split(' ');
  
  return (
    <div
      onClick={onClick}
      className={`bg-red-900 w-24 h-24 rounded-sm flex flex-col items-center justify-center text-white text-xs p-1
        ${onClick ? 'cursor-pointer hover:bg-red-800' : ''}
        ${person.isActive ? 'ring-2 ring-blue-400' : ''}`}
    >
      <div className="truncate w-full text-center font-semibold">{firstName}</div>
      <div className="truncate w-full text-center text-[10px] opacity-75">{lastName}</div>
      <div className="text-[10px] mt-1 opacity-75">{person.giftsReceived}/8</div>
    </div>
  );
};
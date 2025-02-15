import React from 'react';
import { Level, Person } from '../types';

interface LevelBoxProps {
  level: Level;
  person?: Person;
  onClick?: () => void;
}

const levelColors = {
  BEGINER: 'bg-orange-500 hover:bg-orange-600',
  APPRENTICE: 'bg-orange-500 hover:bg-orange-600',
  ADVANCED: 'bg-orange-500 hover:bg-orange-600',
  TEACHER: 'bg-orange-500 hover:bg-orange-600',
  MASTER: 'bg-orange-500 hover:bg-orange-600',
};

export const LevelBox: React.FC<LevelBoxProps> = ({ level, person, onClick }) => {
  const [firstName, lastName] = person?.name.split(' ') || [];

  return (
    <div
      onClick={onClick}
      className={`${levelColors[level]} text-white font-semibold px-6 py-3 rounded-sm w-40 text-center 
        ${onClick ? 'cursor-pointer' : ''} 
        ${person?.isActive ? 'ring-2 ring-blue-400' : ''}`}
    >
      <div className="text-lg">{level}</div>
      {person && (
        <div className="mt-2">
          <div className="font-bold">{firstName}</div>
          <div className="text-sm opacity-90">{lastName}</div>
          <div className="text-xs mt-1 opacity-75">
            Gifts: {person.giftsReceived}/8
          </div>
        </div>
      )}
    </div>
  );
};
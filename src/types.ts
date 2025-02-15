export type Level = 'BEGINER' | 'APPRENTICE' | 'ADVANCED' | 'TEACHER' | 'MASTER';

export interface Person {
  id: string;
  name: string;
  level: Level;
  giftsReceived: number;
  isActive?: boolean;
}

export interface Stage {
  level: Level;
  funders: Person[];
  gifters: Person[];
  receiver?: Person;
}

export interface GiftTransaction {
  from: string;
  to: string;
  timestamp: Date;
  level: Level;
}
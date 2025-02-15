import { Person, Level, Stage } from './types';

const createPerson = (id: string, name: string, level: Level): Person => ({
  id,
  name,
  level,
  giftsReceived: 0,
  isActive: false,
});

const names = [
  'Emma Thompson', 'James Wilson', 'Sophia Chen', 'William Davis', 'Olivia Brown',
  'Lucas Garcia', 'Isabella Martinez', 'Ethan Taylor', 'Ava Johnson', 'Noah Smith',
  'Mia Anderson', 'Alexander Lee', 'Charlotte White', 'Benjamin Moore', 'Amelia Jackson',
  'Daniel Kim', 'Harper Rodriguez', 'Matthew Wright', 'Elizabeth Clark', 'David Miller',
  'Victoria Scott', 'Joseph Young', 'Grace Turner', 'Christopher Hall', 'Sofia Patel',
  'Andrew Adams', 'Chloe Baker', 'Samuel Cooper', 'Zoe Phillips', 'Nathan Reed',
];

export const initialStages: Stage[] = [
  {
    level: 'BEGINER',
    funders: Array.from({ length: 8 }, (_, i) => 
      createPerson(`beginer-funder-${i}`, names[i], 'BEGINER')
    ),
    gifters: Array.from({ length: 20 }, (_, i) => 
      createPerson(`beginer-gifter-${i}`, names[i + 8], 'BEGINER')
    ),
    receiver: createPerson('beginer-receiver', 'Sarah Mitchell', 'BEGINER'),
  },
  {
    level: 'APPRENTICE',
    funders: Array.from({ length: 8 }, (_, i) => 
      createPerson(`apprentice-funder-${i}`, `${names[i + 10]} A.`, 'APPRENTICE')
    ),
    gifters: Array.from({ length: 15 }, (_, i) => 
      createPerson(`apprentice-gifter-${i}`, `${names[i + 15]} A.`, 'APPRENTICE')
    ),
    receiver: createPerson('apprentice-receiver', 'Michael Roberts A.', 'APPRENTICE'),
  },
  {
    level: 'ADVANCED',
    funders: Array.from({ length: 8 }, (_, i) => 
      createPerson(`advanced-funder-${i}`, `${names[i + 5]} Adv.`, 'ADVANCED')
    ),
    gifters: Array.from({ length: 12 }, (_, i) => 
      createPerson(`advanced-gifter-${i}`, `${names[i + 12]} Adv.`, 'ADVANCED')
    ),
    receiver: createPerson('advanced-receiver', 'Rachel Foster Adv.', 'ADVANCED'),
  },
  {
    level: 'TEACHER',
    funders: Array.from({ length: 8 }, (_, i) => 
      createPerson(`teacher-funder-${i}`, `${names[i + 3]} T.`, 'TEACHER')
    ),
    gifters: Array.from({ length: 10 }, (_, i) => 
      createPerson(`teacher-gifter-${i}`, `${names[i + 10]} T.`, 'TEACHER')
    ),
    receiver: createPerson('teacher-receiver', 'Jennifer Parker T.', 'TEACHER'),
  },
  {
    level: 'MASTER',
    funders: Array.from({ length: 8 }, (_, i) => 
      createPerson(`master-funder-${i}`, `${names[i]} M.`, 'MASTER')
    ),
    gifters: Array.from({ length: 8 }, (_, i) => 
      createPerson(`master-gifter-${i}`, `${names[i + 8]} M.`, 'MASTER')
    ),
    receiver: createPerson('master-receiver', 'Robert Wilson M.', 'MASTER'),
  },
];
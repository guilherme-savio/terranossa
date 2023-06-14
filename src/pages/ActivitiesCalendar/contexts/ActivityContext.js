import { createContext } from 'react';
import Activity from '../models/Activity';
import Person from '../models/Person';

const difficultyEnum = {
    EASY: 'Fácil',
    MODERATE: 'Moderado',
    HARD: 'Difícil',
};

const defaultActivities = [
    new Activity(
        'Colheita', 
        new Date('2023-05-30 10:00'), 
        new Date('2023-06-01 14:00'), 
        false,
        'Treviso', 
        difficultyEnum.HARD, 
        'Colher cuzin.',
        [
            new Person('John Doe', 28),
            new Person('Jane Smith', 34)
        ],
        new Person('Alice Brown', 30)),
    new Activity(
        'Plantação', 
        new Date('2023-06-14 10:00'), 
        new Date('2023-06-15 14:00'), 
        false,
        'Treviso', 
        difficultyEnum.MODERATE, 
        'Plantar cuzin.',
        [
            new Person('John Doe', 28)
        ],
        new Person('Alice Brown', 30))
];

const ActivityContext = createContext({
    activities: defaultActivities,
    setActivities: (activities) => {}
});

export default ActivityContext;
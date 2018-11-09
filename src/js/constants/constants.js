/**
 * project match-match-r-r
 */

export const MaxTime = 3600;

export const CardsFaces = [
    'Artist',
    'Bowery',
    'Boxing',
    'Chinese',
    'BigSword',
    'Boulevard',
    'ChineseSword',
    'Neopolitan',
    'Cotillion',
    'Hoboken',
    'Irish',
    'Mexican',
    'Mike',
    'Roman',
    'Russian',
    'Skater',
    'Tenor',
    'London',
];

export const CardsSkirts = [
    'lebkuchen',
    'nussknacker',
    'snowflake',
];

export const Levels = [
    'low',
    'medium',
    'high',
    'ultimate',
];

export const GameClasses = {
    low: 'three-to-two',
    medium: 'four-to-three',
    high: 'six-to-four',
    ultimate: 'nine-to-four',
};

export const LevelToNumber = {
    low: 3,
    medium: 6,
    high: 12,
    ultimate: 18,
};

export const Timeouts = {
    drawCard: 200,
    openCard: 500,
    hideCard: 600,
    timer: 1000,
};

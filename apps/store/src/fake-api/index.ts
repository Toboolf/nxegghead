const games = [
    {
        id: 'brew',
        name: 'Brew',
        image: '/assets/brew.png',
        description: 'Make potis',
        price: 45,
        rating: Math.random()
    },
    {
        id: 'hues-and-cues',
        name: 'Hues and Cues',
        image: '/assets/hues_and_cues.jpeg',
        description: 'Guess the color',
        price: 23,
        rating: Math.random()
    },
    {
        id: 'coup',
        name: 'Coup',
        image: '/assets/coup.jpg',
        description: 'Lie, kill and win',
        price: 35,
        rating: Math.random()
    },
];

export const getAllGames = () => games;
export const getGame = (id: string) => games.find((game) => game.id === id);
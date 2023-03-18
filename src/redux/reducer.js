import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from './actions'

const initialState = {
    myFavorites: [],
    allCharacters: []
}


const reducer = (state = initialState, action) => {
    const { allCharacters } = state;
    switch (action.type) {
        case ADD_FAVORITE:
            const newCharacter = action.payload;
            const isDuplicate = state.myFavorites.some(char => char.id === newCharacter.id);
            if (isDuplicate) {
                return state; // si ya existe el personaje, no hacemos nada
            } else {
                return {
                    ...state,
                    myFavorites: [...state.myFavorites, newCharacter],
                    allCharacters: [...state.allCharacters, newCharacter]
                };
            }

        case DELETE_FAVORITE:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(fav => fav.id !== action.payload),
                allCharacters: state.allCharacters.filter(char => char.id !== action.payload)
            }
            case FILTER:
            const filteredCharacters = allCharacters.filter(char => char.gender === action.payload)
            return {
                ...state,
                myFavorites: state.myFavorites.filter(fav => filteredCharacters.some(char => char.id === fav.id))
            }
        case ORDER:
            const sortedFavorites = [...state.myFavorites].sort((a, b) => {
                if (action.payload === 'Ascendente') {
                    return a.id - b.id;
                } else {
                    return b.id - a.id;
                }
            });
            return {
                ...state,
                myFavorites: sortedFavorites
            }
        default:
            return { ...state };
    }
}

export default reducer;
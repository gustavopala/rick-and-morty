export const  ADD_FAVORITE = 'ADD_FAVORITE';
export const  DELETE_FAVORITE = 'DELETE_FAVORITE';
export const FILTER = 'FILTER'
export const ORDER = 'ORDER'


export const addFavorite = (character) =>{
    return{
        type: ADD_FAVORITE, payload: character
    }
}
export const deleteFavorite = (id) =>{
    return{
        type: DELETE_FAVORITE, payload: id
    }
}
export const filterCards = (gen) => {
    return{
        type: FILTER, payload: gen
    }
}
export const orderCards = (id) => {
    return{
        type: ORDER ,payload: id
    }
}
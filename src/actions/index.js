//actions types
export const ADDTOLIST='ADD_TO_LIST';
export const ADDFAVOURITE='ADD_FAVOURITE';
export const REMOVEFAVOURITE='REAMOVE_FAVOURITE';
export const SET_SHOW_FAV='SET_SHOW_FAVOURITE';

//actions creator
export function addMovies(movies){
    return {
        type:ADDTOLIST,
        movies
    }
}

export function addFavourite(movie){
    return {
        type: ADDFAVOURITE,
        movie
    }
}

export function removeFavourite(movie){
    return{
        type:REMOVEFAVOURITE,
        movie
    }
}

export function setShowFav(val){
    return{
        type:SET_SHOW_FAV,
        val
    }
}
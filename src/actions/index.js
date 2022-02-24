//actions types
export const ADDTOLIST='ADD_TO_LIST';


//actions creator
export function addMovies(movies){
    return {
        type:ADDTOLIST,
        movies
    }
}
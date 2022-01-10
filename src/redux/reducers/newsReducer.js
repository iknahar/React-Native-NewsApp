import { FETCH_ARTICLES } from "../actions/newsAction";

const initialSate = {
    articles: [],
    favorites:[],
}

export default function (state = initialSate, action) {
 
    switch (action.type) {
        case FETCH_ARTICLES:
            return {
                ...state,
                articles: action.payload
            }
    }
    return state;
}
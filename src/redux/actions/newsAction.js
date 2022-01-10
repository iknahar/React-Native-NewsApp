export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const TOGGLE_FAVORITES = 'TOGGLE_FAVORITES';

export const fetchArticles= () => {
    return async dispatch => {


        const response = await fetch('https://newsapi.org/v2/everything?q=tv&from=2021-12-10&sortBy=publishedAt&apiKey=ff8619b180974787bf9b6998b0762f57');
        
        const responseData = await response.json();

        dispatch({
            type: FETCH_ARTICLES,
            payload: responseData.articles
        });
        
    }

}
export const toggleFav = url => {
    
    return {

        type: TOGGLE_FAVORITES,
        payload: url
    }
}
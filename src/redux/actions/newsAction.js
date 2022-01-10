export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const ADD_FAVORITES = 'ADD_FAVORITES';

export const fetchArticles= () => {
    return async dispatch => {


        const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-12-10&sortBy=publishedAt&apiKey=ff8619b180974787bf9b6998b0762f57');
        
        const responseData = await response.json();

        dispatch({
            type: FETCH_ARTICLES,
            payload: responseData.articles
        });
        
    }
}
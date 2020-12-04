
export const getArticles = async () => {
        const response = await fetch(
            'http://newsapi.org/v2/everything?q=climate&from=2020-12-03&sortBy=publiscomhedAt&apiKey=e6da25ab9e6b46f8a1cdfaf722b788ef'
        );
        const json = await response.json();
        return json;
    
};

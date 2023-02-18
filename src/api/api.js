const API_KEY = "fd248a48-a2f0-440e-9583-c8cab722dd7b";

export const getMatches = () => {
    // const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`;
    const url = `https://api.cricapi.com/v1/matches?apikey=${API_KEY}`;
    console.log("URL", url);
    return fetch(url)
        .then((response) => {
            return response.json();
        })
        .catch((error) => {
            console.log("ERROR ", error);
        });
};

//get the score of the cuurent match

export const getMatchDetail = (id) => {
    // const url = `https://cricapi.com/api/cricketScore?unique_id=${id}&apikey=${API_KEY}`;
    const url = `https://api.cricapi.com/v1/match_info?id=${id}&apikey=${API_KEY}`;
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error));
};

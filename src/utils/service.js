const BASE_URL = "https://opentdb.com"

const chekcResponse = (data) => {
    if (data.response_code === 1) {
        return "실패";
    }
    if (data.response_code === 2) {
        return "실패";
    }
    if (data.response_code === 3) {
        return "실패";
    }
    if (data.response_code === 4) {
        return "실패";
    }
    return data.results;
}

export default function request(url, options = {}) {
    const requestURL = BASE_URL + url
    return fetch(requestURL, options)
        .then((response) => response.json())
        .then((data) => chekcResponse(data))
        .catch((error) => {
            console.log("error:", error)
            return error;
        });
}
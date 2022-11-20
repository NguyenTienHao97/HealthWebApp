import axios from "axios";

function getDiaries() {
    return axios.get<Promise<any>>("http://localhost:3004/diaries", {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    });
}

export {
    getDiaries,
}
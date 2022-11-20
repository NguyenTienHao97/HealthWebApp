import axios from "axios";

function getMeals() {
    return axios.get<Promise<any>>("http://localhost:3004/meals", {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    });
}

export {
    getMeals,
}
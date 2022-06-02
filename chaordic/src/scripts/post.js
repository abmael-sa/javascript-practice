import axios from "axios";

export const post = async (url, data) => {
    try {
        const response = await axios.post(url, data);
        
        return response;
    }
    catch(error) {
        console.log(error);
    }
}
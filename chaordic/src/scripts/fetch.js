import axios from "axios";

const fetch = async function(url) {
    try {
        const response = await axios.get(url);

        return response.data;
    }
    catch(error) {
        console.log(error);
    }
}
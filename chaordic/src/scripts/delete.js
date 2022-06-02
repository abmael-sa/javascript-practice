import axios from 'axios';

export const remove = async (url, config) => {
    try {
        const response = axios.delete(url, config);

        return response;
    }
    catch(error) {
        console.log(error);
    }
}
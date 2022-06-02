import { post } from "../../scripts/post";

// TODO: Validate

const submit = async (data) => {
    const URL = `http://localhost:3000/tools`;
    const response = await post(URL, data);
    
    return response.data;
}

export const addTool = (data) => {
    return submit(data);
}   
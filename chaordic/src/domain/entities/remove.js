import { remove } from '../../scripts/delete' ;

export const removeTool = async (id) => {
    const url = `http://localhost:3000/tools/${id}`;
    
    const response = await remove(url);

    return response;
}
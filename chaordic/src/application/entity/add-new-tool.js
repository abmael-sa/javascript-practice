import { addTool } from "../../domain/entities/add";
import { renderTool } from "./render-tool";

export const addNewTool = async (data) => {
    const newTool = await addTool(data);
    renderTool(newTool);
}
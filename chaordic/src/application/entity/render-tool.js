import { tool } from "../../domain/entities/tool/tool";

export const renderTool = (data) => {
    const root = document.querySelector('[root]');
    const toolComponent = tool(data);

    root.append(toolComponent);
}
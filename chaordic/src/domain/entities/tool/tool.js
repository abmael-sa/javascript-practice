import { removeTool } from "../remove";


export const tool = (data) => {
    const div = document.createElement('div');
    const button = document.createElement('button');
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    const h3 = document.createElement('h3');
    
    button.textContent = 'X';
    p.textContent = data.description;
    p2.textContent = data.tags;
    h3.textContent = data.title;

    div.append(h3);
    div.append(p);
    div.append(p2);
    div.append(button);

    div.setAttribute('id', data.id);

    button.addEventListener('click', (event) => {
        const button = event.target;
        const parent = button.parentElement;
        const commonAncestor = parent.parentElement;

        const id = parent.id;

        console.log(id);

        removeTool(id);

        commonAncestor.removeChild(parent);
    });

    return div;
}
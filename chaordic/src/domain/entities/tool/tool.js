
export const tool = (core) => {
    const div = document.createElement('div');
    const button = document.createElement('button');
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    const h3 = document.createElement('h3');

    button.textContent = 'X';
    p.textContent = core.description;
    p2.textContent = core.tags;
    h3.textContent = core.title;

    div.append(h3);
    div.append(p);
    div.append(p2);
    div.append(button);

    return div;
}
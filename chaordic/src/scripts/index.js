import { fetch } from './fetch'
import { renderTool } from '../application/entity/render-tool';
import { addNewTool } from '../application/entity/add-new-tool';


const clearInputFields = async (inputFields) => {
    inputFields.forEach((field) => {
        field.value = '';
    })
}

const addNewToolRequests = () => {
    const form = document.forms.add;
    const inputFields = document.querySelectorAll('#add input');

    form.addEventListener('submit', async (event) => {
        console.log(event);
        event.preventDefault();

        const formData = Array
            .from(inputFields)
            .reduce((acc, input) => {
                const key = input.id;
                let value = (key !== 'tags') ? input.value : input.value.split(' ');

                return ({
                    ...acc,
                    [key] : value
                })
            }, {});

        Promise.all([
            addNewTool(formData),
            clearInputFields(inputFields)
        ]);
    });
}

const main = async () => {
    const URL = `http://localhost:3000/tools`;

    let data = await fetch(URL);

    console.log(data);

    data.forEach(tool => {
        renderTool(tool);
    });

    addNewToolRequests();
}

main();
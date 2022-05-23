const express = require('express');
const {
    insert,
    readUser,
    update,
    remove
} = require('../src/service');

const app = express();
const PORT = 1234;

app.use(express.json());

app.get('/', (request, response) =>{
    return response.json('Hello World');
})

app.post('/users', async (request, response) => {
    const { 
        first_name,
        last_name,
        gender,
        date_of_birth            
    } = request.body;

    const newUser = {
        first_name,
        last_name,
        gender,
        date_of_birth 
    }

    await insert(newUser);

    return response.json(newUser);
})

app.get('/user/:id', async (request, response) => {
    const { id } = request.params;
    const user = await readUser(id);
    
    return response.json(user);
});

app.put('/user/:id', async (request, response) => {
    const { id } = request.params;
    const modifications = request.body;

    await update(id, modifications);
    const user = await readUser(id);

    return response.json(user);
});

app.delete('/user/:id', async (request, response) => {
    const { id } = request.params;

    await remove(id);

    return response.json({
        status: 200
    });
})

app.listen(PORT, () => {
    console.log(`The server is runnig on the port ${PORT}`);
});
const database = require('./database');

// O usuário terá disponível 4 métodos para fazer uma
// requisição HTTP para aplicação web:
// POST, GET, PUT, DELETE

const insert = async (data) => {
    try {
        const id = await database.post(data);
        return [true, id];
    } 
    catch(error) {
        console.log('An error has ocurred: ', error);
        return false;
    }
}

const readUser = async (id) => {
    try {
        const user = await database.get(id);
        return user;
    }
    catch(error) {
        console.log('An error has ocurred: ', error);
    }
}

const update = async (id, changes) => {
    try {   
        await database.put(id, changes);
        return true;
    }
    catch (error) {
        console.log('An error has ocurred: ', error);
        return false;
    }
}

const remove = async (id) => {
    try {
        await database.delete(id);
    }
    catch (error) {
        console.log('An error has ocurred: ', error);
        return false;
    }
}

module.exports = {
    insert,
    readUser,
    update,
    remove
}
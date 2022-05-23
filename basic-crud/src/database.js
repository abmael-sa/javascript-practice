const { 
    readFile,
    writeFile
} = require('fs');

const { 
    promisify 
} = require('util');

const {
    randomUUID
} = require('crypto');

const generateRandomUUID = () => {
    return randomUUID();
}

const readFileAsync = promisify(readFile);

const writeFileAsync = promisify(writeFile);

class Database {
    // TODO: change name
    #filePath = './src/user.json';

    async #getFile() {
        const file = await readFileAsync(this.#filePath, 'utf-8');
        
        return (file) ? await JSON.parse(file.toString()) : [];
    }

    async post(data) {   
        const file = await this.#getFile();

        const id = generateRandomUUID();
        const batchedData = {
            id,
            ...data
        }
        
        const concatenatedData = [
            ...file,
            batchedData
        ]

        await writeFileAsync(this.#filePath, JSON.stringify(concatenatedData));

        return id;
    }

    async get(id) {
        const file = await this.#getFile();
        const user = file.filter((user) => {
            return user.id === id;
        });

        if(!user) {
            throw Error('Use doesn\'t exist');
        }

        return user;
    }

    async put(id, changes) {
        const [user] = await this.get(id); 
        const file = await this.#getFile();
        const changesAppliedToUser = {  
            ...user,
            ...changes
        }
        // console.log(changesAppliedToUser);
        const newFile = file.map((user) => {
            return user = (user.id === id) ? changesAppliedToUser : user; 
        })

        await writeFileAsync(this.#filePath, JSON.stringify(newFile));
    }

    async delete(id) {
        const file = await this.#getFile();

        const newFile = file.filter((user) => {
            return user.id !== id;
        });
        
        await writeFileAsync(this.#filePath, JSON.stringify(newFile));
    }
}

module.exports = new Database();

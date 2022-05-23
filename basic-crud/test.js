const {
    deepStrictEqual,
    ok
} = require('assert');

const { 
    insert,
    readUser,
    update,
    remove
} = require('./public/service');

const DEFAULT_ITEM_POST = {
    first_name: 'Richard',
    last_name: 'Sinek',
    gender: 'Male',
    date_of_birth: '2001-12-12'
}

describe('CRUD suit', () => {
    it('should POST an user', async () => {
        const expected = true;
        const [actual, id] = await insert(DEFAULT_ITEM_POST);
        DEFAULT_ITEM_POST.id = id;

        deepStrictEqual(actual, expected);
    })

    it('should GET an user', async () => {
        const expected = DEFAULT_ITEM_POST;
        const [actual] = await readUser(expected.id);

        deepStrictEqual(actual, expected);
    })

    it('should PUT an user', async () => {
        const expected = 'John';
        await update(DEFAULT_ITEM_POST.id, { last_name: 'John' });
        const [actual] = await readUser(DEFAULT_ITEM_POST.id);

        deepStrictEqual(actual.last_name, expected);
    })

    // it('should DELETE an user', async () => {
    //     const expected = undefined;
    //     await remove(DEFAULT_ITEM_POST.id)
    //     const actual = await readUser(DEFAULT_ITEM_POST.id);

    //     deepStrictEqual(actual, expected);
    // })
})  
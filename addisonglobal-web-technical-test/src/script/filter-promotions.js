
export const filterPromotions = () => {
    const filter = document.querySelector('[filter]');
    const cardsContainer = document.querySelector('.cards');
    const options = ['all', 'newCustomers'];

    filter.addEventListener('change', () => {
        const value = filter.value;

        console.log(value);
        cardsContainer.classList.remove(...options);
        cardsContainer.classList.add(value);
    });
}
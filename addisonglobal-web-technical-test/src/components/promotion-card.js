const generateHtml = () => {
    const title = document.createElement('h3');
    const description = document.createElement('p');
    const img = document.createElement('img');
    const joinNowButton = document.createElement('button');
    const termsAndConditionsButton = document.createElement('button');
    const div = document.createElement('div');

    return {
        title, description, img, 
        joinNowButton, termsAndConditionsButton, div
    }
}

const tagCardWithClasses = (card, source) => {
    const range = (source.onlyNewCustomers) ? 'newCustomersPromoCard' : 'allCustomersPromoCard';
    card.classList.add(range);
    card.classList.add('promoCard');
    
    return card;
}

const addContentAndClassesToCardElements = (source, structure) => {
    const {
        title, description, img, 
        joinNowButton, termsAndConditionsButton, div
    } = structure;

    title.textContent = source.name;
    description.textContent = source.description;
    joinNowButton.textContent = source.joinNowButtonText;
    termsAndConditionsButton.textContent = source.termsAndConditionsButtonText;
    
    joinNowButton.classList.add('btn', 'btn-primary');
    termsAndConditionsButton.classList.add('btn', 'btn-secondary');

    img.setAttribute('src', source.heroImageUrl);

    return {
        title, description, img, 
        joinNowButton, termsAndConditionsButton, div
    };
}

const createCardWith = (structure) => {
    const card = document.createElement('div');
    const {
        title, description, img, 
        joinNowButton, termsAndConditionsButton, div
    } = structure;

    div.appendChild(title);
    div.appendChild(description);
    div.appendChild(joinNowButton);
    div.appendChild(termsAndConditionsButton);

    card.appendChild(img);
    card.appendChild(div);

    return card;
}

export const buildCard = (origin) => {
    const rawStructure = generateHtml();
    const populatedStructure = addContentAndClassesToCardElements(origin, rawStructure); 
    
    let card = createCardWith(populatedStructure);
    card = tagCardWithClasses(card, origin);

    return {
        component: card,
        sequence: origin.sequence
    }
}
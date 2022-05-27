import { fetch } from "./fetch";
import { buildCard } from "../components/promotion-card";

const sortCardsOut = (cards) => {
    const compareFn = (a, b) => {
        return b.sequence - a.sequence;
    }
    
    return cards.sort(compareFn);
}

const appendCardsToContainer = (cards, container) => {
    cards.forEach((card) => {
        const { component } = card;
        container.appendChild(component);
    });

    return container;
}

const generateCards = (promotions) => {
    let cards = [];

    promotions.forEach((promotion) => {
        const promotionCard = buildCard(promotion);
        cards.push(promotionCard);
    });

    return cards;
}

const createTaggedContainer = () => {
    const container = document.createElement('div');
    container.classList.add('cards');
    container.classList.add('all');
    container.classList.add('w-full');
    container.classList.add('flex');
    container.classList.add('wrap');
    container.classList.add('justify-center');
    
    return container;
}

const getPromosData = async () => {
    const URL = `http://www.mocky.io/v2/5bc3b9cc30000012007586b7`;
    return await fetch(URL);
}

// FIXME: A way to render each card at a time
// so that the user won't need to wait until all the cards be generated
// to see them being displayed.
// WARNING [FIXMECOMMENT]: This can cause layout shifiting problems.
export const generatePromosCards = async () => {
    const promotions = await getPromosData();
    let container = createTaggedContainer();
    
    const unorderedCards = generateCards(promotions);
    const finalCards = sortCardsOut(unorderedCards);

    container = appendCardsToContainer(finalCards, container);

    return container;
}
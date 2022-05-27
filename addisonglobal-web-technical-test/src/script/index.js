import { fetch } from "./fetch"
import { generatePromosCards } from "./generate-promo-cards";
import { filterPromotions } from "./filter-promotions";

const promotionsSection = async () => {
    const promotions = await generatePromosCards();
    document.querySelector('[root]').append(promotions);
    filterPromotions();
}

const main = () => {
    promotionsSection();
}

main();
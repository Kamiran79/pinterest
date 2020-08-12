import pinComponent from '../pin/pin';
import pinData from '../../helpers/data/pinData';
import utils from '../../helpers/utils';

const buildPinCards = () => {
  pinData.getPinCards()
    .then((pinCards) => {
      let domString = `
        <h2 class="text-center">Cards</h2>
        <div class="d-flex flex-wrap">      
      `;

      pinCards.forEach((pin) => {
        domString += pinComponent.pinMaker(pin);
      });
      domString += '</div>';
      utils.printToDom('#console', domString);
    })
    .catch((err) => console.error('get pinCards broke :/', err));
};

export default { buildPinCards };

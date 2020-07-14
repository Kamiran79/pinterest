import utils from '../../helpers/utils';
import pinData from '../../helpers/data/pinData';

import './singlePin.scss';

const buildSinglePin = (e) => {
  const pinId = e.target.closest('.card').id;
  console.warn('this is the id for selected pin', pinId);
  pinData.getPinById(pinId)
    .then((pin) => {
      const myPin = pin.data;
      console.warn('this what I pull from database', myPin);
      let domString = '';
      domString += `
        <div class="card m-3 mb-3">
          <div class="card-body">
            <img class="rounded float-left mr-3 img-fluid" src="${myPin.imgURL}" alt="${pinId}">
            <div>
              <button id="back" class="float-right btn btn-outline-warning btnDetails m-1"><i class="fas fa-arrow-circle-left"></i></button>
              <h5 class="card-title">${myPin.pinTitle}</h5>              
              <p class="card-text">${myPin.description}</p>
              <a class="btn btn-primary" href="${myPin.pinURL}" role="button">Link</a>
              <button class="btn btn-outline-warning ml-3"><i class="fas fa-edit"></i> Edit</button>
            <div>
            <button class="pinDelete btn btn-outline-danger"><i class="fas fa-trash-alt"></i></button>
          </div>
        </div>
      `;

      utils.printToDom('#single-board', domString);
    })
    .catch((err) => console.error('get pin faild ', err));
};

export default { buildSinglePin };

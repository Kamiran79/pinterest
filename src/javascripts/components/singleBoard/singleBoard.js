import pinData from '../../helpers/data/pinData';
import utils from '../../helpers/utils';

import './singleBoard.scss';

let trackBoardId;

const removePinEvent = (e) => {
  const pinId = e.target.closest('.card').id;
  console.warn('delete event access and the pinId is: ', e.target.closest('.card').id);
  console.warn(trackBoardId);
  // actually delete this mushroom from firebase
  pinData.deletePin(pinId)
    .then(() => {
    // reprint the dom (so the lil shroomie goes away)
    // eslint-disable-next-line no-use-before-define
      buildSingleBoardAfterDeletePin(trackBoardId);
    // utils.printToDom('#single-myco', '');
    })
    .catch((err) => console.error('could not delete pin', err));
};

const buildSingleBoard = (e) => {
  const boardId = e.target.closest('.card').id;
  console.warn(boardId);
  trackBoardId = boardId;
  const userBoardDiv = $('#userBoard');
  const singleBoardDiv = $('#single-board');
  userBoardDiv.addClass('hide');
  singleBoardDiv.removeClass('hide');
  pinData.getMyPinsByBoardId(boardId)
    .then((myBoardWithPins) => {
      let domString = '<div class="container">';
      domString += `<h1>${myBoardWithPins[0].category}</h1>`;
      domString += '<a id ="back" href="#" class="btn btn-outline-warning btnDetails"><i class="fas fa-arrow-circle-left"></i></a>';
      domString += '<div id="allPins" class="row justify-content-md-center mb-3">';
      myBoardWithPins.forEach((board) => {
        console.warn(board);
        domString += `
          <div class="col-6 col-md-3 mb-3">
            <div class="card testcard" id=${board.id}>
            <img class="card-img-top adj" src="${board.imgURL}" alt="">
              <div class="card-body p-2">
                  <h6 class="card-title">${board.pinTitle}</h6>
                  <p class="card-text testCardText">$${board.category}</p>
                  <p class="card-text testCardText">${board.description}</p>
                  <a id ="1" href="#" class="btn btn-outline-warning btnDetails">Details</a>                  
                  <button class="btn btn-danger delete-pin btnDeletePin"><i class="fas fa-trash-alt"></i></button>
              </div>
            </div>
          </div>
        `;
      });
      domString += '</div></div>';
      utils.printToDom('#single-board', domString);
      $('body').on('click', '.btnDeletePin', removePinEvent);
      // console.warn(myBoardWithPins);
    })
    .catch((err) => console.error('problem with single mycologist ', err));
};

const buildSingleBoardAfterDeletePin = (id) => {
  const boardId = id;
  console.warn(boardId);
  trackBoardId = boardId;
  const userBoardDiv = $('#userBoard');
  const singleBoardDiv = $('#single-board');
  userBoardDiv.addClass('hide');
  singleBoardDiv.removeClass('hide');
  pinData.getMyPinsByBoardId(boardId)
    .then((myBoardWithPins) => {
      let domString = '<div class="container">';
      domString += `<h1>${myBoardWithPins[0].category}</h1>`;
      domString += '<a id ="back" href="#" class="btn btn-outline-warning btnDetails"><i class="fas fa-arrow-circle-left"></i></a>';
      domString += '<div id="allPins" class="row justify-content-md-center mb-3">';
      myBoardWithPins.forEach((board) => {
        console.warn(board);
        domString += `
          <div class="col-6 col-md-3 mb-3">
            <div class="card testcard" id=${board.id}>
            <img class="card-img-top adj" src="${board.imgURL}" alt="">
              <div class="card-body p-2">
                  <h6 class="card-title">${board.pinTitle}</h6>
                  <p class="card-text testCardText">$${board.category}</p>
                  <p class="card-text testCardText">${board.description}</p>
                  <a id ="1" href="#" class="btn btn-outline-warning btnDetails">Details</a>                  
                  <button class="btn btn-danger delete-pin btnDeletePin"><i class="fas fa-trash-alt"></i></button>
              </div>
            </div>
          </div>
        `;
      });
      domString += '</div></div>';
      utils.printToDom('#single-board', domString);
      $('body').on('click', '.btnDeletePin', removePinEvent);
      // console.warn(myBoardWithPins);
    })
    .catch((err) => console.error('problem with single mycologist ', err));
};

export default { buildSingleBoard };

// <button class="btn btn-danger delete-shroom"><i class="far fa-trash-alt"></i>  Delete Shroom</button>
/*
<div class="container">
<div id="allCards" class="row justify-content-md-center mb-3"></div>
</div>

//Build all Product cards
const buildProductCard = (arr) => {
  domString = '';
  for (let i = 0; i < arr.length; i++) {
    domString += `
       <div class="col-6 col-md-3 mb-3">
          <div class="card testcard">
             <div class="card-body p-2">
                <img class="card-img-top adj" src="${arr[i].imgUrl[0].url}" alt="">
                <h6 class="card-title">${arr[i].name}</h6>
                <p class="card-text testCardText">$${arr[i].price}</p>
                <p class="card-text testCardText">${arr[i].model}</p>
                <a id ="${arr[i].id}" onClick= "detailsCard(this.id)" href="#" class="btn btn-outline-warning btnDetails">Details</a>
             </div>
           </div>
       </div>
     `;
  }
  printToDom('#allCards', domString);
}

*/
/* shopping page css below */
/*
.shopHeader {
  text-align: center;
  padding-top: 10px;
  font-family: 'Rye', cursive;
  color: #BF9E39;
}

.btnShop {
  background-color: #D98F89;
  color: black;
  font-family: 'Rye', cursive;
  width: 150px;
}

.btnDetails {
  background-color: #BF9E39;
  color: black;
  font-family: 'Rye', cursive;
  font-weight: bold;
}

.detailsCard {
  margin-top: 10px;
  margin-bottom: 10px;
}

.btnRemove {
  background-color: #BF9E39;
  color: black;
  font-family: 'Rye', cursive;
  font-weight: bold;
  margin-bottom: 20px;
}

.imgCart {
  max-width: 100px;
  max-height: 100px;
  margin-top: 50px;
}

.cartDetail {
  margin-left: -20px;
}

.adj {
  min-height: 280px;
  max-height: 280px;
  width: 100%;
}
*/
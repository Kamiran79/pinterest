// just empety string

const boardMaker1 = (boardWithPins) => {
  // console.warn(boardWithPins.id);
  let imgURL = '';
  boardWithPins.forEach((pin) => {
    console.warn('this is the boardsWithPins ', pin.imgURL);
    if (pin.imgURL !== '') {
      imgURL = pin.imgURL;
    }
  });
  // console.warn('this is the boardsWithPins ', boardWithPins[0].imgURL);
  let domString = `
    <div class="col-3">
      <div class="card  mb-3 myco-card border-0 rounded-2 primary" style="width: 18rem;" id=${boardWithPins.id}>        
        <img src="${imgURL}" class="card-img-top " alt="${boardWithPins.boardTitle}">
  `;
  domString += `
        <div class="card-body">
          <h5 class="card-title">${boardWithPins.boardTitle}</h5>
          <p class="card-text">Pins: ${boardWithPins.length}</p>
          </br>
          <i id="btnDeleteBoard" class="fas fa-trash-alt btnDeleteBoard1"></i>
          <i id="btnDetailsBoard" class="fas fa-info-circle btn btn-warning details-board btnDetailsBoard1"></i>
        </div>
      </div>
    </div>
  `;
  // below was the buttons for details will replace just with fontAwosem
  // <button id="btnDetailsBoard" class="btn btn-warning details-board btnDetailsBoard1"><i class="fas fa-info-circle"></i></button>
  // console.warn('this is the boardsWithPins ', boardWithPins[0].imgURL);
  // console.warn('get the length of array pins ', boardWithPins.length);
  // utils.printToDom('#boardWithPins', domString);
  return domString;
  // })
  // .catch((err) => console.error('problem with single mycologist', err));
  // console.warn('this is what domString have so far ', domString);
};

// this board maker return 6 images like pinterest to much challenge
const boardMaker = (boardWithPins) => {
  // console.warn(boardWithPins.id);
  // boardWithPins.forEach((board) => {
  // console.warn('this is the boardsWithPins ', board.boardId);
  // });
  let domString = `
  <div class="col-12 col-md-3">
  <div class="d-flex flex-wrap justify-content-center">
      <div class="card  mb-3 myco-card border-0 rounded-2 primary" style="width: 18rem;" id=${boardWithPins.id}>
        <div class="row-cols-3">
  `;
  for (let i = 0; i < boardWithPins.length; i += 1) {
    if (i === 0) {
      domString += `<img src="${boardWithPins[0].imgURL}" class="card-img-top ml-1 mt-1" alt="${boardWithPins.boardTitle}">`;
    }
    if (i === 1) {
      domString += `<img src="${boardWithPins[1].imgURL}" class="card-img-top ml-1 mt-1" alt="${boardWithPins.boardTitle}">`;
    }
    if (i === 2) {
      domString += `<img src="${boardWithPins[2].imgURL}" class="card-img-top ml-1 mt-1" alt="${boardWithPins.boardTitle}">`;
    }
  }
  domString += '</div>';
  domString += '<div class="row-cols-3">';
  for (let i = 3; i < boardWithPins.length; i += 1) {
    if (i === 3) {
      domString += `<img src="${boardWithPins[3].imgURL}" class="card-img-top ml-1 mt-1" alt="${boardWithPins.boardTitle}">`;
    }
    if (i === 4) {
      domString += `<img src="${boardWithPins[4].imgURL}" class="card-img-top ml-1 mt-1" alt="${boardWithPins.boardTitle}">`;
    }
    if (i === 5) {
      domString += `<img src="${boardWithPins[5].imgURL}" class="card-img-top ml-1 mt-1" alt="${boardWithPins.boardTitle}">`;
    }
  }
  domString += '</div>';
  domString += `
        <div class="card-body">
          <h5 class="card-title">${boardWithPins.boardTitle}</h5>
          <p class="card-text">Pins: ${boardWithPins.length}</p>
          </br>
          <i id="btnDeleteBoard" class="fas fa-trash-alt btnDeleteBoard1"></i>
          <button id="btnDetailsBoard" class="btn btn-warning details-board btnDetailsBoard1"><i class="fas fa-info-circle"></i></button>
        </div>
        </div>
      </div>
    </div>
  `;
  // console.warn('this is the boardsWithPins ', boardWithPins[0].imgURL);
  // console.warn('get the length of array pins ', boardWithPins.length);
  // utils.printToDom('#boardWithPins', domString);
  return domString;
  // })
  // .catch((err) => console.error('problem with single mycologist', err));
  // console.warn('this is what domString have so far ', domString);
};

export default { boardMaker, boardMaker1 };
// https://www.motortrend.com/uploads/sites/5/2019/09/2019-Mercedes-Benz-A-220-4Matic-front-three-quarter-in-motion-1.jpg?fit=around%7C875:492
// <h5 class="card-title text-center">${boardWithPins.boardTitle}</h5>
// below another car image card we will use that later:
// <img src="https://assets.mbusa.com/vcm/MB/DigitalAssets/Global_Gallery/2017/2017-C-CABRIOLET-FEATURED-GALLERY-980x549-01.jpg" class="card-img-top" alt="${boardWithPins.boardTitle}">
// https://www.daimler.com/bilder/produkte/pkw/mercedes-benz/a-klasse-interieur/a-klasse-interieur-w768xh384-cutout.jpg
// https://i.pinimg.com/originals/44/c6/9f/44c69ff6137a083221921e72eeaf5211.jpg
// https://i.pinimg.com/originals/de/01/1d/de011dc32a1622153dfdff5c05c2554c.jpg
// this is the delete icon to use below:
// <i class="fas fa-trash-alt"></i>
/*
  This sise was for the card = style="width: 18rem;"
  <div class="card myco-card border-0 rounded-0" id=${boardWithPins.id}>
    <div class="card-body">
      <img src="">
    </div>
    <div class="card-footer">
      <small class="text-muted">They are -- was {user.age} years old</small>
    </div>
  </div>
*/
// this is the button delete will used maybe later ..
// <button id="btnDeleteBoard" class="btn btn-danger delete-board btnDeleteBoard1"><i id="btnDeleteBoard" class="fas fa-trash-alt"></i></button>

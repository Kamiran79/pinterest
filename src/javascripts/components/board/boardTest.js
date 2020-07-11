// This is working

// eslint-disable-next-line no-unused-vars
const boardMaker = (boardWithPins) => {
  // console.warn(boardWithPins.id);
  // boardWithPins.forEach((board) => {
  // console.warn('this is the boardsWithPins ', board.boardId);
  // });
  let domString = `
    <div class="col-3">
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
  `;
  // console.warn('this is the boardsWithPins ', boardWithPins[0].imgURL);
  // console.warn('get the length of array pins ', boardWithPins.length);
  // utils.printToDom('#boardWithPins', domString);
  return domString;
  // })
  // .catch((err) => console.error('problem with single mycologist', err));
  // console.warn('this is what domString have so far ', domString);
};

import smash from '../../helpers/data/smash';

import login from '../auth/login';
import myBoard from '../board/board';

import utils from '../../helpers/utils';

const returnToUserBoards = () => {
  // utils.printToDom('#userBoard', '');
  // const uidBySingleBoard = $('#storeUserUid').data('uidStored');
  // console.warn(uidBySingleBoard);
  const userBoardDiv = $('#userBoard');
  const singleBoardDiv = $('#single-board');
  userBoardDiv.removeClass('hide');
  utils.printToDom('#clearSingleBoard', '');
  singleBoardDiv.addClass('hide');
  const user = login.getUser();
  // eslint-disable-next-line no-use-before-define
  buildBoard(user.uid);
  // utils.printToDom('#allPins', '');
};

const buildBoard = (uid) => {
  smash.getUserBoardsWithPins(uid)
    .then((boardsWithPins) => {
      console.warn('this is a board with Pins', boardsWithPins);
      let domString = `
        <h1 id="userUid" data-uid="${uid}" class="text-center">Boards</h1>
        <button class="btn btn-success ml-3 mb-2" id="show-add-board"><i class="fas fa-plus-circle"></i> New Board</button>
        <div class="row d-flex flex-wrap">        
      `;
      if (boardsWithPins.length !== 0) {
        boardsWithPins.boards.forEach((board) => {
          domString += myBoard.boardMaker(board);
        });
      }
      domString += '<div>';
      utils.printToDom('#console', domString);
    })
    .catch((err) => console.error('getUser Boards faild', err));
};

export default { returnToUserBoards };

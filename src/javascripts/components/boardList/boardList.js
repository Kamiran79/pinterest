// import boardData from '../../helpers/data/boardData';
import smash from '../../helpers/data/smash';
import myBoard from '../board/board';
import utils from '../../helpers/utils';
import singleBoard from '../singleBoard/singleBoard';

import './boardList.scss';

let userUid;

const removeBoardEvent = (e) => {
  const boardId = e.target.closest('.card').id;
  console.warn(boardId);
  console.warn(userUid);
  smash.totallyRemoveBoard(boardId)
    .then(() => {
    })
    .catch((err) => console.error('could not delete board ', err));
  buildBoard(userUid);
};

const buildBoard = (uid) => {
  userUid = uid;
  smash.getUserBoardsWithPins(uid)
    .then((boardsWithPins) => {
      // console.warn(boardsWithPins);
      let domString = `
        <h1 class="text-center">Board</h1>
        <div class="d-flex flex-wrap">        
      `;
      boardsWithPins.boards.forEach((board) => {
        domString += myBoard.boardMaker(board);
      });

      domString += '<div>';

      utils.printToDom('#userBoard', domString);
      $('body').on('click', '.btnDetailsBoard1', singleBoard.buildSingleBoard);
      $('body').on('click', '.btnDeleteBoard1', removeBoardEvent);
    })
    .catch((err) => console.error('getUser Boards faild', err));
};

export default { buildBoard };

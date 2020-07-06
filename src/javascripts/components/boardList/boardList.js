// import boardData from '../../helpers/data/boardData';
import myBoard from '../board/board';
import utils from '../../helpers/utils';
import smash from '../../helpers/data/smash';

import './boardList.scss';
import singleBoard from '../singleBoard/singleBoard';

const buildBoard = (uid) => {
  smash.getUserBoardsWithPins(uid)
    .then((boardsWithPins) => {
      console.warn(boardsWithPins);
      let domString = `
        <h1 class="text-center">Board</h1>
        <div class="d-flex flex-wrap">        
      `;
      boardsWithPins.boards.forEach((board) => {
        domString += myBoard.boardMaker(board);
      });

      domString += '<div>';

      utils.printToDom('#userBoard', domString);
      $('body').on('click', '.myco-card', singleBoard.buildSingleBoard);
    })
    .catch((err) => console.error('getUser Boards faild', err));
};

export default { buildBoard };

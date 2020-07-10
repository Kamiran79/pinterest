// import boardData from '../../helpers/data/boardData';
import smash from '../../helpers/data/smash';
import myBoard from '../board/board';
import utils from '../../helpers/utils';
import singleBoard from '../singleBoard/singleBoard';

import './boardList.scss';
import boardData from '../../helpers/data/boardData';
import newBoard from '../newBoard/newBoard';

let userUid;

const removeBoardEvent = (e) => {
  // e.preventDefault();
  console.warn('excute remove event');
  const boardId = e.target.closest('.card').id;
  // console.warn(boardId);
  // console.warn(userUid);
  smash.totallyRemoveBoard(boardId)
    .then(() => {
    })
    .catch((err) => console.error('could not delete board ', err));
  // eslint-disable-next-line no-use-before-define
  buildBoard(userUid);
};

const addShroomEvent = (e) => {
  e.preventDefault();
  const userBoardDiv = $('#userBoard');
  const singleBoardDiv = $('#single-board');
  singleBoardDiv.addClass('hide');
  userBoardDiv.removeClass('hide');
  // console.warn($('#mush-size').val());
  const newMush = {
    boardTitle: $('#mush-name').val(),
    uid: userUid,
  };
  console.warn(newMush);

  boardData.addBoard(newMush)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildBoard(userUid);
      utils.printToDom('#create-board', '');
    })
    .catch((err) => console.error('could not add mushroom', err));
};

const buildBoard = (uid) => {
  userUid = uid;
  smash.getUserBoardsWithPins(uid)
    .then((boardsWithPins) => {
      // console.warn(boardsWithPins);
      let domString = `
        <h1 class="text-center">Boards</h1>
        <button class="btn btn-success" id="show-add-mush"><i class="fas fa-plus-circle"></i> New Board</button>
        <div class="d-flex flex-wrap">        
      `;
      boardsWithPins.boards.forEach((board) => {
        domString += myBoard.boardMaker(board);
      });

      domString += '<div>';

      utils.printToDom('#userBoard', domString);
      // $('body').one('click', '.btnDeleteBoard1', removeBoardEvent);
      // $('.btnDeleteBoard1').click(removeBoardEvent);
      // $('body').on('click', '.myco-card', singleBoard.buildSingleBoard);
      // $('body').on('click', '#mush-creator', addShroomEvent);
      // $('body').on('click', '#show-add-mush', newBoard.showForm);
    })
    .catch((err) => console.error('getUser Boards faild', err));
};

const boardsEvents = () => {
  // $('body').on('click', '.delete-shroom', removeShroomEvent);
  $('body').on('click', '.btnDeleteBoard1', removeBoardEvent);
  // document.querySelector('.btnDeleteBoard1').addEventListener('click', removeBoardEvent);
  $('body').on('click', '.myco-card', singleBoard.buildSingleBoard);
  $('body').on('click', '#mush-creator', addShroomEvent);
  $('body').on('click', '#show-add-mush', newBoard.showForm);
  $('body').on('click', '.btnShowPinForm', singleBoard.showPinForm);
  // $('body').on('click', '.edit-shroom', showShroomForm);
  // $('body').on('click', '#mush-creator', addShroomEvent);
  // $('body').on('click', '#mush-editor', editShroomEvent);
  // $('body').on('click', '#show-add-mush', newMushroom.showForm);
  // $('body').on('click', '.myco-shroom-checkbox', mycoMushroomController);
};

export default { buildBoard, boardsEvents };

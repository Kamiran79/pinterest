// import firebase from 'firebase/app';
import 'firebase/auth';

// import boardData from '../../helpers/data/boardData';
import smash from '../../helpers/data/smash';
import myBoard from '../board/board';
import utils from '../../helpers/utils';

import './boardList.scss';
import boardData from '../../helpers/data/boardData';
import newBoard from '../newBoard/newBoard';
import singleBoard from '../singleBoard/singleBoard';
import newPin from '../newPin/newPin';

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

const addNewBoardEvent = (e) => {
  e.preventDefault();
  const userBoardDiv = $('#userBoard');
  const singleBoardDiv = $('#single-board');
  singleBoardDiv.addClass('hide');
  userBoardDiv.removeClass('hide');
  // console.warn($('#mush-size').val());
  const newBoardvar = {
    boardTitle: $('#board-name').val(),
    uid: userUid,
  };
  console.warn(newBoardvar);

  boardData.addBoard(newBoardvar)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildBoard(userUid);
      utils.printToDom('#create-board', '');
    })
    .catch((err) => console.error('could not add board', err));
};

const buildBoard = (uid) => {
  userUid = uid;
  // eslint-disable-next-line no-undef
  // console.warn($(elemUid).data());
  // const userId = firebase.auth().currentUser.uid;
  // console.warn('this is the user id: ', userId);
  smash.getUserBoardsWithPins(uid)
    .then((boardsWithPins) => {
      // console.warn('this is a board with Pins', boardsWithPins);
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
  $('body').on('click', '.btnDetailsBoard1', singleBoard.buildSingleBoard);
  $('body').on('click', '#board-creator', addNewBoardEvent);
  $('body').on('click', '#show-add-board', newBoard.showForm);
  $('body').on('click', '.btnShowPinForm', newPin.showPinForm);
  // $('body').on('click', '.edit-shroom', showShroomForm);
  // $('body').on('click', '#mush-creator', addShroomEvent);
  // $('body').on('click', '#mush-editor', editShroomEvent);
  // $('body').on('click', '#show-add-mush', newMushroom.showForm);
  // $('body').on('click', '.myco-shroom-checkbox', mycoMushroomController);
};

export default { buildBoard, boardsEvents };

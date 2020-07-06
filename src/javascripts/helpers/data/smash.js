import boardData from './boardData';
import pinData from './pinData';
import userData from './userData';

const getSingleBoardWithPins = (boardId) => new Promise((resolve, reject) => {
  // 1. get the board who's id is boardId
  boardData.getBoardById(boardId)
    .then((response) => {
      const board = response.data;
      board.id = boardId;
      board.pins = [];
      pinData.getMyPinsByBoardId(boardId)
        .then((myPins) => {
          myPins.forEach((pin) => {
            board.pins.push(pin);
          });
          console.warn(myPins);
          console.warn('this board what ever clicked and data is ', board);
          resolve(board);
        });
      // get all of their boards using the user.uid -- will not apply this
    })
    .catch((err) => reject(err));
});

const getUserBoardsWithPins = (userId) => new Promise((resolve, reject) => {
  userData.getUserById(userId)
    .then((response) => {
      const user = response.data;
      user.id = userId;
      user.boards = [];
      // console.warn('THis is the user uid', user.uid);
      boardData.getBoardByUid(user.uid)
        .then((userBoards) => {
          pinData.getPinCards()
            .then((pins) => {
              // console.warn('this all pins', pins);
              userBoards.forEach((board) => {
                // console.warn('this is only one board object', board.boardTitle);
                const selectedPins = pins.filter((p) => p.boardId === board.id);
                // console.warn('this is selected pins ', selectedPins);
                selectedPins.boardTitle = board.boardTitle;
                selectedPins.id = board.id;
                user.boards.push(selectedPins);
              });
              resolve(user);
            });
        });
    })
    .catch((err) => reject(err));
});

const totallyRemoveBoard = (boardId) => new Promise((resolve, reject) => {
  console.warn('remove start ', boardId);
  boardData.deletBoard(boardId)
    .then(() => {
      // get all mycoMushrooms with mushroomId
      pinData.getMyPinsByBoardId(boardId).then((pins) => {
        pins.forEach((pin) => {
          pinData.deletePin(pin.id);
        });
        resolve();
      });
      // delete each of tho mycoMushrooms
    })
    .catch((err) => reject(err));
});

export default { getSingleBoardWithPins, getUserBoardsWithPins, totallyRemoveBoard };

/*
// this function is working below:
const getUserBoardsWithPins = (userId) => new Promise((resolve, reject) => {
  userData.getUserById(userId)
    .then((response) => {
      const user = response.data;
      user.id = userId;
      user.boards = [];
      console.warn('THis is the user uid', user.uid);
      boardData.getBoardByUid(user.uid)
        .then((userBoards) => {
          pinData.getPinCards()
            .then((pins) => {
              console.warn('this all pins', pins);
              userBoards.forEach((board) => {
                console.warn('this is only one board object', board);
                const selectedPins = pins.filter((p) => p.boardId === board.id);
                console.warn('this is selected pins ', selectedPins);
                user.boards.push(selectedPins);
              });
              resolve(user);
            });
        });
    })
    .catch((err) => reject(err));
});
*/

/*
const getUserBoardsWithPins = (uid) => new Promise((resolve, reject) => {
  // 1. get the board who's id is boardId
  boardData.getBoardByUid(uid)
    .then((response) => {
      const boards = response.data;
      boards.forEach((board) => {
        // board.id = boardId;
        board.pins = [];
        pinData.getMyPinsByBoardId(board.id)
          .then((myPins) => {
            myPins.forEach((pin) => {
              board.pins.push(pin);
            });
            resolve(board);
          });
      });
      // get all of their boards using the user.uid -- will not apply this
    })
    .catch((err) => reject(err));
});
*/

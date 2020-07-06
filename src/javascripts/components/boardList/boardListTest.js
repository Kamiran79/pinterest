const buildBoard = (uid) => {
  // console.warn(uid);
  smash.getUserBoardsWithPins(uid)
    .then((boards) => {
      console.warn(boards);
      // let domString;
      // let boardObj = boards;
      boards.forEach((board) => {
        console.warn(board);
        const boardObj2 = [];
        // boardObj2.push(smash.getSingleBoardWithPins(board.id).then((boardWithPins) => boardWithPins));
        // console.warn('got the obj2 with pins ', boardObj2);
        // domString += `<div id="${board.boardTitle}" class="col-3">`;
        // myBoard.boardMaker(board.id);
        // domString += myBoard.boardMaker(board.id);
        // if (board.uid === uid) {
        // }
        console.warn('got the obj2 with pins ', boardObj2[Promise.id]);
        // console.warn('this boardObj value ', boardObj);
      });
      // console.warn('this boardObj value ', boardObj);

      // domString += '</div></div>';

      // utils.printToDom('#boardCard', domString);

      // boards.forEach((pinBoard) => {
      //  myBoard.boardMaker(pinBoard.id);
      // });
      // <div id=fullBoard">

      $('body').on('click', '.myco-card', singleBoard.buildSingleBoard);
    })
    .catch((err) => console.error('getUser Boards faild', err));
};

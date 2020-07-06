import pinData from '../../helpers/data/pinData';

const buildSingleBoard = (e) => {
  const boardId = e.target.closest('.card').id;
  console.warn(boardId);
  pinData.getMyPinsByBoardId(boardId)
    .then((myBoardWithPins) => {
      console.warn(myBoardWithPins);
    })
    .catch((err) => console.error('problem with single mycologist ', err));
};

export default { buildSingleBoard };

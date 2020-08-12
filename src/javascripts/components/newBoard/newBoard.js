import utils from '../../helpers/utils';

const showForm = () => {
  const userBoardDiv = $('#userBoard');
  const singleBoardDiv = $('#single-board');
  singleBoardDiv.addClass('hide');
  userBoardDiv.addClass('hide');
  const domString = `
    <div class="container mt-2">
      <form class="justify-content-center">
        <div class="form-group">
          <label for="board-name">Board Title:</label>
          <input type="text" class="form-control" id="board-name" placeholder="i.e. My Cars Collections">
        </div>
        <button type="submit" class="btn btn-primary" id="board-creator">Submit</button>
        <button type="cancel" class="btn btn-primary" id="backToMainBoards">Cancel</button>
      </form>
    </div>
  `;

  utils.printToDom('#console', domString);
};

export default { showForm };

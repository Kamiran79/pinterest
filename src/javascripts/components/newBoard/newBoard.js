import utils from '../../helpers/utils';

const showForm = () => {
  const userBoardDiv = $('#userBoard');
  const singleBoardDiv = $('#single-board');
  singleBoardDiv.addClass('hide');
  userBoardDiv.addClass('hide');
  const domString = `
    <form>
      <div class="form-group">
        <label for="mush-name">Board Title:</label>
        <input type="text" class="form-control" id="mush-name" placeholder="Cordyceps">
      </div>
      <button type="submit" class="btn btn-primary" id="mush-creator">Submit</button>
    </form>
  `;

  utils.printToDom('#create-board', domString);
};

export default { showForm };

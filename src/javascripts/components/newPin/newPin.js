import utils from '../../helpers/utils';

const showPinForm = () => {
  console.warn('this show Pin form working');
  const userBoardDiv = $('#userBoard');
  const singleBoardDiv = $('#single-board');
  const createPinDiv = $('#create-pin');
  // <div id="create-pin" class="hide"></div>
  singleBoardDiv.addClass('hide');
  userBoardDiv.addClass('hide');
  createPinDiv.removeClass('hide');
  const domString = `
    <div class="container mt-2">
      <form class="justify-content-center">
        <div class="form-group">
          <label for="board-name">Board Title:</label>
          <input type="text" class="form-control" id="board-name" placeholder="i.e. My Cars Collections">
        </div>
        <button type="submit" class="btn btn-primary" id="board-creator1">Submit</button>
        <button type="cancel" class="btn btn-primary" id="backToMainBoards1">Cancel</button>
      </form>
    </div>
  `;

  utils.printToDom('#create-pin', domString);
};

export default { showPinForm };
// below will use later for pin form:
/*
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
*/

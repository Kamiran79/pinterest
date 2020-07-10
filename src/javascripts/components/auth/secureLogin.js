import firebase from 'firebase/app';
import 'firebase/auth';
// import pinList from '../pinList/pinList';
// import userList from '../userList/userList';
import home from '../home/buildHome';
import boardList from '../boardList/boardList';

const authDiv = $('#auth');
const logoutButton = $('#navbar-logout-button');
const homeDisplayDiv = $('#homeDisplay');
const pinCardDiv = $('#pinCard');
const userBoardDiv = $('#userBoard');
const singleBoardDiv = $('#single-board');
const createBoardDiv = $('#create-board');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      logoutButton.removeClass('hide');
      pinCardDiv.removeClass('hide');
      userBoardDiv.removeClass('hide');
      singleBoardDiv.removeClass('hide');
      createBoardDiv.removeClass('hide');
      homeDisplayDiv.addClass('hide');

      boardList.buildBoard(user.uid);
      boardList.boardsEvents();
      // pinList.buildPinCards();
      // userList.buildUser(user.uid);
    } else {
      authDiv.removeClass('hide');
      homeDisplayDiv.removeClass('hide');
      logoutButton.addClass('hide');
      singleBoardDiv.addClass('hide');
      pinCardDiv.addClass('hide');
      userBoardDiv.addClass('hide');
      createBoardDiv.addClass('hide');

      home.buildHomePage();
    }
    // console.warn(user);
  });
};

export default { checkLoginStatus };

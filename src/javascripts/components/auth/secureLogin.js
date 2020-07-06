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
const boardCardDiv = $('#boardCard');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      logoutButton.removeClass('hide');
      boardCardDiv.removeClass('hide');
      pinCardDiv.removeClass('hide');
      userBoardDiv.removeClass('hide');
      homeDisplayDiv.addClass('hide');
      boardList.buildBoard('user1');
      // pinList.buildPinCards();
      // userList.buildUser(user.uid);
    } else {
      authDiv.removeClass('hide');
      homeDisplayDiv.removeClass('hide');
      logoutButton.addClass('hide');
      boardCardDiv.addClass('hide');
      pinCardDiv.addClass('hide');
      userBoardDiv.addClass('hide');

      home.buildHomePage();
    }
    console.warn(user);
  });
};

export default { checkLoginStatus };

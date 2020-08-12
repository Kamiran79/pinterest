import firebase from 'firebase/app';
import 'firebase/auth';
// import pinList from '../pinList/pinList';
// import userList from '../userList/userList';
import home from '../home/buildHome';
import boardList from '../boardList/boardList';
import userData from '../../helpers/data/userData';

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

      // check user if there or not will add that user to user table or temp table to get auth from admin
      userData.getUserByUid(user.uid)
        .then((response) => {
          // console.warn('this is the user return', response[0].id);
          // const selectedUser = response.filter((findUser) => findUser.uid === user.uid);
          // console.warn('this filter find user ', selectedUser);
          if (response.length === 0) {
            // console.warn('object user not on the table', user.displayName);
            const newUser = {
              uid: user.uid,
              name: user.displayName,
              photoURL: user.photoURL,
            };
            // console.warn(newUser);
            userData.addUser(newUser);
          }
        })
        .catch((err) => console.warn('error to get that user', err));

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

import firebase from 'firebase/app';
import 'firebase/auth';

const authDiv = $('#auth');
const logoutButton = $('#navbar-logout-button');
const boardDiv = $('#board');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      logoutButton.removeClass('hide');
      boardDiv.removeClass('hide');
    } else {
      authDiv.removeClass('hide');
      logoutButton.addClass('hide');
      boardDiv.addClass('hide');
    }
    console.warn(user);
  });
};

export default { checkLoginStatus };

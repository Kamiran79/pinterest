import firebase from 'firebase/app';
import 'firebase/auth';

import utils from '../../helpers/utils';

const signMeIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(googleProvider);
};

const loginButton = () => {
  const domString = '<button id="google-auth" class="btn btn-warning"><i class="fab fa-google-plus"></i> LOGIN</button>';
  utils.printToDom('#auth', domString);
  $('#google-auth').click(signMeIn);
};

const getUser = () => firebase.auth().currentUser;

export default { loginButton, getUser };

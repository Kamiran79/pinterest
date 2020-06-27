import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';

import loginAuth from './components/auth/login';
import secureAuth from './components/auth/secureLogin';
import logoutAuth from './components/auth/logout';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  secureAuth.checkLoginStatus();
  loginAuth.loginButton();
  logoutAuth.logoutEvent();
};

init();

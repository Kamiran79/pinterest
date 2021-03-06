import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';

import loginAuth from './components/auth/login';
import secureAuth from './components/auth/secureLogin';
import logoutAuth from './components/auth/logout';

import '../styles/main.scss';
// import pinList from './components/pinList/pinList';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  // pinList.buildPinCards();
  secureAuth.checkLoginStatus();
  loginAuth.loginButton();
  logoutAuth.logoutEvent();
/*
  $('body').on('mouseenter', '.myco-card', (e) => {
    e.target.closest('.card').classList.add('bg-dark');
  });
  $('body').on('mouseleave', '.myco-card', (e) => {
    e.target.closest('.card').classList.remove('bg-dark');
  });
*/
};

init();

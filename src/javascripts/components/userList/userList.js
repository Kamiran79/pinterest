import userData from '../../helpers/data/userData';
import myUser from '../user/user';
import utils from '../../helpers/utils';

import './userList.scss';

const buildUser = (myUserId) => {
  userData.getUsers()
    .then((users) => {
      let domString = `
        <div class="userBoard">
          <h2 class="text-center">user Board</h2>
          <div class="d-flex flex-wrap">
      `;
      // const isLoggedIn = () => firebase.auth().currentUser !== null;
      // console.warn(firebase.auth().currentUser.displayName);
      // console.warn(isLoggedIn);
      users.forEach((user) => {
        if (user.uid === myUserId) {
          domString += myUser.userMaker(user);
        }
      });

      domString += '</div></div>';

      utils.printToDom('#userBoard', domString);

      // $('body').on('click', '.myco-card', singleMycologist.buildMycologist);
    })
    .catch((err) => console.error('getUsers faild', err));
};

export default { buildUser };

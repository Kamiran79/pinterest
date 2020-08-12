import utils from '../../helpers/utils';
import './buildHome.scss';

const buildHomePage = () => {
  let domString = '<h1 class="homePage">Welcome To Pinterest Demo !!</h1>';
  domString = `
    <div class="card text-center m-5">
      <div class="card-header c-header">
        Pinterest Demo
      </div>
      <div class="card-body">
        <h5 class="card-title">Welcome To Pinterest Demo !!</h5>
        <p class="card-text">Login with google account to see the features!!</p>
      </div>
      <div class="card-footer cFooter text-muted">
        <i class="fas fa-copyright"></i> Kamiran Ibrahim
      </div>
    </div>
  `;
  utils.printToDom('#homeDisplay', domString);
  domString = '';
  utils.printToDom('#pinCard', domString);
  utils.printToDom('#userBoard', domString);
};

export default { buildHomePage };

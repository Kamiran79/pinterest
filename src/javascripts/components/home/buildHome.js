import utils from '../../helpers/utils';
import './buildHome.scss';

const buildHomePage = () => {
  let domString = '<h1 class="homePage">Welcome To Pinterest Demo !!</h1>';
  utils.printToDom('#homeDisplay', domString);
  domString = '';
  utils.printToDom('#pinCard', domString);
  utils.printToDom('#userBoard', domString);
};

export default { buildHomePage };

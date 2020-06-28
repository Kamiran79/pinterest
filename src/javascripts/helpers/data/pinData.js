import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getPinCards = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pin.json`)
    .then((response) => {
      const pinObjects = response.data;
      const pinCards = [];
      if (pinObjects) {
        Object.keys(pinObjects).forEach((pinId) => {
          pinObjects[pinId].id = pinId;
          pinCards.push(pinObjects[pinId]);
        });
      }
      resolve(pinCards);
    })
    .catch((err) => reject(err));
});

export default { getPinCards };

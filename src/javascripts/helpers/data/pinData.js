import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getPinCards = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json`)
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
// getting my pins for my single board selected!!
const getMyPinsByBoardId = (boardId) => new Promise((reslove, reject) => {
  axios.get(`${baseUrl}/pins.json?orderBy="boardId"&equalTo="${boardId}"`)
    .then((response) => {
      const pinObjects = response.data;
      const pins = [];
      Object.keys(pinObjects).forEach((pinId) => {
        pinObjects[pinId].id = pinId;
        pins.push(pinObjects[pinId]);
      });

      reslove(pins);
    })
    .catch((err) => reject(err));
});

export default { getPinCards, getMyPinsByBoardId };

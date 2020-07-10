import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getBoardByUid = (uid) => new Promise((resolve, reject) => {
  // console.warn('called me from the buildBoard');
  // axios.get(`${baseUrl}/boards.json?orderBy="uid"&equalTo="${uid}"`)
  axios.get(`${baseUrl}/boards.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      // console.warn('this response is');
      const userboardObjects = response.data;
      const userBoards = [];
      Object.keys(userboardObjects).forEach((boardId) => {
        userboardObjects[boardId].id = boardId;
        userBoards.push(userboardObjects[boardId]);
      });
      resolve(userBoards);
    })
    .catch((err) => reject(err));
});

const deletBoard = (boardId) => axios.delete(`${baseUrl}/boards/${boardId}.json`);

const addBoard = (newBoardObj) => axios.post(`${baseUrl}/boards.json`, newBoardObj);

export default { getBoardByUid, deletBoard, addBoard };

// const getBoardByUserUid = (uid) => axios.get(`${baseUrl}/boards.json?orderBy="uid"&equalTo="${uid}"`);

// const getBoardById = (boardId) => axios.get(`${baseUrl}/boards/${boardId}.json`);

/*
const getMyBoards = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards.json`)
    .then((response) => {
      const boardObjects = response.data;
      const boards = [];
      Object.keys(boardObjects).forEach((boardId) => {
        boardObjects[boardId].id = boardId;
        boards.push(boardObjects[boardId]);
      });
      resolve(boards);
    })
    .catch((err) => reject(err));
});
*/

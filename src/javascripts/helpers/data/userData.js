import axios from 'axios';
import apiKey from '../apiKeys.json';

const baseUrl = apiKey.firebaseConfig.databaseURL;

const getUsers = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/users.json`)
    .then((response) => {
      const userObjects = response.data;
      const users = [];
      Object.keys(userObjects).forEach((userId) => {
        userObjects[userId].id = userId;
        users.push(userObjects[userId]);
      });
      resolve(users);
    })
    .catch((err) => reject(err));
});

const getUserById = (userId) => axios.get(`${baseUrl}/users/${userId}.json`);

// const getUserByUid = (uid) => axios.get(`${baseUrl}/user/${uid}.json`);
const getUserByUid = (uid) => axios.get(`${baseUrl}/users.json?orderBy="uid"&equalTo="${uid}"`);
// const getMycologistById = (mycologistId) => axios.get(`${baseUrl}/mycologists/${mycologistId}.json`);

export default { getUsers, getUserById, getUserByUid };

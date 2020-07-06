import axios from 'axios';
import apiKey from '../apiKeys.json';

const baseUrl = apiKey.firebaseConfig.databaseURL;

const getBrands = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/brands.json`)
    .then((response) => {
      const brandObjects = response.data;
      const brands = [];
      Object.keys(brandObjects).forEach((brandId) => {
        brandObjects[brandId].id = brandId;
        brands.push(brandObjects[brandId]);
      });
      resolve(brands);
    })
    .catch((err) => reject(err));
});

const getBrandById = (brandId) => axios.get(`${baseUrl}/brands/${brandId.json}`);

export default { getBrands, getBrandById };

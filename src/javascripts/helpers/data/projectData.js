import axios from 'axios';
import apiKeys from '../../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects.json`).then((response) => {
    const demProjects = response.data;
    const projects = [];
    if (demProjects) {
      Object.keys(demProjects).forEach((projectId) => {
        projects.push(demProjects[projectId]);
      });
      console.warn(projects);
    }
    resolve(projects);
  }).catch((error) => reject(error));
});

export default { getProjects };

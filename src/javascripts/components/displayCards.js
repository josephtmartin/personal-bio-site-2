import getProjects from '../helpers/data/projectData';
import card from './makeCards';

const displayProjects = () => {
  getProjects.getProjects().then((response) => {
    if (response.length) {
      response.forEach((item) => {
        $('#projectsPage').append(card.projectMaker(item));
      });
    } else {
      $('#projectsPage').html('<h1>No Projects</h1>');
    }
  });
};

export default { displayProjects };

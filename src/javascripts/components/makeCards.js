const projectMaker = (project) => {
  const domString = `
<div class="card-container">
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="${project.screenshot}" alt="Card image cap">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${project.title}</h5>
        <p class="card-text">${project.description}</p>
        <h5 class="tech-used-title">Tech Used:</h5>
        <p class="tech-used-p">${project.technologiesUsed}</p>
        <a href="${project.url}" class="btn btn-outline-dark mt-auto" target="_blank">Live Demo</a>
        <a href="${project.githubUrl}" class="btn btn-outline-dark mt-auto" target="_blank">Project Link</a>
      </div>
    </div>
  </div>
`;
  return domString;
};

export default { projectMaker };

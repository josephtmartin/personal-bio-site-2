const projectMaker = (project) => {
  const domString = `
<div class="container-fluid">
    <div class="row proj-row">
      <div class="col-md-5">
        <img class="card-img-top" src="${project.screenshot}" alt="Card image cap">
      </div>
      <div class="col-md-7">
        <h2 class="proj-title">${project.title}</h2>
        <h5 class="description">${project.description}</h5>
        <p>
        <b>Technologies Used:</b>
          ${project.technologiesUsed}
        </p>
        <a href="${project.url}" class="btn btn-outline-light mt-auto m-2" target="_blank">Live Demo</a>
        <a href="${project.githubUrl}" class="btn btn-outline-light mt-auto m-2" target="_blank">Github Project</a>
      </div>
    </div>
  </div>
`;
  return domString;
};

export default { projectMaker };

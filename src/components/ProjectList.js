import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ project }) {
  console.log(project);
  
  return (
    <div id="project">
      <h2>My Projects</h2>
      <div id="project-list">
      </div>
    </div>
  );
}

export default ProjectList;

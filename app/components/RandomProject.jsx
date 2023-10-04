// 'use client'
// import React, { useState } from 'react';


// const RandomProject = ({ projectData }) => {
//   const [project, setProject] = useState(null);

//   const handleClick = () => {
//     const randomId = Math.floor(Math.random() * projectData.length);
//     setProject(projectData[randomId]);
//   };

// //   const handleClick = () => {
// //     const randomId = Math.trunc(Math.random() * projectData.length) + 1;
// //     const randomProject = projectData.find(project => project.id === randomId);
// //     setProject(randomProject);
// //   };

//   return (
//     <div>
//       <button onClick={handleClick}>Show Random Project</button>
//       {project && (
//         <div>
//           <h2>{project.name}</h2>
//           <img src={project.image} alt={project.name} />
//           <p>{project.description}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RandomProject;

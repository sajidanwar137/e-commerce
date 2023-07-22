import React, { useState } from 'react';

const Breadcrumb = () => {
  const [paths, setPaths] = useState([]);

  const addPath = (path) => {
    setPaths((prevPaths) => [...prevPaths, path]);
  };

  return (
    <nav>
      <ul>
        {paths.map((path, index) => (
          <li key={index}>{path}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;

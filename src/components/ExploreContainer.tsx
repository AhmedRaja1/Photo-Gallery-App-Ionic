import React from 'react';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>We here at Reliance, are working hard to provide you this feature soon!</p>
    </div>
  );
};

export default ExploreContainer;

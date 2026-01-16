import React from 'react';
import './SectionContainer.css';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`section-container ${className}`}>
      {children}
    </div>
  );
};

export default SectionContainer;

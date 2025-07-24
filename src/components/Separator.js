import React from 'react';

export const Separator = ({ className = '' }) => {
  return (
    <div className={`h-px w-full bg-gray-200 ${className}`} />
  );
};

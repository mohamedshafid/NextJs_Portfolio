import React from 'react';

const ProgressBar = ({percent}) => {
  return (
    <div className="h-5 bg-gray-400 rounded-full overflow-hidden">
      <div
        className="bg-black/80 rounded-full h-5 transition-all duration-300 ease-in-out flex items-center justify-center text-white"
        style={{ width: `${percent}%` }}
      >
       {percent}%
      </div>
    </div>
  );
}

export default ProgressBar;
import React from 'react';
import './App.css';

const Page = ({ nextPage, prevPage }) => {
  return (
    <div className="Page"> 
      {prevPage && <button onClick={prevPage} className="page-button">Previous</button>}
      {nextPage && <button onClick={nextPage} className="page-button">Next</button>}
    </div>
  );
};

export default Page;

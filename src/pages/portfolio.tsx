import React from 'react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white text-gray-dark p-8">
      <h1 className="text-3xl font-bold mb-4">Portfolio</h1>
      <p>Découvrez quelques-uns de nos projets récents.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <div className="bg-gray-light p-4 rounded shadow">Projet 1</div>
        <div className="bg-gray-light p-4 rounded shadow">Projet 2</div>
        <div className="bg-gray-light p-4 rounded shadow">Projet 3</div>
      </div>
    </div>
  );
};

export default Portfolio;

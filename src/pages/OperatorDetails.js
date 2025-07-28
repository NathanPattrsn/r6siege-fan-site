import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import operatorData from '../data/Operators'; // Your map data source

function OperatorDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const operator = operatorData.find((operator) => operator.id === parseInt(id));
  const [selectedModelUrl, setSelectedModelUrl] = useState(null);

  if (!operator) {
    return (
      <div className="text-white p-10">
        <p>Operator not found</p>
        <button onClick={() => navigate(-1)} className="mt-4 bg-r6sRed px-4 py-2 rounded hover:bg-opacity-80">
          ← Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 font-r6s relative">
      <div className="absolute inset-0 bg-map-bg bg-cover bg-center" />
      <div className="absolute inset-0 bg-black opacity-70" />
      <div className="relative z-10 flex flex-col items-start w-full max-w-6xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 mt-20 bg-r6sRed px-4 py-2 rounded hover:bg-opacity-80"
        >
          ← Back to Operators
        </button>

         <div className="flex flex-col md:flex-row md:items-start gap-8 mb-8">
          <img
            src={operator.imageUrl}
            alt={operator.name}
            className="w-full md:w-96 max-w-3xl rounded border border-gray-700 object-cover shadow-lg mb-4 md:mb-0"
          />
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{operator.name}</h1>
            <p className="mb-6">{operator.description}</p>
            <h2 className="text-2xl font-bold mb-4">Operator Details</h2>
            <p className="mb-2"><strong>Role:</strong> {operator.role}</p>
            <p className="mb-2"><strong>Ability:</strong> {operator.ability}</p>
            <p className="mb-2"><strong>Speed:</strong> {operator.speed}</p>
            <p className="mb-2"><strong>Armor:</strong> {operator.armor}</p>
          </div>
        </div>

        <div className="w-full">
          <h3 className="text-xl font-semibold mt-6 mb-2">Weapons</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {operator.weapons.map((weapon, index) => (
              <div key={index} className="border rounded p-4 bg-gray-800">
                <img src={weapon.image} alt={weapon.name} className="w-full h-32 object-cover mb-2 rounded" />
                <h4 className="font-bold text-lg">{weapon.name}</h4>
                  <button
                    onClick={() => setSelectedModelUrl(weapon.sketchfabEmbedUrl)}
                    className="text-blue-400 hover:underline mt-2"
                  >
                    View 3D Model
                  </button>
              </div>
            ))}
          </div>
        </div>

            {selectedModelUrl && (
            <div className="mt-8 w-full">
              <h3 className="text-xl font-semibold mb-2">3D Model Viewer</h3>
              <div className="relative w-full h-[500px] rounded-lg overflow-hidden border border-gray-400">
                <iframe
                  title="Sketchfab Model"
                  width="100%"
                  height="100%"
                  src={selectedModelUrl}
                  frameBorder="0"
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  allowFullScreen
                  mozallowfullscreen="true"
                  webkitallowfullscreen="true"
                ></iframe>
              </div>
              <button
                onClick={() => setSelectedModelUrl(null)}
                className="mt-4 bg-red-600 px-4 py-2 rounded hover:bg-opacity-80"
              >
                Close Viewer
              </button>
            </div>
          )}
      </div>
    </div>
  );
}

export default OperatorDetails;

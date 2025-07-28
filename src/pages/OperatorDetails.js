import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import operatorData from '../data/Operators'; // Your map data source

function OperatorDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const operator = operatorData.find((operator) => operator.id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (layout) => {
    setSelectedImage(layout);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') handleClose();
  };

  useEffect(() => {
    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

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
          </div>
        </div>

      </div>
    </div>
  );
}

export default OperatorDetails;

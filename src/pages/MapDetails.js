import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import mapsData from '../data/Maps'; // Your map data source

function MapDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const map = mapsData.find((map) => map.id === parseInt(id));

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

  if (!map) {
    return (
      <div className="text-white p-10">
        <p>Map not found</p>
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
          ← Back to Maps
        </button>

         <div className="flex flex-col md:flex-row md:items-start gap-8 mb-8">
          <img
            src={map.imageUrl}
            alt={map.name}
            className="w-full md:w-96 max-w-3xl rounded border border-gray-700 object-cover shadow-lg mb-4 md:mb-0"
          />
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{map.name}</h1>
            <p className="text-sm mb-4 italic">
              {map.location} • Released: {map.released}
            </p>
            <p className="mb-6">{map.description}</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Layouts / Schematics</h2>
          <div className="map-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 justify-items-center">
          {map.layoutImages?.map((layout, idx) => (
            <div
              key={idx}
              className="bg-gray-900 bg-opacity-80 rounded-lg shadow-lg overflow-hidden border border-gray-700 flex flex-col transition-transform hover:scale-105 cursor-pointer w-full max-w-sm"
              onClick={() => handleImageClick(layout)}
            >
              <img
                src={layout.src}
                alt={layout.label}
                className="w-full h-56 object-cover bg-black"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1 text-white">{layout.label}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
          onClick={handleClose}
        >
          <div
            className="relative max-w-5xl w-full p-4"
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-r6sRed"
            >
              &times;
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.label}
              className="w-full max-h-[90vh] object-contain rounded-lg border border-gray-600"
            />
            <p className="mt-4 text-center text-white text-lg font-semibold">
              {selectedImage.label}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MapDetails;

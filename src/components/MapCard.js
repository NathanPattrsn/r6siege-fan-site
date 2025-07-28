import React from 'react';
import { Link } from 'react-router-dom';

function MapCard({ id, name, imageUrl }) {
  return (
    <Link to={`/maps/${id}`} className="block border rounded shadow hover:shadow-lg">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover rounded-t" />
      <div className="p-4 bg-gray-900 rounded-b">
        <h2 className="font-bold text-lg font-r6s text-white">{name}</h2>
      </div>
    </Link>
  );
}

export default MapCard;

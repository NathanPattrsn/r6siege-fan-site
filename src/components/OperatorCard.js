import React from 'react';
import { Link } from 'react-router-dom';

function OperatorCard({ operator }) {
  return (
    <Link to={`/operators/${operator.id}`} className="block border rounded shadow hover:shadow-lg">
      <img src={operator.imageUrl} alt={operator.name} className="w-60 h-48 object-cover rounded-t mx-auto" />
      <div className="p-4 bg-gray-900 rounded-b">
        <h2 className="font-bold text-lg font-r6s text-white">{operator.name}</h2>
        <h3 className="font-bold text-md font-r6s text-gray-400">{operator.role}</h3>
      </div>
    </Link>
  );
}

export default OperatorCard;

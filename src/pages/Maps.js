import React, { useState } from 'react';
import MapCard from '../components/MapCard';
import maps from '../data/Maps';

function Maps() {
  const [category, setCategory] = useState('casual');
  const filteredMaps = maps.filter(map => map.category.includes(category));

  return (
  <div className="min-h-screen relative flex items-start justify-center overflow-x-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-map-bg bg-cover bg-center" />
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70" />
    <div className="relative z-10 flex flex-col items-center w-full pt-24 pb-12">
      <div className="flex items-center gap-4">
        <h1 className="text-white font-r6s text-4xl text-center px-4">Maps</h1>
        <h4 className="text-r6sRed text-lg font-r6s">
          {filteredMaps.length} Result{filteredMaps.length === 1 ? '' : 's'}
        </h4>
      </div>
      <div className="category-buttons flex flex-wrap justify-center gap-4 mb-6 mt-3 font-r6s text-sm">
        {['casual', 'ranked', 'unranked', 'team deathmatch', 'dual front'].map((cat) => {
          // Capitalize first letter of each word, and also first letter of 3rd word if exists
          const words = cat.split(' ');
          const formatted = words
            .map((word, idx) => {
              if (idx === 0 || idx === 1) {
                return word.charAt(0).toUpperCase() + word.slice(1);
              }
              return word;
            })
            .join(' ');
          return (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded ${
                category === cat ? 'bg-r6sRed text-white' : 'bg-gray-200 text-black'
              }`}
            >
              {formatted}
            </button>
          );
        })}
      </div>

    <div className="map-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
      {[...filteredMaps]
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((map) => (
          <MapCard
            key={map.id}
            id={map.id}
            name={map.name}
            imageUrl={map.imageUrl}
          />
        ))}
    </div>
    </div>
  </div>
  );
}

export default Maps;

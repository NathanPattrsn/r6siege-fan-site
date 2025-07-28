import React from 'react';
import operators from '../data/Operators';
import OperatorCard from '../components/OperatorCard';

function Operators() {
  return (
  <div className="min-h-screen relative flex items-start justify-center overflow-x-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-map-bg bg-cover bg-center" />
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70" />
    <div className="relative z-10 flex flex-col items-center w-full pt-24 pb-12">
      <h1 className='text-white font-r6s text-4xl text-center px-4'>Operators</h1>
      <div className="operator-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {operators.map(op => (
          <OperatorCard key={op.id} operator={op} />
        ))}
      </div>
    </div>
    </div>
  );
}

export default Operators;

import React from 'react';
import { Typography} from "@material-tailwind/react";



const InterestSelector = ({ interests, selectedInterests, toggleInterest, showAlert, categoryIcons}) => {
  const progressBarWidth = '50%'; // Siempre se muestra completa

  return (
  <div className='w-1440 h-1024 mx-auto p-4'>
  <div className="flex justify-between items-center"></div>
    <div className='mt-2 mb-4 text-left'>
        <Typography variant="h4" font="poppins" weight="semibold" className="mt-4 mb-2 text=sm">
        Paso 2: Intereses
      </Typography>

      <div className="w-full bg-neutral-200 dark:bg-neutral-600">
        <div
          className="bg-black p-1 text-center text-xs font-medium leading-none text-primary-100 rounded-full"
          style={{ width: progressBarWidth }}
        ></div>
      </div>

      <Typography variant="caption" font="poppins" className="mt-4 mb-6 text-sm">
        Selecciona los tipos de eventos que te gustaría ver:
      </Typography>

      <div className="mt-1 mb-10 block rounded-lg bg-secondary-400 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <ul className="text-xs grid w-full gap-5 md:grid-cols-3">
  {interests.map((interest, index) => {
    const Icon = categoryIcons[interest.categoria]; // Obtener el icono según la categoría
    
    return (
      <li
        key={index}
        className={`p-2 border border-gray-400 rounded-lg cursor-pointer hover:bg-back-100 ${
          selectedInterests.includes(interest.nombre) ? 'bg-gray-900 text-white' : ''
        }`}
        onClick={() => toggleInterest(interest.nombre)}
      >
      <div className="flex items-center">
        {Icon && <Icon className="h-4 w-4 mr-2" />}
        <Typography variant="paragraph" font="poppins" className="text-xs">
          {interest.nombre}
        </Typography>
      </div>
      </li>
    );
  })}
   </ul>
  </div>
  </div>
</div>
  );
};

export default InterestSelector;
























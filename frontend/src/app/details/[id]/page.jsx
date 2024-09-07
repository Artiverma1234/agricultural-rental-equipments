'use client';
import data from '@/equipmentData';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';

const EquipmentDetail = () => {
  const { id } = useParams();
  const [equipment, setEquipment] = useState(data.find(obj => obj.id == id) || {});
  console.log(equipment);

  return (
    <div className='h-screen bg-cover' style={{backgroundImage: `url("https://img.freepik.com/premium-photo/green-background-wallpaper_764067-698.jpg")`}}>
    <div className="mx-auto max-w-5xl py-8 px-4">
      <div className='grid grid-cols-12 gap-20'>
        <div className='col-span-4 '>

          <div className="my-6  " >
            <img src={equipment.image} alt={equipment.title} className=" object-contain rounded-lg" />
          </div>
        </div>
        <div className='col-span-8 my-auto'>
        
          <h1 className="text-lg">{equipment.brand}</h1>
          <h1 className="text-4xl font-bold text-green-700">{equipment.title}</h1>
          <p className="text-xl text-gray-800">{equipment.category}</p>
          <p className="text-lg text-gray-500">{equipment.size}</p>
          <p className="text-xl font-semibold text-yellow-500">₹{equipment.price} per day</p>
          <p className="text-lg">{equipment.description}</p>
        </div>
      </div>
      {/* Add more details as needed */}
    </div>
    </div>
  );
};

export default EquipmentDetail;
'use client';
import Image from 'next/image';
import Link from 'next/link';
import Jays from '../../public/jays.jpg'
import React, { useEffect, useState } from 'react';

function HomePage() {
  const [loading, setLoading] = useState(true);

  // Simulate loading process
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);  // After 2 seconds, set loading to false
    }, 2000); 

    return () => clearTimeout(timer);  
  }, []);


  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-[100vh]">
      <div className='text-center text-lg animate-spin h-6  mr-3 border-2 border-white rounded-full '>
      </div>
  </div>
    );
  }

  return (
    <div className='flex flex-col justify-center items-center h-[100vh]'>

      <Image src={Jays} alt='jays image' className='w-[50px] h-[50px] rounded-md mb-4'/>
      <div className='flex flex-col items-center justify-center text-center'>
        <h1 className='text-[30px] font-semibold tracking-tight'>Welcome to Jays Practice</h1>
        <p className='opacity-70 text-[16px] font-light'>Here are the recent APIs I've called</p>
      </div>

      <div className='mt-[30px] flex flex-row gap-4 justify-center items-center'>
        <Link href='/posts' className='bg-transparent border border-[#ffffff27] py-4 px-5 rounded-md hover:bg-[#ffffff10]'>JSON Placeholder</Link>
        <Link href='/weather' className='bg-transparent border border-[#ffffff27] py-4 px-5 rounded-md hover:bg-[#ffffff10]'>Weather App</Link>
      </div>
    </div>
  );
}

export default HomePage;

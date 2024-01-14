import React from "react";
import NeuronRenderer from "./NeuronRenderer";

const Analytics = () => {
  return (
    <div className='w-full h-1/2 bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto items-center grid md:grid-cols-2'>
        <div className='flex justify-center items-center'>
          <NeuronRenderer />
        </div>
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>
            Neuron : The basic building block of brain
          </p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Brain Tumor Affect The Neuron
          </h1>
          <p className='text-lg'>
            A brain tumor can affect neurons by compressing, displacing, and
            damaging them as it grows. This interference can disrupt normal
            neurological function, causing symptoms such as seizures, headaches,
            and cognitive changes. Treatment involves methods to remove or
            shrink the tumor, aiming to alleviate pressure on the surrounding
            brain structures and restore normal neuronal activity.
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

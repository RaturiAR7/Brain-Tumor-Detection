import { useRef, useEffect } from "react";
import NeuronRenderer from "./NeuronRenderer";
import "./App.css";

const Analytics = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          section.classList.add("animate"); // Add a CSS class for animation
        } else {
          section.classList.remove("animate"); // Remove the CSS class for animation
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.5, // Adjust the threshold as needed
    });

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className='w-full h-auto bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-4'>
        <div className='flex justify-center items-center'>
          <NeuronRenderer />
        </div>
        <div
          ref={sectionRef}
          className='animated-section flex flex-col justify-center'
        >
          <p className='text-[#00df9a] font-bold '>
            Neuron: The basic building block of the brain
          </p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Brain Tumor Affects the Neuron
          </h1>
          <p className='text-lg'>
            A brain tumor can affect neurons by compressing, displacing, and
            damaging them as it grows. This interference can disrupt normal
            neurological function, causing symptoms such as seizures, headaches,
            and cognitive changes. Treatment involves methods to remove or
            shrink the tumor, aiming to alleviate pressure on the surrounding
            brain structures and restore normal neuronal activity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

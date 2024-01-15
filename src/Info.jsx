const Info = () => {
  return (
    <div className=' flex flex-col md:flex-row h-full bg-black w-full '>
      <div className='h-full w-full md:w-1/2 py-10 m-3'>
        <h1 className='text-white m-3 text-center md:text-5xl sm:text-3xl text-2xl font-bold py-2'>
          Overview Of A Brain Tumor
        </h1>
        <div className='flex flex-col justify-center items-center'>
          <p className='text-white text-center text-lg m-2'>
            A brain tumor is an abnormal growth of cells within the brain or
            spinal cord, which can be either benign or malignant. Benign tumors
            are non-cancerous and typically grow slowly, while malignant tumors
            are cancerous and may spread to surrounding tissues. The effects of
            a brain tumor depend on its size, location, and type. Common
            symptoms include headaches, seizures, changes in vision, and
            personality alterations. The tumor can interfere with normal brain
            function, leading to neurological deficits such as weakness,
            numbness, or difficulty with speech and motor skills. Treatment
            options include surgery, radiation therapy, and chemotherapy, and
            the prognosis varies depending on factors like tumor type, stage,
            and the patient's overall health. Early detection and prompt
            intervention are crucial for effective management of brain tumors.
          </p>
        </div>
      </div>
      <div className='h-full w-full md:w-1/2 py-10 m-3'>
        <h1 className='text-white text-center m-3 md:text-5xl sm:text-3xl text-2xl font-bold py-2'>
          Symptoms
        </h1>
        <div className='flex flex-col justify-center items-center'>
          <p className='text-white text-center w-4/5 font-semibold'>
            Signs and symptoms of mental illness can vary, depending on the
            disorder, circumstances and other factors. Mental illness symptoms
            can affect emotions, thoughts and behaviors. Examples of signs and
            symptoms include:
          </p>
          <ul className='text-white list-disc w-3/4'>
            <li className='text-white m-3'>Feeling sad or down</li>
            <li className='text-white m-3'>
              Confused thinking or reduced ability to concentrate
            </li>
            <li className='text-white m-3'>
              Excessive fears or worries, or extreme feelings of guilt
            </li>
            <li className='text-white m-3'>
              Extreme mood changes of highs and lows
            </li>
            <li className='text-white m-3'>
              Withdrawal from friends and activities
            </li>
            <li className='text-white m-3'>
              Significant tiredness, low energy or problems sleeping
            </li>
            <li className='text-white m-3'>
              Excessive anger, hostility or violence
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Info;

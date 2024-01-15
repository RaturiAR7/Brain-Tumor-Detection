const Info = () => {
  return (
    <div className=' flex flex-col md:flex-row h-full bg-black w-full '>
      <div className='h-full w-full md:w-1/2 py-10 m-3'>
        <h3 className='text-4xl text-center font-extrabold text-zinc-400 m-3'>
          Overview Of A Brain Tumor
        </h3>
        <div className='flex flex-col justify-center items-center'>
          <p className='text-center font-semibold text-lg m-2 text-zinc-400'>
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
        <h1 className='text-4xl text-center font-extrabold text-zinc-400 m-3'>
          Symptoms
        </h1>
        <div className='flex flex-col justify-center items-center'>
          <p className='text-center font-semibold text-lg m-2 text-zinc-400'>
            The signs and symptoms of a brain tumor can vary widely depending on
            factors such as the tumor's size, location, and rate of growth. It's
            important to note that some brain tumors may not cause noticeable
            symptoms, and they can be discovered incidentally during imaging
            studies for unrelated issues. Common signs and symptoms of a brain
            tumor may include:
          </p>
          <ul className='text-white list-disc w-3/4'>
            <li className='text-zinc-400 m-3'>
              Persistent or worsening headaches, often more severe in the
              morning.
            </li>
            <li className='text-zinc-400 m-3'>
              New-onset seizures or an increase in the frequency of existing
              seizures.
            </li>
            <li className='text-zinc-400 m-3'>
              Blurred or double vision, changes in peripheral vision, or
              difficulty with visual coordination.
            </li>
            <li className='text-zinc-400 m-3'>
              Weakness or numbness in the limbs, often on one side of the body.
            </li>
            <li className='text-zinc-400 m-3'>
              Unexplained nausea and vomiting, especially if it is persistent.
            </li>
            <li className='text-zinc-400 m-3'>
              Difficulty walking, lack of coordination, and problems with
              balance.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Info;

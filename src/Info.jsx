const Info = () => {
  return (
    <div className='bg-black h-full'>
      <h2 className='text-6xl text-center font-extrabold text-zinc-400'>
        Information
      </h2>
      <div className='h-1/2 w-1/2'>
        <div className='items-center flex-col justify-center'>
          <h3 className='text-4xl text-center font-extrabold text-zinc-400'>
            Causes Of Brain Tumor
          </h3>
          <p className='text-center text-lg font-extrabold text-zinc-400 m-10'>
            The exact causes of brain tumors are not always clear, and they can
            be influenced by a combination of genetic, environmental, and
            lifestyle factors. While the majority of brain tumors are not linked
            to specific causes, certain risk factors and associations have been
            identified. Here are some factors that may contribute to the
            development of brain tumors:
          </p>
          <ul className=' text-center font-bold text-zinc-400'>
            <span className='font-extrabold'>Genetic Factor: </span> Some rare
            genetic syndromes, such as neurofibromatosis, Li-Fraumeni syndrome,
            and von Hippel-Lindau disease, are associated with an increased risk
            of developing brain tumors.
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Info;

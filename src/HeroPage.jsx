const HeroPage = () => {
  return (
    <div className='h-screen w-full bg-black flex flex-col md:flex-row items-center justify-center'>
      <div className='h-1/2 md:w-1/2'>
        <div className='items-center flex-col justify-center'>
          <h1 className='text-6xl text-center font-extrabold text-zinc-400'>
            BRAIN TUMOR DETECTION
          </h1>
          <h5 className='text-center text-lg font-extrabold text-zinc-400 m-10'>
            Brain tumor detection through deep learning involves the use of
            advanced machine learning techniques, particularly deep neural
            networks, to analyze medical imaging data such as MRI scans for the
            presence of brain tumors.
          </h5>
        </div>
      </div>
      <div className='md:w-1/2 flex justify-center items-center'>
        <img
          src='https://miro.medium.com/v2/resize:fit:1400/format:webp/1*tb7LuJkv4b6o_MxleMKC1w.jpeg'
          alt=''
          className='w-3/4 rounded-xl'
        />
      </div>
    </div>
  );
};

export default HeroPage;

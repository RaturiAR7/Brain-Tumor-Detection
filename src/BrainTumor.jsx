import React, { useState, useEffect, useRef } from "react";
import * as tf from "@tensorflow/tfjs";

const BrainTumor = () => {
  const sectionRef = useRef(null);
  const [model, setModel] = useState(null);
  const [inputImage, setInputImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [predictionLoad, setPredictionLoad] = useState(false);

  useEffect(() => {
    const loadModel = async () => {
      try {
        console.log("Loading model...");
        const loadedModel = await tf.loadLayersModel(
          "https://raw.githubusercontent.com/RaturiAR7/model/main/covertedTumor/model.json"
        );
        console.log("Model loaded successfully:", loadedModel);
        loadedModel.summary(); // Log model summary
        setModel(loadedModel);
      } catch (error) {
        console.error("Error loading the model:", error);
      }
    };
    // Load the model when the component mounts
    loadModel();

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
  }, []);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setInputImage(file);
  };

  const handlePrediction = async () => {
    setPredictionLoad(true);
    if (model && inputImage) {
      try {
        // Load the image
        const imgElement = document.createElement("img");
        imgElement.src = URL.createObjectURL(inputImage);
        await imgElement.decode();
        const img = tf.browser.fromPixels(imgElement).toFloat();

        // Preprocess the image (if needed)
        // Example: normalize pixel values to be between 0 and 1
        const normalizedImg = img.div(tf.scalar(255));

        // Resize the image to the expected input shape
        const resizedImg = normalizedImg.resizeBilinear([224, 224]);

        // Reshape the image according to the model's input shape
        const reshapedImg = resizedImg.reshape([1, 224, 224, 3]);

        // Make the prediction
        const predictions = model.predict(reshapedImg);
        const percent = predictions.dataSync()[0];
        // console.log(percent);
        console.log(predictions.dataSync());
        if (percent > 0.7) setPrediction(true);
        else setPrediction(false);
        // Clean up resources
        img.dispose();
        normalizedImg.dispose();
        reshapedImg.dispose();
        setInputImage(null);
        setPredictionLoad(false);
      } catch (error) {
        console.error("Error making prediction:", error);
      }
    }
  };

  return (
    <div className='w-full'>
      <h2
        ref={sectionRef}
        className='animated-section md:text-6xl text-[#00df9a] sm:text-4xl text-2xl font-bold py-2 text-center'
      >
        Detect Brain Tumor
      </h2>
      <div className=' flex flex-col md:flex-row h-full bg-white w-full '>
        <div className='h-full w-full md:w-1/2 py-10 m-3'>
          <h3 className='text-4xl text-center font-extrabold text-black m-3'>
            How It Works?
          </h3>
          <div className='flex flex-col justify-center items-center'>
            <p className='text-center text-black text-lg m-4 '>
              Our platform utilizes advanced deep learning algorithms to analyze
              MRI images dropped by users, swiftly and accurately predicting the
              presence of brain tumors. The process is seamless – just upload
              your MRI scan, and our intelligent system will assess the data for
              potential abnormalities. It's a quick, non-invasive way to gain
              insights into your health. We prioritize your privacy. At{" "}
              <span className='font-semibold font'>
                AR7 Brain Tumor Detection
              </span>
              , we understand the sensitivity of medical information. Rest
              assured, we do not save or store any of the images you provide.
            </p>
          </div>
        </div>
        <div className='h-full w-full md:w-1/2 py-10 m-3'>
          <h1 className='text-4xl text-center font-extrabold text-black m-3'>
            Drop The Image
          </h1>
          <div className='flex flex-col justify-center items-center'>
            <input
              type='file'
              accept='image/*'
              onChange={handleImageChange}
              className='cursor-pointer'
              onClick={() => setPredictionLoad(false)}
            />
            <button
              onClick={handlePrediction}
              className='bg-black font-semibold text-[#00df9a] w-[200px] rounded-md text-lg my-6 mx-auto md:mx-0 py-2 hover:bg-slate-700'
            >
              Predict
            </button>

            {inputImage === null && predictionLoad === true && (
              <h4 className='font-bold'>Please select a MRI image</h4>
            )}
            {inputImage !== null && predictionLoad === true && (
              <h4 className='font-bold'>Detecting...</h4>
            )}
            {predictionLoad === false && prediction !== null && (
              <p className='text-black font-bold'>
                Prediction:{" "}
                {prediction ? (
                  <span className='text-red-500'>Brain Tumor Detected</span>
                ) : (
                  <span className='text-[#00df9a]'>
                    No Brain Tumor Detected
                  </span>
                )}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrainTumor;

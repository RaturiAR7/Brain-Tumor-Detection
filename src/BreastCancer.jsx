// import React, { useState, useEffect } from "react";
// import * as tf from "@tensorflow/tfjs";

// const BreastCancer = () => {
//   const [model, setModel] = useState(null);
//   const [inputImage, setInputImage] = useState(null);
//   const [prediction, setPrediction] = useState(null);

//   useEffect(() => {
//     const loadModel = async () => {
//       try {
//         console.log("Loading model...");
//         const loadedModel = await tf.loadLayersModel(
//           "https://raw.githubusercontent.com/RaturiAR7/model/main/convertedModelBreast/model.json"
//         );
//         console.log("Model loaded successfully:", loadedModel);
//         loadedModel.summary(); // Log model summary
//         setModel(loadedModel);
//       } catch (error) {
//         console.error("Error loading the model:", error);
//       }
//     };

//     // Load the model when the component mounts
//     loadModel();
//   }, []);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setInputImage(file);
//   };

//   const handlePrediction = async () => {
//     if (model && inputImage) {
//       try {
//         // Load the image
//         const imgElement = document.createElement("img");
//         imgElement.src = URL.createObjectURL(inputImage);
//         await imgElement.decode();
//         const img = tf.browser.fromPixels(imgElement).toFloat();

//         // Preprocess the image (if needed)
//         // Example: normalize pixel values to be between 0 and 1
//         const normalizedImg = img.div(tf.scalar(255));

//         // Resize the image to the expected input shape
//         const resizedImg = normalizedImg.resizeBilinear([224, 224]);

//         // Reshape the image according to the model's input shape
//         const reshapedImg = resizedImg.reshape([1, 224, 224, 3]);

//         // Make the prediction
//         const predictions = model.predict(reshapedImg);
//         const percent = predictions.dataSync()[0];
//         if (percent > 0.05) setPrediction(true);
//         else setPrediction(false);

//         // Clean up resources
//         img.dispose();
//         normalizedImg.dispose();
//         reshapedImg.dispose();
//       } catch (error) {
//         console.error("Error making prediction:", error);
//       }
//     }
//   };

//   return (
//     <div>
//       <input type='file' accept='image/*' onChange={handleImageChange} />
//       <button onClick={handlePrediction}>Predict</button>
//       {prediction !== null && <p>Prediction: {prediction ? "YES" : "NO"}</p>}
//     </div>
//   );
// };
// export default BreastCancer;

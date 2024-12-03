import React, { useState } from 'react';
import ImageUploader from './components/ImageUploader';
import PredictionDisplay from './components/PredictionDisplay';
import { classifyImage } from './utils/classifier';

function App() {
  const [prediction, setPrediction] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUpload = async (imageFile: File) => {
    setIsLoading(true);
    try {
      const result = await classifyImage(imageFile);
      setPrediction(result);
    } catch (error) {
      console.error('Error classifying image:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <h1 className="text-2xl font-bold text-center mb-8">
            Marigold Flower Classifier
          </h1>
          <ImageUploader onUpload={handleImageUpload} />
          <PredictionDisplay 
            prediction={prediction} 
            isLoading={isLoading} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;
import React from 'react';

interface PredictionDisplayProps {
  prediction: string | null;
  isLoading: boolean;
}

const PredictionDisplay: React.FC<PredictionDisplayProps> = ({ prediction, isLoading }) => {
  if (isLoading) {
    return (
      <div className="mt-6 text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
        <p className="mt-2 text-gray-600">Analyzing image...</p>
      </div>
    );
  }

  if (!prediction) {
    return null;
  }

  return (
    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
      <h2 className="text-lg font-semibold mb-2">Prediction Result:</h2>
      <p className="text-gray-700">{prediction}</p>
    </div>
  );
};

export default PredictionDisplay;
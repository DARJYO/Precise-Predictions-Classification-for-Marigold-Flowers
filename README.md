# Precise-Predictions-Classification-for-Marigold-Flowers

A modern web application that uses machine learning to classify different varieties of Marigold flowers using TensorFlow.js and React.

## Features

- 🌼 Real-time Marigold flower classification
- 📸 Drag-and-drop image upload interface
- 🚀 Fast and responsive user experience
- 💪 Built with modern technologies
- 📱 Mobile-friendly design

## Tech Stack

- **Frontend Framework**: React with TypeScript
- **Machine Learning**: TensorFlow.js
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Testing**: Vitest

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/darjyo/precise-predictions-classification-for-marigold-flowers.git
cd precise-predictions-classification-for-marigold-flowers
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Usage

1. Open the application in your web browser
2. Upload an image of a Marigold flower either by:
   - Dragging and dropping an image onto the upload area
   - Clicking the upload area to select an image from your device
3. Wait for the classification results
4. View the predicted Marigold variety

## Project Structure

```
src/
├── components/          # React components
│   ├── ImageUploader.tsx
│   └── PredictionDisplay.tsx
├── utils/              # Utility functions
│   └── classifier.ts   # TensorFlow.js integration
├── App.tsx            # Main application component
├── main.tsx          # Application entry point
└── index.css         # Global styles
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests

### Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Future Enhancements

- [ ] Implement model training pipeline
- [ ] Add support for more Marigold varieties
- [ ] Improve classification accuracy
- [ ] Add confidence scores to predictions
- [ ] Implement batch processing for multiple images

## License

This project is licensed under the DARJYO License - see the LICENSE file for details.

## Acknowledgments

- TensorFlow.js team for the machine learning framework
- React team for the frontend framework
- All contributors who help improve this project

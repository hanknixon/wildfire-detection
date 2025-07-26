# 🔥 Wildfire Detection System

A React-based interactive web application for visualizing wildfire events across the United States. The application displays historical wildfire data on an interactive Google Maps interface with fire alert markers and detailed event information.

## 🌟 Features

- **Interactive Map Visualization**: Google Maps integration showing wildfire locations across the US
- **Fire Event Markers**: Custom fire alert icons marking wildfire locations
- **Event Details**: Click on markers to view detailed information including:
  - Fire name and location
  - Date of occurrence
  - Burned acreage
  - Event descriptions
- **Mock Data**: Comprehensive dataset of 15 significant wildfires from multiple states
- **Loading Animation**: Smooth loading experience with spinner animation
- **Responsive Design**: Full viewport map display with informational header

## 🛠️ Tech Stack

- **Frontend**: React 19.1.0
- **Maps**: Google Maps React integration
- **Icons**: Iconify React with Material Design Icons
- **Styling**: Custom CSS
- **Build Tool**: Create React App
- **Testing**: React Testing Library & Jest

## 📦 Dependencies

- `react` & `react-dom` - Core React framework
- `google-map-react` - Google Maps integration
- `@iconify/react` & `@iconify/icons-mdi` - Icon system
- `react-scripts` - Build and development tools
- `@testing-library/*` - Testing utilities
- `web-vitals` - Performance monitoring

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- Google Maps API key

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd wildfire-detection
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add your Google Maps API key:
```
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

4. Start the development server:
```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── components/
│   ├── Map.js              # Main map component with Google Maps integration
│   ├── LocationMarker.js   # Fire marker component with click handlers
│   ├── Loader.js          # Loading spinner component
│   └── spinner.gif        # Loading animation asset
├── data/
│   └── mockEvents.js      # Mock wildfire event data (15 events)
├── App.js                 # Main application component
├── index.js              # Application entry point
└── index.css             # Global styles and component styling
```

## 🗺️ Data Coverage

The application includes mock data for wildfires from the following states:
- **California**: 5 major fires (Fairview, McKinney, Oak, Camp, Thomas)
- **Oregon**: 2 fires (Bootleg, Dixie)
- **Washington**: 1 fire (Cedar Creek)
- **Colorado**: 2 fires (Marshall, Cameron Peak)
- **Arizona**: 1 fire (Telegraph)
- **Montana**: 1 fire (Lick Creek)
- **Texas**: 1 fire (Eastland Complex)
- **New Mexico**: 1 fire (Hermits Peak/Calf Canyon)
- **Alaska**: 1 fire (East Fork)

## 🎯 Key Components

### Map Component (`src/components/Map.js`)
- Renders Google Maps with custom center and zoom
- Filters and displays wildfire events (category ID: 8)
- Handles marker clicks with alert popups
- Console logging for debugging API integration

### LocationMarker Component (`src/components/LocationMarker.js`)
- Custom fire alert icon using Iconify
- Click event handling for event details
- Positioned using latitude/longitude coordinates

### App Component (`src/App.js`)
- Main application logic and state management
- Loading state handling with 2-second simulation
- Event data fetching and display coordination
- Header with fire count and user instructions

## 🎨 Styling

- Full viewport map display (`100vh`)
- Red fire alert icons (2rem size)
- Centered loading screen with animation
- Clean header with event statistics

## 📱 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder

### `npm run eject`
**Note: This is a one-way operation!** Ejects from Create React App for custom configuration

## 🔧 Configuration

The application uses environment variables for API keys:
- `REACT_APP_GOOGLE_MAPS_API_KEY` - Required for Google Maps functionality

## 🚀 Deployment

The application is ready for deployment to any static hosting service. Run `npm run build` to create an optimized production build.

## 📄 License

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

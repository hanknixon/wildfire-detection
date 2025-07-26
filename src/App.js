import Map from './components/Map'
import Loader from './components/Loader'
import { useState, useEffect} from 'react';
import { mockWildfireEvents } from './data/mockEvents';

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      
      // Simulate loading time for realistic experience
      setTimeout(() => {
        console.log('Loading mock wildfire data...');
        setEventData(mockWildfireEvents);
        setLoading(false);
      }, 2000); // 2 second delay to show your loader
    }

    fetchEvents()
  }, [])
  
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div style={{padding: '10px', background: '#f0f0f0', margin: '10px'}}>
            <h2>🔥 Wildfire Detection System</h2>
            <p>📊 <strong>{eventData.length}</strong> wildfire events loaded</p>
            <p>📍 Click on any fire marker to see details</p>
          </div>
          <Map center={{ lat: 39.8, lng: -98.5 }} zoom={4} eventData={eventData} />
        </>
      )}
    </div>
  );
}

export default App;

import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'

const Map = ({center, zoom, eventData}) => {
  console.log('Map component rendering with:', { center, zoom });
  console.log('Google Maps API Key:', process.env.REACT_APP_GOOGLE_MAPS_API_KEY ? 'Present' : 'Missing');
  console.log('Event data:', eventData);
  
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
        defaultCenter={center}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals={true}
        onGoogleApiLoaded={({ map, maps }) => {
          console.log('Google Maps API loaded successfully');
        }}
        onChildMouseEnter={() => {}}
        onChildMouseLeave={() => {}}
      >
        {eventData && eventData.map(ev => {
          // Filter for wildfire events and get coordinates
          if (ev.categories[0].id === 8) {
            return ev.geometries.map((geo, index) => (
              <LocationMarker
                key={`${ev.id}-${index}`}
                lat={geo.coordinates[1]}
                lng={geo.coordinates[0]}
                onClick={() => {
                  const acreage = geo.magnitudeValue ? `${geo.magnitudeValue.toLocaleString()} ${geo.magnitudeUnit}` : 'Size unknown';
                  const date = new Date(geo.date).toLocaleDateString();
                  alert(`🔥 ${ev.title}\n📅 Date: ${date}\n📏 Size: ${acreage}\n📝 ${ev.description}`);
                }}
              />
            ));
          }
          return null;
        })}
      </GoogleMapReact>
    </div>
  )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 10
}

export default Map

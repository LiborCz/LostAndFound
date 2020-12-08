import React, {useState} from 'react'

import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'

export const Map = ({ eventData, center, zoom }) => {

  const [locationInfo, setLocationInfo] = useState(null);

  const fires = eventData.filter(ev => ev.categories[0].id===8);
  const locationMarkers = fires.map(ev => <LocationMarker 
    lat={ev.geometries[0].coordinates[1]}
    lng={ev.geometries[0].coordinates[0]} 
    onClick={() => setLocationInfo(ev)}
    />)

  return (
    <div className="map">

      {console.log("Ahoj") }

      {/* <GoogleMapReact bootstrapURLKeys={{ 
          key:process.env.REACT_APP_GCP_MAPS_API }}
          defaultCenter={center}
          defaultZoom={zoom}
          >

          {locationMarkers}

      </GoogleMapReact> */}

      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  )
}

Map.defaultProps = {
  center: {lat: 42.3265, lng: -122.8756},
  zoom: 6
}

export default Map;
import React, { useEffect, useRef, useState } from 'react';
import MapBoxgl, {Marker, Popup, ViewState} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function MapBox() {
    const mapRef = useRef(null);
    const [viewport, setViewport] = useState({
        latitude: 42.71,
        longitude: -84.5,
        zoom: 8
    });

    // bearing: 10,
    // pitch: 10,
    // padding: {top: 100, bottom: 100, left: 100, right: 100}

    return (
        <div className="relative">
            <MapBoxgl 
                {...viewport} 
                onMove={evt => setViewport(evt.viewState)}
                style={{width: '100vw', height: '100vh'}}
                mapStyle={"mapbox://styles/brettpost/clo4xjyom008501q288at2h7y"}
                mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            >

            </MapBoxgl>
        </div>
    )
  }
import React from 'react';

const MapContainer = ({ currentMap }) => {
    return (
        <div className="map-container">
            <iframe className="map-frame" src={`https://qed0711.github.io/real_estate_insights/map-${currentMap}.html`} height="500"
                width="500" />
        </div >
    )
}

export default MapContainer;
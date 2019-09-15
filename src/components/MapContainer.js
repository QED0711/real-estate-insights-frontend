import React from 'react';

const MapContainer = ({ currentMap }) => {
    return (
        <div className="map-container">
            <iframe className="map-frame" src={`https://qed0711.github.io/real_estate_insights/map-${currentMap}.html`}
            />
        </div >
    )
}

export default MapContainer;
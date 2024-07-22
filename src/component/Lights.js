import React, { useState } from 'react';
import './style.css';
import car from '../assets/car-img.png'

const Lights = () => {
    const [volume, setVolume] = useState(50); // Initial volume
    const [selectedHeadlight, setSelectedHeadlight] = useState('Auto'); // Default selected option for Headlights
    const [selectedFogLight, setSelectedFogLight] = useState(null);

    const handleVolumeChange = (event) => {
        setVolume(event.target.value);
    };

    const handleHeadlightSelect = (option) => {
        setSelectedHeadlight(option);
    };

    const handleFogLightSelect = (option) => {
        setSelectedFogLight(option);
    };

    return (
        <div className='lights-menu'>
            <div className='text-menu'>
                <h2>Lights</h2>
                <div>
                    <h3>Headlights</h3>
                    <ul>
                        {['Off', 'Parking', 'On', 'Auto'].map(option => (
                            <li
                                key={option}
                                className={selectedHeadlight === option ? 'selected' : ''}
                                onClick={() => handleHeadlightSelect(option)}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3>Fog Lights</h3>
                    <ul>
                        {['Front Fog', 'Back Fog'].map(option => (
                            <li
                                key={option}
                                className={selectedFogLight === option ? 'selected' : ''}
                                onClick={() => handleFogLightSelect(option)}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3>Angle {volume}</h3>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="volume-slider"
                    />
                </div>
            </div>
            <div className='image-menu'>
                <img src = {car} alt="Car" />
            </div>
        </div>
    );
}

export default Lights;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

const Header = () => {
    const [currentDate, setCurrentDate] = useState('');
    const [temperature, setTemperature] = useState(null);
    const [currentTime, setCurrentTime] = useState('');

    const [error, setError] = useState(null);
    const apiKey = '9841fbde75d6405d95e43c11e368429e'; 
    const cityId = '323786'; 
    
    function getTime() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
    
        hours = hours % 12;
        hours = hours ? hours : 12; 
        
        return `${hours}:${minutes} ${ampm}`;
    }
    
    function getDate() {
        const today = new Date();
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        const month = months[today.getMonth()];
        const day = today.getDate();
        return `${month} ${day}`;
    }

    async function fetchTemperature() {
        try {
            const response = await axios.get(`https://api.weatherbit.io/v2.0/current`, {
                params: {
                    city_id: cityId,
                    key: apiKey,
                    units: 'M' 
                }
            });
            setTemperature(response.data.data[0].temp);
            setError(null);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setError('Failed to fetch temperature.');
        }
    }
    useEffect(() => {
        setCurrentDate(getDate());
        fetchTemperature();
    
        const intervalId = setInterval(() => {
            fetchTemperature();
            setCurrentTime(getTime());
        }, 1000); // Update every second
    
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        setCurrentDate(getDate());
        fetchTemperature();

        const intervalId = setInterval(() => {
            fetchTemperature();
        }, 3600000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <nav className="navbar">
                <ul className="nav-menu">
                    <li>{currentDate}</li>
                    <li>{error ? error : (temperature !== null ? `${temperature}°C` : 'Loading...')}</li>
                </ul>
                <ul className="nav-menu">
                    <li>{currentTime}</li>
                </ul>
                <ul className="nav-menu rigth-side">
                    <li><i class="fa-solid fa-lock"></i> Clint</li>
                    <li><i class="fa-solid fa-signal"></i> 4G</li>
                    <li><i class="fa-brands fa-bluetooth-b"></i> 128 ml</li>
                    <li><i class="fa-solid fa-battery-three-quarters"></i></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;

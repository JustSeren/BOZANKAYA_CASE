import React, { useState } from 'react';
import { GiCarSeat, GiSteeringWheel } from "react-icons/gi";
import { IoCarSport } from "react-icons/io5";
import { LuFan } from "react-icons/lu";
import { PiHeadlights, PiWrench, PiDownloadSimple } from "react-icons/pi";
import { CgDisplayFullwidth } from "react-icons/cg";
import './Lights';
import './style.css';
import Lights from './Lights';

const Settings = () => {
    const [selectedSection, setSelectedSection] = useState('Lights');

    const renderSection = () => {
        switch (selectedSection) {
            case 'Car':
                return <div>Car Settings</div>;
            case 'Driving':
                return <div>Driving Settings</div>;
            case 'Seating':
                return <div>Seating Settings</div>;
            case 'Air':
                return <div>Air Settings</div>;
            case 'Lights':
                return <Lights/>;
            case 'Display':
                return <div>Display Settings</div>;
            case 'Services':
                return <div>Services Settings</div>;
            case 'Software':
                return <div>Software Settings</div>;
            default:
                return <div>Lights Settings</div>;
        }
    };

    return (
        <div className="settings-container">
            <div className='sidebar'>
                <ul className={selectedSection === 'Car' ? 'active' : ''} onClick={() => setSelectedSection('Car')}>
                    <li><IoCarSport /></li>
                    <li>Car</li>
                </ul>
                <ul className={selectedSection === 'Driving' ? 'active' : ''} onClick={() => setSelectedSection('Driving')}>
                    <li><GiSteeringWheel /></li>
                    <li>Driving</li>
                </ul>
                <ul className={selectedSection === 'Seating' ? 'active' : ''} onClick={() => setSelectedSection('Seating')}>
                    <li><GiCarSeat /></li>
                    <li>Seating</li>
                </ul>
                <ul className={selectedSection === 'Air' ? 'active' : ''} onClick={() => setSelectedSection('Air')}>
                    <li><LuFan /></li>
                    <li>Air</li>
                </ul>
                <ul className={selectedSection === 'Lights' ? 'active' : ''} onClick={() => setSelectedSection('Lights')}>
                    <li><PiHeadlights /></li>
                    <li>Lights</li>
                </ul>
                <ul className={selectedSection === 'Display' ? 'active' : ''} onClick={() => setSelectedSection('Display')}>
                    <li><CgDisplayFullwidth /></li>
                    <li>Display</li>
                </ul>
                <ul className={selectedSection === 'Services' ? 'active' : ''} onClick={() => setSelectedSection('Services')}>
                    <li><PiWrench /></li>
                    <li>Services</li>
                </ul>
                <ul className={selectedSection === 'Software' ? 'active' : ''} onClick={() => setSelectedSection('Software')}>
                    <li><PiDownloadSimple /></li>
                    <li>Software</li>
                </ul>
            </div>
            <div className='settings-content'>
                {renderSection()}
            </div>
        </div>
    );
}

export default Settings;

/** @format */

import React from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Projects from './components/Project';
import './styles/main.scss';

function App() {
    return (
        <div>
            <Navbar />
            <Slider
                id="certificates"
                title="Сертифікати"
                items={['Диплом 1', 'Диплом 2', 'Диплом 3']}
            />
            <Projects />
        </div>
    );
}

export default App;

/** @format */

import React from 'react';
import '../styles/components/slider.scss';

const Slider = ({ id, title, items }) => {
    return (
        <section className="slider-section" id={id}>
            <h2>{title}</h2>
            <div className="slider">
                {items.map((item, index) => (
                    <div className="slider-item" key={index}>
                        {item}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Slider;

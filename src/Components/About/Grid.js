import React from 'react';
import './Grid.css'; // Create a Grid.css file for your styles

const Grid = () => {
    return (
        <div className="grid">
            <div className="grid-item">
                <p className="item-num">2+</p>
                <p className="item-text">Years of Experience</p>
            </div>
            <div className="grid-item">
                <p className="item-num">15+</p>
                <p className="item-text">Completed Projects</p>
            </div>
            <div className="grid-item">
                <p className="item-num">7</p>
                <p className="item-text">Happy Customers</p>
            </div>
            <div className="grid-item">
                <p className="item-num">1</p>
                <p className="item-text">Awards</p>
            </div>
        </div>
    );
};

export default Grid;

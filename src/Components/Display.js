import React, { useState } from 'react';
import Dashboard from './Dashboard';

function Display() {
    const [ballCount, setBallCount] =useState(0);
    const [strikeCount, setStrikeCount] =useState(0);

    if (ballCount > 3 || strikeCount > 2) {
        setBallCount(0);
        setStrikeCount(0);
    }

    const addBall = () => {
        setBallCount(ballCount + 1)
    }

    const addStrike = () => {
        setStrikeCount(strikeCount + 1)
    }

    const addFoul = () => {
        if (strikeCount < 2){
            setStrikeCount(strikeCount + 1);
        } 
    }

    const addHit = () => {
        setBallCount(0);
        setStrikeCount(0);
    }

    return (
        <div className='contianer'>
            <section className='display'>
                <div className='balls'>
                    <h2>Balls</h2>
                    <div className='ball-count'data-testid='ball-count'>{ballCount}</div>
                </div>
                <div className='strikes'>
                    <h2>Strikes</h2>
                    <div className='strike-count'data-testid='strike-count'>{strikeCount}</div>
                </div>
            </section>
            <Dashboard addStrike={addStrike} addBall={addBall} addFoul={addFoul} addHit={addHit}/>
        </div>
    )
}

export default Display;
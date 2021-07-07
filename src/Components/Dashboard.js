import React from 'react';

const Dashboard = (props) => {


    return (
        <section className='buttons'>
            <button className='strike-button' data-testid='strike-button'onClick={props.addStrike}>Strike</button>
            <button className='ball-button' data-testid='ball-button'onClick={props.addBall}>Ball</button>
            <button className='foul-button' data-testid='foul-button'onClick={props.addFoul}>Foul</button>
            <button className='hit-button' data-testid='hit-button'onClick={props.addHit}>Hit</button>
        </section>
    )
}

export default Dashboard;
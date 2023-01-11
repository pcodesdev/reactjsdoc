import React from 'react';
import './mybutton.css';

function MyButton() {
    return (
        <div className='mybutton'>
            <button className='main-btn' style={{ margin: '3rem auto', padding: '0.5rem' }}>Click Here</button> {/* inline styles */}

        </div>
    );
}

export default MyButton;
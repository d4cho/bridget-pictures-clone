import React, { useState } from 'react';
import './Overlay.scss';

const Overlay = ({ handlePrevClick, handleCloseClick, handleNextClick }) => {
    const [currCursorPos, setCurrCursorPos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (ev) => {
        let posX = ev.clientX;
        let posY = ev.clientY;

        setCurrCursorPos({
            x: posX,
            y: posY,
        });
    };

    console.log(currCursorPos);

    return (
        <div className='Overlay_wrapper' onMouseMove={handleMouseMove}>
            <section className='prev_section' onClick={handlePrevClick}>
                <div
                    className='Overlay_cursor'
                    style={{
                        '--left': `${currCursorPos.x}px`,
                        '--top': `${currCursorPos.y}px`,
                    }}
                />
            </section>
            <section className='close_section' onClick={handleCloseClick}>
                <div
                    className='Overlay_cursor'
                    style={{
                        '--left': `${currCursorPos.x}px`,
                        '--top': `${currCursorPos.y}px`,
                    }}
                />
            </section>
            <section className='next_section' onClick={handleNextClick}>
                <div
                    className='Overlay_cursor'
                    style={{
                        '--left': `${currCursorPos.x}px`,
                        '--top': `${currCursorPos.y}px`,
                    }}
                />
            </section>
        </div>
    );
};

export default Overlay;

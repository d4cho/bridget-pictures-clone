import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import { featuredImages } from '../../assets/data/featured-images';
import './Main.scss';

const Main = () => {
    const { threshold, currImgIdx, setCurrImgIdx } = useAppContext();

    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });

    const handleMouseMove = (ev) => {
        let posX = ev.clientX;
        let posY = ev.clientY;

        if (
            Math.abs(position.x - posX) > threshold ||
            Math.abs(position.y - posY) > threshold
        ) {
            setCurrImgIdx((prevState) => {
                return (prevState + 1) % 41;
            });

            setPosition({
                x: posX,
                y: posY,
            });
        }
    };

    return (
        <div className='Main_wrapper' onMouseMove={(ev) => handleMouseMove(ev)}>
            <div
                className='Main_imageContainer'
                style={{
                    '--top': `${position.y}px`,
                    '--left': `${position.x}px`,
                }}
            >
                {currImgIdx >= 0 && (
                    <img
                        src={featuredImages[currImgIdx]}
                        alt='bridget-baker-img'
                    />
                )}
            </div>
        </div>
    );
};

export default Main;

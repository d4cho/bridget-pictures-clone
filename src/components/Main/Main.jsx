import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../context/AppContext';
import Overlay from '../Overlay/Overlay';
import './Main.scss';

const Main = ({ images }) => {
    const {
        threshold,
        currImgIdx,
        setCurrImgIdx,
        isImageSelected,
        setIsImageSelected,
    } = useAppContext();

    const [latestCursorPosition, setLatestCursorPosition] = useState({
        x: 0,
        y: 0,
    });
    const [positions, setPositions] = useState([{ x: 0, y: 0 }]);
    const [imagesWindow, setImagesWindow] = useState([]);

    useEffect(() => {
        getImagesWindow(currImgIdx);
    }, [currImgIdx]);

    useEffect(() => {
        getImagesPositions(latestCursorPosition);
    }, [latestCursorPosition]);

    const handleMouseMove = (ev) => {
        let posX = ev.clientX;
        let posY = ev.clientY;

        if (
            Math.abs(latestCursorPosition.x - posX) > threshold ||
            Math.abs(latestCursorPosition.y - posY) > threshold
        ) {
            // to know which image we are currently on (also for footer)
            setCurrImgIdx((prevState) => {
                return (prevState + 1) % images.length;
            });

            setLatestCursorPosition({
                x: posX,
                y: posY,
            });
        }
    };

    // FIFO array of images to show (shows 5 images)
    const getImagesWindow = (index) => {
        let newImagesWindow = [...imagesWindow];
        if (newImagesWindow.length >= 5) {
            newImagesWindow.pop();
        }
        newImagesWindow.unshift(index);
        setImagesWindow(newImagesWindow);
    };

    // FIFO array for imagesWindow positions (5 positions for 5 images)
    const getImagesPositions = (latestPosition) => {
        let newImagesPositions = [...positions];
        if (newImagesPositions.length >= 5) {
            newImagesPositions.pop();
        }
        newImagesPositions.unshift(latestPosition);
        setPositions(newImagesPositions);
    };

    // Overlay onClick methods start
    const handlePrevClick = () => {
        setCurrImgIdx((prevState) => {
            return (prevState - 1) % images.length;
        });
    };
    const handleCloseClick = () => {
        setIsImageSelected(false);
    };
    const handleNextClick = () => {
        setCurrImgIdx((prevState) => {
            return (prevState + 1) % images.length;
        });
    };
    // Overlay onClick methods ends

    return (
        <div
            className='Main_wrapper'
            onMouseMove={isImageSelected ? null : (ev) => handleMouseMove(ev)}
        >
            {isImageSelected && (
                <Overlay
                    handlePrevClick={handlePrevClick}
                    handleCloseClick={handleCloseClick}
                    handleNextClick={handleNextClick}
                />
            )}

            {imagesWindow.map((imageIdx, idx) => {
                let isCurrImg = idx === 0;
                return (
                    <div
                        key={idx}
                        className={`Main_imageContainer ${
                            isImageSelected
                                ? isCurrImg
                                    ? 'currentImage'
                                    : `trailingImage${idx}`
                                : null
                        }`}
                        style={{
                            '--left': `${positions[idx].x}px`,
                            '--top': `${positions[idx].y}px`,
                            '--z': imagesWindow.length - idx,
                        }}
                        onClick={
                            isImageSelected
                                ? () => setIsImageSelected(false)
                                : () => setIsImageSelected(true)
                        }
                    >
                        {currImgIdx >= 0 && (
                            <img src={images[imageIdx]} alt='' />
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Main;

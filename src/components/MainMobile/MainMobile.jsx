import React from 'react';
import './MainMobile.scss';

const MainMobile = ({ images }) => {
    return (
        <div className='MainMobile_wrapper'>
            {images.map((img, idx) => {
                let randomX = Math.floor(Math.random() * 35) + 2;
                let randomY = Math.floor(Math.random() * (70 - 20 + 1)) + 20;

                if (idx === 0) {
                    randomY = 68;
                }

                if (idx === 1) {
                    randomY = 44;
                }

                if (idx === images.length - 1) {
                    randomY = 100;
                }

                return (
                    <img
                        key={idx}
                        className='MainMobile_image'
                        src={img}
                        alt=''
                        style={{
                            transform: `translate(${randomX}vw, -${randomY}%)`,
                            marginTop: `${idx === 1 ? 70 : 0}vh`,
                        }}
                        onClick={() => console.log(idx)}
                    />
                );
            })}
        </div>
    );
};

export default MainMobile;

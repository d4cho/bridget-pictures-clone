import React from 'react';
import './Footer.scss';
import { useAppContext } from '../../context/AppContext';
import { addZeroesInFront } from '../../utils/functions/functions';

const CATEGORIES = ['Featured', 'iPhone', 'Film', 'Info'];

const Footer = () => {
    const { category, setCategory, threshold, setThreshold, currImgIdx } =
        useAppContext();

    const handleCategoryClick = (category) => {
        setCategory(category);
    };

    const handleSubtractClick = () => {
        if (threshold <= 0) return;

        setThreshold((prevState) => {
            return prevState - 40;
        });
    };

    const handleAddClick = () => {
        if (threshold >= 200) return;

        setThreshold((prevState) => {
            return prevState + 40;
        });
    };

    return (
        <div className='Footer_wrapper'>
            <div className='Footer_name'>Bridget Baker Clone</div>
            <div className='Footer_categoryWrapper'>
                {CATEGORIES.map((cat, idx) => {
                    let isSelected = cat === category;

                    return (
                        <React.Fragment key={cat + idx}>
                            <span
                                className={`Footer_category ${
                                    isSelected && 'selected'
                                }`}
                                onClick={() => handleCategoryClick(cat)}
                            >
                                {cat}
                            </span>
                            {idx < 3 && ','}&nbsp;
                        </React.Fragment>
                    );
                })}
            </div>
            <div className='Footer_threshold'>
                Threshold:
                <button onClick={handleSubtractClick}>-</button>
                <span>{addZeroesInFront(threshold)}</span>
                <button onClick={handleAddClick}>+</button>
            </div>
            <div className='Footer_imageIndex'>
                {addZeroesInFront(currImgIdx + 1)} / 0041
            </div>
        </div>
    );
};

export default Footer;

import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {
    const [category, setCategory] = useState('Featured');
    const [threshold, setThreshold] = useState(80);
    const [currImgIdx, setCurrImgIdx] = useState(-1);

    return (
        <AppContext.Provider
            value={{
                category,
                setCategory,
                threshold,
                setThreshold,
                currImgIdx,
                setCurrImgIdx,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;

import React, { createContext, useContext, useState } from 'react';

/**
 * @feature Header Visibility Control
 * @description This component controls the visibility of the header from any page
 */
const HeaderContext = createContext();

// Custom hook to use the HeaderContext
export const useHeader = () => useContext(HeaderContext);

// Provider component
export const HeaderProvider = ({ children }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  // Function to show the header
  const showHeader = () => setIsHeaderVisible(true);

  // Function to hide the header
  const hideHeader = () => setIsHeaderVisible(false);

  return (
    <HeaderContext.Provider value={{ isHeaderVisible, showHeader, hideHeader }}>
      {children}
    </HeaderContext.Provider>
  );
};
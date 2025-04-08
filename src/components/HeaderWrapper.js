// HeaderWrapper.js
import { useLocation } from 'react-router-dom';
import Header from './Header';
import { useHeader } from '../contexts/HeaderContext';

const HeaderWrapper = () => {
  const location = useLocation();

  const { isHeaderVisible } = useHeader();

  // Include the page here for which you dont want to show the Top Navigation Header
  const pages = ['/page1' , '/page2', '*' , "/about/team" , ];

  console.log(location);

  const showHeader = !pages.includes(location.pathname);
  //const showHeader = location.pathname !== '/page1' && location.pathname !== '/page2' &&;

  return showHeader ? <Header /> : null;

  /**
   * @feature Header Visibility Control
   * @description This component controls the visibility of the header from any page
   * 
   * USE THIS IF YOU WANT TO 
   * dynamically control the header visibility using the useHeader hook from any page
   */
  return isHeaderVisible ? <Header /> : null;
};

export default HeaderWrapper;

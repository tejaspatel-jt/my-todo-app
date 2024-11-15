// HeaderWrapper.js
import { useLocation } from 'react-router-dom';
import Header from './Header';

const HeaderWrapper = () => {
  const location = useLocation();
  const pages = ['/page1' , '/page2', '*' , "/about/team" , ];

  console.log(location);

  const showHeader = !pages.includes(location.pathname);
  //const showHeader = location.pathname !== '/page1' && location.pathname !== '/page2' &&;

  return showHeader ? <Header /> : null;
};

export default HeaderWrapper;

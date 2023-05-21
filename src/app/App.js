import { BrowserRouter } from 'react-router-dom';
import Routers from './routes';
import { useStateContext } from '../contexts/contextProvider';
import { useEffect } from 'react';
import ColorsInit from '../data/colorsInit';

const App = () => {
  const { currentColor } = useStateContext();

  useEffect(() => {
    document.documentElement.style.setProperty('--current-color', currentColor);
  }, [currentColor]);

  return (
    <BrowserRouter id={'app'}>
      <Routers />
    <ColorsInit />
    </BrowserRouter>
  );
};

export default App;

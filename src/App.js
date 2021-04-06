import React from 'react';
import { Route } from 'react-router-dom';

//pages
import Home from './pages/Home';

//components
import GlobalStyles from './components/GlobalStyles';

//styles and animation
import { AnimatePresence } from 'framer-motion';

const App = () => {
  return (
    <div className='App'>
      <AnimatePresence exitBeforeEnter>
        <GlobalStyles />
        <Route path={['/game/:id', '/']} component={Home} />
      </AnimatePresence>
    </div>
  );
};

export default App;

import React from 'react';
import { Route } from 'react-router-dom'

//pages
import Home from './pages/Home';

//components
import GlobalStyles from './components/GlobalStyles';

const App = () => {
  return (
    <div className='App'>
      <GlobalStyles />
      <Route path={['/game/:id', '/']} component={Home} />
    </div>
  );
};

export default App;

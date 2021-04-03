import React from 'react';

//pages
import Home from './pages/Home';

//components
import GlobalStyles from './components/GlobalStyles';

const App = () => {
  return (
    <div className='App'>
      <GlobalStyles />
      <Home />
    </div>
  );
};

export default App;

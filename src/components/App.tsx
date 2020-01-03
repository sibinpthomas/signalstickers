
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Footer from 'components/layout/Footer';
import Navbar from 'components/layout/Navbar';
import Home from 'components/home/Home';
import StickerPackDetail from 'components/pack/StickerPackDetail';
import {Provider as StickersContextProvider} from 'contexts/StickersContext';


const App: React.FunctionComponent = () => {
  return (
    <Router>
      <StickersContextProvider>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/pack/:packId">
              <StickerPackDetail />
            </Route>
          </Switch>
        </div>
        <Footer />
      </StickersContextProvider>
    </Router>
  );
};


export default App;
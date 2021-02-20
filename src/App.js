
import React, { Fragment } from 'react'
import { BrowserRouter as Router} from 'react-router-dom';


import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import RouterConfig from './navigation/RouterConfig';


function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <div className="page-wrapper">
          <Header />
          <RouterConfig />
        </div>
      </Router>
    </Fragment>


  );
}

export default App;

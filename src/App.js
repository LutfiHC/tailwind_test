import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';

import Home from './components/Home';
import SignIn from "./components/SignIn";
import SignUp from './components/SignUp';
import GetStarted from './components/GetStarted';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='' element={<Home />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/getstarted' element={<GetStarted />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

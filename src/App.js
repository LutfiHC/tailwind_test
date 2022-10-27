import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';

import Home from './components/Home';
import SignIn from "./components/SignIn";
import SignUp from './components/Signup';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='' element={<Home />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

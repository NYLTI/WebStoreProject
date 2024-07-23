import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

import LogOrRegister from './pages/LogOrRegister'
import LandingPage from './pages/LandingPage'
import NavBar from './components/NavBar/NavBar';
// import HomePage from './components/landing/ProductCard';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Routes>
          <Route path='/login' element ={<LogOrRegister/>}/>
          <Route path='' element = {<LandingPage/>}/>
          {/* <Route path='' element = {<HomePage/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

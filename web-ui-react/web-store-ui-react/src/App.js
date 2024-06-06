import './App.css';
import {
  BrowserRouter as Router,
  Routers, Route,
  Routes
} from 'react-router-dom'

import LogOrRegister from '../src/pages/LogOrRegister'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login' element ={<LogOrRegister/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar'; 
import DocProfile from './Components/DocProfile'; 
import Profile from './Components/Profile';
import Appointments from './Components/Appointments';
import HomePge from './Components/HomePge';
import Payment from './Components/Payment';

function App() {
  return (
    <Router>
      <div className="app-container"> {/* Flex container */}
        <NavBar /> {/* Render the NavBar component */}
        <div className="main-content"> {/* Main content area */}
          <Routes>
            <Route path="/Profile" element={< Profile/>}/> {/* Default route */}
            <Route path="/homepage" element={<HomePge />} /> 
            <Route path="/docprof" element={<DocProfile />} />
            <Route path="/appointment" element={<Appointments />} />
            <Route path="/payments" element={<Payment />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

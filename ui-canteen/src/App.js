import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './ui-component/custom-components/header';
import CustomerDashboard from './ui-component/customerDashboard/customerDashboard';
import CanteenDashboard from './ui-component/salesDashboard/salesDashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
// function App() {
//   return (
//     <Router>
//       <Header /> 
//       <div className="app-content"> 
//         <Routes>
//           <Route path="/" element={<CustomerDashboard />} />
//           <Route path="/salesDashboard" element={<CanteenDashboard />} />
//           {/* <Route path="/contact" element={<Contact />} />  */}
//            {/* ... other routes ... */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

export default App;

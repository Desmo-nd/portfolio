// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css'; // Create a Home.css file for your styles
import Image from '../components/Home/Image';
import Content from '../components/Home/Content';
import CustomNavigationBar from '../components/CustomNavigationBar';

const App = () => {
  return (
    <div className="hero-slider">
      <div className="slide"></div>
      <div className="left-slide">
        <Image />
        <div className="content-cont">
          <Content />
        </div>
      </div>
      <CustomNavigationBar />
    </div>
  );
};

export default App;

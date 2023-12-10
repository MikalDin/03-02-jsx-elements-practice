import React from 'react';

function formatName(user) {
  return `${user.firstName} ${user.lastName}`;
}

function App() {
  const user = {
    firstName: 'Mikal',
    lastName: 'Din'
  };

  
  return (
    <div className="App">
      <header className="App-header">
        <h1> Hello, {formatName(user)} </h1>
        <div>
          <h2>Part1</h2>
          <h2>Part 2</h2>
        </div>
        <img src="https://media.istockphoto.com/id/1488113402/photo/the-power-of-search-engine-transforming-industries-and-customer-service-a-look-into-the.jpg?s=1024x1024&w=is&k=20&c=CX7V7Kgol-GTHlRVi6jB1Zn69-H-aTxQHNzVOGABaxU=" alt="cartoon-like rendering of micro chip "/>
         </header>
      </div>  
    );
}


export default App;








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

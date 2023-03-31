import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg sticky-top"
      style={{ backgroundColor: '#73dec1', fontFamily: 'serif' }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Joel Hilton Movie Database
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Podcast">
                Podcast
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/MovieCollection">
                Movie Collection
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// import React from 'react';
// import { BrowserRouter, Route, Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/Podcast">Podcast</Link>
//         </li>
//         <li>
//           <Link to="/MovieCollection">Movie Collection</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

export default Navbar;

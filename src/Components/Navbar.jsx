import React from 'react';
import usericon from '../assets/user-icon.svg';
import searchicon from '../assets/Search.svg';
import rightarrow from '../assets/Right-arrow.svg';
import '../Styles/navbar.css';
import bellIcon from '../assets/Bell-icon.svg';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate(); 

  const handleBellIconOnClick = () => {
    navigate('/notification');  // Redirect the user to the notifications page
  }

  return (
    <div className="navbar-item">
      <img src={searchicon} alt="searchicon" className="searchicon" />
      <input type="search" placeholder="Search" className="navbar-search" />
      <img src={rightarrow} alt="right-arrow" className="right-arrow" />
      <div className="navbar-item2">
        <img src={bellIcon} className="bell" alt="bell-icon" onClick={handleBellIconOnClick}/>
        <div>
          <img src={usericon} alt="user-icon" className="navbar-userIcon" />
        </div>
        <div className="name-desc">
          <p>Gbenger Stutern</p>
          <p> Loan Analytics</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

// import React, { useState } from 'react';
// import usericon from '../assets/user-icon.svg';
// import searchicon from '../assets/Search.svg';
// import rightarrow from '../assets/Right-arrow.svg';
// import '../Styles/navbar.css';
// import bellIcon from '../assets/Bell-icon.svg';
// import { useNavigate } from 'react-router-dom';

// function Navbar() {
//   const navigate = useNavigate();
//   const [searchInput, setSearchInput] = useState('');

//   const handleBellIconOnClick = () => {
//     navigate('/notification'); // Redirect the user to the notifications page
//   };

//   const handleSearchInputChange = (event) => {
//     setSearchInput(event.target.value);
//   };

//   const handleSearchSubmit = (event) => {
//     event.preventDefault();
//     // Perform search or any other action with the searchInput value
//     console.log('Search submitted:', searchInput);
//   };

//   return (
//     <div className="navbar-item">
//       <form onSubmit={handleSearchSubmit}>
//         <img src={searchicon} alt="searchicon" className="searchicon" />
//         <input
//           type="search"
//           placeholder="Search"
//           className="navbar-search"
//           value={searchInput}
//           onChange={handleSearchInputChange}
//         />
//         <img src={rightarrow} alt="right-arrow" className="right-arrow" />
//       </form>
//       <div className="navbar-item2">
//         <img src={bellIcon} className="bell" alt="bell-icon" onClick={handleBellIconOnClick} />
//         <div>
//           <img src={usericon} alt="user-icon" className="navbar-userIcon" />
//         </div>
//         <div className="name-desc">
//           <p>Gbenger Stutern</p>
//           <p>Loan Analytics</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;





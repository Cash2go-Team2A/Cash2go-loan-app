// import React from "react";
// import "../Styles/Create.css"; 
// import Deleteicon from '../assets/delete-icon.png'
// const SettingsModal = ({ closeModal, setMarkAllClicked, setClickAll}) => {
//   return (
//     <div className="mode">
//       <div>
//         <button
//           className="close-btn"
//           onClick={() => {
//             closeModal(false);
//             setMarkAllClicked(false);
//             setClickAll(false);
//           }}
//         >
//           &times;
//         </button>
//       </div>
//       <div className="heading-mode">
//         <h2> New Model</h2>
//         <p>Add new Modal and set the rules for prediction</p>
//       </div>
//       <div className="format">
//         <p>Model Name</p>
//         <input className="format-input" type="text" placeholder="Modal name" />
//       </div>
//       <div className="format">
//         <p>Modal Description</p>
//         <input
//           className="format-input"
//           type="text"
//           placeholder="Short Description"
//         />
//       </div>
//       <div className="body">
//         <table>
//           <thead>
//             <th className="MainBody">Variable</th>
//             <th className="MainBody"> Operator </th>
//             <th className="MainBody"> Values/Variables </th>
//             <th className="MainBody"> Del </th>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Credit Score </td>
//               <td>
//               <select id="cars" name="cars"  className="form-input">
//                     <option value="volvo">Select</option>
//                     <option value="saab">250</option>
//                     <option value="fiat">500</option>
//                     <option value="audi">720</option>
//                 </select>
//               </td>
//               <td>
//               <select id="cars" name="cars"  className="form-input">
//                     <option value="volvo">Select</option>
//                     <option value="saab">499</option>
//                     <option value="fiat">719</option>
//                     <option value="audi">950</option>
//                 </select>
//               </td>
//               <td><img src={Deleteicon} alt="delele-icon" className="delete-icon"/></td>
//             </tr>
//             <tr>
//               <td>Amount in Account</td>
//               <td>
//               <select id="cars" name="cars"  className="form-input">
//                     <option value="volvo">Select</option>
//                     <option value="saab">0</option>
//                     <option value="fiat">100000</option>
//                     <option value="audi">500000</option>
//                 </select>
//               </td>
//               <td>
//                 <select id="cars" name="cars"  className="form-input">
//                     <option value="volvo">Select</option>
//                     <option value="saab">99999</option>
//                     <option value="fiat">499999</option>
//                     <option value="audi">100000</option>
//                 </select>
//               </td>
//              <td><img src={Deleteicon} alt="delele-icon" className="delete-icon"/></td>
//             </tr>
//             <tr>
//               <td>Credit Balance</td>
//               <td>
//               <select id="cars" name="cars"  className="form-input">
//                     <option value="volvo">Select</option>
//                     <option value="saab">0</option>
//                     <option value="fiat">100000</option>
//                     <option value="audi">500000</option>
//                 </select>
//               </td>
//               <td>
//               <select id="cars" name="cars"  className="form-input">
//                     <option value="volvo">Select</option>
//                     <option value="saab">99999</option>
//                     <option value="fiat">499999</option>
//                     <option value="audi">100000</option>
//                 </select>
//               </td>
//               <td><img src={Deleteicon} alt="delele-icon" className="delete-icon"/></td>
//             </tr>
//           </tbody>
//         </table> 
        
//         <div>
//         <div className="foot-mode">
//           <input
//             className="form-input"
//             type="text"
//             placeholder="Add New Value    +" 
            
//           />
//         </div>

//         <div className="foot-mode">
//           <div>
//             <input type="radio" />
//             <label htmlFor="">All Conditions Must be Met</label>
//           </div>
//           <div>
//             <input type="radio" />
//             <label htmlFor="">Any of the Condition can be met</label>
//           </div>
//         </div>


//             <button
//               className="save"
//               onClick={() => {
//                 closeModal(false);
//                 setMarkAllClicked(false);
//                 setClickAll(false);
//               }}
//             >
//               Save
//             </button>
//           </div>
//       </div>
//    </div> 
//   );
// };

// export default SettingsModal;





import React, { useState } from "react";
import "../Styles/Create.css";
import Deleteicon from '../assets/delete-icon.png';
import DataVisualization from './DataVisualisation';

const SettingsModal = ({ closeModal, setMarkAllClicked, setClickAll }) => {
  // State to store the user-provided data
  const [userInputData, setUserInputData] = useState(null);

  // Function to handle the "Save" button click
  const handleSave = () => {
    // Collect the data provided by the user from input fields and save it in the state
    const data = {
      modelName: document.getElementById("modelName").value,
      modelDescription: document.getElementById("modelDescription").value,
      variables: [
        {
          variableName: "Credit Score",
          operator: document.getElementById("creditScoreOperator").value,
          value: document.getElementById("creditScoreValue").value,
        },
        {
          variableName: "Amount in Account",
          operator: document.getElementById("amountInAccountOperator").value,
          value: document.getElementById("amountInAccountValue").value,
        },
        {
          variableName: "Credit Balance",
          operator: document.getElementById("creditBalanceOperator").value,
          value: document.getElementById("creditBalanceValue").value,
        },
      ],
    };
    setUserInputData(data);
  };

  return (
    <div className="mode">
      <div>
        <button
          className="close-btn"
          onClick={() => {
            closeModal(false);
            setMarkAllClicked(false);
            setClickAll(false);
          }}
        >
          &times;
        </button>
      </div>
      <div className="heading-mode">
        <h2> New Model</h2>
        <p>Add new Modal and set the rules for prediction</p>
      </div>
      <div className="format">
        <p>Model Name</p>
        <input id="modelName" className="format-input" type="text" placeholder="Modal name" />
      </div>
      <div className="format">
        <p>Modal Description</p>
        <input
          id="modelDescription"
          className="format-input"
          type="text"
          placeholder="Short Description"
        />
      </div>
      <div className="body">
        <table>
          <thead>
            <tr>
              <th className="MainBody">Variable</th>
              <th className="MainBody">Operator</th>
              <th className="MainBody">Values/Variables</th>
              <th className="MainBody">Del</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Credit Score</td>
              <td>
                <select id="creditScoreOperator" className="form-input">
                  <option value=">">Greater Than</option>
                  <option value="<">Less Than</option>
                  <option value="=">Equal To</option>
                </select>
              </td>
              <td>
                <select id="creditScoreValue" className="form-input">
                  <option value="250">250</option>
                  <option value="500">500</option>
                  <option value="720">720</option>
                </select>
              </td>
              <td>
                <img src={Deleteicon} alt="delete-icon" className="delete-icon" />
              </td>
            </tr>
            <tr>
              <td>Amount in Account</td>
              <td>
                <select id="amountInAccountOperator" className="form-input">
                  <option value=">">Greater Than</option>
                  <option value="<">Less Than</option>
                  <option value="=">Equal To</option>
                </select>
              </td>
              <td>
                <select id="amountInAccountValue" className="form-input">
                  <option value="0">0</option>
                  <option value="100000">100000</option>
                  <option value="500000">500000</option>
                </select>
              </td>
              <td>
                <img src={Deleteicon} alt="delete-icon" className="delete-icon" />
              </td>
            </tr>
            <tr>
              <td>Credit Balance</td>
              <td>
                <select id="creditBalanceOperator" className="form-input">
                  <option value=">">Greater Than</option>
                  <option value="<">Less Than</option>
                  <option value="=">Equal To</option>
                </select>
                </td>               <td><img src={Deleteicon} alt="delele-icon" className="delete-icon"/></td>
           </tr>
           </tbody>
        </table> 
        
       <div>
      <div className="foot-mode">
                <input
                             className="form-input"
           type="text"
          placeholder="Add New Value    +" 
            
        />
     </div>

         <div className="foot-mode">
         <div>
          <input type="radio" />
           <label htmlFor="">All Conditions Must be Met</label>
         </div>
         <div>
           <input type="radio" />
           <label htmlFor="">Any of the Condition can be met</label>
          </div>
      </div>


      <button
            className="save"
              onClick={() => {
                 closeModal(false);
                 setMarkAllClicked(false);
                 setClickAll(false);
                 handleSave()

               }}
             >
              Save
        </button>
          </div>
      </div>
      {userInputData && <DataVisualization data={userInputData} />}
  </div> 
  );
 };
 export default SettingsModal;





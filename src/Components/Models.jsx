import React from 'react'
import "../Styles/settings.css"
import downArrow from '../assets/down-arrow.svg';
import rejectedTransparent from '../assets/rejected-transparent.svg';
import Switch from './Switch';
import Padlock from './Padlock'; 
import approvedTransparent from '../assets/approved-transparent.svg';
import { useState } from 'react';


const Models= () => {
  const [value, setValue] = useState(false)

  return (
    <div >
      <div className='heady
      '>
        <h2 className='set-head'>Settings</h2>
        <div className="settings-buttpn">
          <button className="markAll">Manage</button>
          <button className="markRead">Create new Model</button>
          </div>
        </div>
    <div className='categories'>
      <span>Models</span>
      <span>Notification</span>
      <span>Security & privacy</span>
      <span>Activity</span>
    </div>
        <div className='settings'>
            <table className='maintable'>
            <thead>
          <tr>
            <th className='tableheady'>Model Name</th>
            <th className='tableheady'>
              Status <img src={downArrow} alt="" />{' '}
            </th>
            <th className='tableheady'>
              Date Created <img src={downArrow} alt="" />{' '}
            </th>
            <th className='tableheady'>
              Created by <img src={downArrow} alt="" />{' '}
            </th>
            <th className='tableheady'>
              Edit
            </th>
        </tr>
        </thead> 
         <tbody>
          <tr >
            <td className="first-data">
              <Switch
              isOn ={value}
              onColor="#ff6f5a"
              handleToggle={()=> setValue(!value)}/>{' '}
              <div className="data-title">
                <h4>Default Model</h4>
                <span>Machine Learning AI</span>
              </div>
            </td>
            <td>01/04/23</td>
            <td>
              <p className="rejected-down">
                {' '}
                <img src={approvedTransparent} alt="approved-icon" />
              Active
              </p>
            </td>
            <td>Default</td>
            <td>{Padlock}</td>
          </tr>
          <tr >
            <td className="first-set">
              <Switch
              isOn ={value}
              onColor="#ff6f5a"
              handleToggle={()=> setValue(!value)}/>{' '}
              <div className="data-title">
                <h4>Alpha Model</h4>
                <span>Priotize Prev.Loans</span>
              </div>
            </td>
            <td>01/04/23</td>
            <td>
              <p className="rejected-setting">
                {' '}
                <img src={rejectedTransparent} alt="approved-icon" />
              inactive
              </p>
            </td>
            <td>Admin</td>
            <td><i class="fa-regular fa-pen-to-square"></i></td>
          </tr>
          <tr >
            <td className="first-set">
              <Switch
              isOn ={value}
              onColor="#ff6f5a"
              handleToggle={()=> setValue(!value)}/>{' '}
              <div className="data-title">
                <h4>Credit First Model</h4>
                <span>Credit Score Main</span>
              </div>
            </td>
            <td>01/04/23</td>
            <td>
              <p className="rejected-setting">
                {' '}
                <img src={rejectedTransparent} alt="approved-icon" />
              inactive
              </p>
            </td>
            <td>Gbenga</td>
            <td><i class="fa-regular fa-pen-to-square"></i></td>
          </tr>
          <tr >
            <td className="first-set">
              <Switch
              isOn ={value}
              onColor="#ff6f5a"
              handleToggle={()=> setValue(!value)}/>{' '}
              <div className="data-title">
                <h4>CSI Model</h4>
                <span>Credit Score Only</span>
              </div>
            </td>
            <td>01/04/23</td>
            <td>
              <p className="rejected-setting">
                {' '}
                <img src={rejectedTransparent} alt="approved-icon" />
              inactive
              </p>
            </td>
            <td>Gbenga</td>
            <td><i class="fa-regular fa-pen-to-square"></i></td>
          </tr>
          <tr>
          <td className="first-set">
              <Switch
              isOn ={value}
              onColor="#ff6f5a"
              handleToggle={()=> setValue(!value)}/>{' '}
              <div className="data-title">
                <h4>Credit First Model</h4>
                <span>Credit Score Main</span>
              </div>
            </td>
            <td>01/04/23</td>
            <td>
              <p className="rejected-setting">
                {' '}
                <img src={rejectedTransparent} alt="approved-icon" />
              inactive
              </p>
            </td>
            <td>Gbenga</td>
            <td><i class="fa-regular fa-pen-to-square"></i></td>
          </tr>
          


          </tbody> 
            </table>
        </div>
        
      
    </div>
  )
}

export default Models
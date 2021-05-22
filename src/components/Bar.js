import React from 'react';
import { NavLink } from 'react-router-dom';

const Bar = () => (
  <div className=' py-2' style={{backgroundColor:"#4fc3f7"}}>
    <NavLink to='/'>
      <span className='text ml-3' style={{color:'purple'}}>
        <i className='fas fa-arrow-left'></i> Back
      </span>
    </NavLink>
  </div>
);

export default Bar;

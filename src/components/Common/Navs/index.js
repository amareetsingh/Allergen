import React from "react";
import { NavLink } from "react-router-dom";
import noun_profile from '../../../assests/noun_profile.png'
import logo_new from '../../../assests/logo_new.png'
import noun_lock from '../../../assests/noun_lock.png';
import noun_food from '../../../assests/noun_food.png';
import noun_spring from '../../../assests/spisplan_icon.svg'

const Index = () => {
  return (
    <ul className="nav flex-column  h-100" >
      <li className="nav-item ">
        <NavLink className="nav-link active " to="/">
          <img src={logo_new} alt="" style={{height:'40px'}} />
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link active" to="/">
        <img src={noun_food} alt="" style={{height:'40px'}} />

        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link active" to="/profile">
          <img src={noun_profile} alt="" style={{height:'40px'}} />
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link active" to="/">
        <img src={noun_lock} alt="" style={{height:'40px'}} />

        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link active" to="/">
        <img src={noun_spring} alt=""  />

        </NavLink>
      </li>
    </ul>
  );
};

export default Index;

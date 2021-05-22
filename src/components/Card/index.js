import React from "react";
import './style.css'
import ima from '../../images/my_photo.jpg'
import {NavLink} from 'react-router-dom'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { purple } from "@material-ui/core/colors";
export default function Card(props) {
  return (
    <>
    <div className="col-md-3 col-10 mx-auto" >
      <div className="card"  style={{borderRadius:"25px"}}>
        <img src={props.imgsrc} className="card-img-top" style={{borderRadius:"25px 25px 0px 0px"}} alt={props.imgsrc} />
         <div className="card-body">
          <h5 className="card-title" style={{color:"#e91e63"}}>{props.title}</h5>
          <NavLink to={props.link} className="btn mybutton" style={{borderRadius:'25px', textDecoration:'none', backgroundColor:'#659D', color:'white', fontWeight:'bold'}} >
            Let's start
          </NavLink>
         </div>
      </div>
    </div>
  </>

  );
}

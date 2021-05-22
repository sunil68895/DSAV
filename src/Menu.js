import React from 'react';
import Sdata from "./Cdata.js";
import { NavLink } from 'react-router-dom';
import Card from './components/Card'
export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
      <div className="my-5">
        <h1 className="text-center" style={{color:"purple"}}> Select an algorithm</h1>
      </div>
      <div className="container-fluid mb-5 ">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {
                  Sdata.map((val,ind)=>{
                     return <Card
                     key={ind}
                     imgsrc={val.imgsrc}
                     title={val.title}
                     link={val.link}
                     /> 

                  })
              }
            </div>
          </div>
        </div>
      </div>
    </>
    
    );
  }
}

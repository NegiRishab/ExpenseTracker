import React from "react";
import "./Bars.css";

export default function Bars(props) {

    // console.log(props)
    let barfilHeight='0%'
     if(props.maxvalue>0){
        barfilHeight=Math.round((props.value/props.maxvalue)*100)+'%'
     }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height:barfilHeight}}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}

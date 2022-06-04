import React from "react";
import Bars from "./Bars";
import "./Chart.css";

export default function Chart(props) {

   
    const dataPiointvalues=props.dataPoint.map(data=>data.value)
    // {console.log(dataPiointvalues)}
    const totalMaximum=Math.max(...dataPiointvalues)
    // console.log(totalMaximum)
  return (
    <div className="chart">
      {props.dataPoint.map((item) => (
        //   console.log(props);
        <Bars 
        key={item.label}
        value={item.value}
        maxvalue={totalMaximum}
        label={item.label}
        />
      ))}
    </div>
  )
    }

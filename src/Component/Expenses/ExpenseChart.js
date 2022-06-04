import React from 'react'
import Chart from '../Chart/Chart'


export default function ExpenseChart(props) {

    const ChartDataPoint=[
        {  label:'jan',value:0, },
        {  label:'feb',value:0, },
        {  label:'marc',value:0, },
        {  label:'april',value:0, },
        {  label:'may',value:0, },
        {  label:'june',value:0, },
        {  label:'july',value:0, },
        {  label:'Aug',value:0, },
        {  label:'Sept',value:0, },
        {  label:'Oct',value:0, },
        {  label:'Nav',value:0, },
        {  label:'Dec',value:0, }
    ];

    for(const expense of props.expenses){
        const expenseMonth=expense.date.getMonth();
        ChartDataPoint[expenseMonth].value+=expense.amount
    }
    // {console.log(ChartDataPoint)}
  return <Chart dataPoint={ChartDataPoint}/>
}

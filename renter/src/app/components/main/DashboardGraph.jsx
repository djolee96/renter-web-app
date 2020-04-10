import React from 'react';
import { Line } from 'react-chartjs-2';

class DashboardGraph extends React.Component{

        render() {
            const data = (canvas) => {
              const ctx = canvas.getContext("2d")
              const gradient = ctx.createLinearGradient(0,0,0,150);
              gradient.addColorStop(1,"#1a1a4b")
              gradient.addColorStop(0,"rgba(51, 215, 225,0.5)")
              const gradient1 = ctx.createLinearGradient(0,0,0,150);
              gradient1.addColorStop(1,"#1a1a4b")
              gradient1.addColorStop(0,"rgba(255, 92, 73,0.5) ")
              
              return {
                backgroundColor: gradient,
                labels:["January","February","March","April","May","Jun","July","Avgust","September","October","November","December"],
                datasets:[{
                    label:"Cashflow",
                    data:[1,3,3,4,2,2,3,4,6,4,3,4],
                    backgroundColor:gradient,
                    borderColor:"#33d7e1",
                    borderWidth:1,
                    yAxisID: 'cashflow-y-axis'
                },{
                    label:"Networth",
                    data:[100,200,100,200,300,400,500,500,300,500,600,500],
                    backgroundColor:gradient1,
                    borderColor:"#ff5c49",
                    borderWidth:1,
                    yAxisID: 'networth-y-axis'
                }],
              }
            }
          
            return (
            <div className="dashboard-graph">
                <Line data={data} options={{maintainAspectRatio:false,
                 title:{display:true,position:"left",fontSize:"16", text:"Portfolio statistic",fontColor:"white"},
                 legend:{
                    display: true,
                    align:"end",
                    labels: {
                        boxWidth:15,	
                        fontColor: 'white'
                    }
                 }, 
                 scales: {
                    yAxes: [{
                        id: 'cashflow-y-axis',
                        type: 'linear',
                        position: 'left',
                        gridLines:{display:false},
                        ticks: {
                             beginAtZero:true
                        }
                     },{
                        id: 'networth-y-axis',
                        type: 'linear',
                        position: 'left',
                        gridLines:{display:false},
                        ticks: {
                             beginAtZero:true
                        }
                     }],
                     xAxes:[
                         {gridLines:{display:false}}
                        ]
                }}}/>
            </div>
            )
          }
 }


export default DashboardGraph
import React from 'react'
import MainMenu from './MainMenu'
//import Highcharts from 'highcharts'
import {Footer} from './Footer'
export default class Chart extends React.Component{     
    constructor(props){
      super(props);
      this.state={symbol:'MSFT',chart_type:'candlestick'};
      this.handleChange = this.handleChange.bind(this);
     }
    
      loadgraph(){  
        fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=C9LLKPCQEMW4DVLR&outputsize=compact').then(results=>{
            return results.json();
         }).then(data=>{
            var stock_data = data['Time Series (Daily)'];
            console.log(stock_data);
            var output_data=[];
            const new_data = Object.keys(stock_data).map(function(key,index){
                var myDate= key;
                myDate=myDate.split("-");
                var newDate=myDate[1]+"/"+myDate[2]+"/"+myDate[0];
                var timestamp = new Date(newDate).getTime();
                var record = [timestamp,parseFloat(stock_data[key]['1. open']),parseFloat(stock_data[key]['2. high']),parseFloat(stock_data[key]['3. low']),parseFloat(stock_data[key]['4. close']),parseFloat(stock_data[key]['5. volume'])];
                output_data.push(record);
            });
            output_data.reverse();
            console.log(output_data);
            var ohlc = [],
            marker = [],
            dataLength = i,
        // set the allowed units for data grouping
            groupingUnits = [['week', [1]], ['month', [1, 2, 3, 4, 6]]],
            i = 0;

            for (i; i < output_data.length; i += 1) {
                ohlc.push([
                    output_data[i][0], // the date
                    output_data[i][1], // open
                    output_data[i][2], // high
                    output_data[i][3], // low
                    output_data[i][4] // close
                ]);

                marker.push([
                    output_data[i][0], // the date
                    output_data[i][4] // the close
                ]);
            }
            var chart_data,series;
            if(this.state.chart_type=='candlestick' || this.state.chart_type=='ohlc'){
                chart_data = ohlc;
                 series= [{
                        type: this.state.chart_type,
                        name: this.state.symbol,
                        data: chart_data,
                        dataGrouping: {units: groupingUnits}
                    }]
            }
            else{
                chart_data = marker;
                series = [{
                        name: this.state.symbol+' Stock Price',
                        data: chart_data,
                        lineWidth: 0,
                        marker: {
                            enabled: true,
                            radius: 5
                        },
                        tooltip: {
                            valueDecimals: 2
                        },
                        states: {
                            hover: {
                                lineWidthPlus: 0
                            }
                        }
                     }]
            }

            // create the chart
        Highcharts.stockChart('container', {
            
            rangeSelector: {selected: 1},

            title: {text: this.state.symbol+' Stock Price'},
            series: series
        });
    });
  }
handleChange(event) {
    this.setState({chart_type: event.target.value});
    //this.componentDidUpdate();
  }
handleSearch(event) {
    this.setState({symbol: event.target.value});
    //this.componentDidUpdate();
  }
    render(){
        {this.loadgraph()}
        return(
            <div>
                <div className="container">
                    <div className="row"><h4>Highchart Stock {this.state.symbol}</h4></div>
                    <div className="row">
                        <label className="col s2 label">Select Chart Type</label>
                        <div className="col s3">
                            <select className="browser-default select_field" defaultValue={this.state.chart_type} onChange={this.handleChange}>
                                <option value="candlestick">Candlestick</option>
                                <option value="ohlc">OHLC</option>
                                <option value="marker-only">Marker Only</option>
                            </select>
                        </div>
                        <div className="col s2"></div>
                        <div className="browser-default inline col s5">
                            <input  type="text" placeholder="Search Company or Symbol"/>
                        </div>

                    </div>
                    <div id="container"></div>
                </div>
                <Footer/>
            </div>
        )
    }
}
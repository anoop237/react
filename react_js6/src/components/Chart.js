import React from 'react'
import ReactDOM from 'react-dom'
import MainMenu from './MainMenu'
//import Highcharts from 'highcharts'
import {Footer} from './Footer'
export default class Chart extends React.Component{     
    constructor(props){
      super(props);


      var list=[
            {company:"Apple",symbol:"AAPL"},
            {company:"Microsoft",symbol:"MSFT"},
            {company:"Comcast",symbol:"CMCSA"},
            {company:"Intel",symbol:"INTC"},
            {company:"Cisco Systems",symbol:"CSCO"},
            {company:"Sirius Xm Radio Inc.",symbol:"SIRI"},
            {company:"EBAY Inc.",symbol:"EBAY"},
            {company:"Nvidia",symbol:"NVDA"},
            {company:"Applied Materials",symbol:"AMAT"},
            {company:"Starbucks",symbol:"SBUX"},
            {company:"Huntington Bancshares",symbol:"HBAN"},
            {company:"Healthcare Services",symbol:"HCSG"},
        ];
      this.state={symbol:'MSFT',chart_type:'candlestick',list:list}
      this.handleChange = this.handleChange.bind(this);
      this.searchItem = this.searchItem.bind(this);
      this.setItem = this.setItem.bind(this);
     }
    
    loadgraph(){  
        fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol='+this.state.symbol+'&apikey=C9LLKPCQEMW4DVLR&outputsize=compact').then(results=>{
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
    searchItem(){
        var data = this.state.list;
        var pattern = ReactDOM.findDOMNode(this.refs.filter).value.trim().toLowerCase(); 
        if(pattern!='')
        {
            for (var i = 0; i < data.length; i++) {
                var bar = new RegExp(pattern);
                if (bar.test(data[i].company.toLowerCase())) 
                {
                    document.getElementById(i).style.display='block';
                }
               
                else{
                    document.getElementById(i).style.display='none';
                }
            }     
        }
        else
        {
            
            var input = document.getElementsByTagName("li");
            var inputList = Array.prototype.slice.call(input);
            inputList.forEach(function(value,index)                                 {
                    value.style.display='block';
            });
        }
    }
    setItem(symbol){
        ReactDOM.findDOMNode(this.refs.filter).value=symbol;
        this.setState({
            symbol:symbol
        });
    }
    render(){
        {this.loadgraph()}
        return(
            <div>
                <div className="container">
                    <div className="row"><h4>Highchart Stock {this.state.symbol}</h4></div>
                    <div className="row">
                        <label className="col m2 s5 label">Select Chart Type</label>
                        <div className="col m3 s6">
                            <select className="browser-default select_field" defaultValue={this.state.chart_type} onChange={this.handleChange}>
                                <option value="candlestick">Candlestick</option>
                                <option value="ohlc">OHLC</option>
                                <option value="marker-only">Marker Only</option>
                            </select>
                        </div>
                        <div className="col m2 s1"></div>
                        <div className="browser-default inline col m5 s12">
                            <input className="nm" type="text" placeholder="Search Company or Symbol" ref="filter" onChange={()=>this.searchItem()}/>
                            <div>
                                <ul className="suggestion-list nm" id="suggestion-list">
                                    {
                                        this.state.list.map(function(data,index){
                                             return <li key={index} id={index} data-symbol={data.symbol} onClick={()=>this.setItem(data.symbol)}>{data.company +' : '+data.symbol}</li>
                                    },this)
                                    } 
                                </ul>

                            </div>
                        </div>

                    </div>
                    <div id="container" className="chart-container"></div>
                </div>
                <Footer/>
            </div>
        )
    }
}
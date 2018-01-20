import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Table from './Table';
import registerServiceWorker from './registerServiceWorker';

var data=[{name:'Anoop Kumar','email':'anoop@gmail.com','contact':'8604303962'},
          {name:'Abhay Kansal','email':'abhaykansal1992@gmail.com','contact':'9237303962'},
          {name:'Rajesh Kumar','email':'rajesh@gmail.com','contact':'8604303433'},
          {name:'Satyam kumar','email':'satyam@gmail.com','contact':'727435962'}
        ];
ReactDOM.render(
  <Table header={['Name','Email','Contact']} data={data}/>,
  document.getElementById('root')
);
registerServiceWorker();

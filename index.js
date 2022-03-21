import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
let currDate= new Date(2022,3,21,22);
currDate=currDate.getHours();
let greetingText = "";
const cssStyle={};

if (currDate>=1 && currDate< 12) {
  greetingText = "Good Morning"; 
  cssStyle.color='Red';
} else if (currDate>=12 && currDate< 19) {
  greetingText = "Good Afternoon"; 
  cssStyle.color='Blue';
} else {
  greetingText = "Good Evening"; 
  cssStyle.color='Green';
}
ReactDOM.render(
  <React.Fragment>
  <div>
  <h1>Hi, <span style={cssStyle}>{greetingText}</span></h1>
  </div>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

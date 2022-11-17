import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Pricing from './Pricing';
import Stains from './Stains';
import Reviews from './Reviews';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

document.getElementById("pagehome").addEventListener("click", function(event) {
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
})

document.getElementById("pagepricing").addEventListener("click", function(event) {
root.render(
  <React.StrictMode>
    <Pricing />
  </React.StrictMode>
);
})

document.getElementById("pagestains").addEventListener("click", function(event) {
root.render(
  <React.StrictMode>
    <Stains />
  </React.StrictMode>
);
})
document.getElementById("pagereviews").addEventListener("click", function(event) {
root.render(
  <React.StrictMode>
    <Reviews />
  </React.StrictMode>
);
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

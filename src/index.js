import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from "./store/index"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // რიდაქსის ლოგიკის გაშვებაზე პასუხისმგებელი root კომპონენტია, ამიტომ მათ დასაკავშირებლად გვჭირდება provider 
  // ფუნქციის გამოყენება. პროვაიდერმა აუცილებლად უნდა მიაკითხოს აქამდე ჩვენ მიერ შექმნილ სთორს
  <Provider store={store}> 
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

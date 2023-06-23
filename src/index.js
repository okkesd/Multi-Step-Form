import React from 'react';
import ReactDOM from 'react-dom/client';
import './form.css';
import App from './App';

const div = document.querySelector("#root")

const root = ReactDOM.createRoot(div)
root.render(
  <div className='main-root'>
    <App/>
  </div>
  )
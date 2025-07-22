import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// import React from 'react';
// import {createRoot} from 'react-dom/client';
// import App from './App.tsx';
// import './index.css';
// import {BrowserRouter} from "react-router-dom";
// import {Provider} from "react-redux";
// import {store} from "./store/store.ts";  // ✅ Important Tailwind Import
//
// createRoot(document.getElementById('root')!).render(
//     <BrowserRouter>
//         <Provider store={store}>
//             <App />
//         </Provider>
//     </BrowserRouter>
// );

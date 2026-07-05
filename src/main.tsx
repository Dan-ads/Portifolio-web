// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import './styles/global.css'
import { App }  from './App.tsx'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";



// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App/>
//   </StrictMode>,
// )

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
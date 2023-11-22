import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';                //Used for Router Implementation
import GlobalStyle from './Globalstyle.js'

const root= createRoot(document.querySelector('#root'))         //Take the div element from html to alter it here

const num1=1;

root.render(
<>
<GlobalStyle></GlobalStyle>
<BrowserRouter>
<App></App>
</BrowserRouter>
</>
)
import ReactDom from "react-dom/client";
import "./index.css";
import App from './app.js';
import {BrowserRouter} from "react-router-dom";


// BOOTSTRAP CONFIG

import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";



const root=ReactDom.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>
)
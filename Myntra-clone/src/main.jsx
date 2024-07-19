import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './router/App.jsx';
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import Home from './router/Home.jsx'
import Bag from './router/Bag.jsx'
import {Provider} from 'react-redux';
import myntraStore from './store/index.js'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/Bag",
        element: <Bag />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myntraStore} >
      <RouterProvider router={router}/>
      </Provider>
  </React.StrictMode>,
)

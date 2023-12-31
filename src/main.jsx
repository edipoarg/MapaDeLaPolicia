import React, {lazy} from "react";
import ReactDOM from "react-dom/client";
import {loader as getURLs} from './components/Loader.jsx';

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";

import Caba from "./components/Caba";
import Investigaciones from "./components/Investigaciones";
import Denuncia from "./components/Denuncia";
import Denuncias from "./components/Denuncias";
import Herramientas from "./components/Herramientas";
import Jefatura from "./components/Jefatura";
import Reportes from "./components/Reportes";
import Nosotrxs from "./components/Nosotrxs";










import Root from "./routes/Root.jsx";




const loader = async () => ({
  urls: await getURLs({
    barriosCaba: "data/barriosCaba.json",
    departamentos: "data/departamentos.json",
    caba: "data/caba.json",
  }),
})



const router = createHashRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      { path:"/", element:<App/>, loader},
      { path:"/caba", element:< Caba/> },
      { path:"/laplata", element:< Caba/> },

      { path:"/denuncias", element:< Denuncias/> },
      { path:"/herramientas", element:< Herramientas/> },
      { path:"/investigaciones", element:< Investigaciones/> },
      { path:"/jefatura", element:< Jefatura/> },
      { path:"/reportes", element:< Reportes/> },
      { path:"/nosotrxs", element:< Nosotrxs/> },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


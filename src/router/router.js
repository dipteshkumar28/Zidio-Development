import { createBrowserRouter } from "react-router-dom";
import App1 from "../app1";
import About from "../components/about";
import Contact from "../components/contact";
import App from "../App";
import Services from "../components/services";
import SignInUp from "../utils/signInUp";


const Approuter = createBrowserRouter([
    {
      path:"/",
      element:<App/>,
      children:[
        {
           path:"/",
           element:<App1/>
        },
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
          path:"/services",
          element:<Services/>
        },
        {
          path:"/signIn/Up",
          element:<SignInUp/>
        }
      ]
    }
  ]);
  
export default Approuter;
  
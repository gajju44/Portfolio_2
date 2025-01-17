import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './Components/SharedComponents/Navbar'
import Home from "./Pages/Home";

function App() {
 
 
      const router = createBrowserRouter([

    
{
  path: "/",
  element: <Home/>,
  errorElement: <>404 page not found</>,
},
{/* {
  path: "/About",
  element: <About />,
}, */}

]);
return <RouterProvider router={router} />;
}
     

export default App

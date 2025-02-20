import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home";
// import AboutProduct from "./pages/home/sections/AboutProduct";
// import AboutInnovator from "./pages/home/sections/AboutInnovator";
// import Showcase from "./pages/home/sections/Showcase";
// import Contact from "./pages/home/sections/Contact";
// import Resources from "./pages/home/sections/Resources";


function App() {
 
   const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [{ index: true, element: <Home />}],
    },
    // {
    //   path: "/about-product",
    //   element: <AboutProduct />,
    // },
    // {
    //   path: "/about-innovator",
    //   element: <AboutInnovator />,
    // },
    // {
    //   path: "/showcase",
    //   element: <Showcase />,
    // },
    // {
    //   path: "/contact",
    //   element: <Contact />,
    // },
    // {
    //   path: "/resources",
    //   element: <Resources />,
    // },
  
   ]);

   return (
    <>
    <RouterProvider router={router} />
    </>
   );
  
}

export default App;

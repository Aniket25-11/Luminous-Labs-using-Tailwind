// import React from "react";
// import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
// // import One from "./Pages/One";
// // import Two from "./Pages/Two";
// import Error from "./components/Error";
// // import Header from "./Components/Header";
// import { Outlet } from "react-router-dom";
// import Main from "./pages/Main";


// const PageLayout = () => {
//   return (
//     <>
//       {/* <Header /> */}
//       <Outlet />
//     </>
//   );
// };

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <PageLayout />,
//     errorElement: <Error />,
//     children: [{ path: "/", element: <Main.jsx /> }],
//   },
// ]);

// const App = () => {
//   return <RouterProvider router={appRouter} />;
// };

// export default App;

import React from 'react'
import Main from './pages/Main'

const App = () => {
  return (
    <>
    <div>
      <Main />
    </div>
      
    </>
  )
}

export default App
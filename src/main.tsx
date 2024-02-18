import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./assets/styles/global.scss";
import DefaultLayout from "./layouts/DefaultLayout";
import { store } from "./store";

// Вариант 1 подразумевает  оборачивать каждую странице в нужный layout
// import Main from "./components/Main";
// import SecondPage from "./pages/SecondPage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Main />,
//   },
//   {
//     path: "/second",
//     element: <SecondPage />,
//   },
// ]);

// и в каждой странице оборачиваем  компонентом DefaultLayout
// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

// Вариант 2  подразумевает обрачивание компонета Routes  DefaultLayout
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <DefaultLayout />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

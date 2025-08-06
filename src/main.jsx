import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import EventDetails from "./components/EventDetails.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  { path: "/", element: <App />},
  {path:"/events/:eventId",element:<EventDetails/>}
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

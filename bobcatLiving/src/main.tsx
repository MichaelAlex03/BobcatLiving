import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ApartmentsPage from "./Pages/apartments.tsx";
import Home from "./Pages/home.tsx";
import Login from "./Pages/login.tsx";
<<<<<<< HEAD
import ApartmentCard from "./components/apartmentCard.tsx";
import Home from "./Pages/home.tsx"
import SignUp from "./Pages/signUp.tsx"

=======
>>>>>>> 53623a5c48ac1aab2b69a5e53c0a5805d7aa71a0

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
<<<<<<< HEAD
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
=======
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
>>>>>>> 53623a5c48ac1aab2b69a5e53c0a5805d7aa71a0
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/apartments" element={<ApartmentsPage />} />
    </>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

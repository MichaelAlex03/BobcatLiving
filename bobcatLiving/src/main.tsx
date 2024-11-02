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
import SignUp from "./Pages/signUp.tsx";
import Reviews from "./Pages/reviews.tsx";
import CreateReview from "./Pages/createReview.tsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/createReview" element={<CreateReview />} />
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

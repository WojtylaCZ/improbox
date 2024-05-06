import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { ErrorPage } from "./error-page";
import { Main } from "./main";
import { AboutPage } from "./about-page";
import { ForOrganisersPage } from "./for-organisers-page";
import { ForActorsPage } from "./for-actors-page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/:locale?" element={<Main />} errorElement={<ErrorPage />} />
      <Route path="/:locale?/event/:eventSlug" element={<Main />} errorElement={<ErrorPage />} />

      <Route path="/:locale?/o-webu" element={<AboutPage />} errorElement={<ErrorPage />} />

      <Route
        path="/:locale?/pro-poradatele"
        element={<ForOrganisersPage />}
        errorElement={<ErrorPage />}
      />

      <Route path="/:locale?/pro-hrace" element={<ForActorsPage />} errorElement={<ErrorPage />} />

      <Route path="*" element={<ErrorPage />} errorElement={<ErrorPage />} />
    </>
  )
);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};

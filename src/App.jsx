import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const AllAppsPage = lazy(() => import("./pages/AllAppsPage.jsx"));
const AppDetailsPage = lazy(() => import("./pages/AppDetailsPage.jsx"));
const InstallationPage = lazy(() => import("./pages/InstallationPage.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.jsx"));

function App() {
  return (
    <Suspense
      fallback={
        <main className="container page-main">
          <div className="route-loading">
            <span className="loader" />
          </div>
        </main>
      }
    >
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="apps" element={<AllAppsPage />} />
          <Route path="apps/:id" element={<AppDetailsPage />} />
          <Route path="installation" element={<InstallationPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;

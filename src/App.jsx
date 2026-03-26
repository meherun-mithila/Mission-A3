import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";

const HomePage = lazy(() => import("./pages/HomePage"));
const AllAppsPage = lazy(() => import("./pages/AllAppsPage"));
const AppDetailsPage = lazy(() => import("./pages/AppDetailsPage"));
const InstallationPage = lazy(() => import("./pages/InstallationPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

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

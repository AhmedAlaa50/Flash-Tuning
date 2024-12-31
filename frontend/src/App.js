import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import PreviousWorkPage from "./pages/PreviousWork";

import Layout from "./components/layout/Layout";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/previous-work" element={<PreviousWorkPage />} />
      </Routes>
    </Layout>
  );
}

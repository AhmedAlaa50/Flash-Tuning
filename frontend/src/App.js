import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import PreviousWorkPage from "./pages/PreviousWork";
import EcuFlashingPage from "./pages/EcuFlashing";
import RemoteTuningPage from "./pages/RemoteTuning";
import DynoTuningPage from "./pages/DynoTuning";

import Layout from "./components/layout/Layout";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/previous-work" element={<PreviousWorkPage />} />
        <Route
          path="/ecu-flashing"
          element={<EcuFlashingPage />}
        />
        <Route path="/remote-tuning" element={<RemoteTuningPage />} />
        <Route path="/dyno-tuning" element={<DynoTuningPage />} />
      </Routes>
    </Layout>
  );
}

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import PreviousWorkPage from "./pages/PreviousWork";
import EcuFlashingServicesPage from "./pages/EcuFlashingServices";
import RemoteTuningPage from "./pages/RemoteTuning";
import DynoTuningPage from "./pages/DynoTuning";
import ContactPage from "./pages/Contact";

import Layout from "./components/layout/Layout";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/previous-work" element={<PreviousWorkPage />} />
        <Route
          path="/ecu-flashing-services"
          element={<EcuFlashingServicesPage />}
        />
        <Route path="/remote-tuning" element={<RemoteTuningPage />} />
        <Route path="/dyno-tuning" element={<DynoTuningPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

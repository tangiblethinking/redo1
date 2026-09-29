import { Route, Routes } from "react-router-dom";
import { Shell } from "./components/Shell";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { ServicePage } from "./pages/ServicePage";
import { WorkPage } from "./pages/WorkPage";
import { WorkItemPage } from "./pages/WorkItemPage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { ArticlePage } from "./pages/ArticlePage";
import { PricingPage } from "./pages/PricingPage";
import { MethodologyPage } from "./pages/MethodologyPage";
import { ContactPage } from "./pages/ContactPage";
import { AuditPage } from "./pages/AuditPage";
import { LegalPage } from "./pages/LegalPage";

export default function App() {
  return (
    <Shell>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/:slug" element={<WorkItemPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/resources/:slug" element={<ArticlePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/methodology" element={<MethodologyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/audit" element={<AuditPage />} />
        <Route path="/privacy" element={<LegalPage kind="privacy" />} />
        <Route path="/terms" element={<LegalPage kind="terms" />} />
      </Routes>
    </Shell>
  );
}

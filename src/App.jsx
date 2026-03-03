import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopOnRoute from "./components/ScrollToTopOnRoute";
import { Toaster } from "sonner";

const App = () => (
  <BrowserRouter>
    <ScrollToTopOnRoute />
    <Toaster position="top-center" richColors />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
    <ScrollToTop />
  </BrowserRouter>
);

export default App;

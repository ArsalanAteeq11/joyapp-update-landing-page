import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopOnRoute from "./components/ScrollToTopOnRoute";

const App = () => (
  <BrowserRouter>
    <ScrollToTopOnRoute />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
    <ScrollToTop />

  </BrowserRouter>
);

export default App;

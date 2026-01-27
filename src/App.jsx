import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ScrollToTop from "./components/ScrollToTop";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
    <ScrollToTop />

  </BrowserRouter>
);

export default App;

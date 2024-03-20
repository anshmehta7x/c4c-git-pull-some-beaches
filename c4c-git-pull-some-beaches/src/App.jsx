import { Routes, Route, useLocation } from "react-router-dom";
import CheckImage from "./pages/checkimage";
import CheckAudio from "./pages/checkaudio";
import CheckVideo from "./pages/checkvideo";
import Output from "./pages/output";

function App() {
const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
        <Route path="/" element={<CheckImage />} />
        <Route path="/audio" element={<CheckAudio />} />
        <Route path="/video" element={<CheckVideo />} /> 
        <Route path="/output" element={<Output />} />
    </Routes>
  );
}
export default App;
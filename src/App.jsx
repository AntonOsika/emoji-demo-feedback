import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CreateDemo from "./pages/CreateDemo.jsx";
import ViewDemo from "./pages/ViewDemo.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/create-demo" element={<CreateDemo />} />
        <Route path="/view-demo" element={<ViewDemo />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import DashBoardLayout from "./layout/dashboard";
import Star from "./pages/star";
import NotFound from "./pages/notFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashBoardLayout />}>
          <Route index element={<Star />} />
          <Route path="/notFound" element={<NotFound />} />
        </Route>

        {/* Unknown routes nagivated to not-found */}
        <Route path="*" element={<Navigate to="/notFound" />} />
      </Routes>
    </Router>
  )
}

export default App
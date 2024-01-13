import { Routes, Route, Navigate } from "react-router-dom";
import Page from "./Page.jsx";

function RoutingComponent() {
  return (
    <Routes>
      <Route path="/search/:searchQuery" element={<Page key="search" />} />
      <Route path="/search" element={<Navigate to="/" />} />
      <Route path="/" element={<Page key="home" />} />
    </Routes>
  );
}
export default RoutingComponent;

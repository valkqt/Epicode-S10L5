import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import RoutingComponent from "./components/RoutingComponent.jsx";

function App() {
  return (
    <BrowserRouter>
      <RoutingComponent />
    </BrowserRouter>
  );
}
export default App;


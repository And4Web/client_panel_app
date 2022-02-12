import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppNavbar from "../src/components/layouts/AppNavbar";

function App() {
  return (
    <div className="App">
      <Router>
        <AppNavbar />
        <div className="container">
          <h1>Hello</h1>
        </div>
      </Router>
    </div>
  );
}

export default App;
